export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  year: string;
  role: string;
  team: string;
  overview: string;
  metrics: { label: string; value: string }[];
  color: string;
  accentColor: string;
  initial: string;
  coverImage: string;
  order: number;
}

export const projects: Project[] = [
  {
    slug: 'memoir',
    order: 3,
    title: 'Memoir',
    subtitle: 'Designing an Emotion-Led D2C Jewellery Experience',
    category: 'Consumer · D2C · Mobile-First',
    timeline: '~2 Months (2026)',
    year: '2026',
    role: 'UX Designer',
    initial: 'M',
    accentColor: '#C9A96E',
    coverImage: '/images/projects/memoir-cover.webp',
    team: '3 Members (Design · Jewellery · Engineering)',
    overview:
      'Led end-to-end UX design for a D2C silver jewellery brand — from competitive research and user interviews to a mobile-first experience reframing jewellery as emotional resolution.',
    metrics: [
      { label: 'User Interviews', value: '8' },
      { label: 'Journey Maps', value: '2' },
      { label: 'Screens Designed', value: '20+' },
      { label: 'Research → Ship', value: '~2 Mo' },
    ],
    color: 'var(--gold)',
  },
  {
    slug: 'zzazz-ai',
    order: 4,
    title: 'Zzazz.ai',
    subtitle: 'Architecting a New Content Economy',
    category: 'Product Architecture',
    timeline: '~6 Months (Jul 2025 – Present)',
    year: '2025',
    role: 'Product Designer',
    initial: 'Z',
    accentColor: '#F59E0B',
    coverImage: '/images/projects/zzazz-cover.webp',
    team: 'Founder · Product Lead · AI · 2 Designers',
    overview:
      'Reframed disconnected POCs into a coherent 7-vertical ecosystem that makes priced content believable.',
    metrics: [
      { label: 'Verticals', value: '7' },
      { label: 'CTR ↑', value: '50%' },
      { label: 'Users Reached', value: '80–98%' },
      { label: 'Ecosystem', value: '0→1' },
    ],
    color: 'var(--green)',
  },
  {
    slug: 'gstr-3b',
    order: 1,
    title: 'GSTR-3B Filing Redesign',
    subtitle: 'Simplifying GST Filing at Scale',
    category: 'B2B · Enterprise UX',
    timeline: '2022–24 (Jun 2022 – Feb 2024)',
    year: '2022',
    role: 'UX Design · Research',
    initial: 'G',
    accentColor: '#22C55E',
    coverImage: '/images/projects/gstr3b-cover.webp',
    team: '4 Designers · 1 PM · 3 Devs',
    overview:
      'Redesigned filing for 1.4Cr+ businesses — 1hr to 8min per GSTIN, tripling adoption.',
    metrics: [
      { label: 'Time Cut', value: '87%' },
      { label: 'Adoption ↑', value: '53%' },
      { label: 'Accuracy', value: '94%' },
      { label: 'Escalation ↓', value: '73%' },
    ],
    color: 'var(--blue)',
  },
  {
    slug: 'mint-v8',
    order: 2,
    title: 'Mint V8 Design System',
    subtitle: 'Token-Based System with PCS Logic',
    category: 'Design System',
    timeline: '2023 (Mar 2023)',
    year: '2023',
    role: 'Design System Lead',
    initial: 'M',
    accentColor: '#156CEF',
    coverImage: '/images/projects/mintv8-cover.webp',
    team: '1 Frontend Dev · 4 Product Designers · Design Manager',
    overview:
      'Created Clear\'s design system — invented PCS Logic reducing 760 button variants to 32.',
    metrics: [
      { label: 'Variant ↓', value: '80%' },
      { label: 'Dev Effort ↓', value: '70%' },
      { label: 'Adoption', value: '100%' },
      { label: 'Themes', value: '2' },
    ],
    color: 'var(--amber)',
  },
];
