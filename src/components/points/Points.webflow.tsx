import { Points, PointsTheme, PointItem } from './Points';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_POINTS_JSON = `[
  {"icon":"workflow","title":"Automated workflows","body":"Trigger Power Automate flows from any action in your app."},
  {"icon":"bell","title":"Approvals & alerts","body":"Route approvals and alerts straight into Microsoft Teams."},
  {"icon":"refresh-cw","title":"Always in sync","body":"Keep data consistent across every connected system."}
]`;

const parsePoints = (raw: string): PointItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const PointsWebflow = ({
  theme,
  title,
  body,
  points,
  tickColor,
}: {
  theme?: string;
  title?: string;
  body?: string;
  points?: string;
  tickColor?: string;
}) => {
  const safeTheme: PointsTheme = theme === 'light' ? 'light' : 'dark';
  const safePoints = parsePoints(points || DEFAULT_POINTS_JSON);
  return <Points theme={safeTheme} title={title} body={body} points={safePoints} tickColor={tickColor} />;
};

export default declareComponent(PointsWebflow, {
  name: 'Points',
  description: 'Feature card with title, body and a grid of icon points',
  group: 'Content',
  props: {
    theme:  props.Text({ name: 'Theme (dark / light)', defaultValue: 'dark' }),
    title:  props.Text({ name: 'Title',                defaultValue: 'Automate the apps you build' }),
    body:   props.Text({ name: 'Body',                 defaultValue: 'Pair Power Apps with Power Automate and Microsoft Teams to handle approvals, notifications and back-end tasks automatically.' }),
    points:    props.Text({ name: 'Points (JSON array)',  defaultValue: DEFAULT_POINTS_JSON }),
    tickColor: props.Text({ name: 'Tick colour',          defaultValue: '' }),
  },
});
