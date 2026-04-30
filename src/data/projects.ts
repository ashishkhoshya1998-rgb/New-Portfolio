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
  /** When true, the project is excluded from listing pages (still routable directly). */
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'memoir',
    hidden: true,
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
    subtitle: 'Designing the UX foundation for a new information economy',
    category: 'Product Architecture',
    timeline: '~6 Months (Jul 2025 – Present)',
    year: '2025',
    role: 'Senior Product Designer',
    initial: 'Z',
    accentColor: '#F59E0B',
    coverImage: '/cs/zzazz-v2-hero.png',
    team: 'Founder · Product Lead · AI · 2 Designers',
    overview:
      'Joined as a Product Designer, tested live POCs with real users, found the gap was strategic — and grew the scope into a 7-vertical content ecosystem with three distribution form factors.',
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
    subtitle: 'Simplifying GST compliance at scale',
    category: 'B2B · Enterprise UX',
    timeline: '2022–24 (Jun 2022 – Feb 2024)',
    year: '2022',
    role: 'Senior Product Designer',
    initial: 'G',
    accentColor: '#22C55E',
    coverImage: '/cs/gstr-v2-hero.jpg',
    team: '4 Designers · 1 PM · 3 Devs',
    overview:
      'Cut filing time from 1 hour to 8 minutes for 1.4Cr+ businesses, tripled adoption, and uncovered the gap between adoption and proficiency.',
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
    subtitle: 'Token-Based, Theme-Ready System with PCS Logic',
    category: 'Design System',
    timeline: '2023 (Mar 2023)',
    year: '2023',
    role: 'Senior Product Designer',
    initial: 'M',
    accentColor: '#156CEF',
    coverImage: '/cs/mintv8-v2-hero.jpg',
    team: '1 Frontend Dev · 4 Product Designers · Design Manager',
    overview:
      'Built Clear\'s first design system on two pillars — tokens that gave every product team a shared vocabulary, and PCS Logic that stopped designers from reinventing components. 100% adoption across all five teams in six weeks.',
    metrics: [
      { label: 'Variant ↓', value: '80%' },
      { label: 'Dev Effort ↓', value: '70%' },
      { label: 'Adoption', value: '100%' },
      { label: 'Themes', value: '2' },
    ],
    color: 'var(--amber)',
  },
];
