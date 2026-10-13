import { CompareCard, CompareCardTheme } from './CompareCard';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import { HEADING_TAGS, toHeadingTag } from '../headingTag';

const CompareCardWebflow = ({
  theme, title, titleColor,
  proIcon, proLabel, proDesc, proColor, proDescColor,
  conIcon, conLabel, conDesc, conColor, conLabelColor, conDescColor,
  headingTag,
}: {
  theme?: string;
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
  headingTag?: string;
}) => (
  <CompareCard
    theme={(theme === 'dark' ? 'dark' : 'light') as CompareCardTheme}
    title={title}
    titleColor={titleColor}
    proIcon={proIcon}
    proLabel={proLabel}
    proDesc={proDesc}
    proColor={proColor}
    proDescColor={proDescColor}
    conIcon={conIcon}
    conLabel={conLabel}
    conDesc={conDesc}
    conColor={conColor}
    conLabelColor={conLabelColor}
    conDescColor={conDescColor}
    headingTag={toHeadingTag(headingTag, 'h3')}
  />
);

export default declareComponent(CompareCardWebflow, {
  name: 'Compare Card',
  description: 'Pro vs con comparison card with icons and custom colours',
  group: 'Content',
  props: {
    theme:        props.Variant({ name: 'Theme', defaultValue: 'light', options: ['light', 'dark'] }),
    title:        props.Text({ name: 'Title',                    defaultValue: 'Single source of truth' }),
    titleColor:   props.Text({ name: 'Title colour',             defaultValue: '' }),
    proIcon:      props.Text({ name: 'Pro icon',                 defaultValue: 'check-circle' }),
    proLabel:     props.Text({ name: 'Pro label',                defaultValue: 'Power BI' }),
    proDesc:      props.Text({ name: 'Pro description',          defaultValue: 'One governed data model' }),
    proColor:     props.Text({ name: 'Pro colour',               defaultValue: '#10C8E5' }),
    proDescColor: props.Text({ name: 'Pro description colour',   defaultValue: '' }),
    conIcon:      props.Text({ name: 'Con icon',                 defaultValue: 'x-circle' }),
    conLabel:     props.Text({ name: 'Con label',                defaultValue: 'Spreadsheets' }),
    conDesc:      props.Text({ name: 'Con description',          defaultValue: 'Many conflicting spreadsheet versions' }),
    conColor:     props.Text({ name: 'Con colour',               defaultValue: '#ef4444' }),
    conLabelColor: props.Text({ name: 'Con label colour',        defaultValue: '' }),
    conDescColor: props.Text({ name: 'Con description colour',   defaultValue: '' }),
    headingTag:   props.Variant({ name: 'Heading level', defaultValue: 'h3', options: HEADING_TAGS }),
  },
});
