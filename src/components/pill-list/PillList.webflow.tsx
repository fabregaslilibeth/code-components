import { PillList, PillItem, PillListTheme } from './PillList';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"icon":"hard-hat","label":"Construction & Building"},
  {"icon":"factory","label":"Manufacturing & Engineering"},
  {"icon":"landmark","label":"Financial Services"},
  {"icon":"building-2","label":"Public Sector & Government"},
  {"icon":"scale","label":"Legal Services"},
  {"icon":"shield","label":"Insurance"},
  {"icon":"utensils","label":"Hospitality & Leisure"},
  {"icon":"users","label":"Recruitment & Staffing"},
  {"icon":"sprout","label":"Agriculture"},
  {"icon":"cpu","label":"Technology & SaaS"},
  {"icon":"stethoscope","label":"Healthcare"},
  {"icon":"graduation-cap","label":"Education"}
]`;

const parseItems = (raw: string): PillItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const PillListWebflow = ({ theme, items }: { theme?: string; items?: string }) => {
  const safeTheme: PillListTheme = theme === 'dark' ? 'dark' : 'light';
  return <PillList theme={safeTheme} items={parseItems(items || DEFAULT_ITEMS_JSON)} />;
};

export default declareComponent(PillListWebflow, {
  name: 'Pill List',
  description: 'Flex-wrap pill list — icon + label. Add "href" to make a pill a link.',
  group: 'Content',
  props: {
    theme: props.Text({ name: 'Theme (light / dark)', defaultValue: 'light' }),
    items: props.Text({ name: 'Items (JSON array)', defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
