import * as React from 'react';

export interface WaveLabelProps {
  label: string;
  /** CSS class prefix of the owning component, e.g. "btn" → renders .btn-letter-mask etc. */
  prefix: string;
  staggerMs?: number;
  maxStaggerMs?: number;
  /** Let the label wrap between words (owner CSS must support it, see below). */
  wrap?: boolean;
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
const SR_ONLY: React.CSSProperties = {
  position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
  overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0,
};

export const WaveLabel = ({ label, prefix, staggerMs = 14, maxStaggerMs = 180, wrap = false }: WaveLabelProps) => {
  const letter = (ch: string, i: number) => (
    <span className={`${prefix}-letter-mask`} key={i}>
      <span
        className={`${prefix}-letter-track`}
        style={{ transitionDelay: `${Math.min(i * staggerMs, maxStaggerMs)}ms` }}
      >
        <span className={`${prefix}-letter`}>{ch === ' ' ? ' ' : ch}</span>
        <span className={`${prefix}-letter`}>{ch === ' ' ? ' ' : ch}</span>
      </span>
    </span>
  );

  // Screen readers get the plain label once; the per-letter copies are visual only
  // (split letters are read as "C y b e r", and each letter exists twice for the roll).
  const srLabel = <span style={SR_ONLY}>{label}</span>;

  if (!wrap) {
    return (
      <>
        {srLabel}
        <span className={`${prefix}-label-mask`} aria-hidden="true">{label.split('').map(letter)}</span>
      </>
    );
  }

  // wrap: group letters per word with real spaces between, so long labels break between words.
  // Needs `.xx-label-mask { display: inline }` and `.xx-word { display: inline-flex }` in the owner's CSS.
  let i = 0;
  return (
    <>
    {srLabel}
    <span className={`${prefix}-label-mask`} aria-hidden="true">
      {label.split(' ').map((word, w) => {
        if (w > 0) i++; // keep the stagger timing identical to the unwrapped version
        return (
          <React.Fragment key={w}>
            {w > 0 && ' '}
            <span className={`${prefix}-word`}>{word.split('').map((ch) => letter(ch, i++))}</span>
          </React.Fragment>
        );
      })}
    </span>
    </>
  );
};
