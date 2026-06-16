import { Card, CardTheme } from './Card';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const CardWebflow = ({
  theme,
  icon,
  title,
  body,
}: {
  theme?: string;
  icon?: string;
  title?: string;
  body?: string;
}) => {
  const safeTheme: CardTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <Card
      theme={safeTheme}
      icon={icon?.trim() || 'layers'}
      title={title ?? 'TEST'}
      body={body ?? 'TEST'}
    />
  );
};

export default declareComponent(CardWebflow, {
  name: 'Icon Card',
  description: 'Single icon card with title and body — dark or light theme',
  group: 'Content',
  props: {
    theme: props.Text({ name: 'Theme (dark / light)', defaultValue: 'dark' }),
    icon:  props.Text({ name: 'Icon (Lucide name)',   defaultValue: 'layers' }),
    title: props.Text({ name: 'Title',                defaultValue: 'TEST' }),
    body:  props.Text({ name: 'Body',                 defaultValue: 'TEST' }),
  },
});
