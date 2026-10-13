import * as React from 'react';
import { LucideIcon } from '../LucideIcon';
import { bentoCss } from './Bento.styles';
import type { HeadingTag } from '../headingTag';

export interface BentoCell {
  n: string;
  icon: string;
  title: string;
  body: string;
  photo?: string;
  feature?: boolean;
  area: { col: string; row: string };
}

const DEFAULT_BENTO_CELLS: BentoCell[] = [
  { n: '01', icon: 'layers', title: 'Title 1', body: 'Body 1', area: { col: '1', row: '1 / span 2' }, feature: true },
  { n: '02', icon: 'layers', title: 'Title 2', body: 'Body 2', area: { col: '2 / span 2', row: '1' } },
  { n: '03', icon: 'layers', title: 'Title 3', body: 'Body 3', area: { col: '2', row: '2' } },
  { n: '04', icon: 'layers', title: 'Title 4', body: 'Body 4', area: { col: '3', row: '2' } },
  { n: '05', icon: 'layers', title: 'Title 5', body: 'Body 5', area: { col: '1 / span 2', row: '3' } },
  { n: '06', icon: 'layers', title: 'Title 6', body: 'Body 6', area: { col: '3', row: '3' } },
];

export interface BentoProps {
  cells?: BentoCell[];
  headingTag?: HeadingTag;
}

const Ticks = ({ className = '' }: { className?: string }) => (
  <div className={`bento-ticks ${className}`.trim()} aria-hidden>
    <span className="bento-tick bento-tick--tl" />
    <span className="bento-tick bento-tick--tr" />
    <span className="bento-tick bento-tick--bl" />
    <span className="bento-tick bento-tick--br" />
  </div>
);

function useBentoEffects(
  rootRef: React.RefObject<HTMLElement | null>,
  cellKey: string,
) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxEnabled =
      !reduceMotion && window.matchMedia('(min-width: 861px)').matches;

    const items = [...root.querySelectorAll<HTMLElement>('[data-bento-item]')];

    if (reduceMotion) {
      items.forEach((el) => el.classList.add('is-visible'));
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
      items.forEach((el) => io!.observe(el));
    } else {
      items.forEach(reveal);
    }

    const vh = window.innerHeight;
    const sweep = () => {
      items.forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) reveal(el);
      });
    };

    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep, { passive: true });
    const sweepTimer = window.setTimeout(sweep, 300);

    const parallaxImgs = [...root.querySelectorAll<HTMLImageElement>('[data-bento-parallax]')];
    const updateParallax = () => {
      if (!parallaxEnabled) return;
      parallaxImgs.forEach((img) => {
        const wrap = img.closest('.bento-photo-bg');
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        img.style.setProperty('--b-parallax-y', `${progress * 10}px`);
      });
    };

    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });
    updateParallax();

    return () => {
      io?.disconnect();
      window.clearTimeout(sweepTimer);
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, [rootRef, cellKey]);
}

interface BentoCellViewProps {
  cell: BentoCell;
  index: number;
  headingTag: HeadingTag;
}

const CellTop: React.FC<{ cell: BentoCell; feature?: boolean; photo?: boolean }> = ({
  cell,
  feature,
}) => (
  <div className="bento-cell-top">
    <span className="bento-icon-wrap">
      <span className="bento-icon-shine" aria-hidden />
      <LucideIcon name={cell.icon} size={feature ? 26 : 22} strokeWidth={1.6} />
    </span>
  </div>
);

const CellBody: React.FC<{ cell: BentoCell; headingTag: HeadingTag }> = ({ cell, headingTag }) => {
  const Heading = headingTag as React.ElementType;
  return (
    <div className="bento-cell-body">
      <Heading className="bento-cell-title">{cell.title}</Heading>
      <p className="bento-cell-text">{cell.body}</p>
    </div>
  );
};

const BentoCellView: React.FC<BentoCellViewProps> = ({ cell, index, headingTag }) => {
  const gridStyle: React.CSSProperties = {
    gridColumn: cell.area.col,
    gridRow: cell.area.row,
    '--b-index': index,
  } as React.CSSProperties;

  if (cell.photo) {
    return (
      <article
        className="bento-cell bento-cell--photo"
        style={gridStyle}
        data-bento-item
      >
        <div className="bento-photo-bg">
          <img
            data-bento-parallax
            src={cell.photo}
            alt={cell.title}
            loading="lazy"
            decoding="async"
            className="bento-photo-img"
          />
          <div className="bento-photo-overlay" aria-hidden />
          <span className="bento-photo-shine" aria-hidden />
          <div className="bento-photo-glow" aria-hidden />
        </div>
        <Ticks className="bento-photo-ticks" />
        <div className="bento-photo-content">
          <CellTop cell={cell} photo />
          <CellBody cell={cell} headingTag={headingTag} />
        </div>
      </article>
    );
  }

  const variantClass = cell.feature ? 'bento-cell--feature' : 'bento-cell--default';

  return (
    <article
      className={`bento-cell ${variantClass}`}
      style={gridStyle}
      data-bento-item
    >
      {cell.feature && <div className="bento-cell-grid-bg" aria-hidden />}
      <Ticks />
      <CellTop cell={cell} feature={cell.feature} />
      <CellBody cell={cell} headingTag={headingTag} />
    </article>
  );
};

export const Bento = ({
  cells = DEFAULT_BENTO_CELLS,
  headingTag = 'h3',
}: BentoProps) => {
  const rootRef = React.useRef<HTMLElement>(null);
  const safeCells = cells.length > 0 ? cells : DEFAULT_BENTO_CELLS;

  const cellKey = safeCells.map(c => `${c.n}:${!!c.photo}`).join(',');
  useBentoEffects(rootRef, cellKey);

  return (
    <section className="bento-root" ref={rootRef}>
      <style>{bentoCss}</style>
      <div className="bento-container">
        <div className="bento-grid">
          {safeCells.map((cell, index) => (
            <BentoCellView key={cell.n} cell={cell} index={index} headingTag={headingTag} />
          ))}
        </div>
      </div>
    </section>
  );
};
