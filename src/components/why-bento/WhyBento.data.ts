export interface WhyTile {
  icon: string;
  iconSvg?: string;
  title: string;
  body: string;
  big?: boolean;
  img?: string;
}

export const DEFAULT_WHY_TILES: WhyTile[] = [
  {
    icon: 'users',
    title: 'In-house specialists',
    body: 'Senior UK consultants with deep technical expertise who own the outcome, security-led from day one.',
    big: true,
    img: '',
  },
  {
    icon: 'layout-dashboard',
    title: 'Built around real questions',
    body: 'Dashboards designed around the KPIs that matter to Finance, Sales, Operations and Leadership.',
  },
  {
    icon: 'shield-check',
    title: 'Security-first data access',
    body: 'Role-based access, encryption and Microsoft security controls baked in from the start.',
  },
  {
    icon: 'message-square',
    title: 'Plain-English insights',
    body: 'Clear reporting your board can act on — not jargon.',
  },
  {
    icon: 'layers',
    title: 'One partner for everything',
    body: 'Managed IT, cyber security and BI under one accountable roof.',
  },
];
