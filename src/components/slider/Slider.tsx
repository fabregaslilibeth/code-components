import * as React from 'react';
import { sliderCss } from './Slider.styles';
import { SliderItem } from './SliderItem';

export type SliderTheme = 'dark' | 'light';

export interface SliderProps {
  theme?: SliderTheme;
  basis?: string;
  children?: React.ReactNode;
}

const ArrowLeft = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const ArrowRight = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const DEMO_SLIDES: SliderProps['children'] = (
  <>
    <SliderItem icon="megaphone" title="Marketing & Digital" body="Marketing and digital marketing dashboards across every channel and campaign." />
    <SliderItem icon="truck" title="Supply Chain & Logistics" body="Supply chain, logistics, procurement and supplier performance in one view." />
    <SliderItem icon="package" title="Inventory & Stock" body="Inventory management, stock and warehouse management dashboards." />
    <SliderItem icon="bar-chart" title="Finance & Reporting" body="Real-time financial dashboards built around your chart of accounts." />
    <SliderItem icon="users" title="HR & People" body="Headcount, turnover and workforce planning at a glance." />
  </>
);

export const Slider = ({
  theme = 'dark',
  basis = 'clamp(258px, 82%, 340px)',
  children,
}: SliderProps) => {
  const trackRef = React.useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(el.clientWidth * 0.85, 720),
      behavior: 'smooth',
    });
  };

  const safeChildren = React.Children.count(children) > 0 ? children : DEMO_SLIDES;

  return (
    <section className={`sl-root sl-${theme}`}>
      <style>{sliderCss}</style>
      <div className="sl-track-wrap">
        <button className="sl-arrow sl-arrow--flanking" aria-label="Previous slide" onClick={() => nudge(-1)}>
          <ArrowLeft />
        </button>
        <div
          className="sl-track"
          ref={trackRef}
          style={{ '--sl-basis': basis } as React.CSSProperties}
        >
          {React.Children.map(safeChildren, (child, i) => (
            <div key={i} className="sl-slide">
              {child}
            </div>
          ))}
        </div>
        <button className="sl-arrow sl-arrow--flanking" aria-label="Next slide" onClick={() => nudge(1)}>
          <ArrowRight />
        </button>
        <div className="sl-arrows-mobile">
          <button className="sl-arrow" aria-label="Previous slide" onClick={() => nudge(-1)}>
            <ArrowLeft />
          </button>
          <button className="sl-arrow" aria-label="Next slide" onClick={() => nudge(1)}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
