import * as React from 'react';

/* Inline SVG logos for common Microsoft / cloud services.
   Key matches the `logo` field in each ServiceItem. */

const logos: Record<string, React.ReactNode> = {
  'power-bi': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <rect x="2" y="14" width="6" height="16" rx="1.5" fill="#F2C811"/>
      <rect x="10" y="9" width="6" height="21" rx="1.5" fill="#E8A200"/>
      <rect x="18" y="4" width="6" height="26" rx="1.5" fill="#F2C811"/>
      <rect x="26" y="1" width="4" height="29" rx="1.5" fill="#C8960C"/>
    </svg>
  ),
  'power-automate': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="pa-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ECAFF"/>
          <stop offset="100%" stopColor="#0066FF"/>
        </linearGradient>
      </defs>
      <path d="M4 8C4 5.79 5.79 4 8 4h10l10 10v10c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8z" fill="url(#pa-grad)"/>
      <path d="M18 4l10 10h-6c-2.21 0-4-1.79-4-4V4z" fill="rgba(255,255,255,0.25)"/>
      <path d="M10 17l4-5v3h8l-4 5v-3H10z" fill="white"/>
    </svg>
  ),
  'teams': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="teams-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9B8AFB"/>
          <stop offset="100%" stopColor="#5558AF"/>
        </linearGradient>
      </defs>
      <rect x="2" y="10" width="20" height="16" rx="3" fill="url(#teams-grad)"/>
      <circle cx="22" cy="8" r="4" fill="#7B83EB"/>
      <rect x="19" y="12" width="11" height="9" rx="2" fill="#5558AF"/>
      <rect x="6" y="14" width="12" height="2" rx="1" fill="white"/>
      <rect x="6" y="18" width="8" height="2" rx="1" fill="white" opacity="0.7"/>
      <circle cx="22" cy="8" r="2.5" fill="white" opacity="0.9"/>
    </svg>
  ),
  'copilot': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="cop-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00B4FF"/>
          <stop offset="100%" stopColor="#0078D4"/>
        </linearGradient>
        <linearGradient id="cop-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7B61FF"/>
          <stop offset="100%" stopColor="#00B4FF"/>
        </linearGradient>
      </defs>
      <path d="M16 3C9.37 3 4 8.37 4 15c0 3.87 1.82 7.32 4.66 9.58L16 29l7.34-4.42A11.96 11.96 0 0028 15c0-6.63-5.37-12-12-12z" fill="url(#cop-a)"/>
      <path d="M16 3v26l7.34-4.42A11.96 11.96 0 0028 15c0-6.63-5.37-12-12-12z" fill="url(#cop-b)" opacity="0.75"/>
      <circle cx="12" cy="15" r="2" fill="white"/>
      <circle cx="20" cy="15" r="2" fill="white"/>
      <path d="M12 19c0 2.21 1.79 4 4 4s4-1.79 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  'm365': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="m365-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EA3A5C"/>
          <stop offset="50%" stopColor="#F7941D"/>
          <stop offset="100%" stopColor="#FFCC00"/>
        </linearGradient>
        <linearGradient id="m365-b" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A78D7"/>
          <stop offset="100%" stopColor="#36C6E0"/>
        </linearGradient>
      </defs>
      <path d="M4 4h11v11H4z" rx="2" fill="url(#m365-a)"/>
      <rect x="4" y="4" width="11" height="11" rx="1.5" fill="url(#m365-a)"/>
      <rect x="17" y="4" width="11" height="11" rx="1.5" fill="url(#m365-b)"/>
      <rect x="4" y="17" width="11" height="11" rx="1.5" fill="#1DB954" opacity="0.9"/>
      <rect x="17" y="17" width="11" height="11" rx="1.5" fill="#FFB900"/>
      <path d="M7 9.5V14h1.5v-3l1.5 2 1.5-2v3H13V9.5h-1.5L10 11.5 8.5 9.5H7z" fill="white"/>
    </svg>
  ),
  'managed-it': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="mit-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10C8E5"/>
          <stop offset="100%" stopColor="#0F63F3"/>
        </linearGradient>
      </defs>
      <rect x="3" y="6" width="26" height="16" rx="2.5" fill="url(#mit-grad)"/>
      <rect x="6" y="9" width="20" height="10" rx="1.5" fill="rgba(255,255,255,0.15)"/>
      <circle cx="16" cy="14" r="3" fill="white" opacity="0.9"/>
      <path d="M11 27h10M16 22v5" stroke="#10C8E5" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'power-apps': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="papp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A259F7"/>
          <stop offset="100%" stopColor="#742BDA"/>
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="26" height="26" rx="4" fill="url(#papp-grad)"/>
      <path d="M10 22V10l6 6 6-6v12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  'sharepoint': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="sp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#36C6E0"/>
          <stop offset="100%" stopColor="#0A78D7"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" fill="url(#sp-grad)"/>
      <circle cx="16" cy="16" r="8" fill="rgba(255,255,255,0.2)"/>
      <circle cx="16" cy="16" r="4" fill="white" opacity="0.9"/>
    </svg>
  ),
  'azure': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="az-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#50E6FF"/>
          <stop offset="100%" stopColor="#0078D4"/>
        </linearGradient>
      </defs>
      <path d="M12 4L4 20h7l5-8 5 14h7L18 4h-6z" fill="url(#az-grad)"/>
    </svg>
  ),
  'dynamics': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="dyn-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00B0F0"/>
          <stop offset="100%" stopColor="#002050"/>
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="26" height="26" rx="4" fill="url(#dyn-grad)"/>
      <path d="M8 16A8 8 0 0016 8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" fill="white" opacity="0.9"/>
    </svg>
  ),
};

export const ServiceLogo: React.FC<{ name: string; size?: number }> = ({ name, size = 28 }) => {
  const key = name.toLowerCase().replace(/\s+/g, '-');
  const logo = logos[key];
  if (!logo) {
    // Generic fallback
    return (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <rect x="3" y="3" width="26" height="26" rx="4" fill="#10C8E5" opacity="0.2"/>
        <rect x="3" y="3" width="26" height="26" rx="4" stroke="#10C8E5" strokeWidth="1.5" fill="none"/>
        <circle cx="16" cy="16" r="5" fill="#10C8E5" opacity="0.7"/>
      </svg>
    );
  }
  return <>{logo}</>;
};
