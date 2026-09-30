import { StatBox, StatBoxTheme } from './StatBox';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const StatBoxWebflow = ({
  theme,
  value,
  label,
  showTicks,
}: {
  theme?: string;
  value?: string;
  label?: string;
  showTicks?: boolean;
}) => {
  const safeTheme: StatBoxTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <StatBox
      theme={safeTheme}
      value={value}
      label={label}
      showTicks={showTicks ?? true}
    />
  );
};

export default declareComponent(StatBoxWebflow, {
  name: 'Stat Box',
  description: 'Single big-number stat box with corner-tick accents — same visual language as Results Stats, for a one-off number instead of a grid.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    value: props.Text({ name: 'Value', defaultValue: '21' }),
    label: props.Text({ name: 'Label', defaultValue: 'Security findings identified' }),
    showTicks: props.Boolean({
      name: 'Show corner ticks',
      defaultValue: true,
      tooltip: 'Small cyan corner accents, matching Results Stats, At A Glance and Tick Box.',
    }),
  },
});
