/**
 * n8n Code node: Simpro Response Time IDs allowed for jobs (subset of setup response times).
 * Name node **Response Times** if you want Build Prompt to $('Response Times').
 *
 * Full list lives in Simpro GET .../setup/.../responseTimes/ (or equivalent); this is the filtered allow-list.
 */

const responseTimeRecords = [
  { ID: 3, Name: '24 hour SLA' },
  { ID: 2, Name: '4 hour SLA' },
  { ID: 5, Name: '3 hour SLA' },
  { ID: 7, Name: '5 Day Response' },
  { ID: 53, Name: '3 Day' },
  { ID: 57, Name: '7 Day' },
  { ID: 56, Name: 'P1 / priority' },
];

const responseTimeAllowedIds = responseTimeRecords.map((r) => r.ID);

return [{ json: { responseTimeRecords, responseTimeAllowedIds } }];
