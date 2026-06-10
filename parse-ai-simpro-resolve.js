const llmRaw = $input.first().json.output?.[0]?.content?.[0]?.text
  || $input.first().json.message?.content
  || $input.first().json.text
  || '';

const customerJson = $('Get Customer Info').first().json;
const parent = $('When Executed by Another Workflow').first().json || {};
const buildPromptResolve = (() => {
  try {
    return $('Build Prompt Simpro Resolve').first().json || {};
  } catch (_) {
    return {};
  }
})();
const parseCustomer = {
  customer: buildPromptResolve.customer || parent.customer || null,
  customerId:
    (buildPromptResolve.customerId != null ? buildPromptResolve.customerId : null) ??
    (parent.customerId != null ? parent.customerId : null),
};
const build = {
  subject: buildPromptResolve.subject || parent.subject || '',
  body: buildPromptResolve.body || parent.body || '',
  imageKeys: buildPromptResolve.imageKeys || parent.imageKeys || [],
  costCentresFull: parent.costCentresFull || [],
};

// Per-customer allowed list only (from GET customer). Simpro has a larger global catalog; IDs/names must match this array.
const responseTimesRows = (customerJson.ResponseTimes || []).filter(
  (r) => r && r.Name != null && r.Archived !== true
);
const sites = Array.isArray(customerJson.Sites) ? customerJson.Sites : [];

let costCentreRecords = [];
try {
  const cc = $('Cost Centres').first().json;
  if (cc && Array.isArray(cc.costCentreRecords)) costCentreRecords = cc.costCentreRecords;
} catch (_) {}
if (!costCentreRecords.length && Array.isArray(build.costCentresFull)) {
  costCentreRecords = build.costCentresFull.filter(
    (x) => x && typeof x === 'object' && x.ID != null
  );
}

function sanitize(val) {
  if (val === null || val === undefined) return null;
  if (typeof val === 'string' && (val.trim().toLowerCase() === 'null' || val.trim() === '')) return null;
  return val;
}

let parsed = {};
try {
  const cleaned = llmRaw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
  parsed = JSON.parse(cleaned);
} catch (e) {
  return [{ json: { error: 'Failed to parse AI #2 response', raw: llmRaw, customerId: parseCustomer.customerId } }];
}

for (const key of Object.keys(parsed)) {
  parsed[key] = sanitize(parsed[key]);
}

function normalize(str) {
  if (!str) return '';
  return str
    .replace(/['\u2018\u2019]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function normalizeReferenceId(raw) {
  if (raw == null || raw === '') return null;
  const s = String(raw).trim();
  const m = s.match(/(\d+(?:[\/\-]\d+)*)/);
  if (m) return m[1];
  return s.replace(/^(?:order\s*no\.?|job\s*order|order\s*number|reference|ref\.?)\s*[:\s]*/i, '').trim() || null;
}

parsed.reference_id = normalizeReferenceId(parsed.reference_id);

function formatDate(str, includeTime = false) {
  if (!str) return null;
  const timeMatch = str.match(/(\d{1,2}:\d{2}(?::\d{2})?)/);
  const time = timeMatch ? timeMatch[1].substring(0, 5) : null;
  const datePart = str.replace(/\d{1,2}:\d{2}(?::\d{2})?/, '').trim();
  let day; let month; let year;
  let m = datePart.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) { [, day, month, year] = m; }
  if (!day) {
    m = datePart.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
    if (m) { [, year, month, day] = m; }
  }
  if (!day) {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    m = datePart.match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i);
    if (m) {
      const monthIdx = months.indexOf(m[2].toLowerCase()) + 1;
      if (monthIdx) { day = m[1]; month = String(monthIdx); year = m[3]; }
    }
  }
  if (!day || !month || !year) return str;
  const dd = String(day).padStart(2, '0');
  const mm = String(month).padStart(2, '0');
  const yyyy = String(year).length === 2 ? `20${year}` : year;
  return (includeTime && time) ? `${dd}/${mm}/${yyyy} ${time}` : `${dd}/${mm}/${yyyy}`;
}

