import { CtaBanner } from './CtaBanner';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const CtaBannerWebflow = ({
  eyebrow, headingBefore, headingHighlight,
  phone, phoneHref, email,
  primaryLabel, primaryHref,
  secondaryLabel, secondaryHref,
}: {
  eyebrow?: string;
  headingBefore?: string; headingHighlight?: string;
  phone?: string; phoneHref?: string; email?: string;
  primaryLabel?: string; primaryHref?: string;
  secondaryLabel?: string; secondaryHref?: string;
}) => (
  <CtaBanner
    eyebrow={eyebrow}
    headingBefore={headingBefore}
    headingHighlight={headingHighlight}
    phone={phone}
    phoneHref={phoneHref}
    email={email}
    primaryLabel={primaryLabel}
    primaryHref={primaryHref}
    secondaryLabel={secondaryLabel}
    secondaryHref={secondaryHref}
  />
);

export default declareComponent(CtaBannerWebflow, {
  name: 'CTA Banner',
  description: 'Full-width blue gradient CTA banner with heading, contacts and two action buttons',
  group: 'Content',
  props: {
    eyebrow:          props.Text({ name: 'Eyebrow label',             defaultValue: 'Ready to automate?' }),
    headingBefore:    props.Text({ name: 'Heading (first line)',       defaultValue: 'Put your admin' }),
    headingHighlight: props.Text({ name: 'Heading highlight (second line)', defaultValue: 'on autopilot.' }),
    phone:            props.Text({ name: 'Phone display',              defaultValue: '0333 370 7000' }),
    phoneHref:        props.Text({ name: 'Phone href',                 defaultValue: 'tel:03333707000' }),
    email:            props.Text({ name: 'Email',                      defaultValue: 'hello@intouchtech.co.uk' }),
    primaryLabel:     props.Text({ name: 'Primary button label',       defaultValue: 'Book a free automation audit' }),
    primaryHref:      props.Text({ name: 'Primary button URL',         defaultValue: '#contact' }),
    secondaryLabel:   props.Text({ name: 'Secondary button label',     defaultValue: 'Talk to an expert' }),
    secondaryHref:    props.Text({ name: 'Secondary button URL',       defaultValue: 'tel:03333707000' }),
  },
});
