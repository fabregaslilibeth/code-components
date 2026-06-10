# HubSpot Contact Property Field Mapping

When submitting form data to HubSpot, you must use the **internal property names** that HubSpot recognizes. Here are the correct field names:

## Standard Contact Properties

**⚠️ IMPORTANT: HubSpot property names are CASE-SENSITIVE and must be lowercase!**

| Field Purpose | Correct HubSpot Property Name | ❌ Incorrect Names |
|--------------|------------------------------|-------------------|
| Phone Number | `phone` | `phonenumber`, `phone_number`, `Phone` |
| Company Name | `company` | `companyname`, `company_name`, `Company` |
| Email | `email` | `emailaddress`, `e-mail`, `Email`, `EMAIL` |
| First Name | `firstname` | `first_name`, `fname`, `FirstName` |
| Last Name | `lastname` | `last_name`, `lname`, `LastName` |
| Job Title | `jobtitle` | `job_title`, `title`, `JobTitle` |
| Website | `website` | `web`, `url`, `Website` |

## Custom Properties

For custom fields like `agree`, you have two options:

1. **Create the property in HubSpot first:**
   - Go to **Settings > Properties > Contacts** in HubSpot
   - Click "Create property"
   - Set the internal name to `agree` (or your preferred name)
   - Choose the appropriate field type (e.g., Single checkbox, Multiple checkbox, etc.)

2. **Use an existing property:**
   - Check your HubSpot account for existing properties that might serve the same purpose
   - Common alternatives: `hs_legal_basis`, `gdpr_consent`, or other custom properties

## How to Find Internal Property Names in HubSpot

1. Go to **Settings > Properties > Contacts**
2. Click on any property to view its details
3. The **Internal name** is what you need to use in your form field mapping
4. Note: The internal name is often lowercase with no spaces (e.g., `phone`, `company`)

## Webflow Form Configuration

If you're using a Webflow form connected to HubSpot:

1. In Webflow, select your form element
2. Go to the form settings/integrations
3. Map your form fields to HubSpot properties using the internal names above
4. For the phone field: use `phone`
5. For the company field: use `company`
6. For the agree field: use `agree` (if you've created it) or the appropriate custom property name

## Troubleshooting: Fields Correct But Not Saving

If you're using the correct field names (`phone`, `company`) but data isn't being saved:

### 1. Check Case Sensitivity
- ✅ Use: `fields[phone]`, `fields[company]`, `fields[email]`, `fields[agree]`
- ❌ Avoid: `fields[Phone]`, `fields[Company]`, `fields[Email]`, `fields[Agree]`

### 2. Verify Property Exists in HubSpot
1. Go to **Settings > Properties > Contacts** in HubSpot
2. Search for `phone` - verify it exists and the internal name is exactly `phone`
3. Search for `company` - verify it exists and the internal name is exactly `company`
4. If `agree` is a custom field, verify it exists with internal name `agree` (lowercase)

### 3. Check Property Field Type
- `phone` should be a "Phone number" type property
- `company` should be a "Text" or "Company" type property
- `agree` should match your form field type (e.g., "Single checkbox" for boolean values)

### 4. Verify Webflow Form Field Mapping
In Webflow form settings, ensure:
- Form field name matches HubSpot internal property name exactly (case-sensitive)
- The field is mapped to the correct HubSpot property
- No extra spaces or characters in the field name

### 5. Test with Direct API Call
If using API integration, verify the payload format:
```json
{
  "fields": [
    {"name": "phone", "value": "+1 (361) 117-7072"},
    {"name": "company", "value": "Ballard and Conrad Co"},
    {"name": "email", "value": "example@email.com"},
    {"name": "agree", "value": "true"}
  ]
}
```

## Testing

After updating your field names:
1. Submit a test form
2. Check HubSpot to verify the data appears correctly
3. If errors persist, verify the property exists in your HubSpot account
4. Check the browser console/network tab for any submission errors
5. Verify the exact internal property names in HubSpot Settings

