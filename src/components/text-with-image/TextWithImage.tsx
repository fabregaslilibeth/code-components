import * as React from 'react';
import { textWithImageCss } from './TextWithImage.styles';

export type TextWithImagePlacement = 'left' | 'right';
export type TextWithImageMobilePlacement = 'auto' | 'top' | 'bottom';
export type TextWithImageMobileTextAlign = 'left' | 'center';
export type TextWithImageHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface TextWithImageProps {
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  placement?: TextWithImagePlacement;
  mobilePlacement?: TextWithImageMobilePlacement;
  mobileTextAlign?: TextWithImageMobileTextAlign;
  headingTag?: TextWithImageHeadingTag;
}

export const TextWithImage = ({
  imageSrc = '',
  imageAlt = '',
  eyebrow = '',
  title = '',
  body = '',
  placement = 'left',
  mobilePlacement = 'auto',
  mobileTextAlign = 'left',
  headingTag = 'h3',
}: TextWithImageProps) => {
  const src = imageSrc.trim();
  const eyebrowText = eyebrow.trim();
  const titleText = title.trim();
  const bodyText = body.trim();

  const hasImage = src !== '';
  const hasCopy = eyebrowText !== '' || titleText !== '' || bodyText !== '';

  if (!hasImage && !hasCopy) return null;

  // 'auto' follows the desktop side: image on the left stacks on top, on the
  // right stacks below — so the stacked order matches the reading order.
  const resolvedMobile =
    mobilePlacement === 'auto'
      ? placement === 'left'
        ? 'top'
        : 'bottom'
      : mobilePlacement;

  const Heading = headingTag as React.ElementType;

  const className = [
    'twi-root',
    `twi-img-${placement}`,
    `twi-mob-${resolvedMobile}`,
    `twi-mob-text-${mobileTextAlign}`,
    hasImage && hasCopy ? '' : 'twi-solo',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <style>{textWithImageCss}</style>
      {hasImage && (
        <div className="twi-media">
          <img
            src={src}
            alt={imageAlt.trim() || titleText}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      {hasCopy && (
        <div className="twi-copy">
          {eyebrowText && <p className="twi-eyebrow">{eyebrowText}</p>}
          {titleText && <Heading className="twi-title">{titleText}</Heading>}
          {bodyText && <p className="twi-body">{bodyText}</p>}
        </div>
      )}
    </div>
  );
};
