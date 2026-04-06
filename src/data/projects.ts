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
}

export const projects: Project[] = [
  {
    slug: 'memoir',
    title: 'Memoir',
    subtitle: 'Designing & Building an Emotion-Led D2C Brand from Zero',
    category: 'Full-Stack Product Design · AI-Native',
    timeline: '3 Weeks (2026)',
    year: '2026',
    role: 'Experience Architect · Product Designer (Co-founder)',
    initial: 'M',
    accentColor: '#C9A96E',
    coverImage: '/images/projects/memoir-cover.webp',
    team: '1 Designer · 2 Co-founders (review)',
    overview:
      'Designed and shipped a complete D2C jewellery e-commerce experience — 4,000+ lines of React, Shopify headless, Firebase Auth — built end-to-end with Claude Code, Gemini, and Sora.',
    metrics: [
      { label: 'Lines of Code', value: '4,060+' },
      { label: 'Weeks', value: '3' },
      { label: 'AI Tools', value: '3' },
      { label: 'Handoffs', value: '0' },
    ],
    color: 'var(--gold)',
  },
  {
    slug: 'zzazz-ai',
    title: 'Zzazz.ai',
    subtitle: 'Architecting a New Content Economy',
    category: 'Product Architecture',
    timeline: '~6 Months (Jul 2025 – Present)',
    year: '2025',
    role: 'Designer · UX/Product Architect',
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
