import { SolutionSteps, SolutionStepsTheme } from './SolutionSteps';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const SolutionStepsWebflow = ({
  theme,
  icon,
  title,
  body,
}: {
  theme?: string;
  icon?: string;
  title?: string;
  body?: string;
}) => {
  const safeTheme: SolutionStepsTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <SolutionSteps
      theme={safeTheme}
      icon={icon}
      title={title}
      body={body}
    />
  );
};

export default declareComponent(SolutionStepsWebflow, {
  name: 'Solution Step',
  description: 'Single icon + title + body card — place several side by side in Webflow to build a process or feature breakdown.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    icon: props.Text({ name: 'Icon (Lucide name)', defaultValue: 'shield-check' }),
    title: props.Text({ name: 'Title', defaultValue: 'Regular security testing' }),
    body: props.Text({
      name: 'Body',
      defaultValue: 'Automated security testing was introduced to provide greater visibility of potential vulnerabilities across the IT environment. A small testing device arrived the following day and began producing results within hours, without disrupting normal operations.',
    }),
  },
});
