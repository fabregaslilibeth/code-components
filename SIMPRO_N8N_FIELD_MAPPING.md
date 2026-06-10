# Simpro Job Creation – n8n to Simpro Field Mapping

Use this when building the **POST body** for `POST /api/v1.0/companies/0/jobs/` from your n8n parsed result.

---

## 1. n8n result → Simpro job body (direct mapping)

| n8n field (`result`) | Simpro POST field | Notes |
|----------------------|-------------------|--------|
| `reference_id`       | **OrderNo** or **RequestNo** | Use for external reference. |
| `request` / `problem` | **Description**   | Main job description (plain text; Simpro also accepts HTML). |
| `notes`              | **Notes**         | Additional notes. |
| `requested_at`       | **DateIssued**    | Must be `YYYY-MM-DD`. |
| `due_on`             | **DueDate**       | Must be `YYYY-MM-DD`. |
| `customer`           | **Customer**      | Must be **Simpro Customer ID** (integer). If n8n has name, resolve to ID first. |
| `address` / `location` | **Site**       | Must be **Simpro Site ID** (integer). If n8n has address text, resolve to Site ID first (lookup or API). |

**Important:** Simpro expects **Customer** and **Site** as **IDs**, not names or addresses. You need a lookup (e.g. from a sheet, or Simpro GET customers/sites) to turn `customer` and `address`/`location` into IDs.

---

## 2. Simpro fields you can set on create

From the Simpro job schema (create only; omit read-only fields like `ID`, `Total`, `CustomFields` in POST):

| Simpro field       | Type   | Use from n8n / logic |
|--------------------|--------|-----------------------|
| **Type**           | string | `"Service"` or `"Project"` (e.g. fixed or from n8n). |
| **Customer**       | int    | **Required.** Simpro Customer ID. |
| **Site**           | int    | **Required.** Simpro Site ID. |
| **CustomerContract** | int | Optional; from lookup if you use contracts. |
| **CustomerContact**  | int | Optional; contact ID if you have one. |
| **SiteContact**      | int | Optional; site contact ID. |
| **OrderNo**        | string | e.g. `reference_id`. |
| **RequestNo**      | string | e.g. `reference_id` or request type. |
| **Name**           | string | Short label; e.g. first part of description. |
| **Description**    | string | Main description; e.g. `problem` or `request`. |
| **Notes**          | string | e.g. `notes` + `placed_by` + `contact_person` + `phone`. |
| **DateIssued**     | string | `YYYY-MM-DD`; e.g. `requested_at`. |
| **DueDate**        | string | `YYYY-MM-DD`; e.g. `due_on`. |
| **DueTime**        | string | `HH:MM` (24h) if needed. |
| **Stage**          | string | e.g. `"Pending"`. |

Custom fields (e.g. "Customer Job ID (API Link Only)") are set **after** job creation via PATCH, not in the initial POST.

---

## 3. Example: build Simpro body from n8n result

Use this in an n8n **Code** node that receives the parsed `result` (and optionally pre-resolved Customer ID and Site ID).

```javascript
// Input: items with result from "Parse AI Response" (and optionally customerId, siteId from lookups)
const item = $input.first();
const parsed = item.json.result || item.json;
const customerId = item.json.customerId ?? 105;   // from lookup or default for testing
const siteId = item.json.siteId ?? 5989;        // from lookup or default for testing

function formatDate(d) {
  if (!d) return null;
  const date = new Date(d);
  if (isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

const notes = [
  parsed.notes,
  parsed.placed_by && `Placed by: ${parsed.placed_by}`,
  parsed.contact_person && `Contact: ${parsed.contact_person}`,
  parsed.phone && `Phone: ${parsed.phone}`,
  parsed.extra
].filter(Boolean).join('\n');

const simproBody = {
  Type: "Service",
  Customer: customerId,
  Site: siteId,
  OrderNo: parsed.reference_id || undefined,
  RequestNo: parsed.reference_id || parsed.request || undefined,
  Name: (parsed.problem || parsed.request || parsed.reference_id || 'Job').slice(0, 100),
  Description: parsed.problem || parsed.request || '',
  Notes: notes || undefined,
  DateIssued: formatDate(parsed.requested_at) || undefined,
  DueDate: formatDate(parsed.due_on) || undefined
};

return [{ json: { ...item.json, simproJob: simproBody } }];
```

Then in the next node (HTTP Request to Simpro), use **Body** from the Code node output, e.g. `{{ $json.simproJob }}`.

**Ready-to-use script:** See **`build-simpro-job-body.js`** for a single Code node that builds the POST body from your full item (customerId, siteId, reference_id, request, problem, notes, placed_by, requested_at, due_on, phone, extra, location). It only sends fields you have; dates are converted from `DD/MM/YYYY` to `YYYY-MM-DD`.

---

## 4. Resolving Customer and Site IDs in n8n

Your n8n flow has `customer`, `address`, `location` (and similar). Simpro needs **Customer** and **Site** as IDs.

