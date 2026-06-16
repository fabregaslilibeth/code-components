import { ExpertCta } from './ExpertCta';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(ExpertCta, {
  name: 'Expert CTA',
  description: 'Dark section with expert photo anchored to the bottom, a chat popup, and a WhatsApp CTA',
  group: 'Marketing',
  props: {
    eyebrow: props.Text({
      name: 'Eyebrow Text',
      defaultValue: 'Reports taking too long? Dashboards messy?',
    }),
    headline: props.Text({
      name: 'Headline',
      defaultValue: 'Ask our inhouse Power BI expert,',
    }),
    expertName: props.Text({
      name: 'Expert Name (large)',
      defaultValue: 'GEORGE',
    }),
    tagline: props.Text({
      name: 'Tagline',
      defaultValue: 'Make every decision data-driven.',
    }),
    body: props.Text({
      name: 'Body Text',
      defaultValue:
        'Custom dashboards, KPI tracking, automated reporting, and board-ready insights. Ask our inhouse Power BI expert about our comprehensive BI consultancy services and level up how you run your business.',
    }),
    badgeImageSrc: props.Text({
      name: 'Badge Image URL',
      defaultValue: 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/6936c5d41fc73d5cc0188ec3_Microsoft-Solutions-Partner-Logo.avif',
    }),
    badgeImageAlt: props.Text({
      name: 'Badge Image Alt Text',
      defaultValue: 'Microsoft Solutions Partner',
    }),
    badgeText: props.Text({
      name: 'Badge Text (HTML allowed)',
      defaultValue:
        'George works within a <strong>Microsoft Solutions Partner</strong> & <strong>Microsoft Certified Expert</strong> team.',
    }),
    ctaLabel: props.Text({
      name: 'CTA Button Label',
      defaultValue: 'Chat With George',
    }),
    expertPhotoSrc: props.Text({
      name: 'Expert Photo URL (full body, transparent BG)',
      defaultValue: 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/695fbf29a3a902ef8880f3de_Untitled-2.avif',
    }),
    expertPhotoAlt: props.Text({
      name: 'Expert Photo Alt Text',
      defaultValue: 'George Brown – In-House Power BI Expert',
    }),
    expertAvatarSrc: props.Text({
      name: 'Expert Avatar URL (used in popup, falls back to photo)',
      defaultValue: 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/695fbf29a3a902ef8880f3de_Untitled-2.avif',
    }),
    expertRole: props.Text({
      name: 'Expert Role (shown in popup)',
      defaultValue: 'In-House PowerBi Expert',
    }),
    whatsappNumber: props.Text({
      name: 'WhatsApp Number (no + or spaces, e.g. 447700900000)',
      defaultValue: '447967889889',
    }),
    whatsappMessage: props.Text({
      name: 'WhatsApp Pre-filled Message',
      defaultValue: 'Hi George, I have a question about Power BI.',
    }),
    popupTime: props.Text({
      name: 'Popup Timestamp (e.g. 09:30 — blank = current time)',
      defaultValue: '30',
    }),
    popupMessage: props.Text({
      name: 'Popup Message (use \\n for new lines)',
      defaultValue:
        "Do you have any questions about our Microsoft PowerBI?\n\nDrop me a line and I'll gladly help you 😍",
    }),
    popupCtaLabel: props.Text({
      name: 'Popup CTA Label',
      defaultValue: 'Start Chat with:',
    }),
    whatsappBtnLabel: props.Text({
      name: 'WhatsApp Button Label',
      defaultValue: 'WhatsApp',
    }),
  },
});
