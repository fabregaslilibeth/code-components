import { WhyBentoLight } from './WhyBentoLight';
import { WhyTile, DEFAULT_WHY_TILES } from './WhyBento.data';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

type TileFields = { icon?: string; title?: string; body?: string; img?: string };

const buildTile = (fields: TileFields, defaults: WhyTile, big?: boolean): WhyTile => ({
  icon: fields.icon?.trim() || defaults.icon,
  title: fields.title?.trim() || defaults.title,
  body: fields.body?.trim() || defaults.body,
  img: fields.img?.trim() || defaults.img,
  big,
});

const WhyBentoLightWebflow = ({
  tile1Icon, tile1Title, tile1Body, tile1Img,
  tile2Icon, tile2Title, tile2Body,
  tile3Icon, tile3Title, tile3Body,
  tile4Icon, tile4Title, tile4Body,
  tile5Icon, tile5Title, tile5Body,
}: {
  tile1Icon?: string; tile1Title?: string; tile1Body?: string; tile1Img?: string;
  tile2Icon?: string; tile2Title?: string; tile2Body?: string;
  tile3Icon?: string; tile3Title?: string; tile3Body?: string;
  tile4Icon?: string; tile4Title?: string; tile4Body?: string;
  tile5Icon?: string; tile5Title?: string; tile5Body?: string;
}) => {
  const d = DEFAULT_WHY_TILES;
  const items: WhyTile[] = [
    buildTile({ icon: tile1Icon, title: tile1Title, body: tile1Body, img: tile1Img }, d[0], true),
    buildTile({ icon: tile2Icon, title: tile2Title, body: tile2Body }, d[1]),
    buildTile({ icon: tile3Icon, title: tile3Title, body: tile3Body }, d[2]),
    buildTile({ icon: tile4Icon, title: tile4Title, body: tile4Body }, d[3]),
    buildTile({ icon: tile5Icon, title: tile5Title, body: tile5Body }, d[4]),
  ];
  return <WhyBentoLight items={items} />;
};

export default declareComponent(WhyBentoLightWebflow, {
  name: 'Why Bento (Light)',
  description: 'Light-mode bento "why us" section with white/grey tiles and navy text',
  group: 'Content',
  props: {
    tile1Icon:  props.Text({ name: 'Tile 1 icon', defaultValue: DEFAULT_WHY_TILES[0].icon }),
    tile1Title: props.Text({ name: 'Tile 1 title', defaultValue: DEFAULT_WHY_TILES[0].title }),
    tile1Body:  props.Text({ name: 'Tile 1 body', defaultValue: DEFAULT_WHY_TILES[0].body }),
    tile1Img:   props.Text({ name: 'Tile 1 photo URL (optional)', defaultValue: '' }),
    tile2Icon:  props.Text({ name: 'Tile 2 icon', defaultValue: DEFAULT_WHY_TILES[1].icon }),
    tile2Title: props.Text({ name: 'Tile 2 title', defaultValue: DEFAULT_WHY_TILES[1].title }),
    tile2Body:  props.Text({ name: 'Tile 2 body', defaultValue: DEFAULT_WHY_TILES[1].body }),
    tile3Icon:  props.Text({ name: 'Tile 3 icon', defaultValue: DEFAULT_WHY_TILES[2].icon }),
    tile3Title: props.Text({ name: 'Tile 3 title', defaultValue: DEFAULT_WHY_TILES[2].title }),
    tile3Body:  props.Text({ name: 'Tile 3 body', defaultValue: DEFAULT_WHY_TILES[2].body }),
    tile4Icon:  props.Text({ name: 'Tile 4 icon', defaultValue: DEFAULT_WHY_TILES[3].icon }),
    tile4Title: props.Text({ name: 'Tile 4 title', defaultValue: DEFAULT_WHY_TILES[3].title }),
    tile4Body:  props.Text({ name: 'Tile 4 body', defaultValue: DEFAULT_WHY_TILES[3].body }),
    tile5Icon:  props.Text({ name: 'Tile 5 icon', defaultValue: DEFAULT_WHY_TILES[4].icon }),
    tile5Title: props.Text({ name: 'Tile 5 title', defaultValue: DEFAULT_WHY_TILES[4].title }),
    tile5Body:  props.Text({ name: 'Tile 5 body', defaultValue: DEFAULT_WHY_TILES[4].body }),
  },
});
