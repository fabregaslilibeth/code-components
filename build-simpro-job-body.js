/**
 * n8n Code node: Build Simpro job creation POST body from parsed item.
 *
 * INPUT: Item with customerId, siteId, request, problem, notes, reference_id,
 *        placed_by, requested_at, due_on, phone, extra, location,
 *        response_time (integer Simpro Response Time ID from map-response-time.js / customer ResponseTimes),
 *        cost_centre_id (from Parse AI) or costCentreId, cost_centre (name fallback), etc.
 *
 * OUTPUT: Same item with simproJob (object) added — use $json.simproJob as POST body.
 *
 * POST to: https://andwis-uat.simprocloud.com/api/v1.0/companies/0/jobs/
 *
 * Cost centre: Sections → CostCenters → CostCenter (IDs from setup/accounts/costCenters/).
 */

const item = $input.first().json;

/** Ensure reference is digits/slashes only (same rule as Parse AI). */
function normalizeReferenceId(raw) {
  if (raw == null || raw === '') return null;
  const s = String(raw).trim();
  const m = s.match(/(\d+(?:[\/\-]\d+)*)/);
  if (m) return m[1];
  return s.replace(/^(?:order\s*no\.?|job\s*order|order\s*number|reference|ref\.?)\s*[:\s]*/i, '').trim() || null;
}

function formatDate(d) {
  if (!d) return null;
  if (typeof d === 'string' && /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(d.trim())) {
    const [day, month, year] = d.trim().split('/');
    const y = year.length === 2 ? `20${year}` : year;
    return `${y}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  const date = new Date(d);
  if (isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

// Description: request + problem (+ location if useful)
const descriptionParts = [item.request, item.problem, item.location].filter(Boolean);
const description = descriptionParts.length ? descriptionParts.join(' – ') : (item.problem || item.request || '');

// Notes: notes + placed_by, contact_person, phone, extra
const noteLines = [
  item.notes,
  item.placed_by && `Placed by: ${item.placed_by}`,
  item.contact_person && `Contact: ${item.contact_person}`,
  item.phone && `Phone: ${item.phone}`,
  item.extra
].filter(Boolean);
const notes = noteLines.length ? noteLines.join('\n\n') : undefined;

// Simpro accepts plain text; optional simple HTML if you need it
const wrapHtml = (text) => (text ? `<div style="font-size: 10pt;">${String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>')}</div>` : undefined);

const dateIssued = formatDate(item.requested_at);
const dueDate = formatDate(item.due_on);

const refClean = normalizeReferenceId(item.reference_id) ?? item.reference_id;

const ccId = item.cost_centre_id ?? item.costCentreId;

/** Simpro rejects ResponseTime: null — omit the field when no ID is resolved. */
const rtRaw = item.response_time ?? item.responseTime;
let responseTimeId;
if (rtRaw != null && rtRaw !== '') {
  const n = Number(rtRaw);
  if (Number.isFinite(n)) responseTimeId = n;
}

const simproJob = {
  Type: 'Service',
  Customer: item.customerId ?? undefined,
  Site: item.siteId ?? undefined,
  OrderNo: refClean || undefined,
  RequestNo: refClean || item.request || undefined,
  Name: (item.problem || item.request || refClean || 'Job').slice(0, 255),
  Description: notes || undefined,
  DateIssued: dateIssued || undefined,
  DueDate: dueDate || undefined,
  Stage: 'Pending',
  ...(responseTimeId != null ? { ResponseTime: responseTimeId } : {}),
  ...(ccId != null && ccId !== ''
    ? {
        Sections: {
          CostCenters: {
            CostCenter: ccId
          }
        }
      }
    : {})
};

// Optional: send Description/Notes as HTML (uncomment if your Simpro expects HTML)
// if (simproJob.Description) simproJob.Description = wrapHtml(simproJob.Description);
// if (simproJob.Notes) simproJob.Notes = wrapHtml(simproJob.Notes);

// Remove undefined / null so the API never receives null (Simpro rejects some null fields)
Object.keys(simproJob).forEach((k) => {
  if (simproJob[k] === undefined || simproJob[k] === null) delete simproJob[k];
});

// After job create: to set "Customer Job ID (API Link Only)" (CustomField ID 4),
// PATCH .../jobs/{jobId}/customFields/4 with body: { "Value": item.reference_id }

return [{ json: { ...item, simproJob } }];
