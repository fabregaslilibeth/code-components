import { SolutionSteps, SolutionStepsTheme } from './SolutionSteps';
import { HEADING_TAGS, toHeadingTag } from '../headingTag';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const SolutionStepsWebflow = ({
  theme,
  icon,
  title,
  body,
  headingTag,
  image,
}: {
  theme?: string;
  icon?: string;
  title?: string;
  body?: string;
  headingTag?: string;
  image?: { src?: string; alt?: string };
}) => {
  const safeTheme: SolutionStepsTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <SolutionSteps
      theme={safeTheme}
      icon={icon}
      title={title}
      body={body}
      headingTag={toHeadingTag(headingTag, 'h3')}
      imageSrc={image?.src || undefined}
    />
  );
};

export default declareComponent(SolutionStepsWebflow, {
  name: 'Solution Step',
  description: 'Single icon + title + body card. Place several side by side in Webflow to build a process or feature breakdown. Optional background image turns it into a photo tile.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    icon: props.Text({ name: 'Icon (Lucide name)', defaultValue: 'shield-check' }),
    title: props.Text({ name: 'Title', defaultValue: 'Regular security testing' }),
    headingTag: props.Variant({ name: 'Heading level', defaultValue: 'h3', options: HEADING_TAGS }),
    image: props.Image({ name: 'Background image' }),
    body: props.Text({
      name: 'Body',
      defaultValue: 'Automated security testing was introduced to provide greater visibility of potential vulnerabilities across the IT environment. A small testing device arrived the following day and began producing results within hours, without disrupting normal operations.',
    }),
  },
});
