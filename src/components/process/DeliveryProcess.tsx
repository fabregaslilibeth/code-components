import * as React from 'react';
import { DEFAULT_DELIVERY_STEPS, DeliveryProcessStep } from './DeliveryProcess.data';
import { deliveryProcessCss, deliveryProcessStyles as styles } from './DeliveryProcess.styles';

export type { DeliveryProcessStep };

export interface DeliveryProcessProps {
  eyebrowLabel?: string;
  headingBefore?: string;
  headingHighlight?: string;
  description?: string;
  steps?: DeliveryProcessStep[];
}

interface PhotoProps {
  src: string;
  alt: string;
  visible: boolean;
}

const Photo: React.FC<PhotoProps> = ({ src, alt, visible }) => (
  <div
    style={styles.photoFrame(visible)}
    className={`dp-photo-frame${visible ? ' is-visible' : ''}`}
  >
    <div className="dp-photo-inner">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="dp-photo-img" />
      <div className="dp-photo-overlay" aria-hidden />
      <div className="dp-photo-shine" aria-hidden />
    </div>
  </div>
);

function useDeliveryEffects(
  rootRef: React.RefObject<HTMLElement | null>,
  activeIndex: number,
) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxEnabled =
      !reduceMotion && window.matchMedia('(min-width: 861px)').matches;

    const revealTarget = root.querySelector<HTMLElement>('[data-dp-reveal]');
    if (!revealTarget) return;

    if (reduceMotion) {
      revealTarget.classList.add('is-visible');
      return;
    }

    const reveal = () => revealTarget.classList.add('is-visible');

    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal();
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      io.observe(revealTarget);
    } else {
      reveal();
    }

    const vh = window.innerHeight;
    const sweep = () => {
      if (revealTarget.getBoundingClientRect().top < vh * 0.92) reveal();
    };

    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep, { passive: true });
    const sweepTimer = window.setTimeout(sweep, 300);

    const photoWrap = root.querySelector<HTMLElement>('.dp-photo-wrap');
    const updateParallax = () => {
      if (!parallaxEnabled || !photoWrap) return;
      const img = photoWrap.querySelector<HTMLImageElement>(
        '.dp-photo-frame.is-visible .dp-photo-img',
      );
      if (!img) return;
      const rect = photoWrap.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
      img.style.setProperty('--dp-parallax-y', `${progress * 12}px`);
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
  }, [rootRef, activeIndex]);
}

export const DeliveryProcess = ({
  steps = DEFAULT_DELIVERY_STEPS,
}: DeliveryProcessProps) => {
  const rootRef = React.useRef<HTMLElement>(null);
  const [active, setActive] = React.useState(0);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);
  const safeSteps = steps.length > 0 ? steps : DEFAULT_DELIVERY_STEPS;
  const activeStep = safeSteps[Math.min(active, safeSteps.length - 1)];
  const totalLabel = String(safeSteps.length).padStart(2, '0');

  useDeliveryEffects(rootRef, active);

  return (
    <section className="delivery-process-root" ref={rootRef}>
      <style>{deliveryProcessCss}</style>
      <div className="dp-container">
        <div
          className="dp-grid"
          data-dp-reveal
          onMouseLeave={() => setHoveredStep(null)}
        >
          <div className="dp-nav">
            {safeSteps.map((step, index) => {
              const isActive = index === active;
              const isHovered = hoveredStep === index;

              return (
                <button
                  key={`${step.n}-${index}`}
                  type="button"
                  className={`dp-step-btn${isActive ? ' is-active' : ''}${isHovered ? ' is-hovered' : ''}`}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  aria-pressed={isActive}
                >
                  <span className="dp-step-indicator" aria-hidden />
                  <span className="dp-step-num-wrap">
                    <span className="dp-step-num-shine" aria-hidden />
                    <span className="dp-step-num">{step.n}</span>
                  </span>
                  <span className="dp-step-title">{step.title}</span>
                </button>
              );
            })}
          </div>

          <div
            className={`dp-detail-col${hoveredStep === active ? ' is-hovered' : ''}`}
            onMouseEnter={() => setHoveredStep(active)}
          >
            <div className="dp-photo-wrap">
              {safeSteps.map((step, index) => (
                <Photo
                  key={`${step.n}-photo-${index}`}
                  src={step.photo}
                  alt={step.title}
                  visible={index === active}
                />
              ))}
              <div className="dp-photo-glow" aria-hidden />
              <div className="dp-photo-counter">
                {activeStep.n}{' '}
                <span className="dp-photo-counter-dim">/ {totalLabel}</span>
              </div>
            </div>
            <div className="dp-detail-body">
              <h3 className="dp-detail-title">{activeStep.title}</h3>
              <p className="dp-detail-text">{activeStep.body}</p>
            </div>
          </div>
        </div>

        <div className="dp-progress-row">
          {safeSteps.map((step, index) => (
            <div key={`${step.n}-progress-${index}`} className="dp-progress-track">
              <div style={styles.progressFill(index <= active)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