function formatDateIso(str) {
  if (!str) return null;
  const parsed = parseDateLoose(str);
  if (!parsed || Number.isNaN(parsed.getTime())) return null;
  const y = parsed.getFullYear();
  const m = String(parsed.getMonth() + 1).padStart(2, '0');
  const d = String(parsed.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseDateLoose(value) {
  if (!value) return null;
  const s = String(value).trim();
  let m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) {
    const day = Number(m[1]);
    const month = Number(m[2]);
    const year = Number(m[3].length === 2 ? `20${m[3]}` : m[3]);
    return new Date(year, month - 1, day);
  }
  m = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
  if (m) {
    const year = Number(m[1]);
    const month = Number(m[2]);
    const day = Number(m[3]);
    return new Date(year, month - 1, day);
  }
  m = s.match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i);
  if (m) {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const monthIdx = months.indexOf(m[2].toLowerCase());
    if (monthIdx >= 0) return new Date(Number(m[3]), monthIdx, Number(m[1]));
  }
  return null;
}

function inferRawResponseFromDates(startStr, dueStr) {
  const start = parseDateLoose(startStr);
  const due = parseDateLoose(dueStr);
  if (!start || !due) return null;
  const startUtc = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const dueUtc = Date.UTC(due.getFullYear(), due.getMonth(), due.getDate());
  const dayDiff = Math.round((dueUtc - startUtc) / 86400000);
  if (dayDiff <= 0) return 'same day';
  if (dayDiff === 1) return '24 hour';
  if (dayDiff === 2) return '48 hour';
  if (dayDiff === 3) return '72 hour';
  return `${dayDiff} day`;
}

function normaliseRequest(value) {
  if (!value) return null;
  const lower = normalize(value);
  switch (true) {
    case lower.includes('quote'):
    case lower.includes('quotation'):
    case lower.includes('estimate'):
      return 'Quote';
    case lower.includes('bills callout'):
    case lower.includes('callout'):
    case lower.includes('urgent'):
    case lower.includes('maintenance'):
    case lower.includes('work'):
    case lower.includes('job update'):
    case lower.includes('job awarded'):
    case lower.includes('job'):
      return 'Job';
    default:
      return null;
  }
}

/** e.g. "Issue priority 3 - Non-urgent (high)" -> high (parenthetical wins over "non-urgent"). */
function extractPriorityLevelFromText(blob) {
  if (!blob) return null;
  const lines = blob.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  for (const line of lines) {
    const low = line.toLowerCase();
    if (!/\b(issue\s+priority|priority\s+level|priority)\b/.test(low)) continue;
    const m = line.match(/\((high|medium|low|vital|critical)\)/i);
    if (m) return m[1].toLowerCase();
  }
  for (const line of lines) {
    const low = line.toLowerCase();
    if (!/\b(issue|priority)\b/.test(low)) continue;
    const m = line.match(/\((high|medium|low|vital|critical)\)/i);
    if (m) return m[1].toLowerCase();
  }
  let last = null;
  const re = /\((high|medium|low|vital|critical)\)/gi;
  let m;
  while ((m = re.exec(blob)) !== null) last = m[1].toLowerCase();
  return last;
}

function responseTimeIdForPriorityWord(word, timesRows) {
  if (!word || !timesRows || !timesRows.length) return null;
  const map = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    vital: 'Vital',
    critical: 'Critical',
  };
  const target = map[word.toLowerCase()];
  if (!target) return null;
  const row = timesRows.find((r) => normalize(String(r.Name)) === normalize(target));
  return row ? Number(row.ID) : null;
}

const allowedRtIds = new Set(responseTimesRows.map((r) => Number(r.ID)));
const allowedSiteIds = new Set(sites.map((s) => Number(s.ID)));
const allowedCcIds = new Set(costCentreRecords.map((c) => Number(c.ID)));

