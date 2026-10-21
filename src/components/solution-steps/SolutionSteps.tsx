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
  imageSrc?: string;
}

export const SolutionSteps = ({
  theme = 'dark',
  icon = 'shield-check',
  title = 'Regular security testing',
  body = 'Automated security testing was introduced to provide greater visibility of potential vulnerabilities across the IT environment. A small testing device arrived the following day and began producing results within hours, without disrupting normal operations.',
  headingTag = 'h3',
  imageSrc,
}: SolutionStepsProps) => {
  const Heading = headingTag as React.ElementType;
  return (
    <div className={`ss-root ss-${theme}`}>
      <style>{solutionStepsCss}</style>
      <article className={imageSrc ? 'ss-step ss-step--photo' : 'ss-step'}>
        {imageSrc && (
          // decorative: the card's title and body carry the meaning
          <div className="ss-photo" aria-hidden>
            <img src={imageSrc} alt="" loading="lazy" decoding="async" />
          </div>
        )}
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
