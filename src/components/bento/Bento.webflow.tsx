import { Bento } from './Bento';
import { BentoCell, DEFAULT_BENTO_CELLS } from './Bento.data';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

type CellFields = {
  number?: string;
  icon?: string;
  iconSvg?: string;
  title?: string;
  body?: string;
  photo?: string;
};

const buildCell = (fields: CellFields, defaults: BentoCell): BentoCell => ({
  n: fields.number?.trim() || defaults.n,
  icon: fields.icon?.trim() || defaults.icon,
  iconSvg: fields.iconSvg?.trim() || undefined,
  title: fields.title?.trim() || defaults.title,
  body: fields.body?.trim() || defaults.body,
  photo: fields.photo?.trim() || defaults.photo,
  feature: defaults.feature,
  area: defaults.area,
});

const BentoWebflow = ({
  eyebrowLabel,
  headingBefore,
  headingHighlight,
  description,
  cell1Number,
  cell1Icon,
  cell1IconSvg,
  cell1Title,
  cell1Body,
  cell1Photo,
  cell2Number,
  cell2Icon,
  cell2IconSvg,
  cell2Title,
  cell2Body,
  cell2Photo,
  cell3Number,
  cell3Icon,
  cell3IconSvg,
  cell3Title,
  cell3Body,
  cell3Photo,
  cell4Number,
  cell4Icon,
  cell4IconSvg,
  cell4Title,
  cell4Body,
  cell4Photo,
  cell5Number,
  cell5Icon,
  cell5IconSvg,
  cell5Title,
  cell5Body,
  cell5Photo,
  cell6Number,
  cell6Icon,
  cell6IconSvg,
  cell6Title,
  cell6Body,
  cell6Photo,
}: {
  eyebrowLabel?: string;
  headingBefore?: string;
  headingHighlight?: string;
  description?: string;
  cell1Number?: string;
  cell1Icon?: string;
  cell1IconSvg?: string;
  cell1Title?: string;
  cell1Body?: string;
  cell1Photo?: string;
  cell2Number?: string;
  cell2Icon?: string;
  cell2IconSvg?: string;
  cell2Title?: string;
  cell2Body?: string;
  cell2Photo?: string;
  cell3Number?: string;
  cell3Icon?: string;
  cell3IconSvg?: string;
  cell3Title?: string;
  cell3Body?: string;
  cell3Photo?: string;
  cell4Number?: string;
  cell4Icon?: string;
  cell4IconSvg?: string;
  cell4Title?: string;
  cell4Body?: string;
  cell4Photo?: string;
  cell5Number?: string;
  cell5Icon?: string;
  cell5IconSvg?: string;
  cell5Title?: string;
  cell5Body?: string;
  cell5Photo?: string;
  cell6Number?: string;
  cell6Icon?: string;
  cell6IconSvg?: string;
  cell6Title?: string;
  cell6Body?: string;
  cell6Photo?: string;
}) => {
  const d = DEFAULT_BENTO_CELLS;
  const cells: BentoCell[] = [
    buildCell({ number: cell1Number, icon: cell1Icon, iconSvg: cell1IconSvg, title: cell1Title, body: cell1Body, photo: cell1Photo }, d[0]),
    buildCell({ number: cell2Number, icon: cell2Icon, iconSvg: cell2IconSvg, title: cell2Title, body: cell2Body, photo: cell2Photo }, d[1]),
    buildCell({ number: cell3Number, icon: cell3Icon, iconSvg: cell3IconSvg, title: cell3Title, body: cell3Body, photo: cell3Photo }, d[2]),
    buildCell({ number: cell4Number, icon: cell4Icon, iconSvg: cell4IconSvg, title: cell4Title, body: cell4Body, photo: cell4Photo }, d[3]),
    buildCell({ number: cell5Number, icon: cell5Icon, iconSvg: cell5IconSvg, title: cell5Title, body: cell5Body, photo: cell5Photo }, d[4]),
    buildCell({ number: cell6Number, icon: cell6Icon, iconSvg: cell6IconSvg, title: cell6Title, body: cell6Body, photo: cell6Photo }, d[5]),
  ];

  return (
    <Bento
      eyebrowLabel={eyebrowLabel}
      headingBefore={headingBefore}
      headingHighlight={headingHighlight}
      description={description}
      cells={cells}
    />
  );
};

