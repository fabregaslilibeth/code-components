// n8n Code: after Get Customer Info. Sets response_time (Simpro ID) from response_time_raw + customer ResponseTimes[].
// If you use **Parse AI Simpro Resolve** (AI #2), that node already sets response_time — you can remove this node
// from the sub-workflow or keep it as a redundant deterministic pass. Pass an item that includes response_time_raw
// on **When Executed by Another Workflow** (usually the parent’s merged parse output).

function norm(s) {
  if (s == null) return '';
  return String(s)
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/** Collapse hr/h/hour/hours, day/days, week/weeks so "24 hr" aligns with "24 hour SLA". */
function normalizeTimePhrase(s) {
  let x = norm(s);
  if (!x) return '';
  // Fraction days: "2/3 day", "2 / 3 day response"
  x = x.replace(/(\d+)\s*\/\s*(\d+)\s*(?:day|days)?/gi, '$1/$2 day');
  // Attached / no space: 24h, 24hr, 24hours, 24hrs
  x = x.replace(/(\d+)hours?\b/gi, '$1 hour');
  x = x.replace(/(\d+)hrs?\b/gi, '$1 hour');
  x = x.replace(/(\d+)\s*h\b/gi, '$1 hour');
  x = x.replace(/(\d+)\s*hrs?\b/gi, '$1 hour');
  x = x.replace(/(\d+)\s*hours?\b/gi, '$1 hour');
  // "24 hours" -> same token as "24 hour"
  x = x.replace(/\b(\d+)\s+hour\b/g, '$1 hour');
  x = x.replace(/(\d+)\s*days?\b/gi, '$1 day');
  x = x.replace(/(\d+)\s*(?:week|weeks|wks?)\b/gi, '$1 week');
  return x.replace(/\s+/g, ' ').trim();
}

/** Remove filler words for comparing SLA-style phrases. */
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

  /** Bare number → try hour/day phrases before falling back to Simpro ID. */
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
    if (nn === n) {
      return Number(r.ID);
    }

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

  if (best && bestScore >= 60) {
    return Number(best.ID);
  }

  const num = Number(str.replace(/\s/g, ''));
  if (!Number.isNaN(num) && /^\s*\d+\s*$/.test(str)) {
    const byId = rows.find((row) => Number(row.ID) === num);
    if (byId) return Number(byId.ID);
  }

  return null;
}

const base = $('When Executed by Another Workflow').first().json;
const raw = base.response_time_raw;

const fromInput = $input.all().flatMap((item) => {
  const j = item.json || {};
  return j.ResponseTimes || j.responseTimes || [];
});

const customerTimes =
  (fromInput.length && fromInput) ||
  $input.first().json.ResponseTimes ||
  $input.first().json.responseTimes ||
  [];

const response_time = mapResponseTime(raw, customerTimes);

return [{ json: { ...base, response_time } }];
