import * as React from 'react';
import { LucideIcon } from '../LucideIcon';
import { cardCss } from './Card.styles';

export type CardTheme = 'dark' | 'light';

export interface CardProps {
  theme?: CardTheme;
  icon?: string;
  title?: string;
  body?: string;
}

const Ticks = () => (
  <div className="card-ticks" aria-hidden>
    <span className="card-tick card-tick--tl" />
    <span className="card-tick card-tick--tr" />
    <span className="card-tick card-tick--bl" />
    <span className="card-tick card-tick--br" />
  </div>
);

export const Card = ({
  theme = 'dark',
  icon = 'layers',
  title = 'TEST',
  body = 'TEST',
}: CardProps) => {
  const cardRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      el.classList.add('is-visible');
      return;
    }

    const reveal = () => el.classList.add('is-visible');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            io.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      io.observe(el);
      const timer = window.setTimeout(() => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) reveal();
      }, 300);
      return () => {
        io.disconnect();
        window.clearTimeout(timer);
      };
    } else {
      reveal();
    }
  }, []);

  return (
    <div className={`card-root card-${theme}`}>
      <style>{cardCss}</style>
      <article className="card" ref={cardRef as React.RefObject<HTMLElement>}>
        <Ticks />
        <span className="card-icon-wrap">
          <span className="card-icon-shine" aria-hidden />
          <LucideIcon name={icon} size={22} strokeWidth={1.6} />
        </span>
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{body}</p>
      </article>
    </div>
  );
};
