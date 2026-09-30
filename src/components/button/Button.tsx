import * as React from 'react';
import { buttonCss } from './Button.styles';
import { LucideIcon } from '../LucideIcon';
import { WaveLabel, waveEndMs } from '../WaveLabel';

export type ButtonTheme = 'dark' | 'light';

export interface ButtonProps {
  theme?: ButtonTheme;
  label?: string;
  icon?: string;
  href?: string;
  target?: string;
  /** Background colour at rest. Default is transparent (outline style). */
  bgColor?: string;
  /** Background colour the hover wipe reveals. */
  hoverColor?: string;
}

export const Button = ({
  theme = 'light',
  label = 'Ask about Power BI Training',
  icon = 'arrow-up-right',
  href,
  target,
  bgColor = 'transparent',
  hoverColor = '#10C8E5',
}: ButtonProps) => {
  const iconOnly = !label && !!icon;
  const Tag = href ? 'a' : 'button';

  const elProps = href
    ? { href, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined }
    : { type: 'button' as const };

  return (
    <div
      className={`btn-root btn-${theme}`}
      style={
        {
          '--btn-icon-delay': `${waveEndMs(label)}ms`,
          '--btn-bg': bgColor,
          '--btn-fill': hoverColor,
        } as React.CSSProperties
      }
    >
      <style>{buttonCss}</style>
      <Tag
        className={`btn-el${iconOnly ? ' btn-icon-only' : ''}`}
        aria-label={label || undefined}
        {...elProps}
      >
        {label && <WaveLabel label={label} prefix="btn" />}
        {icon && (
          <span className="btn-icon">
            <LucideIcon name={icon} size={16} strokeWidth={2.2} />
          </span>
        )}
      </Tag>
    </div>
  );
};