function validId(n, set) {
  if (n == null || n === '') return null;
  const num = Number(n);
  if (!Number.isFinite(num) || !set.has(num)) return null;
  return num;
}

let responseTimeId = validId(parsed.responseTimeId, allowedRtIds);
let siteId = validId(parsed.siteId, allowedSiteIds);
let costCentreId = validId(parsed.costCentreId, allowedCcIds);

// --- mapResponseTime (aligned with map-response-time.js) ---
function norm(s) {
  if (s == null) return '';
  return String(s).replace(/\s+/g, ' ').trim().toLowerCase();
}
function normalizeTimePhrase(s) {
  let x = norm(s);
  if (!x) return '';
  x = x.replace(/(\d+)\s*\/\s*(\d+)\s*(?:day|days)?/gi, '$1/$2 day');
  x = x.replace(/(\d+)hours?\b/gi, '$1 hour');
  x = x.replace(/(\d+)hrs?\b/gi, '$1 hour');
  x = x.replace(/(\d+)\s*h\b/gi, '$1 hour');
  x = x.replace(/(\d+)\s*hrs?\b/gi, '$1 hour');
  x = x.replace(/(\d+)\s*hours?\b/gi, '$1 hour');
  x = x.replace(/\b(\d+)\s+hour\b/g, '$1 hour');
  x = x.replace(/(\d+)\s*days?\b/gi, '$1 day');
  x = x.replace(/(\d+)\s*(?:week|weeks|wks?)\b/gi, '$1 week');
  return x.replace(/\s+/g, ' ').trim();
}
function stripNoise(s) {
  return normalizeTimePhrase(s)
    .replace(/\b(sla|response|standard|works)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
function mapResponseTime(rawVal, times) {
  const rows = (times || []).filter((r) => r && r.Name != null && r.Archived !== true);
  if (rawVal == null || String(rawVal).trim() === '' || !rows.length) return null;
  const str = String(rawVal).trim();
  const n = norm(str);
  function rawCandidates() {
    const set = new Set();
    set.add(stripNoise(str));
    set.add(normalizeTimePhrase(str));
    if (/^\d+$/.test(n)) {
      set.add(normalizeTimePhrase(`${n} hour`));
      set.add(normalizeTimePhrase(`${n} hour sla`));
      set.add(normalizeTimePhrase(`${n} day`));
      set.add(normalizeTimePhrase(`${n} days`));
    }
    return [...set].filter(Boolean);
  }
  const cores = rawCandidates();
  const rawTime = normalizeTimePhrase(str);
  let best = null;
  let bestScore = -1;
  for (const r of rows) {
    const name = String(r.Name).trim();
    const nn = norm(name);
    if (nn === n) return Number(r.ID);
    const nameCore = stripNoise(name);
    const nameTime = normalizeTimePhrase(name);
    let score = 0;
    if (cores.some((c) => c && nameCore && c === nameCore)) score = 100;
    else if (cores.some((c) => c && nameTime && c === nameTime)) score = 98;
    else if (rawTime && nameTime && rawTime === nameTime) score = 95;
    else if (cores.some((c) => c.length >= 2 && nameCore.includes(c))) score = 80;
    else if (cores.some((c) => c.length >= 2 && c.includes(nameCore) && nameCore.length >= 2)) score = 75;
    else if (n.length >= 2 && (nn.includes(n) || n.includes(nn))) score = 60;
    else {
      const rw = (cores[0] || '').split(/\s+/).filter(Boolean);
      const nw = nameCore.split(/\s+/).filter(Boolean);
      const overlap = rw.filter((w) => nw.some((m) => m === w || m.includes(w) || w.includes(m)));
      if (overlap.length && rw.length) score = 40 + (overlap.length / rw.length) * 20;
    }
    if (score > bestScore) {
      bestScore = score;
      best = r;
    } else if (score === bestScore && score > 0 && best && name.length < String(best.Name).length) {
      best = r;
    }
  }
  if (best && bestScore >= 60) return Number(best.ID);
  const num = Number(str.replace(/\s/g, ''));
  if (!Number.isNaN(num) && /^\s*\d+\s*$/.test(str)) {
    const byId = rows.find((row) => Number(row.ID) === num);
    if (byId) return Number(byId.ID);
  }
  return null;
}

let rawForRt = parsed.response_time_raw != null && String(parsed.response_time_raw).trim() !== ''
  ? String(parsed.response_time_raw).trim()
  : '';
let rawForRtWasInferred = false;

// If AI did not extract due_on/requested_at, try common labels directly from email body.
if (!parsed.due_on || !parsed.requested_at) {
  const bodyBlob = [build.body, parsed.notes, parsed.extra].filter(Boolean).join('\n');
  if (!parsed.due_on) {
    const dueMatch = bodyBlob.match(/\b(?:response\s*requested\s*by|required\s*by|needed\s*by|due(?:\s*date)?)\s*:?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4})/i);
    if (dueMatch) parsed.due_on = dueMatch[1];
  }
  if (!parsed.requested_at) {
    const reqMatch = bodyBlob.match(/\b(?:request\s*date(?:\s*\/\s*time)?|sent|created|raised)\s*:?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4})/i);
    if (reqMatch) parsed.requested_at = reqMatch[1];
  }
}