**Option A – From a sheet**  
If "Append data to sheet" stores rows that already have Simpro Customer ID and Site ID (e.g. from a config sheet or previous sync), read those columns and pass them into the Code node as `customerId` and `siteId`.

**Option B – From Simpro API in n8n**  
1. **GET** `.../companies/0/customers/individuals/` (and/or `.../customers/companies/`) and find the customer by name (e.g. match `result.customer` to `CompanyName` or `GivenName`/`FamilyName`), take `ID` → **Customer**.  
2. **GET** `.../companies/0/sites/` and find the site by name/address (e.g. match `result.address` or `result.location` to `Name`), take `ID` → **Site**.  
Use n8n **HTTP Request** nodes + **Code** or **Set** to do the matching and add `customerId` and `siteId` to the item before the Code node that builds `simproJob`.

**Option C – Fixed IDs for testing**  
Use a single known customer and site (e.g. Customer 105, Site 5989) until the rest of the mapping is working.

---

## 5. Minimal POST body (required only)

If you only have IDs and one text field:

```json
{
  "Type": "Service",
  "Customer": 105,
  "Site": 5989
}
```

Your extended body is valid; Simpro will accept the extra fields you listed (OrderNo, RequestNo, Name, Description, Notes).

---

## 6. Custom field "Customer Job ID (API Link Only)" after create

To set the custom field **after** the job is created:

1. From the POST response, read the new job ID (e.g. from **Location** header or response body `ID`).
2. **PATCH**  
   `https://andwis-uat.simprocloud.com/api/v1.0/companies/0/jobs/{jobID}/customFields/4`  
   (4 is the CustomField ID for "Customer Job ID (API Link Only)" from your job response.)
3. Body: `{ "Value": "your-reference_id" }`.

So: use the mapping above to build the POST body from n8n, resolve Customer/Site to IDs (sheet or API), then optionally PATCH the custom field with `reference_id`.

---

## 7. Customer lookup: client name → Simpro Customer ID (n8n Code node)

Use the script in **`n8n-simpro-customer-lookup.js`** in a **Code** node to accept a client name and return the Simpro Customer ID.

**Input (on each item):**  
- `json.client` or `json.customer` or `json.company` — the company name to look up (e.g. from your parsed AI result).

**Output (added to each item):**  
- `json.customerId` — Simpro Customer ID (integer) or `null` if no match.  
- `json.matchedCompanyName` — the matched Simpro company name (if found).  
- `json.customerMatchError` — set only if no match (e.g. `No match for "..."`).

**Companies list (choose one):**  
1. **From previous node:** Set `json.companies` on the item to the full array from Simpro (e.g. merge all pages from GET `.../customers/companies/?pageSize=250&page=1` etc.). Leave `GET_COMPANIES_NODE_NAME` empty and `USE_STATIC_LIST = false`.  
2. **From another node:** Set `GET_COMPANIES_NODE_NAME` to the name of the node that outputs the companies (one item with `json` = array, or one item per company).  
3. **Static list:** Set `USE_STATIC_LIST = true` and paste your full companies array into the `COMPANIES` constant in the script.

Matching is case-insensitive and trims spaces; it tries exact match, then “CompanyName contains search”, then “search contains CompanyName”. Use `customerId` as `Customer` in the Simpro job POST body.

---

## 8. Resolve Site ID after "If Has Client" (HTTP Request + Code node)

To get the **Simpro Site ID** from the parsed **address**, add two nodes after **If Has Client** (true branch):

### Step 1: HTTP Request node

- **Name:** e.g. `Simpro Get Customer (Sites)`
- **Method:** `GET`
- **URL:**  
  `https://andwis-uat.simprocloud.com/api/v1.0/companies/0/customers/companies/{{ $json.customerId }}`  
  (Use the same base URL if your env is different; `customerId` comes from Parse AI Response.)
- **Authentication:** None (auth in headers).
- **Headers:**
  - `Authorization`: `Bearer <your_simpro_token>`
  - `Accept`: `application/json`
  - `Content-Type`: `application/json`

The response is the customer object and includes a **`Sites`** array: `[{ "ID": 5989, "Name": "Bill's -12 Coney Street York YO1 9NA" }, ...]`.

### Step 2: Code node (resolve siteId)

- **Name:** e.g. `Resolve Site ID`
- **Language:** JavaScript  
- **Code:** use the script in **`resolve-site-id.js`**.

The script:

- Reads **address** from `$('Parse AI Response').first().json.address`.
- Reads **Sites** from the HTTP response (current input).
- Normalizes address and site names (trim, lowercase, strip "0578 -", "permit site", etc.) and finds the best matching site.
- Returns the **original parsed item** (customer, customerId, address, request, problem, …) with **`siteId`** added (number or `null`).

**Output:** One item with all Parse AI Response fields plus **`siteId`** (e.g. `5989` for "Bill's -12 Coney Street York YO1 9NA"). Use `siteId` as **`Site`** in the Simpro job POST body. If no match is found, `siteId` is `null`; you can add a later "If siteId exists" branch before creating the job.
