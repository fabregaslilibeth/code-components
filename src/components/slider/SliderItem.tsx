import * as React from 'react';
import { SliderIcon } from './SliderIcon';

export interface SliderItemProps {
  icon?: string;
  title?: string;
  body?: string;
}

export const SliderItem: React.FC<SliderItemProps> = ({
  icon = 'layers',
  title = 'Slide title',
  body = '',
}) => (
  <div className="sl-card">
    <span className="sl-icon-wrap">
      <SliderIcon name={icon} />
    </span>
    {title && <h3 className="sl-title">{title}</h3>}
    {body && <p className="sl-body">{body}</p>}
  </div>
);
