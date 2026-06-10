// --- Inputs from Edit Fields node ---
const subject = $input.first().json.subject || "";
const rawBody = $input.first().json.body || "";

// --- PDF text if extracted from attachment ---
const pdfText = $input.first().json.text || "";

// --- Known lists from Workflow Configuration or Customers List node ---
let knownClientsRaw = $('Workflow Configuration').first().json.knownClients || [];
if (!Array.isArray(knownClientsRaw) || knownClientsRaw.length < 2) {
  try {
    const cl = $('Customers List').first().json;
    if (Array.isArray(cl)) knownClientsRaw = cl;
    else if (cl && Array.isArray(cl.companies)) knownClientsRaw = cl.companies;
    else {
      const listItems = $('Customers List').all();
      knownClientsRaw = listItems.map((i) => i.json).filter((c) => c && (c.ID != null && c.CompanyName != null));
    }
  } catch (_) {
    if (!Array.isArray(knownClientsRaw)) knownClientsRaw = [];
  }
}
const knownClients = knownClientsRaw.map((c) => (typeof c === 'string' ? c : (c && c.CompanyName) || ''));
const requestTypes = $('Workflow Configuration').first().json.requestTypes || [];

// Cost centres + request types are still loaded for **AI #2** (build-prompt-simpro-resolve.js) via this node's output.
let costCentres = $('Workflow Configuration').first().json.costCentres || [];
let costCentreRecords = $('Workflow Configuration').first().json.costCentreRecords || [];
try {
  const cc = $('Cost Centres').first().json;
  if (cc && Array.isArray(cc.costCentreRecords) && cc.costCentreRecords.length > 0) {
    costCentreRecords = cc.costCentreRecords;
    costCentres = cc.costCentreRecords.map((r) => r.Name);
  } else if (cc && Array.isArray(cc.costCentres) && cc.costCentres.length > 0) {
    costCentres = cc.costCentres.map((c) => (typeof c === 'string' ? c : c && c.Name)).filter(Boolean);
  } else if (Array.isArray(cc) && cc.length > 0) {
    costCentres = cc.map((c) => (typeof c === 'string' ? c : c && c.Name)).filter(Boolean);
  }
} catch (_) {
  if (!Array.isArray(costCentres)) costCentres = [];
}
if (!Array.isArray(costCentres) || costCentres.length < 1) {
  costCentres = [];
}

const decodedBody = rawBody.replace(/\\n/g, '\n').replace(/\\r/g, '');

function stripEmailChain(text) {
  const separators = [
    /^-{4,}original message-{4,}/im,
    /^-{4,}forwarded message-{4,}/im,
    /^from:.+\nsent:.+\nto:.+/im,
    /from:.+sent:.+to:.+subject:/i,
    /^greetings[,\.]?\s*\n/im,
  ];
  let best = text;
  for (const sep of separators) {
    const parts = text.split(sep);
    if (parts.length > 1) {
      best = parts[parts.length - 1];
    }
  }
  return best.trim();
}

function stripFooters(text) {
  const footerMarkers = [
    /\n[\s]*ps\.\s*this email is automated/i,
    /\n[\s]*this email is automated[,\s]/i,
    /\n[\s]*if you do not wish to receive these notification/i,
    /\n[\s]*this email and any files transmitted/i,
    /\n[\s]*this e-?mail (is|and|was|contains)/i,
    /\n[\s]*confidentiality notice/i,
    /\n[\s]*the information (in|contained in) this (e-?mail|message)/i,
    /\n[\s]*[#\+\*=]{10,}/,
    /\n[\s]*location details[\s]*\n[\s]*-{3,}/i,
  ];
  let result = text;
  for (const marker of footerMarkers) {
    const match = result.search(marker);
    if (match !== -1) {
      result = result.substring(0, match).trim();
    }
  }
  return result;
}

const body = stripFooters(stripEmailChain(decodedBody));
const fullBody = pdfText
  ? `${body}\n\n--- Attached PDF ---\n${pdfText}`
  : body;

// --- AI #1: customer identification only (AI #2 runs after Get Customer Info — see build-prompt-simpro-resolve.js) ---
const systemPrompt = `You are a data extraction assistant for Turnpower. Your only job is to identify which client/customer this email relates to. Respond with valid JSON only — no markdown, no code blocks. If you cannot determine the customer, return null for "customer".`;

const userPrompt = `Identify the customer for this maintenance/job email. Return a single JSON object with one field:

- customer: string — the client company name.

RULES:
1. Use this known clients list FIRST (check subject and body). If you find a clear match, return the exact spelling from the list: ${JSON.stringify(knownClients)}.
2. If not in the list, use a line starting with "Customer:" or "Client:" if present.
3. If still unclear, return null for customer.

Do not extract addresses, SLAs, cost centres, or job details — only the customer name.

Email subject: ${subject}

Email body:
${fullBody}`;

const inputItem = $input.first();
const imageKeys = inputItem.json.imageKeys || [];
const costCentresFull = costCentreRecords.length > 0 ? costCentreRecords : costCentres;
return [{ json: { systemPrompt, userPrompt, subject, body: fullBody, imageKeys, knownClientsFull: knownClientsRaw, costCentresFull, requestTypes }, binary: inputItem.binary || {} }];
