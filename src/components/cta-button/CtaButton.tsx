import * as React from 'react';
import { ctaButtonCss } from './CtaButton.styles';
import { LucideIcon } from '../LucideIcon';

/** Corner style. "pill" is fully rounded, "square" has no radius. */
export type CtaButtonShape = 'pill' | 'rounded' | 'square';

export type CtaButtonSize = 'small' | 'big';

/**
 * Where the button sits in its parent.
 * The three breakpoint values centre it at that Webflow breakpoint *and below*,
 * and leave it left-aligned above it.
 */
export type CtaButtonPosition =
  | 'left'
  | 'center'
  | 'tablet-center'
  | 'mobile-l-center'
  | 'mobile-center';

export interface CtaButtonProps {
  label?: string;
  href?: string;
  target?: string;

  icon?: string;
  showIcon?: boolean;

  size?: CtaButtonSize;
  shape?: CtaButtonShape;
  position?: CtaButtonPosition;

  bgColor?: string;
  textColor?: string;
  /** Optional explicit hover colour. Empty = darken the background automatically. */
  hoverColor?: string;
}

const SIZES: readonly CtaButtonSize[] = ['small', 'big'];
const SHAPES: readonly CtaButtonShape[] = ['pill', 'rounded', 'square'];
const POSITIONS: readonly CtaButtonPosition[] = [
  'left',
  'center',
  'tablet-center',
  'mobile-l-center',
  'mobile-center',
];

const ICON_SIZE: Record<CtaButtonSize, number> = { small: 14, big: 18 };

export const CtaButton = ({
  label = 'Get in touch',
  href,
  target,

  icon = 'arrow-right',
  showIcon = true,

  size = 'big',
  shape = 'pill',
  position = 'left',

  bgColor = '#D92B45',
  textColor = '#FFFFFF',
  hoverColor = '',
}: CtaButtonProps) => {
  const safeSize: CtaButtonSize = SIZES.includes(size) ? size : 'big';
  const safeShape: CtaButtonShape = SHAPES.includes(shape) ? shape : 'pill';
  const safePosition: CtaButtonPosition = POSITIONS.includes(position) ? position : 'left';

  const withIcon = showIcon && !!icon;
  const iconOnly = !label && withIcon;
  const diagonal = withIcon && icon.includes('up-right');

  const Tag = href ? 'a' : 'button';
  const elProps = href
    ? { href, target: target || undefined, rel: target === '_blank' ? 'noopener noreferrer' : undefined }
    : { type: 'button' as const };

  const classes = [
    'cb-el',
    `cb-size-${safeSize}`,
    `cb-shape-${safeShape}`,
    iconOnly ? 'cb-icon-only' : '',
    diagonal ? 'cb-diag' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={`cb-root cb-pos-${safePosition}`}
      style={
        {
          '--cb-bg': bgColor,
          '--cb-text': textColor,
          '--cb-bg-hover': hoverColor || `color-mix(in srgb, ${bgColor} 88%, #000)`,
          '--cb-glow': `color-mix(in srgb, ${bgColor} 30%, transparent)`,
        } as React.CSSProperties
      }
    >
      <style>{ctaButtonCss}</style>
      <Tag className={classes} {...elProps}>
        {label && <span className="cb-label">{label}</span>}
        {withIcon && (
          <span className="cb-icon">
            <LucideIcon name={icon} size={ICON_SIZE[safeSize]} strokeWidth={2.4} />
          </span>
        )}
      </Tag>
    </div>
  );
};
