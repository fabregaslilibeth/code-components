import * as React from 'react';
import { featureItemCss } from './FeatureItem.styles';
import { LucideIcon } from '../LucideIcon';

export type FeatureItemVariant = 'check' | 'cross';
export type FeatureItemTooltipPosition = 'top' | 'right' | 'left';

export interface FeatureItemProps {
  variant?: FeatureItemVariant;
  label?: string;
  tooltip?: string;
  tooltipPosition?: FeatureItemTooltipPosition;
  tooltipBg?: string;
  checkColor?: string;
  crossColor?: string;
}

export const FeatureItem = ({
  variant = 'check',
  label = '',
  tooltip = '',
  tooltipPosition = 'top',
  tooltipBg = '',
  checkColor = '',
  crossColor = '',
}: FeatureItemProps) => {
  const tipId = React.useId();
  const labelText = label.trim();
  const tooltipText = tooltip.trim();
  const hasTooltip = tooltipText !== '';

  const className = `fi-root fi-${variant} fi-tip-${tooltipPosition}`;

  const vars: Record<string, string> = {};
  if (checkColor.trim()) vars['--fi-check'] = checkColor.trim();
  if (crossColor.trim()) vars['--fi-cross'] = crossColor.trim();
  if (tooltipBg.trim()) vars['--fi-tip-bg'] = tooltipBg.trim();
  const rootStyle = Object.keys(vars).length
    ? (vars as React.CSSProperties)
    : undefined;

  return (
    <div className={className} style={rootStyle}>
      <style>{featureItemCss}</style>
      <span className="fi-icon">
        {variant === 'check' ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0.545898 7.84058C2.77559 10.2531 4.93746 12.425 7.01559 15.1718C9.27496 10.6781 11.5875 6.16871 15.4031 1.28527L14.375 0.814331C11.1531 4.23121 8.64996 7.46558 6.47496 11.3093C4.96246 9.94683 2.51809 8.01871 1.02559 7.02808L0.545898 7.84058Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <LucideIcon name="x" size={18} strokeWidth={3} />
        )}
      </span>
      {labelText && <span className="fi-label">{labelText}</span>}
      {hasTooltip && (
        <span className="fi-tip-wrap">
          <button type="button" className="fi-tip-btn" aria-describedby={tipId}>
            <LucideIcon name="info" size={16} strokeWidth={1.8} />
            <span className="fi-sr">More information</span>
          </button>
          <span className="fi-tip" role="tooltip" id={tipId}>
            {tooltipText}
          </span>
        </span>
      )}
    </div>
  );
};
