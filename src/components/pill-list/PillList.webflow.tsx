import { PillList, PillItem, PillListTheme, PillListAlign } from './PillList';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"icon":"hard-hat","label":"Construction & building"},
  {"icon":"factory","label":"Manufacturing & engineering"},
  {"icon":"landmark","label":"Financial services"},
  {"icon":"building-2","label":"Public sector & government"},
  {"icon":"scale","label":"Legal services"},
  {"icon":"shield","label":"Insurance"},
  {"icon":"utensils","label":"Hospitality & leisure"},
  {"icon":"users","label":"Recruitment & staffing"},
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

const ALIGN_OPTIONS: PillListAlign[] = [
  'left',
  'center',
  'tablet center',
  'mobile L center',
  'mobile center',
];

const PillListWebflow = ({
  theme,
  align,
  items,
}: {
  theme?: string;
  align?: string;
  items?: string;
}) => {
  const safeTheme: PillListTheme = theme === 'dark' ? 'dark' : 'light';
  const safeAlign: PillListAlign = ALIGN_OPTIONS.find((o) => o === align) || 'left';
  return (
    <PillList
      theme={safeTheme}
      align={safeAlign}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
    />
  );
};

export default declareComponent(PillListWebflow, {
  name: 'Pill List',
  description: 'Flex-wrap pill list — icon + label. Align left or centred per breakpoint. Add "href" to make a pill a link.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'light', options: ['light', 'dark'] }),
    align: props.Variant({
      name: 'Align',
      defaultValue: 'left',
      options: ALIGN_OPTIONS,
    }),
    items: props.Text({ name: 'Items (JSON array)', defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
