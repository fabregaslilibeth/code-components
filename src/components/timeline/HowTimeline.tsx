import * as React from 'react';
import { DEFAULT_HOW_TIMELINE_STEPS, HowTimelineStep } from './HowTimeline.data';
import { howTimelineCss } from './HowTimeline.styles';

export type { HowTimelineStep };

export interface HowTimelineProps {
  steps?: HowTimelineStep[];
}

function useTimelineEffects(
  rootRef: React.RefObject<HTMLElement | null>,
  stepCount: number,
) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxEnabled =
      !reduceMotion && window.matchMedia('(min-width: 861px)').matches;

    const items = [...root.querySelectorAll<HTMLElement>('[data-ht-item]')];

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
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
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

    const parallaxImgs = [...root.querySelectorAll<HTMLImageElement>('[data-ht-parallax]')];
    const updateParallax = () => {
      if (!parallaxEnabled) return;
      parallaxImgs.forEach((img) => {
        const wrap = img.closest('[data-ht-parallax-wrap]');
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        img.style.setProperty('--ht-parallax-y', `${progress * 14}px`);
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
  }, [rootRef, stepCount]);
}

export const HowTimeline = ({ steps = DEFAULT_HOW_TIMELINE_STEPS }: HowTimelineProps) => {
  const rootRef = React.useRef<HTMLElement>(null);
  const safeSteps = steps.length > 0 ? steps : DEFAULT_HOW_TIMELINE_STEPS;
  const lastIndex = safeSteps.length - 1;

  useTimelineEffects(rootRef, safeSteps.length);

  return (
    <section className="how-timeline-root" ref={rootRef}>
      <style>{howTimelineCss}</style>
      <div className="ht-container">
        <div className="ht-tl" key={safeSteps.length}>
          {safeSteps.map((step, index) => {
            const isLast = index === lastIndex;

            return (
            <div
              key={`${step.n}-${index}`}
              className={`ht-tl-item${isLast ? ' ht-tl-item--last' : ''}`}
              data-ht-item
              style={{ '--ht-index': index } as React.CSSProperties}
            >
              <div className="ht-tl-rail">
                <span className="ht-tl-num">
                  <span className="ht-tl-num-shine" aria-hidden />
                  {step.n}
                </span>
                {!isLast ? (
                  <span className="ht-tl-line" aria-hidden>
                    <span className="ht-tl-line-fill" />
                  </span>
                ) : null}
              </div>
              <div className="ht-tl-body">
                <div className="ht-tl-copy">
                  <h3 className="ht-tl-title">{step.title}</h3>
                  <p className="ht-tl-text">{step.body}</p>
                </div>
                <div className="ht-tl-thumb" data-ht-parallax-wrap>
                  <img
                    data-ht-parallax
                    src={step.photo}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="ht-tl-thumb-overlay" aria-hidden />
                  <div className="ht-tl-thumb-shine" aria-hidden />
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
