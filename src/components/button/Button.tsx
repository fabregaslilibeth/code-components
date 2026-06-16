import * as React from 'react';
import { buttonCss } from './Button.styles';
import { LucideIcon } from '../LucideIcon';

export type ButtonTheme = 'dark' | 'light';

export interface ButtonProps {
  theme?: ButtonTheme;
  label?: string;
  icon?: string;
  href?: string;
  target?: string;
}

export const Button = ({
  theme = 'light',
  label = 'Ask about Power BI Training',
  icon = 'arrow-up-right',
  href,
  target,
}: ButtonProps) => {
  const iconOnly = !label && !!icon;
  const Tag = href ? 'a' : 'button';

  const elProps = href
    ? { href, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined }
    : { type: 'button' as const };

  return (
    <div className={`btn-root btn-${theme}`}>
      <style>{buttonCss}</style>
      <Tag
        className={`btn-el${iconOnly ? ' btn-icon-only' : ''}`}
        {...elProps}
      >
        {label && <span className="btn-label">{label}</span>}
        {icon && (
          <span className="btn-icon">
            <LucideIcon name={icon} size={16} strokeWidth={2.2} />
          </span>
        )}
      </Tag>
    </div>
  );
};
