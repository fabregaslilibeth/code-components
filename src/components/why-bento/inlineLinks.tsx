import * as React from 'react';

// [label](href) inside a plain Text prop. split() with two capture groups gives
// [text, label, href, text, label, href, ..., text].
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/;
// Site paths and https URLs only; "//host" and javascript: stay literal text.
const SAFE_HREF = /^(\/(?!\/)|https:\/\/)/;

export function renderInlineLinks(text: string, className: string): React.ReactNode {
  const parts = text.split(new RegExp(LINK.source, 'g'));
  if (parts.length === 1) return text;
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i += 3) {
    out.push(parts[i]);
    if (i + 2 >= parts.length) break;
    const label = parts[i + 1];
    const href = parts[i + 2];
    out.push(SAFE_HREF.test(href)
      ? <a key={i} href={href} className={className}>{label}</a>
      : `[${label}](${href})`);
  }
  return out;
}
