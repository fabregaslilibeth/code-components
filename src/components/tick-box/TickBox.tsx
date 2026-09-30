import * as React from 'react';
import { tickBoxCss } from './TickBox.styles';

export type TickBoxTheme = 'dark' | 'light';

export interface TickBoxProps {
  theme?: TickBoxTheme;
  label?: string;
  value?: string;
  /** Corner tick accents. Default on. */
  showTicks?: boolean;
}

export const TickBox = ({
  theme = 'dark',
  label = '',
  value = '',
  showTicks = true,
}: TickBoxProps) => {
  return (
    <div className={`tb-root tb-${theme}`}>
      <style>{tickBoxCss}</style>
      <div className="tb-box">
        {showTicks && (
          <>
            <span className="tb-tick tl" aria-hidden="true" />
            <span className="tb-tick tr" aria-hidden="true" />
          </>
        )}
        {label && <p className="tb-label">{label}</p>}
        {value && <p className="tb-value">{value}</p>}
      </div>
    </div>
  );
};
