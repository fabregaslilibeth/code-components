import { CertificationPricing } from './CertificationPricing';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(CertificationPricing, {
  name: 'Certification Pricing',
  description: 'Pricing comparison with Cyber Essentials / Cyber Essentials Plus toggle and three plan cards',
  group: 'Commerce',
  props: {
    tabLabel1: props.Text({
      name: 'First tab label',
      defaultValue: 'Cyber Essentials',
    }),
    tabLabel2: props.Text({
      name: 'Second tab label',
      defaultValue: 'Cyber Essentials Plus',
    }),
    baseUrl: props.Text({
      name: 'Base URL for links',
      defaultValue: '',
    }),
    getStartedUrl: props.Text({
      name: 'Get started link (URL)',
      defaultValue: '',
    }),
    getStartedLabel: props.Text({
      name: 'Get started button label',
      defaultValue: 'Get started',
    }),
  },
});