if (!rawForRt) {
  const inferred = inferRawResponseFromDates(parsed.requested_at, parsed.due_on);
  if (inferred) {
    rawForRt = inferred;
    rawForRtWasInferred = true;
  }
}
if (!rawForRt) {
  // Fallback to "Sent/Created/Raised" date embedded in body when requested_at is absent.
  const bodyBlob = [build.body, parsed.notes, parsed.extra].filter(Boolean).join('\n');
  const sentMatch = bodyBlob.match(/\b(?:sent|created|raised)\s*:?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4})/i);
  if (sentMatch && parsed.due_on) {
    const inferred = inferRawResponseFromDates(sentMatch[1], parsed.due_on);
    if (inferred) {
      rawForRt = inferred;
      rawForRtWasInferred = true;
    }
  }
}
if (responseTimeId == null && rawForRt) {
  responseTimeId = mapResponseTime(rawForRt, responseTimesRows);
}
// If inference produced something not in this customer's allowed response times, drop it.
if (responseTimeId == null && rawForRtWasInferred) {
  rawForRt = '';
}

// Parenthetical priority e.g. "(high)" overrides AI / fuzzy match (fixes "Non-urgent (high)" -> Medium bug).
const emailBlobFull = [build.subject, build.body, parsed.notes, parsed.extra].filter(Boolean).join('\n');
const prioWord = extractPriorityLevelFromText(emailBlobFull);
if (prioWord) {
  const pid = responseTimeIdForPriorityWord(prioWord, responseTimesRows);
  const v = validId(pid, allowedRtIds);
  if (v != null) responseTimeId = v;
}

