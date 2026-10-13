import * as React from 'react';
import { solutionStepsCss } from './SolutionSteps.styles';
import { LucideIcon } from '../LucideIcon';
import { HeadingTag } from '../headingTag';

export type SolutionStepsTheme = 'dark' | 'light';

export interface SolutionStepsProps {
  theme?: SolutionStepsTheme;
  icon?: string;
  title?: string;
  body?: string;
  headingTag?: HeadingTag;
}

export const SolutionSteps = ({
  theme = 'dark',
  icon = 'shield-check',
  title = 'Regular security testing',
  body = 'Automated security testing was introduced to provide greater visibility of potential vulnerabilities across the IT environment. A small testing device arrived the following day and began producing results within hours, without disrupting normal operations.',
  headingTag = 'h3',
}: SolutionStepsProps) => {
  const Heading = headingTag as React.ElementType;
  return (
    <div className={`ss-root ss-${theme}`}>
      <style>{solutionStepsCss}</style>
      <article className="ss-step">
        {icon && (
          <span className="ss-icon">
            <LucideIcon name={icon} size={20} strokeWidth={1.7} />
          </span>
        )}
        {title && <Heading className="ss-title">{title}</Heading>}
        {body && <p className="ss-body">{body}</p>}
      </article>
    </div>
  );
};
