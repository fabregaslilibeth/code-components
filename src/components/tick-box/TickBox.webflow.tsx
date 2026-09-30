import { TickBox, TickBoxTheme } from './TickBox';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const TickBoxWebflow = ({
  theme,
  label,
  value,
  showTicks,
}: {
  theme?: string;
  label?: string;
  value?: string;
  showTicks?: boolean;
}) => {
  const safeTheme: TickBoxTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <TickBox
      theme={safeTheme}
      label={label}
      value={value}
      showTicks={showTicks ?? true}
    />
  );
};

export default declareComponent(TickBoxWebflow, {
  name: 'Tick Box',
  description: 'Single labelled fact box with corner-tick accents — same visual language as At A Glance, for a one-off stat or fact instead of a grid.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    label: props.Text({ name: 'Label', defaultValue: 'Industry' }),
    value: props.Text({ name: 'Value', defaultValue: 'Housing' }),
    showTicks: props.Boolean({
      name: 'Show corner ticks',
      defaultValue: true,
      tooltip: 'Small cyan corner accents, matching Card, Slider and At A Glance.',
    }),
  },
});
