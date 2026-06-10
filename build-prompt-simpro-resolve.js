const parent = $('When Executed by Another Workflow').first().json || {};
const inputJson = $input.first().json || {};

/** Simpro GET customer — always load by node name so $input can be Cost Centres output. */
let customerSimpro = {};
try {
  customerSimpro = $('Get Customer Info').first().json || {};
} catch (_) {
  customerSimpro = {};
}

const parseCustomer = {
  customer: parent.customer != null ? parent.customer : null,
  customerId: parent.customerId != null ? parent.customerId : null,
};

const build = {
  subject: parent.subject || '',
  body: parent.body || '',
  imageKeys: parent.imageKeys || [],
  costCentresFull: parent.costCentresFull || [],
  requestTypes: parent.requestTypes || [],
};

const responseTimes = Array.isArray(customerSimpro.ResponseTimes) ? customerSimpro.ResponseTimes : [];
const sites = Array.isArray(customerSimpro.Sites) ? customerSimpro.Sites : [];

/** Cost centres: 1) item from node immediately before (e.g. Cost Centres), 2) Cost Centres node, 3) parent payload */
let costCentreRecords = [];
if (Array.isArray(inputJson.costCentreRecords) && inputJson.costCentreRecords.length > 0) {
  costCentreRecords = inputJson.costCentreRecords;
} else if (Array.isArray(inputJson.costCentres) && inputJson.costCentres.length > 0) {
  costCentreRecords = inputJson.costCentres
    .map((c) => (typeof c === 'string' ? { ID: null, Name: c } : c))
    .filter((c) => c && c.Name != null);
}
if (!costCentreRecords.length) {
  try {
    const cc = $('Cost Centres').first().json;
    if (cc && Array.isArray(cc.costCentreRecords) && cc.costCentreRecords.length > 0) {
      costCentreRecords = cc.costCentreRecords;
    }
  } catch (_) {}
}
if (!costCentreRecords.length && Array.isArray(build.costCentresFull)) {
  costCentreRecords = build.costCentresFull.filter(
    (x) => x && typeof x === 'object' && x.ID != null && x.Name != null
  );
}

// allowed.responseTimes = this customer's Simpro assignment only (subset of the full company catalog).
const allowed = {
  responseTimes: responseTimes
    .filter((r) => r && r.Archived !== true)
    .map((r) => ({ ID: r.ID, Name: r.Name })),
  sites: sites.map((s) => ({ ID: s.ID, Name: s.Name })),
  costCenters: costCentreRecords.map((c) => ({ ID: c.ID, Name: c.Name })),
};

/** Request types: prefer Simpro customer payload, then workflow config, then parent. */
function normalizeRequestTypeList(raw) {
  if (!Array.isArray(raw) || raw.length === 0) return [];
  const out = [];
  for (const r of raw) {
    if (r == null) continue;
    if (typeof r === 'string') {
      const t = r.trim();
      if (t) out.push(t);
      continue;
    }
    if (typeof r === 'object') {
      const name = r.Name ?? r.name ?? r.Type ?? r.type ?? r.Label ?? r.label;
      if (name != null && String(name).trim() !== '') out.push(String(name).trim());
    }
  }
  return out;
}

let requestTypes = normalizeRequestTypeList(
  customerSimpro.RequestTypes
    || customerSimpro.requestTypes
    || customerSimpro.Types
    || customerSimpro.JobTypes
);

if (!requestTypes.length) {
  try {
    requestTypes = normalizeRequestTypeList($('Workflow Configuration').first().json.requestTypes);
  } catch (_) {
    requestTypes = [];
  }
}
if (!requestTypes.length && Array.isArray(build.requestTypes)) {
  requestTypes = normalizeRequestTypeList(build.requestTypes);
}
if (!requestTypes.length && Array.isArray(parent.requestTypes)) {
  requestTypes = normalizeRequestTypeList(parent.requestTypes);
}

const systemPrompt = `You extract job/request fields from emails for Simpro. You MUST choose IDs only from the "allowed" lists provided — never invent IDs. If uncertain, use null. Respond with valid JSON only — no markdown, no code blocks.`;

const payload = {
  email: {
    subject: build.subject || '',
    body: build.body || '',
  },
  customer: {
    name: parseCustomer.customer,
    id: parseCustomer.customerId,
  },
  requestTypes,
  allowed,
};

const userPrompt = `Using the email and the allowed Simpro lists below, extract job data and resolve Simpro IDs.

RULES:
1. responseTimeId: match allowed.responseTimes[].Name only.
   - If the email uses priority bands (Low / Medium / High / Vital / Critical), map the text to that exact Name and ID.
   - IMPORTANT: If a line says both "Non-urgent" (or similar) AND a parenthetical band like "(high)", the parenthetical wins — e.g. "Issue priority 3 - Non-urgent (high)" -> High, not Medium.
   - SLA-style text (e.g. "4 hour", "24 hour SLA") still maps when those names exist in allowed.responseTimes.
   - Also check for deadline language like "needed by", "required by", "by <date>", "complete by", "must be done by".
   - If a deadline date exists, infer response_time_raw from the gap between created/requested date and due date:
     same day -> "same day"; 1 day -> "24 hour"; 2 days -> "48 hour"; 3 days -> "72 hour"; else "<N> day".
   - Use email sent/raised date as the start date when available (requested_at, sent date, created date).
2. siteId: match address, location, store name, branch, or postcode in the email to allowed.sites[].Name; return that ID only.
3. costCentreId: match cost centre / work type / service type / discipline text to allowed.costCenters[].Name; return that ID only.
4. request: classify the intent as "Quote" vs "Job" first.
   - Use "Quote" when the email asks for pricing/estimate/quotation/survey to quote (e.g. "quote required", "please quote", "estimate", "NTE approval before works").
   - Use "Job" when the email asks to attend/fix/repair/complete works (callout or work order execution).
   - If intent is unclear, prefer a matching value from requestTypes; otherwise use "Job".
5. reference_id: digits and slashes only (e.g. "440167", "0578/2432") — no labels.
6. Dates: DD/MM/YYYY where possible.
7. For notes: include useful instructions, warnings, URLs; exclude legal footers.

Return exactly this JSON shape (null where unknown):
{
  "request": string | null,
  "problem": string | null,
  "budget": string | null,
  "address": string | null,
  "location": string | null,
  "response_time_raw": string | null,
  "responseTimeId": number | null,
  "siteId": number | null,
  "costCentreId": number | null,
  "cost_centre": string | null,
  "phone": string | null,
  "reference_id": string | null,
  "placed_by": string | null,
  "requested_at": string | null,
  "due_on": string | null,
  "contact_person": string | null,
  "notes": string | null,
  "extra": string | null
}

DATA:
${JSON.stringify(payload)}`;

return [{
  json: {
    systemPrompt,
    userPrompt,
    customerId: parseCustomer.customerId,
    customer: parseCustomer.customer,
    subject: build.subject,
    body: build.body,
    imageKeys: build.imageKeys || [],
  },
}];
