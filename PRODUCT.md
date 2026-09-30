# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: visitors to intouchtech.co.uk.** People at UK organisations (small and mid-sized businesses, schools, housing associations and healthcare teams) who are comparing providers for managed IT, cyber security, Microsoft services, Power BI reporting or business phone systems. Their job is to judge whether Intouch can solve their specific problem, and whether they trust Intouch enough to get in touch.
- **Library users.** Beth builds the components. Pages are assembled in the Webflow Designer by placing components and filling in their props.

## Product Purpose

Intouch Tech Components is the shared Webflow code component library for Intouch Tech's own website (intouchtech.co.uk). No other site uses it. It lets service and landing pages be built quickly from consistent, on-brand sections.

Success on the site means a visitor gets in touch: a phone call, a WhatsApp chat with a named expert, or a booked free consultation.

## Positioning

Confirmed with Beth: Intouch can truthfully claim all four of these, and a generic IT provider cannot.

1. **One accountable provider.** Managed IT, cyber security, Microsoft, data and phones under one roof.
2. **Named in-house experts.** Senior UK consultants who own the outcome, and whom visitors can message directly (for example George Brown, the in-house Power BI expert, on WhatsApp).
3. **Certified and security-led.** Microsoft Solutions Partner. Cyber Essentials certification assessed and certified by IASME, the NCSC's appointed Cyber Essentials Partner. Security built in from day one.
4. **Plain-English results.** Reporting and advice a board can act on, not jargon.

## Operating Context

- Pages are organised by service line (for example Cyber Essentials pricing, Power BI delivery). The library has sections for pricing, delivery process, case studies, proof and contact.
- Contact routes in the current copy: phone 0333 370 7000, hello@intouchtech.co.uk, a WhatsApp chat, and "Book a Free Consultation".
- Components are built in this repo and shared to the Webflow Workspace with `npm run webflow:share`, then placed and configured in the Webflow Designer. `npm start` runs a local preview harness (`src/App.js`).

## Capabilities and Constraints

- **Services named in the site copy:**
  - Managed IT support.
  - Cyber security: Cyber Essentials and Cyber Essentials Plus, penetration testing, vulnerability scanning and email protection.
  - Microsoft: Microsoft 365, SharePoint, Teams, Copilot, Azure, Defender and Dynamics 365.
  - Data and apps: Power BI, Power Apps and Power Automate.
  - Cloud telephony: 3CX, VoIP and hosted phone systems.
- **Webflow prop types only:** Text, Boolean, Variant, Number, Link, Image and RichText, from `@webflow/data-types`. There is no colour type, so colours are hex strings in Text props. Lists are JSON arrays in one Text prop, parsed in the `.webflow.tsx` wrapper.
- **Styles live in code:** each component's CSS is a template string in its `.styles.ts` file, injected with `<style>`. Each component has its own class prefix and dark/light theme tokens.
- **Live pages depend on existing props.** Don't rename or remove a prop on a shared component, because content already entered in it stops showing on live pages. Change the presentation or the default value instead.
- **Unverified figures:** the Stats Grid defaults (12 hrs saved weekly, 3 weeks to first live dashboard, 100% team adoption) are not confirmed as real results.

## Brand Commitments

- Name: Intouch Tech ("Intouch").
- Voice: plain English that a board can act on, not jargon (confirmed as positioning).
- Assets in use: the Microsoft Solutions Partner logo and George Brown's photo (defaults in `src/components/expert-cta/ExpertCta.webflow.tsx`).

## Evidence on Hand

- **Case studies** (defaults in `src/components/case-study/CaseStudySpotlight.webflow.tsx`):
  - NHS: five times more call capacity for frontline clinical teams.
  - Aristone: local Luton numbers and unlimited support under one licence.
  - The Regis School: an on-site ISDN system replaced with 3CX cloud.
  - Linthouse Housing Association: from manual checks to always-on security.
  - A fashion retailer (unnamed): penetration testing as part of an ongoing security strategy.
- **Linthouse results** (`src/components/results-stats/`): 21 security findings identified, 5 remediated, 3 critical issues resolved, 197 malicious emails quarantined in 30 days, and 146 more emails flagged for review.
- **Testimonial:** Colin Jones, ICT Manager, Linthouse Housing Association (`src/components/pull-quote/`).
- **Accreditations:** Microsoft Solutions Partner. Cyber Essentials assessed and certified by IASME.
- **Don't fabricate:** use no clients, quotes, statistics or accreditations beyond these. The Stats Grid figures need confirmation before they appear as proof.

## Product Principles

1. **Show the people.** Put named, real Intouch experts in front of visitors, with a direct way to reach them. Intouch is not a faceless provider.
2. **Proof before claims.** Lead with certifications, named clients and measured results, and never invent any of them.
3. **Say it in plain English.** State the outcome for the business first, and name the technology second.
4. **One provider, visibly.** Connect the services as one accountable relationship, not a list of unrelated offers.
5. **Every page ends in a conversation.** A call, a WhatsApp chat or a free consultation is always easy to find.
