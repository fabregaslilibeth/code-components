import { NumberedList, NumberedListItem, NumberedListTheme } from './NumberedList';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import { HEADING_TAGS, toHeadingTag } from '../headingTag';

const DEFAULT_ITEMS_JSON = `[
  {"icon":"compass","title":"Power Apps consultancy (UK)","body":"Strategy, scoping and roadmaps from a UK Power Platform team."},
  {"icon":"code-2","title":"Custom app development","body":"Canvas and model-driven app development built around your process."},
  {"icon":"layers","title":"App modernisation","body":"Replace spreadsheets, paper and legacy tools with secure apps."},
  {"icon":"plug","title":"Integration & Dataverse","body":"Connect Microsoft 365, SharePoint, SQL and Dataverse securely."},
  {"icon":"graduation-cap","title":"Training & enablement","body":"Hands-on training so your team can own and extend your apps."},
  {"icon":"shield-check","title":"Support & health checks","body":"Ongoing support, optimisation and security reviews."}
]`;

const parseItems = (raw: string): NumberedListItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const NumberedListWebflow = ({
  theme,
  activeIndex,
  items,
  headingTag,
}: {
  theme?: string;
  activeIndex?: string;
  items?: string;
  headingTag?: string;
}) => {
  const safeTheme: NumberedListTheme = theme === 'dark' ? 'dark' : 'light';
  const safeActive = activeIndex ? parseInt(activeIndex, 10) - 1 : undefined;
  return (
    <NumberedList
      theme={safeTheme}
      activeIndex={isNaN(safeActive as number) ? undefined : safeActive}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
      headingTag={toHeadingTag(headingTag, 'h3')}
    />
  );
};

export default declareComponent(NumberedListWebflow, {
  name: 'Numbered List',
  description: 'Numbered rows with icon, title and body — light or dark theme',
  group: 'Content',
  props: {
    theme:       props.Variant({ name: 'Theme', defaultValue: 'light', options: ['light', 'dark'] }),
    activeIndex: props.Text({ name: 'Active row (1-based, optional)', defaultValue: '1' }),
    items:       props.Text({ name: 'Items (JSON array)',           defaultValue: DEFAULT_ITEMS_JSON }),
    headingTag:  props.Variant({ name: 'Heading level', defaultValue: 'h3', options: HEADING_TAGS }),
  },
});
