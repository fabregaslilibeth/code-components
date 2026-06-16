import * as React from 'react';
import { GridIcon } from './GridIcon';
import { gridCss } from './Grid.styles';

export interface GridItem {
  icon: string;
  title: string;
  body: string;
}

const DEFAULT_GRID_ITEMS: GridItem[] = Array.from({ length: 8 }, (_, i) => ({
  icon: 'layers',
  title: 'TITLE 1',
  body: 'BODY 1',
}));

export type GridTheme = 'dark' | 'light';

export interface GridProps {
  theme?: GridTheme;
  items?: GridItem[];
  gap?: string;
  columns?: number;
}

const Ticks = () => (
  <div className="grid-ticks" aria-hidden>
    <span className="grid-tick grid-tick--tl" />
    <span className="grid-tick grid-tick--tr" />
    <span className="grid-tick grid-tick--bl" />
    <span className="grid-tick grid-tick--br" />
  </div>
);

function useGridEffects(rootRef: React.RefObject<HTMLElement | null>, count: number) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = [...root.querySelectorAll<HTMLElement>('[data-grid-card]')];

    if (reduceMotion) {
      cards.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const reveal = (el: HTMLElement) => {
      if (el.classList.contains('is-visible')) return;
      el.classList.add('is-visible');
    };

    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      cards.forEach((el) => io!.observe(el));
    } else {
      cards.forEach(reveal);
    }

    const vh = window.innerHeight;
    const sweep = () => {
      cards.forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) reveal(el);
      });
    };

    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep, { passive: true });
    const sweepTimer = window.setTimeout(sweep, 300);

    return () => {
      io?.disconnect();
      window.clearTimeout(sweepTimer);
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
    };
  }, [rootRef, count]);
}

const GridCard: React.FC<{ item: GridItem; index: number }> = ({ item, index }) => {
  const style = { '--grid-index': index } as React.CSSProperties;

  return (
    <article className="grid-card" style={style} data-grid-card>
      <Ticks />
      <span className="grid-icon-wrap">
        <span className="grid-icon-shine" aria-hidden />
        <GridIcon name={item.icon} />
      </span>
      <h3 className="grid-title">{item.title}</h3>
      <p className="grid-body">{item.body}</p>
    </article>
  );
};

export const Grid = ({
  theme = 'dark',
  items = DEFAULT_GRID_ITEMS,
  gap,
  columns,
}: GridProps) => {
  const rootRef = React.useRef<HTMLElement>(null);
  const safeItems = (items.length > 0 ? items : DEFAULT_GRID_ITEMS).filter(item => item.title?.trim());

  useGridEffects(rootRef, safeItems.length);

  const gridStyle: React.CSSProperties = {
    '--grid-cols': columns ?? 3,
    ...(gap !== undefined ? { gap } : {}),
  } as React.CSSProperties;

  return (
    <section className={`grid-root grid-${theme}`} ref={rootRef}>
      <style>{gridCss}</style>
      <div className="grid-grid" style={gridStyle}>
        {safeItems.map((item, i) => (
          <GridCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};
