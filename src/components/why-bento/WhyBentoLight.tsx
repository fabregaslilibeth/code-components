import * as React from 'react';
import { WhyTile, DEFAULT_WHY_TILES } from './WhyBento.data';
import { WhyBentoIcon } from './WhyBentoIcon';
import { whyBentoLightCss } from './WhyBentoLight.styles';

export interface WhyBentoLightProps {
  items?: WhyTile[];
}

const Ticks = () => (
  <div className="wbl-ticks" aria-hidden>
    <span className="wbl-tick wbl-tick--tl" />
    <span className="wbl-tick wbl-tick--tr" />
    <span className="wbl-tick wbl-tick--bl" />
    <span className="wbl-tick wbl-tick--br" />
  </div>
);

function useWhyBentoLightEffects(rootRef: React.RefObject<HTMLElement | null>, count: number) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxEnabled = !reduceMotion && window.matchMedia('(min-width: 861px)').matches;

    const items = [...root.querySelectorAll<HTMLElement>('[data-wbl-item]')];

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

    const parallaxImgs = [...root.querySelectorAll<HTMLImageElement>('[data-wbl-parallax]')];
    const updateParallax = () => {
      if (!parallaxEnabled) return;
      parallaxImgs.forEach((img) => {
        const wrap = img.closest('.wbl-photo-bg');
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        img.style.setProperty('--wbl-parallax-y', `${progress * 10}px`);
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
  <div className="wbl-tile-top">
    <span className="wbl-icon-wrap">
      <span className="wbl-icon-shine" aria-hidden />
      <WhyBentoIcon name={tile.icon} size={big ? 26 : 22} />
    </span>
  </div>
);

const TileBody: React.FC<{ tile: WhyTile }> = ({ tile }) => (
  <div className="wbl-tile-body">
    <h3 className="wbl-tile-title">{tile.title}</h3>
    <p className="wbl-tile-text">{tile.body}</p>
  </div>
);

const WblTile: React.FC<{ tile: WhyTile; index: number }> = ({ tile, index }) => {
  const style = { '--wbl-index': index } as React.CSSProperties;

  if (tile.big && tile.img) {
    return (
      <article className="wbl-tile wbl-tile--photo wbl-tile--big" style={style} data-wbl-item>
        <div className="wbl-photo-bg">
          <img
            data-wbl-parallax
            src={tile.img}
            alt={tile.title}
            loading="lazy"
            decoding="async"
            className="wbl-photo-img"
          />
          <div className="wbl-photo-overlay" aria-hidden />
          <span className="wbl-photo-shine" aria-hidden />
          <div className="wbl-photo-glow" aria-hidden />
        </div>
        <Ticks />
        <div className="wbl-photo-content">
          <TileTop tile={tile} big />
          <TileBody tile={tile} />
        </div>
      </article>
    );
  }

  if (tile.big) {
    return (
      <article className="wbl-tile wbl-tile--big" style={style} data-wbl-item>
        <div className="wbl-tile-grid-bg" aria-hidden />
        <Ticks />
        <TileTop tile={tile} big />
        <TileBody tile={tile} />
      </article>
    );
  }

  return (
    <article className="wbl-tile wbl-tile--default" style={style} data-wbl-item>
      <Ticks />
      <TileTop tile={tile} />
      <TileBody tile={tile} />
    </article>
  );
};

export const WhyBentoLight = ({
  items = DEFAULT_WHY_TILES,
}: WhyBentoLightProps) => {
  const rootRef = React.useRef<HTMLElement>(null);
  const safeTiles = items.length > 0 ? items : DEFAULT_WHY_TILES;

  useWhyBentoLightEffects(rootRef, safeTiles.length);

  return (
    <section className="wbl-root" ref={rootRef}>
      <style>{whyBentoLightCss}</style>
      <div className="wbl-container">
        <div className="wbl-grid">
          {safeTiles.map((tile, i) => (
            <WblTile key={i} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
