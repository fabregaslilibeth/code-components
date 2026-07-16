import { BulletList, BulletItem, BulletListTheme, BulletListAlign } from './BulletList';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"title":"Reduce downtime and recurring IT issues"},
  {"title":"Cut wasted spend on licences and suppliers"},
  {"title":"Get a clear, prioritised IT roadmap"},
  {"title":"Strengthen security and compliance"}
]`;

const parseItems = (raw: string): BulletItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const ALIGN_VALUES: BulletListAlign[] = [
  'left',
  'center',
  'tablet-center',
  'mobile-l-center',
  'mobile-center',
];

const BulletListWebflow = ({
  theme,
  align,
  icon,
  iconColor,
  textColor,
  items,
}: {
  theme?: string;
  align?: string;
  icon?: string;
  iconColor?: string;
  textColor?: string;
  items?: string;
}) => {
  const safeTheme: BulletListTheme = theme === 'light' ? 'light' : 'dark';
  const safeAlign: BulletListAlign = ALIGN_VALUES.includes(align as BulletListAlign)
    ? (align as BulletListAlign)
    : 'left';

  return (
    <BulletList
      theme={safeTheme}
      align={safeAlign}
      icon={icon || 'check'}
      iconColor={iconColor || undefined}
      textColor={textColor || undefined}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
    />
  );
};

export default declareComponent(BulletListWebflow, {
  name: 'Bullet List',
  description: 'Icon-bulleted list with optional body text. Supports dark/light and responsive alignment.',
  group: 'Content',
  props: {
    theme: props.Variant({
      name: 'Theme',
      defaultValue: 'dark',
      options: ['dark', 'light'],
    }),
    align: props.Variant({
      name: 'Alignment',
      defaultValue: 'left',
      options: ['left', 'center', 'tablet-center', 'mobile-l-center', 'mobile-center'],
    }),
    icon: props.Text({ name: 'Icon (Lucide name)', defaultValue: 'check' }),
    iconColor: props.Text({ name: 'Icon colour (hex / CSS)', defaultValue: '' }),
    textColor: props.Text({ name: 'Text colour (hex / CSS)', defaultValue: '' }),
    items: props.Text({ name: 'Items (JSON array)', defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
