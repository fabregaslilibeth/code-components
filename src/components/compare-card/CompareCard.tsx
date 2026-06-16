import * as React from 'react';
import { compareCardCss } from './CompareCard.styles';
import { LucideIcon } from '../LucideIcon';

export type CompareCardTheme = 'dark' | 'light';

export interface CompareCardProps {
  theme?: CompareCardTheme;
  title?: string;
  titleColor?: string;
  proIcon?: string;
  proLabel?: string;
  proDesc?: string;
  proColor?: string;
  proDescColor?: string;
  conIcon?: string;
  conLabel?: string;
  conDesc?: string;
  conColor?: string;
  conLabelColor?: string;
  conDescColor?: string;
}

export const CompareCard = ({
  theme = 'light',
  title = 'Single source of truth',
  titleColor,
  proIcon = 'check-circle',
  proLabel = 'Power BI',
  proDesc = 'One governed data model',
  proColor = '#10C8E5',
  proDescColor,
  conIcon = 'x-circle',
  conLabel = 'Spreadsheets',
  conDesc = 'Many conflicting spreadsheet versions',
  conColor = '#ef4444',
  conLabelColor,
  conDescColor,
}: CompareCardProps) => {
  const cardStyle = {
    '--cc-pro-color': proColor,
    '--cc-con-color': conColor,
    ...(titleColor ? { '--cc-title': titleColor } : {}),
    ...(proDescColor ? { '--cc-pro-desc-color': proDescColor } : {}),
    ...(conLabelColor ? { '--cc-con-label-color': conLabelColor } : {}),
    ...(conDescColor ? { '--cc-con-desc-color': conDescColor } : {}),
  } as React.CSSProperties;

  return (
    <div className={`cc-root cc-${theme}`}>
      <style>{compareCardCss}</style>
      <div className="cc-card" style={cardStyle}>
        <h3 className="cc-title">{title}</h3>

        <div className="cc-row cc-row--pro">
          <span className="cc-row-icon">
            <LucideIcon name={proIcon} size={16} strokeWidth={2} />
          </span>
          <div className="cc-row-text">
            <p className="cc-row-label">{proLabel}</p>
            <p className="cc-row-desc">{proDesc}</p>
          </div>
        </div>

        <div className="cc-row cc-row--con">
          <span className="cc-row-icon">
            <LucideIcon name={conIcon} size={16} strokeWidth={2} />
          </span>
          <div className="cc-row-text">
            <p className="cc-row-label">{conLabel}</p>
            <p className="cc-row-desc">{conDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
