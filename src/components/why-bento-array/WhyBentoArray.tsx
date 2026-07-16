import * as React from 'react';
import { WhyTile, DEFAULT_WHY_TILES } from '../why-bento/WhyBento.data';
import { WhyBentoIcon } from '../why-bento/WhyBentoIcon';
import { whyBentoCss } from '../why-bento/WhyBento.styles';
import { whyBentoArrayLightOverride } from './WhyBentoArray.styles';

export type WhyBentoArrayTheme = 'dark' | 'light';

export interface WhyBentoArrayProps {
  theme?: WhyBentoArrayTheme;
  items?: WhyTile[];
}

const Ticks = () => (
  <div className="wb-ticks" aria-hidden>
    <span className="wb-tick wb-tick--tl" />
    <span className="wb-tick wb-tick--tr" />
    <span className="wb-tick wb-tick--bl" />
    <span className="wb-tick wb-tick--br" />
  </div>
);

function useWhyBentoEffects(rootRef: React.RefObject<HTMLElement | null>, count: number) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxEnabled = !reduceMotion && window.matchMedia('(min-width: 861px)').matches;

    const items = [...root.querySelectorAll<HTMLElement>('[data-wb-item]')];

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

    const parallaxImgs = [...root.querySelectorAll<HTMLImageElement>('[data-wb-parallax]')];
    const updateParallax = () => {
      if (!parallaxEnabled) return;
      parallaxImgs.forEach((img) => {
        const wrap = img.closest('.wb-photo-bg');
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        img.style.setProperty('--wb-parallax-y', `${progress * 10}px`);
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
  }, [rootRef, count]);
}

const TileTop: React.FC<{ tile: WhyTile; big?: boolean }> = ({ tile, big }) => (
  <div className="wb-tile-top">
    <span className="wb-icon-wrap">
      <span className="wb-icon-shine" aria-hidden />
      <WhyBentoIcon name={tile.icon} size={big ? 26 : 22} />
    </span>
  </div>
);

const TileBody: React.FC<{ tile: WhyTile }> = ({ tile }) => (
  <div className="wb-tile-body">
    <h3 className="wb-tile-title">{tile.title}</h3>
    <p className="wb-tile-text">{tile.body}</p>
  </div>
);

const WbTile: React.FC<{ tile: WhyTile; index: number }> = ({ tile, index }) => {
  const style = { '--wb-index': index } as React.CSSProperties;

  if (tile.big && tile.img) {
    return (
      <article className="wb-tile wb-tile--photo wb-tile--big" style={style} data-wb-item>
        <div className="wb-photo-bg">
          <img
            data-wb-parallax
            src={tile.img}
            alt={tile.title}
            loading="lazy"
            decoding="async"
            className="wb-photo-img"
          />
          <div className="wb-photo-overlay" aria-hidden />
          <span className="wb-photo-shine" aria-hidden />
          <div className="wb-photo-glow" aria-hidden />
        </div>
        <Ticks />
        <div className="wb-photo-content">
          <TileTop tile={tile} big />
          <TileBody tile={tile} />
        </div>
      </article>
    );
  }

  if (tile.big) {
    return (
      <article className="wb-tile wb-tile--big" style={style} data-wb-item>
        <div className="wb-tile-grid-bg" aria-hidden />
        <Ticks />
        <TileTop tile={tile} big />
        <TileBody tile={tile} />
      </article>
    );
  }

  return (
    <article className="wb-tile wb-tile--default" style={style} data-wb-item>
      <Ticks />
      <TileTop tile={tile} />
      <TileBody tile={tile} />
    </article>
  );
};

export const WhyBentoArray = ({
  theme = 'dark',
  items = DEFAULT_WHY_TILES,
}: WhyBentoArrayProps) => {
  const rootRef = React.useRef<HTMLElement>(null);
  const safeTiles = items.length > 0 ? items : DEFAULT_WHY_TILES;

  // first tile gets big=true if not explicitly set
  const tilesWithBig = safeTiles.map((t, i) =>
    i === 0 && t.big === undefined ? { ...t, big: true } : t,
  );

  useWhyBentoEffects(rootRef, tilesWithBig.length);

  return (
    <section className={`wb-root${theme === 'light' ? ' wb-light' : ''}`} ref={rootRef}>
      <style>{whyBentoCss}{theme === 'light' ? whyBentoArrayLightOverride : ''}</style>
      <div className="wb-container">
        <div className="wb-grid">
          {tilesWithBig.map((tile, i) => (
            <WbTile key={i} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
