import { Button, ButtonTheme } from './Button';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const ButtonWebflow = ({
  theme,
  label,
  icon,
  href,
  target,
}: {
  theme?: string;
  label?: string;
  icon?: string;
  href?: string;
  target?: string;
}) => {
  const safeTheme: ButtonTheme = theme === 'dark' ? 'dark' : 'light';
  return (
    <Button
      theme={safeTheme}
      label={label}
      icon={icon}
      href={href || undefined}
      target={target || undefined}
    />
  );
};

export default declareComponent(ButtonWebflow, {
  name: 'Button',
  description: 'Pill CTA button — label, icon, link, dark/light theme',
  group: 'Content',
  props: {
    theme:  props.Variant({ name: 'Theme', defaultValue: 'light', options: ['light', 'dark'] }),
    label:  props.Text({ name: 'Label',                   defaultValue: 'Ask about Power BI Training' }),
    icon:   props.Text({ name: 'Icon (lucide name)',       defaultValue: 'arrow-up-right' }),
    href:   props.Text({ name: 'Link URL',                defaultValue: '' }),
    target: props.Text({ name: 'Link target (_blank…)',   defaultValue: '' }),
  },
});
