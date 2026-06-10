const llmRaw = $input.first().json.output?.[0]?.content?.[0]?.text
  || $input.first().json.message?.content
  || $input.first().json.text
  || '';

function getKnownCustomers() {
  const fromBuild = $('Build Prompt').first().json.knownClientsFull;
  if (Array.isArray(fromBuild) && fromBuild.length > 0) return fromBuild;
  const fromConfig = $('Workflow Configuration').first().json.knownClients;
  if (Array.isArray(fromConfig) && fromConfig.length > 0) return fromConfig;
  if (fromConfig && typeof fromConfig === 'object' && fromConfig.ID != null) return [fromConfig];
  try {
    const cl = $('Customers List').first().json;
    if (Array.isArray(cl)) return cl;
    if (cl && Array.isArray(cl.companies) && cl.companies.length > 0) return cl.companies;
    const listItems = $('Customers List').all();
    const mapped = listItems.map((i) => i.json).filter((c) => c && (c.ID != null && c.CompanyName != null));
    if (mapped.length > 0) return mapped;
  } catch (_) {}
  try {
    const listItems = $('Code').all();
    return listItems.map((i) => i.json).filter((c) => c && (c.ID != null && c.CompanyName != null));
  } catch (_) {}
  return [];
}

const knownCustomers = getKnownCustomers();

let parsed = {};
try {
  const cleaned = llmRaw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
  parsed = JSON.parse(cleaned);
} catch (e) {
  return [{ json: { error: 'Failed to parse LLM response', raw: llmRaw } }];
}

function sanitize(val) {
  if (val === null || val === undefined) return null;
  if (typeof val === 'string' && (val.trim().toLowerCase() === 'null' || val.trim() === '')) return null;
  return val;
}

parsed.customer = sanitize(parsed.customer);

function normalize(str) {
  if (!str) return '';
  return str
    .replace(/['\u2018\u2019]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const rawSubject = $('Edit Fields').first().json.subject || $('Build Prompt').first().json.subject || '';
const bodyForMatching = normalize(JSON.stringify(parsed));
const subjectForMatching = normalize(rawSubject);
const fullMatchSource = bodyForMatching + ' ' + subjectForMatching;

function companyName(rec) {
  if (!rec) return '';
  return typeof rec === 'string' ? rec : (rec.CompanyName || rec.companyName || '');
}

let customer = parsed.customer || null;
let customerId = null;

for (const c of knownCustomers) {
  const name = companyName(c);
  if (!name) continue;
  if (fullMatchSource.includes(normalize(name))) {
    customer = name;
    customerId = c && (typeof c === 'object' && c.ID != null) ? c.ID : null;
    break;
  }
}

if (!customer && parsed.customer) {
  customer = parsed.customer;
}
if (customer && customerId == null && typeof customer === 'string') {
  const n = normalize(customer);
  const match = knownCustomers.find((c) => normalize(companyName(c)) === n)
    || knownCustomers.find((c) => normalize(companyName(c)).includes(n))
    || knownCustomers.find((c) => n.includes(normalize(companyName(c))));
  if (match && match.ID != null) {
    customerId = match.ID;
    customer = companyName(match) || customer;
  }
}

if (customer && typeof customer === 'object' && customer.ID != null) {
  customerId = customer.ID;
  customer = companyName(customer);
}

if (!customer) {
  const cleanedBody = $('Build Prompt').first().json.body || '';
  const customerMatch = cleanedBody.match(/customer\s*:\s*(.+)/i);
  if (customerMatch && customerMatch[1]) {
    customer = customerMatch[1].replace(/\\n/g, '').trim();
    const n = normalize(customer);
    const match = knownCustomers.find((c) => normalize(companyName(c)) === n)
      || knownCustomers.find((c) => normalize(companyName(c)).includes(n))
      || knownCustomers.find((c) => n.includes(normalize(companyName(c))));
    if (match && match.ID != null) {
      customerId = match.ID;
      customer = companyName(match);
    }
  }
}

const customerName = typeof customer === 'string' ? customer : companyName(customer);
const found = customerName && knownCustomers.find((c) => normalize(companyName(c)) === normalize(customerName))
  || knownCustomers.find((c) => normalize(companyName(c)).includes(normalize(customerName)))
  || knownCustomers.find((c) => normalize(customerName).includes(normalize(companyName(c))));

const build = $('Build Prompt').first().json;

return [{
  json: {
    customer: customerName || customer,
    customerId: (found && found.ID != null) ? found.ID : (customerId != null ? customerId : null),
    subject: build.subject || rawSubject,
    body: build.body || '',
    imageKeys: build.imageKeys || [],
  },
}];
