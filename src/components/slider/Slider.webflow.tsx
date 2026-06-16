import * as React from 'react';
import { Slider, SliderTheme } from './Slider';
import { SliderItem } from './SliderItem';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_SLIDES = `[
  {"icon":"megaphone","title":"Marketing & Digital","body":"Marketing and digital dashboards across every channel and campaign."},
  {"icon":"truck","title":"Supply Chain & Logistics","body":"Supply chain, logistics, procurement and supplier performance in one view."},
  {"icon":"package","title":"Inventory & Stock","body":"Inventory management, stock and warehouse management dashboards."},
  {"icon":"bar-chart","title":"Finance & Reporting","body":"Real-time financial dashboards built around your chart of accounts."},
  {"icon":"users","title":"HR & People","body":"Headcount, turnover and workforce planning at a glance."}
]`;

type SlideData = { icon?: string; title?: string; body?: string };

const parseSlides = (raw: string): SlideData[] => {
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
};

const SliderWebflow = ({
  theme,
  basis,
  slides,
}: {
  theme?: string;
  basis?: string;
  slides?: string;
}) => {
  const safeTheme: SliderTheme = theme === 'light' ? 'light' : 'dark';
  const items = parseSlides(slides || DEFAULT_SLIDES);

  return (
    <Slider theme={safeTheme} basis={basis}>
      {items.map((s, i) => (
        <SliderItem
          key={i}
          icon={s.icon || 'layers'}
          title={s.title}
          body={s.body}
        />
      ))}
    </Slider>
  );
};

export default declareComponent(SliderWebflow, {
  name: 'Slider',
  description: 'Scroll-snap card slider — paste a JSON array into the Slides prop',
  group: 'Content',
  props: {
    theme:  props.Text({ name: 'Theme (dark / light)', defaultValue: 'dark' }),
    basis:  props.Text({ name: 'Slide width (CSS value)', defaultValue: 'clamp(258px, 82%, 340px)' }),
    slides: props.Text({ name: 'Slides (JSON array)', defaultValue: DEFAULT_SLIDES }),
  },
});
