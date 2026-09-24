import { HeaderGroup, HeaderGroupHeadingTag } from './HeaderGroup';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const HEADING_TAGS: HeaderGroupHeadingTag[] = ['h1', 'h2', 'h3', 'h4', 'h5'];

const HeaderGroupWebflow = ({
  eyebrow,
  showEyebrow,
  titleBefore,
  titleGrad,
  titleAfter,
  headingTag,
  titleColor,
  intro,
  introColor,
  eyebrowColor,
  maxWidth,
}: {
  eyebrow?: string;
  showEyebrow?: boolean;
  titleBefore?: string;
  titleGrad?: string;
  titleAfter?: string;
  headingTag?: string;
  titleColor?: string;
  intro?: string;
  introColor?: string;
  eyebrowColor?: string;
  maxWidth?: string;
}) => {
  const safeHeadingTag: HeaderGroupHeadingTag =
    HEADING_TAGS.find((t) => t === headingTag) || 'h3';

  return (
    <HeaderGroup
      eyebrow={eyebrow}
      showEyebrow={showEyebrow}
      titleBefore={titleBefore}
      titleGrad={titleGrad}
      titleAfter={titleAfter}
      headingTag={safeHeadingTag}
      titleColor={titleColor}
      intro={intro}
      introColor={introColor}
      eyebrowColor={eyebrowColor}
      maxWidth={maxWidth}
    />
  );
};

export default declareComponent(HeaderGroupWebflow, {
  name: 'Header Group',
  description: 'Section heading with optional eyebrow, gradient highlight, and intro paragraph',
  group: 'Content',
  props: {
    eyebrow: props.Text({ name: 'Eyebrow text', defaultValue: 'Why us' }),
    showEyebrow: props.Boolean({ name: 'Show eyebrow', defaultValue: true }),
    titleBefore: props.Text({ name: 'Heading (before gradient)', defaultValue: 'Why choose us for' }),
    titleGrad: props.Text({ name: 'Heading gradient part', defaultValue: 'Power BI?' }),
    titleAfter: props.Text({ name: 'Heading (after gradient)', defaultValue: '' }),
    headingTag: props.Variant({
      name: 'Heading level',
      defaultValue: 'h3',
      options: HEADING_TAGS,
    }),
    titleColor: props.Text({ name: 'Heading colour', defaultValue: '#001b41' }),
    intro: props.Text({ name: 'Intro paragraph', defaultValue: '' }),
    introColor: props.Text({ name: 'Intro colour (optional, overrides heading colour)', defaultValue: '' }),
    eyebrowColor: props.Text({ name: 'Eyebrow colour (optional, overrides default cyan)', defaultValue: '' }),
    maxWidth: props.Text({ name: 'Max width', defaultValue: '760px' }),
  },
});
