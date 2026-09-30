import * as React from 'react';
import { statBoxCss } from './StatBox.styles';

export type StatBoxTheme = 'dark' | 'light';

export interface StatBoxProps {
  theme?: StatBoxTheme;
  value?: string;
  label?: string;
  /** Corner tick accents. Default on. */
  showTicks?: boolean;
}

export const StatBox = ({
  theme = 'dark',
  value = '21',
  label = 'Security findings identified',
  showTicks = true,
}: StatBoxProps) => {
  return (
    <div className={`sb-root sb-${theme}`}>
      <style>{statBoxCss}</style>
      <div className="sb-box">
        {showTicks && (
          <>
            <span className="sb-tick tl" aria-hidden="true" />
            <span className="sb-tick tr" aria-hidden="true" />
            <span className="sb-tick bl" aria-hidden="true" />
            <span className="sb-tick br" aria-hidden="true" />
          </>
        )}
        {value && <p className="sb-value">{value}</p>}
        {label && <p className="sb-label">{label}</p>}
      </div>
    </div>
  );
};