// --- Site match (aligned with resolve-site-id.js) ---
function normalizeAddr(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/['\u2018\u2019]/g, "'")
    .trim()
    .toLowerCase();
}
function normalizeForMatch(str) {
  let s = normalizeAddr(str);
  s = s.replace(/^\d+\s*[-–]\s*/, '');
  s = s.replace(/\s*[-–]\s*permit site\s*$/i, '');
  s = s.replace(/\s*[-–]\s*access required\s*$/i, '');
  s = s.replace(/\s*[-–]\s*ooh to be booked\s*$/i, '');
  s = s.replace(/\s*,\s*/g, ' ');
  return s;
}
function resolveSiteIdFromAddress(address, siteList) {
  const normAddress = normalizeForMatch(address || '');
  if (!normAddress || !siteList.length) return null;
  for (const site of siteList) {
    const name = site.Name || site.name || '';
    if (!name) continue;
    const normName = normalizeForMatch(name);
    if (normName === normAddress) return site.ID;
    const keyPart = normName.replace(/^bill'?s\s*[-–]\s*/i, '').trim();
    if (keyPart && (normAddress.includes(keyPart) || normName.includes(normAddress))) return site.ID;
    const postcodeMatch = normAddress.match(/\b([a-z]{1,2}\d{1,2}[a-z]?\s*\d[a-z]{2})\b/i);
    const streetMatch = normAddress.match(/\d+\s+[a-z][a-z\s]+(?:street|st|road|rd|lane|ln|way|ave)\s+/i);
    if (postcodeMatch && normName.includes(normalizeAddr(postcodeMatch[1]))) return site.ID;
    if (streetMatch && normName.includes(normalizeAddr(streetMatch[0]))) return site.ID;
  }
  const addressWords = normAddress.split(/\s+/).filter((w) => w.length > 2);
  let best = { id: null, count: 0 };
  for (const site of siteList) {
    const normName = normalizeForMatch(site.Name || site.name || '');
    const nameWords = normName.split(/\s+/).filter((w) => w.length > 2);
    const overlap = addressWords.filter((w) => nameWords.some((nw) => nw.includes(w) || w.includes(nw))).length;
    if (overlap > best.count && overlap >= 2) {
      best = { id: site.ID, count: overlap };
    }
  }
  return best.id != null ? best.id : null;
}

if (siteId == null) {
  const addrParts = [parsed.address, parsed.location, build.body].filter(Boolean);
  for (const chunk of addrParts) {
    const sid = resolveSiteIdFromAddress(chunk, sites);
    if (sid != null) {
      siteId = sid;
      break;
    }
  }
}

// --- Cost centre name → ID ---
function costCentreLabel(cc) {
  if (cc == null) return '';
  if (typeof cc === 'string') return cc;
  if (typeof cc === 'object' && cc.Name != null) return String(cc.Name);
  return String(cc);
}

function costCentreIdForName(name, list) {
  if (name == null || name === '' || !list || !list.length) return null;
  const n = normalize(String(name));
  const rec = list.find(
    (cc) => typeof cc === 'object' && cc && cc.ID != null && normalize(costCentreLabel(cc)) === n
  );
  return rec && rec.ID != null ? rec.ID : null;
}

if (costCentreId == null && parsed.cost_centre) {
  costCentreId = costCentreIdForName(parsed.cost_centre, costCentreRecords);
}

let costCentreName = parsed.cost_centre || null;
if (costCentreId != null && !costCentreName) {
  const rec = costCentreRecords.find((c) => c && Number(c.ID) === Number(costCentreId));
  if (rec) costCentreName = costCentreLabel(rec);
}

function deriveRequestFallback(subject, problem) {
  const blob = normalize([subject, problem].filter(Boolean).join(' '));
  if (!blob) return 'Job';
  if (blob.includes('quote') || blob.includes('quotation') || blob.includes('estimate')) return 'Quote';
  return 'Job';
}

const request =
  normaliseRequest(parsed.request)
  || normaliseRequest(parent.request)
  || deriveRequestFallback(build.subject, parsed.problem);

const result = {
  Type: 'Service',
  request,
  Customer: parseCustomer.customerId,
  Site: siteId != null ? siteId : null,
  RequestNo: parsed.reference_id || request,
  Name: parsed.problem || null,
  OrderNo: parsed.reference_id || null,
  DateIssued: formatDateIso(parsed.requested_at),
  DueDate: formatDateIso(parsed.due_on),
  Description: parsed.notes || null,
  ResponseTime: parseInt(responseTimeId),
  Sections: {
    CostCenters: {
      CostCenter: costCentreId != null ? costCentreId : null,
    },
  },
};

return [{ json: result }];