export default declareComponent(BentoWebflow, {
  name: 'Bento Grid',
  description: 'Why Intouch bento grid with icons, feature cells and photo cards',
  group: 'Content',
  props: {
    eyebrowLabel: props.Text({ name: 'Eyebrow label', defaultValue: 'Why Intouch' }),
    headingBefore: props.Text({
      name: 'Heading (before highlight)',
      defaultValue: 'Why choose Intouch Tech for',
    }),
    headingHighlight: props.Text({ name: 'Heading highlight', defaultValue: 'Power BI?' }),
    description: props.Text({
      name: 'Description',
      defaultValue:
        "Power BI only delivers value when it's designed around your data, your goals and your people. We don't just build dashboards — we help you understand, secure and act on your data.",
    }),
    cell1Number: props.Text({ name: 'Cell 1 number', defaultValue: DEFAULT_BENTO_CELLS[0].n }),
    cell1Icon: props.Text({ name: 'Cell 1 icon (Lucide name)', defaultValue: DEFAULT_BENTO_CELLS[0].icon }),
    cell1IconSvg: props.Text({ name: 'Cell 1 icon SVG (optional)', defaultValue: '' }),
    cell1Title: props.Text({ name: 'Cell 1 title', defaultValue: DEFAULT_BENTO_CELLS[0].title }),
    cell1Body: props.Text({ name: 'Cell 1 body', defaultValue: DEFAULT_BENTO_CELLS[0].body }),
    cell1Photo: props.Text({ name: 'Cell 1 photo URL', defaultValue: '' }),
    cell2Number: props.Text({ name: 'Cell 2 number', defaultValue: DEFAULT_BENTO_CELLS[1].n }),
    cell2Icon: props.Text({ name: 'Cell 2 icon (Lucide name)', defaultValue: DEFAULT_BENTO_CELLS[1].icon }),
    cell2IconSvg: props.Text({ name: 'Cell 2 icon SVG (optional)', defaultValue: '' }),
    cell2Title: props.Text({ name: 'Cell 2 title', defaultValue: DEFAULT_BENTO_CELLS[1].title }),
    cell2Body: props.Text({ name: 'Cell 2 body', defaultValue: DEFAULT_BENTO_CELLS[1].body }),
    cell2Photo: props.Text({ name: 'Cell 2 photo URL', defaultValue: DEFAULT_BENTO_CELLS[1].photo || '' }),
    cell3Number: props.Text({ name: 'Cell 3 number', defaultValue: DEFAULT_BENTO_CELLS[2].n }),
    cell3Icon: props.Text({ name: 'Cell 3 icon (Lucide name)', defaultValue: DEFAULT_BENTO_CELLS[2].icon }),
    cell3IconSvg: props.Text({ name: 'Cell 3 icon SVG (optional)', defaultValue: '' }),
    cell3Title: props.Text({ name: 'Cell 3 title', defaultValue: DEFAULT_BENTO_CELLS[2].title }),
    cell3Body: props.Text({ name: 'Cell 3 body', defaultValue: DEFAULT_BENTO_CELLS[2].body }),
    cell3Photo: props.Text({ name: 'Cell 3 photo URL', defaultValue: '' }),
    cell4Number: props.Text({ name: 'Cell 4 number', defaultValue: DEFAULT_BENTO_CELLS[3].n }),
    cell4Icon: props.Text({ name: 'Cell 4 icon (Lucide name)', defaultValue: DEFAULT_BENTO_CELLS[3].icon }),
    cell4IconSvg: props.Text({ name: 'Cell 4 icon SVG (optional)', defaultValue: '' }),
    cell4Title: props.Text({ name: 'Cell 4 title', defaultValue: DEFAULT_BENTO_CELLS[3].title }),
    cell4Body: props.Text({ name: 'Cell 4 body', defaultValue: DEFAULT_BENTO_CELLS[3].body }),
    cell4Photo: props.Text({ name: 'Cell 4 photo URL', defaultValue: '' }),
    cell5Number: props.Text({ name: 'Cell 5 number', defaultValue: DEFAULT_BENTO_CELLS[4].n }),
    cell5Icon: props.Text({ name: 'Cell 5 icon (Lucide name)', defaultValue: DEFAULT_BENTO_CELLS[4].icon }),
    cell5IconSvg: props.Text({ name: 'Cell 5 icon SVG (optional)', defaultValue: '' }),
    cell5Title: props.Text({ name: 'Cell 5 title', defaultValue: DEFAULT_BENTO_CELLS[4].title }),
    cell5Body: props.Text({ name: 'Cell 5 body', defaultValue: DEFAULT_BENTO_CELLS[4].body }),
    cell5Photo: props.Text({ name: 'Cell 5 photo URL', defaultValue: DEFAULT_BENTO_CELLS[4].photo || '' }),
    cell6Number: props.Text({ name: 'Cell 6 number', defaultValue: DEFAULT_BENTO_CELLS[5].n }),
    cell6Icon: props.Text({ name: 'Cell 6 icon (Lucide name)', defaultValue: DEFAULT_BENTO_CELLS[5].icon }),
    cell6IconSvg: props.Text({ name: 'Cell 6 icon SVG (optional)', defaultValue: '' }),
    cell6Title: props.Text({ name: 'Cell 6 title', defaultValue: DEFAULT_BENTO_CELLS[5].title }),
    cell6Body: props.Text({ name: 'Cell 6 body', defaultValue: DEFAULT_BENTO_CELLS[5].body }),
    cell6Photo: props.Text({ name: 'Cell 6 photo URL', defaultValue: '' }),
  },
});
