import * as React from 'react';
import { headerGroupCss } from './HeaderGroup.styles';

export type HeaderGroupHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeaderGroupProps {
  eyebrow?: string;
  showEyebrow?: boolean;
  titleBefore?: string;
  titleGrad?: string;
  titleAfter?: string;
  headingTag?: HeaderGroupHeadingTag;
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
  headingTag = 'h3',
  titleColor = '#001b41',
  intro = '',
  introColor,
  eyebrowColor,
  maxWidth = '760px',
}: HeaderGroupProps) => {
  const rootStyle: React.CSSProperties = { maxWidth };
  const Heading = headingTag as React.ElementType;

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
      <Heading className="hg-heading" style={{ color: titleColor }}>
        {titleBefore && <span>{titleBefore} </span>}
        {titleGrad && <span className="hg-grad">{titleGrad}</span>}
        {titleAfter && <span> {titleAfter}</span>}
      </Heading>
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
