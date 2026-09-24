import {
  FeatureItem,
  FeatureItemVariant,
  FeatureItemTooltipPosition,
} from './FeatureItem';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const VARIANTS: FeatureItemVariant[] = ['check', 'cross'];
const TOOLTIP_POSITIONS: FeatureItemTooltipPosition[] = ['top', 'right', 'left'];

const DEFAULT_LABEL = 'Protecting Microsoft 365, email and cloud applications.';
const DEFAULT_TOOLTIP =
  'Included on this plan. Covers mailboxes, OneDrive, SharePoint and connected cloud apps.';

const FeatureItemWebflow = ({
  variant,
  label,
  tooltip,
  tooltipPosition,
  tooltipBg,
  checkColor,
  crossColor,
}: {
  variant?: string;
  label?: string;
  tooltip?: string;
  tooltipPosition?: string;
  tooltipBg?: string;
  checkColor?: string;
  crossColor?: string;
}) => {
  const safeVariant: FeatureItemVariant =
    VARIANTS.find((v) => v === variant) || 'check';
  const safeTooltipPosition: FeatureItemTooltipPosition =
    TOOLTIP_POSITIONS.find((p) => p === tooltipPosition) || 'top';

  return (
    <FeatureItem
      variant={safeVariant}
      label={label}
      tooltip={tooltip}
      tooltipPosition={safeTooltipPosition}
      tooltipBg={tooltipBg}
      checkColor={checkColor}
      crossColor={crossColor}
    />
  );
};

export default declareComponent(FeatureItemWebflow, {
  name: 'Feature Item',
  description:
    'One comparison-table row: a check or cross icon, a label, and an optional tooltip. Check shows black text, cross shows grey.',
  group: 'Content',
  props: {
    variant: props.Variant({
      name: 'Variant',
      defaultValue: 'check',
      options: VARIANTS,
      tooltip: 'check = green tick with black text. cross = red cross with grey text.',
    }),
    tooltipPosition: props.Variant({
      name: 'Tooltip position',
      defaultValue: 'top',
      options: TOOLTIP_POSITIONS,
    }),
    label: props.Text({ name: 'Name', group: 'Data', defaultValue: DEFAULT_LABEL }),
    tooltip: props.Text({ name: 'Tooltip', group: 'Data', defaultValue: DEFAULT_TOOLTIP }),
    checkColor: props.Text({
      name: 'Check icon',
      group: 'Colors',
      defaultValue: '#00FF00',
    }),
    crossColor: props.Text({
      name: 'Cross icon',
      group: 'Colors',
      defaultValue: '#EF4444',
    }),
    tooltipBg: props.Text({
      name: 'Tooltip background',
      group: 'Colors',
      defaultValue: '#0A1325',
    }),
  },
});
