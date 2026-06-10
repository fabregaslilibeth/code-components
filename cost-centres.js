/**
 * n8n Code node: Simpro cost centres from GET .../setup/accounts/costCenters/
 * Name this node **Cost Centres** so Build Prompt can read it via $('Cost Centres').
 *
 * Outputs:
 * - costCentreRecords — { ID, Name }[] (source of truth for IDs)
 * - costCentres — string[] (names only, for AI prompt)
 * - costCentreByName — map from normalised name → ID (for Build Simpro Job Body lookup)
 */

const costCentreRecords = [
  { ID: 214, Name: '***DRAINAGE' },
  { ID: 130, Name: '***ELECTRICAL' },
  { ID: 136, Name: '**PLUMBING REACTIVE' },
  { ID: 132, Name: '*GAS BOILERS AND HOT WATER' },
  { ID: 221, Name: '*KITCHEN VENTILATION' },
  { ID: 134, Name: '*QUOTED WORKS MULTI' },
  { ID: 222, Name: 'AC SURVEY' },
  { ID: 133, Name: 'AIR CONDITIONING' },
  { ID: 172, Name: 'COMPLIANCE' },
  { ID: 125, Name: 'IVY SO PMV' },
  { ID: 263, Name: 'LADDER INSPECTION' },
  { ID: 277, Name: 'MAB API TESTING' },
  { ID: 131, Name: 'MULTI TRADE' },
  { ID: 137, Name: 'PPM' },
  { ID: 259, Name: 'PPM - AC' },
  { ID: 258, Name: 'PPM - ELECTRICAL' },
  { ID: 261, Name: 'PPM - GAS' },
  { ID: 211, Name: 'PPM REMEDIALS - AC' },
  { ID: 219, Name: 'PPM REMEDIALS - ELECTRICAL' },
  { ID: 212, Name: 'PPM REMEDIALS - GAS' },
  { ID: 262, Name: 'SIGNET FRA REMEDIALS' },
  { ID: 265, Name: 'SSS' },
  { ID: 121, Name: 'SUPPLY ONLY' },
  { ID: 268, Name: 'Synecore - AC' },
  { ID: 269, Name: 'Synecore - Other' },
  { ID: 267, Name: 'Synecore - Refrigeration' },
  { ID: 266, Name: 'Synecore - Testing' },
  { ID: 273, Name: 'Synecore-PPM' },
  { ID: 275, Name: 'Synecore-PPM remedial works-AC' },
  { ID: 276, Name: 'Synecore-PPM remedial works-Other' },
];

const costCentres = costCentreRecords.map((r) => r.Name);

const costCentreByName = {};
for (const r of costCentreRecords) {
  costCentreByName[r.Name.trim().toLowerCase()] = r.ID;
}

return [{ json: { costCentreRecords, costCentres, costCentreByName } }];
