import { ServiceList, ServiceItem, ServiceListTheme } from './ServiceList';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"logo":"power-bi","title":"Power BI","body":"Dashboards that drive decisions","url":"#"},
  {"logo":"power-automate","title":"Power Automate","body":"Automate the admin that wastes hours","url":"#"},
  {"logo":"teams","title":"Microsoft Teams","body":"Make Teams work for your business","url":"#"},
  {"logo":"copilot","title":"Microsoft Copilot","body":"Get Copilot-ready, securely","url":"#"},
  {"logo":"m365","title":"Microsoft 365","body":"Secure, modern workplace foundations","url":"#"},
  {"logo":"managed-it","title":"Managed IT","body":"One partner for support & security","url":"#"}
]`;

const parseItems = (raw: string): ServiceItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const ServiceListWebflow = ({
  theme,
  items,
}: {
  theme?: string;
  items?: string;
}) => {
  const safeTheme: ServiceListTheme = theme === 'dark' ? 'dark' : 'light';
  return (
    <ServiceList
      theme={safeTheme}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
    />
  );
};

export default declareComponent(ServiceListWebflow, {
  name: 'Service List',
  description: 'Numbered clickable service rows with logo, title, body and arrow',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'light', options: ['light', 'dark'] }),
    items: props.Text({ name: 'Items (JSON array)',   defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
