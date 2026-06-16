import { Marquee, MarqueeTheme, MarqueeDirection, MarqueeItem } from './Marquee';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"icon":"bar-chart-2","label":"Google Analytics"},
  {"icon":"settings-2","label":"ServiceNow"},
  {"icon":"headphones","label":"Salesforce"},
  {"icon":"briefcase","label":"Dynamics 365"},
  {"icon":"cloud","label":"Azure & Azure DevOps"},
  {"icon":"database","label":"SQL & databases"},
  {"icon":"layout-dashboard","label":"Power BI"},
  {"icon":"file-spreadsheet","label":"SharePoint"}
]`;

const parseItems = (raw: string): MarqueeItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const MarqueeWebflow = ({
  theme,
  direction,
  duration,
  items,
}: {
  theme?: string;
  direction?: string;
  duration?: string;
  items?: string;
}) => {
  const safeTheme: MarqueeTheme = theme === 'dark' ? 'dark' : 'light';
  const safeDirection: MarqueeDirection = direction === 'right' ? 'right' : 'left';
  return (
    <Marquee
      theme={safeTheme}
      direction={safeDirection}
      duration={duration}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
    />
  );
};

export default declareComponent(MarqueeWebflow, {
  name: 'Marquee',
  description: 'Infinite scrolling pill strip — icon + label items',
  group: 'Content',
  props: {
    theme:     props.Text({ name: 'Theme (light / dark)',       defaultValue: 'light' }),
    direction: props.Text({ name: 'Direction (left / right)',   defaultValue: 'left' }),
    duration:  props.Text({ name: 'Speed (CSS duration)',       defaultValue: '30s' }),
    items:     props.Text({ name: 'Items (JSON array)',         defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
