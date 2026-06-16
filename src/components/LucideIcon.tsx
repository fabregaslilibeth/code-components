import * as React from 'react';
import * as LucideIcons from 'lucide-react';

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

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  size = 22,
  strokeWidth = 1.7,
  className,
}) => {
  const iconName = toPascalCase(name.trim());
  const Icon = (LucideIcons as Record<string, React.FC<LucideIcons.LucideProps>>)[iconName];

  if (!Icon) return null;

  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden />;
};
