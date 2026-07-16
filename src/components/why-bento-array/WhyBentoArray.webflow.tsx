import { WhyBentoArray, WhyBentoArrayTheme } from './WhyBentoArray';
import { WhyTile } from '../why-bento/WhyBento.data';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"icon":"users","title":"In-house specialists","body":"Senior UK consultants with deep technical expertise who own the outcome, security-led from day one."},
  {"icon":"layout-dashboard","title":"Built around real questions","body":"Dashboards designed around the KPIs that matter to Finance, Sales, Operations and Leadership."},
  {"icon":"shield-check","title":"Security-first data access","body":"Role-based access, encryption and Microsoft security controls baked in from the start."},
  {"icon":"message-square","title":"Plain-English insights","body":"Clear reporting your board can act on — not jargon."},
  {"icon":"layers","title":"One partner for everything","body":"Managed IT, cyber security and BI under one accountable roof."}
]`;

const parseItems = (raw: string): WhyTile[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const WhyBentoArrayWebflow = ({ theme, items }: { theme?: string; items?: string }) => {
  const safeTheme: WhyBentoArrayTheme = theme === 'light' ? 'light' : 'dark';
  return <WhyBentoArray theme={safeTheme} items={parseItems(items || DEFAULT_ITEMS_JSON)} />;
};

export default declareComponent(WhyBentoArrayWebflow, {
  name: 'Why Bento Array',
  description: 'Bento-style "why us" grid — pass items as a JSON array. Supports dark and light themes.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    items: props.Text({ name: 'Items (JSON array)', defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
