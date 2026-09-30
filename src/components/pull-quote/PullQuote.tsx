import * as React from 'react';
import { pullQuoteCss } from './PullQuote.styles';

export type PullQuoteTheme = 'dark' | 'light';

export interface PullQuoteProps {
  theme?: PullQuoteTheme;
  quote?: string;
  name?: string;
  role?: string;
  /** Large decorative quotation mark. Default on. */
  showMark?: boolean;
}

export const PullQuote = ({
  theme = 'dark',
  quote = "Thinking you've got everything in place isn't the same as having it validated externally.",
  name = 'Colin Jones',
  role = 'ICT Manager, Linthouse Housing Association',
  showMark = true,
}: PullQuoteProps) => {
  if (!quote) return null;

  const hasCite = !!(name || role);

  return (
    <div className={`pq-root pq-${theme}`}>
      <style>{pullQuoteCss}</style>
      <blockquote className="pq-quote">
        {showMark && (
          <span className="pq-mark" aria-hidden="true">
            “
          </span>
        )}
        <p className="pq-text">{quote}</p>
        {hasCite && (
          <cite className="pq-cite">
            {name && <b className="pq-name">{name}</b>}
            {name && role ? ' — ' : ''}
            {role}
          </cite>
        )}
      </blockquote>
    </div>
  );
};
