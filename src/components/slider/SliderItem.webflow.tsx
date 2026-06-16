import { SliderItem } from './SliderItem';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const SliderItemWebflow = ({
  icon,
  title,
  body,
}: {
  icon?: string;
  title?: string;
  body?: string;
}) => (
  <SliderItem icon={icon} title={title} body={body} />
);

export default declareComponent(SliderItemWebflow, {
  name: 'Slider Item',
  description: 'A single slide — place inside a Slider component',
  group: 'Content',
  props: {
    icon:  props.Text({ name: 'Icon (Lucide name)', defaultValue: 'layers' }),
    title: props.Text({ name: 'Title', defaultValue: 'Slide Title' }),
    body:  props.Text({ name: 'Body', defaultValue: 'Describe this slide in a sentence or two.' }),
  },
});
