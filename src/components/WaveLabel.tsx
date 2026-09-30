import * as React from 'react';

export interface WaveLabelProps {
  label: string;
  /** CSS class prefix of the owning component, e.g. "btn" → renders .btn-letter-mask etc. */
  prefix: string;
  staggerMs?: number;
  maxStaggerMs?: number;
}

/** Per-letter transition duration set in each component's stylesheet (.xx-letter-track). Keep in sync. */
export const WAVE_LETTER_DURATION_MS = 380;

/** Total time (ms) the text wave takes to settle — use as the icon's animation-delay so it waits its turn. */
export function waveEndMs(label: string, staggerMs = 14, maxStaggerMs = 180): number {
  if (!label) return 0;
  return Math.min(Math.max(label.length - 1, 0) * staggerMs, maxStaggerMs) + WAVE_LETTER_DURATION_MS;
}

/**
 * Renders `label` as individually-masked letters, each holding two stacked copies
 * (current + duplicate below). A hover rule in the owning stylesheet translates each
 * `.xx-letter-track` up by one row; per-letter transition-delay staggers them into a wave.
 */
export const WaveLabel = ({ label, prefix, staggerMs = 14, maxStaggerMs = 180 }: WaveLabelProps) => {
  const letters = label.split('');

  return (
    <span className={`${prefix}-label-mask`}>
      {letters.map((ch, i) => (
        <span className={`${prefix}-letter-mask`} key={i}>
          <span
            className={`${prefix}-letter-track`}
            style={{ transitionDelay: `${Math.min(i * staggerMs, maxStaggerMs)}ms` }}
          >
            <span className={`${prefix}-letter`}>{ch === ' ' ? ' ' : ch}</span>
            <span className={`${prefix}-letter`}>{ch === ' ' ? ' ' : ch}</span>
          </span>
        </span>
      ))}
    </span>
  );
};
