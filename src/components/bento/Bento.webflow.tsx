import { Bento, BentoCell } from './Bento';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

type CellFields = {
  number?: string;
  icon?: string;
  title?: string;
  body?: string;
  photo?: string;
  feature?: boolean;
  area: { col: string; row: string };
  allowPhoto: boolean;
};

const buildCell = (fields: CellFields): BentoCell => ({
  n: fields.number?.trim() || 'N',
  icon: fields.icon?.trim() || 'layers',
  title: fields.title?.trim() || 'TEST',
  body: fields.body?.trim() || 'TEST',
  photo: fields.allowPhoto ? fields.photo?.trim() || undefined : undefined,
  feature: fields.feature,
  area: fields.area,
});

const BentoWebflow = ({
  cell1Number, cell1Icon, cell1Title, cell1Body,
  cell2Number, cell2Icon, cell2Title, cell2Body, cell2Photo,
  cell3Number, cell3Icon, cell3Title, cell3Body,
  cell4Number, cell4Icon, cell4Title, cell4Body,
  cell5Number, cell5Icon, cell5Title, cell5Body, cell5Photo,
  cell6Number, cell6Icon, cell6Title, cell6Body,
}: {
  cell1Number?: string; cell1Icon?: string; cell1Title?: string; cell1Body?: string;
  cell2Number?: string; cell2Icon?: string; cell2Title?: string; cell2Body?: string; cell2Photo?: string;
  cell3Number?: string; cell3Icon?: string; cell3Title?: string; cell3Body?: string;
  cell4Number?: string; cell4Icon?: string; cell4Title?: string; cell4Body?: string;
  cell5Number?: string; cell5Icon?: string; cell5Title?: string; cell5Body?: string; cell5Photo?: string;
  cell6Number?: string; cell6Icon?: string; cell6Title?: string; cell6Body?: string;
}) => {
  const cells: BentoCell[] = [
    buildCell({ number: cell1Number, icon: cell1Icon, title: cell1Title, body: cell1Body, feature: true, area: { col: '1', row: '1 / span 2' }, allowPhoto: false }),
    buildCell({ number: cell2Number, icon: cell2Icon, title: cell2Title, body: cell2Body, photo: cell2Photo, area: { col: '2 / span 2', row: '1' }, allowPhoto: true }),
    buildCell({ number: cell3Number, icon: cell3Icon, title: cell3Title, body: cell3Body, area: { col: '2', row: '2' }, allowPhoto: false }),
    buildCell({ number: cell4Number, icon: cell4Icon, title: cell4Title, body: cell4Body, area: { col: '3', row: '2' }, allowPhoto: false }),
    buildCell({ number: cell5Number, icon: cell5Icon, title: cell5Title, body: cell5Body, photo: cell5Photo, area: { col: '1 / span 2', row: '3' }, allowPhoto: true }),
    buildCell({ number: cell6Number, icon: cell6Icon, title: cell6Title, body: cell6Body, area: { col: '3', row: '3' }, allowPhoto: false }),
  ];

  return <Bento cells={cells} />;
};

export default declareComponent(BentoWebflow, {
  name: 'Bento Grid',
  description: 'Why Intouch bento grid with icons, feature cells and photo cards',
  group: 'Content',
  props: {
    cell1Number: props.Text({ name: 'Cell 1 number', defaultValue: '01' }),
    cell1Icon: props.Text({ name: 'Cell 1 icon (Lucide name)', defaultValue: 'layers' }),
    cell1Title: props.Text({ name: 'Cell 1 title', defaultValue: 'TEST' }),
    cell1Body: props.Text({ name: 'Cell 1 body', defaultValue: 'TEST' }),

    cell2Number: props.Text({ name: 'Cell 2 number', defaultValue: '02' }),
    cell2Icon: props.Text({ name: 'Cell 2 icon (Lucide name)', defaultValue: 'layers' }),
    cell2Title: props.Text({ name: 'Cell 2 title', defaultValue: 'TEST' }),
    cell2Body: props.Text({ name: 'Cell 2 body', defaultValue: 'TEST' }),
    cell2Photo: props.Text({ name: 'Cell 2 photo URL', defaultValue: '' }),

    cell3Number: props.Text({ name: 'Cell 3 number', defaultValue: '03' }),
    cell3Icon: props.Text({ name: 'Cell 3 icon (Lucide name)', defaultValue: 'layers' }),
    cell3Title: props.Text({ name: 'Cell 3 title', defaultValue: 'TEST' }),
    cell3Body: props.Text({ name: 'Cell 3 body', defaultValue: 'TEST' }),

    cell4Number: props.Text({ name: 'Cell 4 number', defaultValue: '04' }),
    cell4Icon: props.Text({ name: 'Cell 4 icon (Lucide name)', defaultValue: 'layers' }),
    cell4Title: props.Text({ name: 'Cell 4 title', defaultValue: 'TEST' }),
    cell4Body: props.Text({ name: 'Cell 4 body', defaultValue: 'TEST' }),

    cell5Number: props.Text({ name: 'Cell 5 number', defaultValue: '05' }),
    cell5Icon: props.Text({ name: 'Cell 5 icon (Lucide name)', defaultValue: 'layers' }),
    cell5Title: props.Text({ name: 'Cell 5 title', defaultValue: 'TEST' }),
    cell5Body: props.Text({ name: 'Cell 5 body', defaultValue: 'TEST' }),
    cell5Photo: props.Text({ name: 'Cell 5 photo URL', defaultValue: '' }),

    cell6Number: props.Text({ name: 'Cell 6 number', defaultValue: '06' }),
    cell6Icon: props.Text({ name: 'Cell 6 icon (Lucide name)', defaultValue: 'layers' }),
    cell6Title: props.Text({ name: 'Cell 6 title', defaultValue: 'TEST' }),
    cell6Body: props.Text({ name: 'Cell 6 body', defaultValue: 'TEST' }),
  },
});
