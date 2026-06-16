import * as React from 'react';
import { headerGroupCss } from './HeaderGroup.styles';

export interface HeaderGroupProps {
  eyebrow?: string;
  showEyebrow?: boolean;
  titleBefore?: string;
  titleGrad?: string;
  titleAfter?: string;
  titleColor?: string;
  intro?: string;
  introColor?: string;
  eyebrowColor?: string;
  maxWidth?: string;
}

export const HeaderGroup = ({
  eyebrow = 'Why us',
  showEyebrow = true,
  titleBefore = 'Why choose us for',
  titleGrad = 'Power BI?',
  titleAfter = '',
  titleColor = '#001b41',
  intro = '',
  introColor,
  eyebrowColor,
  maxWidth = '760px',
}: HeaderGroupProps) => {
  const rootStyle: React.CSSProperties = { maxWidth };

  return (
    <div className="hg-root" style={rootStyle}>
      <style>{headerGroupCss}</style>
      {showEyebrow && eyebrow && (
        <p
          className="hg-eyebrow"
          style={eyebrowColor ? { color: eyebrowColor } as React.CSSProperties : undefined}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="hg-heading" style={{ color: titleColor }}>
        {titleBefore && <span>{titleBefore} </span>}
        {titleGrad && <span className="hg-grad">{titleGrad}</span>}
        {titleAfter && <span> {titleAfter}</span>}
      </h2>
      {intro && (
        <p
          className="hg-intro"
          style={introColor ? { color: introColor, opacity: 1 } : { color: titleColor }}
        >
          {intro}
        </p>
      )}
    </div>
  );
};
