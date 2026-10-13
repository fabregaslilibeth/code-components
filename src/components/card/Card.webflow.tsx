import { Card, CardTheme } from './Card';
import { HEADING_TAGS, toHeadingTag } from '../headingTag';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const CardWebflow = ({
  theme,
  icon,
  title,
  body,
  headingTag,
}: {
  theme?: string;
  icon?: string;
  title?: string;
  body?: string;
  headingTag?: string;
}) => {
  const safeTheme: CardTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <Card
      theme={safeTheme}
      icon={icon?.trim() || 'layers'}
      title={title ?? 'Test'}
      body={body ?? 'Test'}
      headingTag={toHeadingTag(headingTag, 'h3')}
    />
  );
};

export default declareComponent(CardWebflow, {
  name: 'Icon Card',
  description: 'Single icon card with title and body — dark or light theme',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    icon:  props.Text({ name: 'Icon (Lucide name)',   defaultValue: 'layers' }),
    title: props.Text({ name: 'Title',                defaultValue: 'Test' }),
    body:  props.Text({ name: 'Body',                 defaultValue: 'Test' }),
    headingTag: props.Variant({ name: 'Heading level', defaultValue: 'h3', options: HEADING_TAGS }),
  },
});
