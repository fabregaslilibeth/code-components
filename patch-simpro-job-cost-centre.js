/**
 * n8n Code node: build PATCH to set job cost centre after POST (or to fix it later).
 *
 * Do NOT send { "CostCenter": { "ID": 214 } } — Simpro returns 422 "Invalid column" on /CostCenter.
 * Cost centre is not a top-level Job field. Use Sections → CostCentres → CostCentreID (setup ID from
 * GET .../setup/accounts/costCenters/), UK spelling CostCentre.
 *
 * INPUT (same item as after Parse AI / job create):
 *   - jobId / simproJobId / ID from POST response
 *   - cost_centre_id (or costCentreId)
 * Optional: companyId (default 0), simproBaseUrl, sectionName
 *
 * OUTPUT: simproPatchJob { method, url, body } for the HTTP Request node (body = nested Sections below).
 *
 * If PATCH still fails, GET .../jobs/{jobId}?display=all and mirror existing Section / CostCentres IDs.
 */

const item = $input.first().json;
const jobId = item.simproJobId ?? item.jobId ?? item.id ?? item.ID;
const costCentreId = item.cost_centre_id ?? item.costCentreId;
const companyId = item.companyId ?? 0;
const baseUrl = (item.simproBaseUrl || 'https://andwis-uat.simprocloud.com/api/v1.0').replace(/\/$/, '');

if (jobId == null || jobId === '' || costCentreId == null || costCentreId === '') {
  return [{ json: { ...item, simproPatchJob: null, patchCostCentreError: 'Missing jobId or cost_centre_id' } }];
}

const ccNum = Number(costCentreId);
if (Number.isNaN(ccNum)) {
  return [{ json: { ...item, simproPatchJob: null, patchCostCentreError: 'cost_centre_id is not numeric' } }];
}

const body = {
  Sections: [ 
    {
      Name: item.sectionName || 'Section 1',
      CostCentres: [{ CostCentreID: ccNum }]
    }
  ]
};

const url = `${baseUrl}/companies/${companyId}/jobs/${jobId}/`;

return [
  {
    json: {
      ...item,
      simproPatchJob: {
        method: 'PATCH',
        url,
        body
      }
    }
  }
];
