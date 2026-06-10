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
  <div style={styles.photoFrame(visible)}>
    <div className="dp-photo-inner">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="dp-photo-img" />
      <div className="dp-photo-overlay" aria-hidden />
    </div>
  </div>
);

export const DeliveryProcess = ({
  steps = DEFAULT_DELIVERY_STEPS,
}: DeliveryProcessProps) => {
  const [active, setActive] = React.useState(0);
  const safeSteps = steps.length > 0 ? steps : DEFAULT_DELIVERY_STEPS;
  const activeStep = safeSteps[Math.min(active, safeSteps.length - 1)];
  const totalLabel = String(safeSteps.length).padStart(2, '0');

  return (
    <section className="delivery-process-root">
      <style>{deliveryProcessCss}</style>
      <div className="dp-container">
        <div className="dp-grid">
          <div className="dp-nav">
            {safeSteps.map((step, index) => {
              const isActive = index === active;
              return (
                <button
                  key={`${step.n}-${index}`}
                  type="button"
                  className={`dp-step-btn${isActive ? ' is-active' : ''}`}
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                >
                  <span className="dp-step-indicator" aria-hidden />
                  <span className="dp-step-num">{step.n}</span>
                  <span className="dp-step-title">{step.title}</span>
                </button>
              );
            })}
          </div>

          <div className="dp-detail-col">
            <div className="dp-photo-wrap">
              {safeSteps.map((step, index) => (
                <Photo
                  key={`${step.n}-photo-${index}`}
                  src={step.photo}
                  alt={step.title}
                  visible={index === active}
                />
              ))}
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
