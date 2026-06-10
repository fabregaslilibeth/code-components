import * as React from 'react';
import { BentoCell, DEFAULT_BENTO_CELLS } from './Bento.data';
import { BentoIcon } from './BentoIcon';
import { bentoCss } from './Bento.styles';

export type { BentoCell };

export interface BentoProps {
  eyebrowLabel?: string;
  headingBefore?: string;
  headingHighlight?: string;
  description?: string;
  cells?: BentoCell[];
}

const Ticks = ({ className = '' }: { className?: string }) => (
  <div className={`bento-ticks ${className}`.trim()} aria-hidden>
    <span className="bento-tick bento-tick--tl" />
    <span className="bento-tick bento-tick--tr" />
    <span className="bento-tick bento-tick--bl" />
    <span className="bento-tick bento-tick--br" />
  </div>
);

interface BentoCellViewProps {
  cell: BentoCell;
}

const BentoCellView: React.FC<BentoCellViewProps> = ({ cell }) => {
  const gridStyle: React.CSSProperties = {
    gridColumn: cell.area.col,
    gridRow: cell.area.row,
  };

  if (cell.photo) {
    return (
      <article
        className="bento-cell bento-cell--photo"
        style={gridStyle}
      >
        <div className="bento-photo-bg">
          <img
            src={cell.photo}
            alt={cell.title}
            loading="lazy"
            decoding="async"
            className="bento-photo-img"
          />
          <div className="bento-photo-overlay" aria-hidden />
        </div>
        <Ticks className="bento-photo-ticks" />
        <div className="bento-photo-content">
          <div className="bento-cell-top">
            <span className="bento-icon-wrap">
              <BentoIcon name={cell.icon} size={22} iconSvg={cell.iconSvg} />
            </span>
            <span className="bento-cell-num">{cell.n}</span>
          </div>
          <div className="bento-cell-body">
            <h3 className="bento-cell-title">{cell.title}</h3>
            <p className="bento-cell-text">{cell.body}</p>
          </div>
        </div>
      </article>
    );
  }

  const variantClass = cell.feature ? 'bento-cell--feature' : 'bento-cell--default';

  return (
    <article
      className={`bento-cell ${variantClass}`}
      style={gridStyle}
    >
      {cell.feature && <div className="bento-cell-grid-bg" aria-hidden />}
      <Ticks />
      <div className="bento-cell-top">
        <span className="bento-icon-wrap">
          <BentoIcon
            name={cell.icon}
            size={cell.feature ? 26 : 22}
            iconSvg={cell.iconSvg}
          />
        </span>
        <span className="bento-cell-num">{cell.n}</span>
      </div>
      <div className="bento-cell-body">
        <h3 className="bento-cell-title">{cell.title}</h3>
        <p className="bento-cell-text">{cell.body}</p>
      </div>
    </article>
  );
};

export const Bento = ({
  cells = DEFAULT_BENTO_CELLS,
}: BentoProps) => {
  const safeCells = cells.length > 0 ? cells : DEFAULT_BENTO_CELLS;

  return (
    <section className="bento-root">
      <style>{bentoCss}</style>
      <div className="bento-container">
        <div className="bento-grid">
          {safeCells.map((cell) => (
            <BentoCellView key={cell.n} cell={cell} />
          ))}
        </div>
      </div>
    </section>
  );
};
