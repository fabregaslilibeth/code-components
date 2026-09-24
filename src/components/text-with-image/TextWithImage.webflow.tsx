import {
  TextWithImage,
  TextWithImagePlacement,
  TextWithImageMobilePlacement,
  TextWithImageMobileTextAlign,
  TextWithImageHeadingTag,
} from './TextWithImage';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const PLACEMENTS: TextWithImagePlacement[] = ['left', 'right'];
const MOBILE_PLACEMENTS: TextWithImageMobilePlacement[] = ['auto', 'top', 'bottom'];
const MOBILE_TEXT_ALIGNS: TextWithImageMobileTextAlign[] = ['left', 'center'];
const HEADING_TAGS: TextWithImageHeadingTag[] = ['h1', 'h2', 'h3', 'h4', 'h5'];

const DEFAULT_TITLE = 'VoIP handsets and devices';
const DEFAULT_BODY =
  'We offer a choice of Polycom and Yealink HD IP phones to suit different desk needs, from single-line to multi-line and conference. All work with our hosted platform. You can also use the HVS softphone and mobile app with no desk phone at all.';

const TextWithImageWebflow = ({
  image,
  eyebrow,
  title,
  body,
  placement,
  mobilePlacement,
  mobileTextAlign,
  headingTag,
}: {
  image?: { src?: string; alt?: string };
  eyebrow?: string;
  title?: string;
  body?: string;
  placement?: string;
  mobilePlacement?: string;
  mobileTextAlign?: string;
  headingTag?: string;
}) => {
  const safePlacement: TextWithImagePlacement =
    PLACEMENTS.find((p) => p === placement) || 'left';
  const safeMobilePlacement: TextWithImageMobilePlacement =
    MOBILE_PLACEMENTS.find((m) => m === mobilePlacement) || 'auto';
  const safeMobileTextAlign: TextWithImageMobileTextAlign =
    MOBILE_TEXT_ALIGNS.find((a) => a === mobileTextAlign) || 'left';
  const safeHeadingTag: TextWithImageHeadingTag =
    HEADING_TAGS.find((t) => t === headingTag) || 'h3';

  return (
    <TextWithImage
      imageSrc={image?.src}
      imageAlt={image?.alt}
      eyebrow={eyebrow}
      title={title}
      body={body}
      placement={safePlacement}
      mobilePlacement={safeMobilePlacement}
      mobileTextAlign={safeMobileTextAlign}
      headingTag={safeHeadingTag}
    />
  );
};

export default declareComponent(TextWithImageWebflow, {
  name: 'Text With Image',
  description:
    'Image beside a text block (eyebrow, title, body). Empty fields are hidden. Image sits left or right on desktop, and stacks top or bottom at 767px and below.',
  group: 'Content',
  props: {
    image: props.Image({ name: 'Image' }),
    eyebrow: props.Text({ name: 'Eyebrow', defaultValue: '' }),
    title: props.Text({ name: 'Title', defaultValue: DEFAULT_TITLE }),
    body: props.Text({ name: 'Body', defaultValue: DEFAULT_BODY }),
    placement: props.Variant({
      name: 'Image placement (desktop)',
      defaultValue: 'left',
      options: PLACEMENTS,
    }),
    mobilePlacement: props.Variant({
      name: 'Image placement (767px and below)',
      defaultValue: 'auto',
      options: MOBILE_PLACEMENTS,
      tooltip:
        'auto follows the desktop placement — left becomes top, right becomes bottom.',
    }),
    mobileTextAlign: props.Variant({
      name: 'Text align (767px and below)',
      defaultValue: 'left',
      options: MOBILE_TEXT_ALIGNS,
    }),
    headingTag: props.Variant({
      name: 'Heading level',
      defaultValue: 'h3',
      options: HEADING_TAGS,
    }),
  },
});
