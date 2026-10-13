import { SliderItem } from './SliderItem';
import { HEADING_TAGS, toHeadingTag } from '../headingTag';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const SliderItemWebflow = ({
  icon,
  title,
  body,
  headingTag,
}: {
  icon?: string;
  title?: string;
  body?: string;
  headingTag?: string;
}) => (
  <SliderItem icon={icon} title={title} body={body} headingTag={toHeadingTag(headingTag, 'h3')} />
);

export default declareComponent(SliderItemWebflow, {
  name: 'Slider Item',
  description: 'A single slide — place inside a Slider component',
  group: 'Content',
  props: {
    icon:  props.Text({ name: 'Icon (Lucide name)', defaultValue: 'layers' }),
    title: props.Text({ name: 'Title', defaultValue: 'Slide title' }),
    body:  props.Text({ name: 'Body', defaultValue: 'Describe this slide in a sentence or two.' }),
    headingTag: props.Variant({ name: 'Heading level', defaultValue: 'h3', options: HEADING_TAGS }),
  },
});
