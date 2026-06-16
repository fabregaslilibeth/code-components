import { Grid, GridItem, GridTheme } from './Grid';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

type ItemFields = { icon?: string; title?: string; body?: string };

const buildItem = (fields: ItemFields): GridItem => ({
  icon: fields.icon?.trim() || 'layers',
  title: fields.title ?? 'TEST',
  body: fields.body?.trim() || 'TEST',
});

const GridWebflow = ({
  theme, gap, columns,
  item1Icon, item1Title, item1Body,
  item2Icon, item2Title, item2Body,
  item3Icon, item3Title, item3Body,
  item4Icon, item4Title, item4Body,
  item5Icon, item5Title, item5Body,
  item6Icon, item6Title, item6Body,
  item7Icon, item7Title, item7Body,
  item8Icon, item8Title, item8Body,
}: {
  theme?: string;
  gap?: string;
  columns?: string;
  item1Icon?: string; item1Title?: string; item1Body?: string;
  item2Icon?: string; item2Title?: string; item2Body?: string;
  item3Icon?: string; item3Title?: string; item3Body?: string;
  item4Icon?: string; item4Title?: string; item4Body?: string;
  item5Icon?: string; item5Title?: string; item5Body?: string;
  item6Icon?: string; item6Title?: string; item6Body?: string;
  item7Icon?: string; item7Title?: string; item7Body?: string;
  item8Icon?: string; item8Title?: string; item8Body?: string;
}) => {
  const items: GridItem[] = [
    buildItem({ icon: item1Icon, title: item1Title, body: item1Body }),
    buildItem({ icon: item2Icon, title: item2Title, body: item2Body }),
    buildItem({ icon: item3Icon, title: item3Title, body: item3Body }),
    buildItem({ icon: item4Icon, title: item4Title, body: item4Body }),
    buildItem({ icon: item5Icon, title: item5Title, body: item5Body }),
    buildItem({ icon: item6Icon, title: item6Title, body: item6Body }),
    buildItem({ icon: item7Icon, title: item7Title, body: item7Body }),
    buildItem({ icon: item8Icon, title: item8Title, body: item8Body }),
  ];

  const safeTheme: GridTheme = theme === 'light' ? 'light' : 'dark';
  const safeColumns = columns ? parseInt(columns, 10) || undefined : undefined;
  return <Grid theme={safeTheme} items={items} gap={gap} columns={safeColumns} />;
};

export default declareComponent(GridWebflow, {
  name: 'Grid',
  description: 'Uniform icon-card grid — dark or light theme',
  group: 'Content',
  props: {
    theme:      props.Text({ name: 'Theme (dark / light)',  defaultValue: 'dark' }),
    columns:    props.Text({ name: 'Columns (desktop)',     defaultValue: '4' }),
    gap:        props.Text({ name: 'Grid gap (CSS value)',  defaultValue: '14px' }),
    item1Icon:  props.Text({ name: 'Item 1 icon',  defaultValue: 'layers' }),
    item1Title: props.Text({ name: 'Item 1 title', defaultValue: '' }),
    item1Body:  props.Text({ name: 'Item 1 body',  defaultValue: 'TEST' }),
    item2Icon:  props.Text({ name: 'Item 2 icon',  defaultValue: 'layers' }),
    item2Title: props.Text({ name: 'Item 2 title', defaultValue: '' }),
    item2Body:  props.Text({ name: 'Item 2 body',  defaultValue: 'TEST' }),
    item3Icon:  props.Text({ name: 'Item 3 icon',  defaultValue: 'layers' }),
    item3Title: props.Text({ name: 'Item 3 title', defaultValue: '' }),
    item3Body:  props.Text({ name: 'Item 3 body',  defaultValue: 'TEST' }),
    item4Icon:  props.Text({ name: 'Item 4 icon',  defaultValue: 'layers' }),
    item4Title: props.Text({ name: 'Item 4 title', defaultValue: '' }),
    item4Body:  props.Text({ name: 'Item 4 body',  defaultValue: 'TEST' }),
    item5Icon:  props.Text({ name: 'Item 5 icon',  defaultValue: 'layers' }),
    item5Title: props.Text({ name: 'Item 5 title', defaultValue: '' }),
    item5Body:  props.Text({ name: 'Item 5 body',  defaultValue: 'TEST' }),
    item6Icon:  props.Text({ name: 'Item 6 icon',  defaultValue: 'layers' }),
    item6Title: props.Text({ name: 'Item 6 title', defaultValue: '' }),
    item6Body:  props.Text({ name: 'Item 6 body',  defaultValue: 'TEST' }),
    item7Icon:  props.Text({ name: 'Item 7 icon',  defaultValue: 'layers' }),
    item7Title: props.Text({ name: 'Item 7 title', defaultValue: '' }),
    item7Body:  props.Text({ name: 'Item 7 body',  defaultValue: 'TEST' }),
    item8Icon:  props.Text({ name: 'Item 8 icon',  defaultValue: 'layers' }),
    item8Title: props.Text({ name: 'Item 8 title', defaultValue: '' }),
    item8Body:  props.Text({ name: 'Item 8 body',  defaultValue: 'TEST' }),
  },
});
