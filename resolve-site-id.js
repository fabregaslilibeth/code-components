/**
 * n8n Code node: Resolve site ID from address using Simpro customer Sites list.
 *
 * PLACE AFTER: HTTP Request that GETs
 *   https://andwis-uat.simprocloud.com/api/v1.0/companies/0/customers/companies/{{ $json.customerId }}
 *
 * INPUT: Current item = HTTP response (customer object with Sites array).
 *        We need the parsed "address" from the item that triggered the request —
 *        we read it from the node that feeds the HTTP Request (e.g. Parse AI Response).
 *
 * OUTPUT: Original parsed item (customer, customerId, address, ...) with siteId added.
 */

// Address: prefer **Parse AI Simpro Resolve** (AI #2 output); else legacy single-pass **Parse AI Response**.
let parsedItem;
try {
  parsedItem = $('Parse AI Simpro Resolve').first().json;
} catch (_) {
  parsedItem = $('Parse AI Response').first().json;
}
const address = parsedItem.address || parsedItem.body || '';

// --- Get Sites from the HTTP Request response (current node input) ---
const customerResponse = $input.first().json;
const sites = Array.isArray(customerResponse.Sites) ? customerResponse.Sites : [];

function normalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/['\u2018\u2019]/g, "'")
    .trim()
    .toLowerCase();
}

// Strip common prefixes/suffixes so "0578 - Bill's 12 Coney Street..." matches "Bill's -12 Coney Street..."
function normalizeForMatch(str) {
  let s = normalize(str);
  s = s.replace(/^\d+\s*[-–]\s*/, ''); // "0578 - " or "0578-"
  s = s.replace(/\s*[-–]\s*permit site\s*$/i, '');
  s = s.replace(/\s*[-–]\s*access required\s*$/i, '');
  s = s.replace(/\s*[-–]\s*ooh to be booked\s*$/i, '');
  s = s.replace(/\s*,\s*/g, ' ');
  return s;
}

let siteId = null;
const normAddress = normalizeForMatch(address);

if (normAddress && sites.length > 0) {
  for (const site of sites) {
    const name = site.Name || site.name || '';
    if (!name) continue;
    const normName = normalizeForMatch(name);
    // Exact match
    if (normName === normAddress) {
      siteId = site.ID;
      break;
    }
    // Address contains key part of site name (e.g. "12 coney street york yo1 9na")
    const keyPart = normName.replace(/^bill'?s\s*[-–]\s*/i, '').trim();
    if (keyPart && (normAddress.includes(keyPart) || normName.includes(normAddress))) {
      siteId = site.ID;
      break;
    }
    // Site name contains key part of address (e.g. street + postcode)
    const postcodeMatch = normAddress.match(/\b([a-z]{1,2}\d{1,2}[a-z]?\s*\d[a-z]{2})\b/i);
    const streetMatch = normAddress.match(/\d+\s+[a-z][a-z\s]+(?:street|st|road|rd|lane|ln|way|ave)\s+/i);
    if (postcodeMatch && normName.includes(normalize(postcodeMatch[1]))) {
      siteId = site.ID;
      break;
    }
    if (streetMatch && normName.includes(normalize(streetMatch[0]))) {
      siteId = site.ID;
      break;
    }
  }
  // Fallback: pick first site whose name shares the most words with the address
  if (siteId == null && normAddress) {
    const addressWords = normAddress.split(/\s+/).filter((w) => w.length > 2);
    let best = { id: null, count: 0 };
    for (const site of sites) {
      const normName = normalizeForMatch(site.Name || site.name || '');
      const nameWords = normName.split(/\s+/).filter((w) => w.length > 2);
      const overlap = addressWords.filter((w) => nameWords.some((nw) => nw.includes(w) || w.includes(nw))).length;
      if (overlap > best.count && overlap >= 2) {
        best = { id: site.ID, count: overlap };
      }
    }
    if (best.id != null) siteId = best.id;
  }
}

// Output: same item shape as input + siteId (for Simpro job creation)
return [{ json: { ...parsedItem, siteId: siteId != null ? siteId : null } }];
