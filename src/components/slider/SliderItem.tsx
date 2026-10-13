import * as React from 'react';
import { SliderIcon } from './SliderIcon';
import { HeadingTag } from '../headingTag';

export interface SliderItemProps {
  icon?: string;
  title?: string;
  body?: string;
  headingTag?: HeadingTag;
}

export const SliderItem: React.FC<SliderItemProps> = ({
  icon = 'layers',
  title = 'Slide title',
  body = '',
  headingTag = 'h3',
}) => {
  const Heading = headingTag as React.ElementType;
  return (
    <div className="sl-card">
      <span className="sl-icon-wrap">
        <SliderIcon name={icon} />
      </span>
      {title && <Heading className="sl-title">{title}</Heading>}
      {body && <p className="sl-body">{body}</p>}
    </div>
  );
};
