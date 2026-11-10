import * as React from 'react';
import type { LucideProps } from 'lucide-react';
import { ICONS } from './lucideIcons';

interface LucideIconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const toPascalCase = (str: string) =>
  str
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');

// Keep in step with the lucide-react version in package.json.
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@1.17.0/icons/';
const svgBodies = new Map<string, Promise<string>>();

// Names not in ICONS (typed in the Designer after this build) load once per page from the CDN.
const loadSvgBody = (kebab: string) => {
  if (!svgBodies.has(kebab)) {
    svgBodies.set(
      kebab,
      fetch(`${CDN}${kebab}.svg`)
        .then((r) => (r.ok ? r.text() : ''))
        .then((t) => t.replace(/^[\s\S]*?<svg[^>]*>|<\/svg>\s*$/g, ''))
        .catch(() => '')
    );
  }
  return svgBodies.get(kebab)!;
};

const RemoteIcon: React.FC<Required<Omit<LucideIconProps, 'className'>> & { className?: string }> = ({
  name,
  size,
  strokeWidth,
  className,
}) => {
  const [body, setBody] = React.useState('');

  React.useEffect(() => {
    let active = true;
    loadSvgBody(name).then((b) => active && setBody(b));
    return () => {
      active = false;
    };
  }, [name]);

  if (!body) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={['lucide', `lucide-${name}`, className].filter(Boolean).join(' ')}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  size = 22,
  strokeWidth = 1.7,
  className,
}) => {
  const iconName = toPascalCase(name.trim());
  const Icon = (ICONS as Record<string, React.FC<LucideProps>>)[iconName];

  if (Icon) return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden />;

  const kebab = name.trim().toLowerCase();
  if (!/^[a-z0-9-]+$/.test(kebab)) return null;

  return <RemoteIcon name={kebab} size={size} strokeWidth={strokeWidth} className={className} />;
};
