import {
  CtaButton,
  CtaButtonSize,
  CtaButtonShape,
  CtaButtonPosition,
} from './CtaButton';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

type WebflowLink = { href?: string; target?: string } | string | undefined;

const linkHref = (link: WebflowLink): string | undefined =>
  (typeof link === 'string' ? link : link?.href) || undefined;

const linkTarget = (link: WebflowLink): string | undefined =>
  typeof link === 'string' ? undefined : link?.target || undefined;

const CtaButtonWebflow = ({
  label,
  link,
  icon,
  showIcon,
  size,
  shape,
  position,
  bgColor,
  textColor,
  hoverColor,
}: {
  label?: string;
  link?: WebflowLink;
  icon?: string;
  showIcon?: boolean;
  size?: string;
  shape?: string;
  position?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
}) => (
  <CtaButton
    label={label}
    href={linkHref(link)}
    target={linkTarget(link)}
    icon={icon}
    showIcon={showIcon ?? true}
    size={size as CtaButtonSize}
    shape={shape as CtaButtonShape}
    position={position as CtaButtonPosition}
    bgColor={bgColor}
    textColor={textColor}
    hoverColor={hoverColor}
  />
);

export default declareComponent(CtaButtonWebflow, {
  name: 'CTA Button',
  description: 'Link button — colour, icon, size, corner shape and per-breakpoint centring as props.',
  group: 'Content',
  props: {
    label: props.Text({
      name: 'Label',
      defaultValue: 'Start certification',
      tooltip: 'Leave empty for an icon-only button.',
      group: 'Content',
    }),
    link: props.Link({
      name: 'Link',
      tooltip: 'Leave empty to render a plain <button> instead of a link.',
      group: 'Content',
    }),
    icon: props.Text({
      name: 'Icon (lucide name)',
      defaultValue: 'arrow-right',
      tooltip: 'Kebab-case, e.g. arrow-right, arrow-up-right, phone. Names ending in "up-right" nudge diagonally on hover.',
      group: 'Content',
    }),
    showIcon: props.Boolean({
      name: 'Show icon',
      defaultValue: true,
      group: 'Content',
    }),

    /* ── variants ── */
    size: props.Variant({
      name: 'Size',
      defaultValue: 'big',
      options: ['small', 'big'],
      group: 'Variants',
    }),
    shape: props.Variant({
      name: 'Shape',
      defaultValue: 'pill',
      options: ['pill', 'rounded', 'square'],
      tooltip: 'pill = fully rounded, rounded = 8px corners, square = sharp corners.',
      group: 'Variants',
    }),
    position: props.Variant({
      name: 'Position',
      defaultValue: 'left',
      options: ['left', 'center', 'tablet-center', 'mobile-l-center', 'mobile-center'],
      tooltip:
        'Where the button sits. The breakpoint options centre it at that width and below: tablet-center ≤991px, mobile-l-center ≤767px, mobile-center ≤479px.',
      group: 'Variants',
    }),

    /* ── colours ── */
    bgColor: props.Text({
      name: 'Background colour',
      defaultValue: '#D92B45',
      group: 'Style',
    }),
    textColor: props.Text({
      name: 'Text colour',
      defaultValue: '#FFFFFF',
      group: 'Style',
    }),
    hoverColor: props.Text({
      name: 'Hover colour',
      defaultValue: '',
      tooltip: 'Leave empty to darken the background automatically.',
      group: 'Style',
    }),
  },
});
