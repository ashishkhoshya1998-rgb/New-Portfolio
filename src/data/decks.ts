export interface Slide {
  type: 'title' | 'problem' | 'insight' | 'actions' | 'decision' | 'visual' | 'impact' | 'cta' | 'statement' | 'comparison' | 'split';
  heading?: string;
  subheading?: string;
  body?: string;
  bullets?: string[];
  metrics?: { value: string; label: string }[];
  visual?: string;
  visualType?: 'image' | 'video';
  quote?: string;
  quoteAuthor?: string;
}

export interface Deck {
  slug: string;
  accentColor: string;
  slides: Slide[];
}

export const decks: Record<string, Deck> = {

  // ─────────────────────────────────────────────
  // GSTR-3B — 15 slides
  // ─────────────────────────────────────────────
  'gstr-3b': {
    slug: 'gstr-3b',
    accentColor: '#22C55E',
    slides: [
      {
        type: 'title',
        heading: 'GSTR-3B Filing Redesign',
        subheading: 'Simplifying GST Compliance at Scale',
        body: 'UX Design · UI Design · Research · ClearTax · 2022–2024',
      },
      {
        type: 'impact',
        heading: 'The Bottom Line',
        body: 'Before diving in — here\'s what this project delivered.',
        metrics: [
          { value: '1hr → 8min', label: 'Filing Time per GSTIN' },
          { value: '18% → 53%', label: 'GSTR-3B Adoption' },
          { value: '₹60cr → ₹108cr', label: 'Revenue Growth' },
          { value: '92 → 25', label: 'Weekly Escalations' },
        ],
      },
      {
        type: 'problem',
        heading: 'The Scale of the Problem',
        body: '1.4 crore Indian businesses file GSTR-3B every single month. ClearTax\'s existing product limited users to filing one GSTIN at a time — meaning an enterprise with 120 GSTINs repeated the same painful workflow 120 times.',
        quote: 'My team of 6 spends 5 full days every month filing for 120 GSTINs. We make mistakes because the process creates mistakes.',
        quoteAuthor: 'CFO, Manufacturing Firm',
      },
      {
        type: 'actions',
        heading: 'Five Core Failures I Identified',
        bullets: [
          'High cognitive load — manual tracking across GSTINs increased mental burden exponentially with scale',
          'No automation — 82% of users were copy-pasting from Excel, creating avoidable errors',
          'Reconciliation was opaque — matching GSTR-2B with purchase registers was a black box. 65% of support tickets were ITC mismatches',
          'Filing flow abandonment — 47% dropped off at the standalone data source step',
          'Excel dependency — users needed pivot tables, filtering, and bulk actions the platform didn\'t provide',
        ],
      },
      {
        type: 'impact',
        heading: 'Research Scope',
        body: 'I led the entire research program — field visits, support ticket analysis, and structured usability testing.',
        metrics: [
          { value: '50+', label: 'User Interviews' },
          { value: '500+', label: 'Support Tickets Analyzed' },
          { value: '3', label: 'Usability Test Rounds' },
          { value: '78%', label: 'Cited Multi-Filing Pain' },
        ],
      },
      {
        type: 'insight',
        heading: 'Key Research Finding: Users Are Not the Same',
        body: 'Field shadowing revealed three distinct user personas with completely different pain points:',
        bullets: [
          'Enterprise CFOs (120+ GSTINs) — need batch filing and status dashboards. Time is the primary cost.',
          'Tax Consultants (30+ clients) — need reconciliation tools and audit trails. Accuracy is the primary concern.',
          'MSME Owners (1–5 GSTINs) — need simplicity. They don\'t understand GST terminology and call support for basic steps.',
        ],
      },
      {
        type: 'statement',
        quote: 'I download the recon to Excel, create pivot tables, and cross-check. Your platform logic is a black box.',
        quoteAuthor: 'Tax Consultant managing 30 clients',
        body: 'This quote reshaped my entire approach — the platform needed to be transparent, not just automated.',
      },
      {
        type: 'actions',
        heading: 'Design Strategy — Five Mandates',
        bullets: [
          'Enable bulk filing for multiple GSTINs in one workflow — eliminate repetitive work entirely',
          'Build a pre-filing reconciliation engine with transparency — users must see how decisions affect ITC',
          'Let users choose and adjust data sources inline — not as a separate "gatekeeper" step',
          'Replicate Excel flexibility natively — filtering, sorting, grouping, and bulk actions in-platform',
          'Auto-generate Table-4 from reconciliation — turn ITC computation from mystery to transparent flow',
        ],
      },
      {
        type: 'split',
        heading: 'Multi-GSTIN Dashboard',
        body: 'Centralised status overview tracking pending filings, tax liabilities, and ITC statuses. Enterprises activated 20+ GSTINs in under 10 minutes. Batch filing for 10+ GSTINs in one click.',
        visual: '/cs/gstr-wireframe-b.webp',
        visualType: 'image',
      },
      {
        type: 'split',
        heading: 'Pre-Filing Reconciliation Engine',
        body: 'Split-view comparison of GSTR-2B vs Purchase Register with mismatches highlighted. Bulk approve/reject for 100+ invoices in one click. Each reconciliation action updates Table-4 in real time — turning a black box into a transparent system.',
        visual: '/cs/gstr-wireframe-c.webp',
        visualType: 'image',
      },
      {
        type: 'decision',
        heading: 'The Hardest Design Decision',
        body: 'The data source configuration page had a 47% drop-off rate. Users saw it as a gatekeeper — a mandatory step before they could start filing. I moved data source controls inline into the GSTR-3B form itself.',
        quote: 'Why can I not adjust sources directly in the GSTR-3B form?',
        quoteAuthor: 'MSME Owner',
      },
      {
        type: 'insight',
        heading: 'Why This Structural Change Mattered',
        body: 'A small IA change — moving configuration from a standalone page into inline controls — had the biggest impact of any single design decision:',
        bullets: [
          'Drop-off at data source: 47% → near-zero',
          'Users could adjust sources while reviewing Table-4 — context preserved',
          'Eliminated the single largest support call driver',
          'Lesson: Context > Isolation. Where a feature lives matters more than how it looks.',
        ],
      },
      {
        type: 'comparison',
        heading: 'Post-Launch Discovery',
        subheading: 'What We Expected|What Actually Happened',
        bullets: [
          'Users would adopt features after launch training',
          'CSM-led onboarding would drive proficiency',
          'Excel usage would decline with better in-platform tools',
          'CSMs were completing tasks FOR users to hit adoption metrics',
          'Adoption ≠ Proficiency — users were filing but not mastering',
          '89% still reverted to Excel for reconciliation — our tools weren\'t transparent enough',
        ],
      },
      {
        type: 'impact',
        heading: 'Final Results — Three Phases',
        metrics: [
          { value: '87%', label: 'Filing Time Reduction' },
          { value: '53%', label: 'GSTR-3B Adoption' },
          { value: '94%', label: 'Reconciliation Accuracy' },
          { value: '73%', label: 'Escalation Reduction' },
        ],
      },
      {
        type: 'actions',
        heading: 'What This Project Demonstrates',
        bullets: [
          'End-to-end ownership — from 50+ interviews to shipped product to post-launch iteration',
          'Research that changes direction — field shadowing revealed "adoption ≠ proficiency" which dashboards couldn\'t',
          'Structural design > visual design — moving data source inline was a small change with massive UX impact',
          'Transparency builds trust — live Table-4 previews drove adoption where mandates couldn\'t',
          'Iteration after launch matters — the 90-90-90 drive and user shadowing caught critical blind spots',
        ],
      },
      {
        type: 'cta',
        heading: 'Read the full case study',
        subheading: 'Explore the complete research, all wireframes, the 6-step IA, post-launch iterations, and the full before/after metrics table.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ZZAZZ.AI — 14 slides
  // ─────────────────────────────────────────────
  'zzazz-ai': {
    slug: 'zzazz-ai',
    accentColor: '#F59E0B',
    slides: [
      {
        type: 'title',
        heading: 'Zzazz.ai',
        subheading: 'Designing the UX Foundation for a New Information Economy',
        body: 'Designer · UX Architect · Product Architect · 2025',
      },
      {
        type: 'problem',
        heading: 'The Content Economy Is Broken',
        body: 'The content economy is broken on three sides simultaneously — and they\'re all connected:',
        bullets: [
          'Creators can\'t monetize — AI scrapes content, subscriptions convert <2%, individual creators earn almost nothing',
          'Consumers can\'t evaluate — too much content, no quality signal, paywall fatigue, subscribe-to-everything or leave',
          'No infrastructure — content gets copied trivially, cookie-based ads are dying, no ownership or rights layer exists',
        ],
      },
      {
        type: 'insight',
        heading: 'What ZZAZZ Proposes',
        body: 'Replace "brand" as the lazy quality shortcut with a more dynamic market signal — price — calculated by a Large Pricing Model (LPM) that evaluates content using intrinsic and extrinsic signals. Price becomes a trust indicator, not a paywall.',
      },
      {
        type: 'comparison',
        heading: 'What I Walked Into vs. What I Built',
        subheading: 'When I Joined|What I Shipped',
        bullets: [
          'Exchange existed as a table-heavy data listing',
          'Publish existed as basic metrics surface',
          'TimePay was an early concept/POC',
          'Signal Pill was a basic integration widget',
          'No creator vertical, no ad model, no ownership layer',
          'Exchange redesigned as query-led AI-native marketplace',
          'Publish designed as modular publisher workspace with 3 dashboard configs',
          'TimePay redesigned as 3-path behavior bridge (cash, credits, sponsored)',
          'Created Moments (creator vertical), Ad Exchange, and DOTS Protocol from scratch',
          'Architected ecosystem logic connecting all 7 verticals',
        ],
      },
      {
        type: 'statement',
        quote: 'I shifted the conversation from "Which POC do we ship first?" to "What ecosystem makes any single POC believable?"',
        body: 'This was the most important strategic contribution I made. Individual POCs can\'t prove the thesis — only the connected system can.',
      },
      {
        type: 'insight',
        heading: 'How My Role Evolved',
        body: 'I joined as a Product Designer. Within weeks, I identified that the gap wasn\'t in interface design — it was in ecosystem logic, go-to-market thinking, and adoption psychology. Nobody was connecting product strategy to the product experience.',
        bullets: [
          'From designing screens → to defining what each vertical should be and why it exists',
          'From working within modules → to architecting how modules connect into a system',
          'From individual contributor → to building a team of 4 designers across 7 verticals',
        ],
      },
      {
        type: 'actions',
        heading: 'Research That Shaped Everything',
        body: 'Direct conversations with end users and publishers fundamentally changed every design decision:',
        bullets: [
          'Users think in questions, not dashboards — "How is Modi vs Trump content performing?" drove the Exchange redesign',
          'Price works as signal until you pay it — informational pricing builds trust, but payment triggers loss aversion. This validated TimePay.',
          '"Buy content" is the wrong language — users reacted against it. They don\'t feel they own content after paying.',
          'Publishers adopt internally first — they\'d use pricing as an internal tool before showing it publicly',
          'Users are not traders — the UI must reflect content consumers, not financial analysts',
        ],
      },
      {
        type: 'visual',
        heading: 'The Seven Verticals',
        body: 'Each solves a different adoption problem. Each reinforces the others. Together, they make priced content believable.',
        visual: '/cs/zzazz-ecosystem-flow.svg',
        visualType: 'image',
      },
      {
        type: 'actions',
        heading: 'Distribution: Three Form Factors',
        body: 'The ecosystem needed to meet users where they are — not ask them to come to a new platform:',
        bullets: [
          'Widget (Signal Pill) — embedded on publisher sites. Users discover pricing without leaving their reading experience.',
          'Plugin — browser extension. Intercepts existing browsing behavior. Paste a URL → pricing → TimePay → unlocked.',
          'Terminal — full ecosystem in a conversational interface. Power users type natural language queries and get structured responses.',
          'The graduation path: Widget → Plugin → Terminal (discovery → exploration → commitment)',
        ],
      },
      {
        type: 'split',
        heading: 'Terminal — Chat-First Marketplace',
        body: 'Users type natural language queries and receive structured artifacts — tables, graphs, summaries — generated on demand. Paid services trigger TimePay inline. The chat becomes the marketplace.',
        visual: '/cs/zzazz-terminal-video.mp4',
        visualType: 'video',
      },
      {
        type: 'split',
        heading: 'Plugin — Zero Behavior Change',
        body: 'Paste a partner URL → recognized → pricing → TimePay → unlocked. Paste a non-partner URL → "Similar content available" → alternatives. Two flows, one extension, no behavior change required.',
        visual: '/cs/zzazz-plugin-video.mp4',
        visualType: 'video',
      },
      {
        type: 'actions',
        heading: 'Signals & Validation',
        bullets: [
          'Publishers used pricing as an internal decision tool — before showing prices to readers. Internal-first adoption validated.',
          'Price worked as a quality signal — higher-priced content was perceived as more trustworthy.',
          'Payment triggered sharp psychological friction — confirming TimePay\'s behavior-bridge was critical, not optional.',
          'The conversational direction resonated strongest — investors responded most positively to the Terminal\'s chat-first approach.',
          'The team scaled from 2 to 4+ designers — validating the ecosystem scope required dedicated ownership per vertical.',
        ],
      },
      {
        type: 'impact',
        heading: 'Impact',
        metrics: [
          { value: '7', label: 'Verticals Architected' },
          { value: '50%', label: 'Higher CTR Projected' },
          { value: '80–98%', label: 'Users Reached via TimePay' },
          { value: '2 → 4', label: 'Design Team Built' },
        ],
      },
      {
        type: 'cta',
        heading: 'Explore the verticals',
        subheading: 'Each vertical has its own case study with deep design process — Exchange, Publish, Moments, TimePay, Ad Exchange, DOTS, and Signal Pill.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MEMOIR — 14 slides
  // ─────────────────────────────────────────────
  'memoir': {
    slug: 'memoir',
    accentColor: '#C9A96E',
    slides: [
      {
        type: 'title',
        heading: 'Memoir',
        subheading: 'Designing & Building an Emotion-Led D2C Brand from Zero',
        body: 'Experience Architect · Product Designer (Co-founder) · 2026',
      },
      {
        type: 'problem',
        heading: 'The Market Gap',
        body: 'India\'s silver jewellery market is dominated by well-funded incumbents competing on trends and discounts. Everyone fights the same war — seasonal collections, influencer marketing, price undercutting. Nobody owns gifting as an emotional category.',
        quote: 'People don\'t buy jewellery. They buy emotional resolution.',
      },
      {
        type: 'insight',
        heading: 'The Core Insight: Two Buyers, One Product Page',
        body: 'Every product page serves two completely different emotional states that existing jewellery sites treat identically:',
        bullets: [
          'The Gifter — driven by taste anxiety ("Will they like it? What if it\'s wrong?"). Needs guidance, not options.',
          'The Self-Purchaser — driven by guilt permission ("I deserve this, but do I?"). Needs emotional justification, not features.',
          'The design question became: How do you serve both emotional states without fragmenting the experience?',
        ],
      },
      {
        type: 'decision',
        heading: 'The Answer: A Gift Toggle',
        body: 'Every product page has a toggle that shifts the entire narrative, imagery, and CTAs between "Give this to someone" and "Treat yourself." Same product, two emotional entry points. The toggle isn\'t a feature — it\'s the business model.',
        bullets: [
          'Gift mode: Story-first presentation, guided selection, parchment note card, unboxing narrative',
          'Self mode: Self-affirmation copy, "You deserve this" framing, personal ritual language',
        ],
      },
      {
        type: 'actions',
        heading: 'What I Designed & Built',
        bullets: [
          'Complete e-commerce experience — 4,060+ lines of React shipped end-to-end',
          'Mobile-first architecture — 85% of Indian e-commerce is mobile. Every component designed at 390px first.',
          '3-step gift guide — "Who is this for?" → "What\'s the occasion?" → curated picks with BEST MATCH tags',
          'Unboxing as design deliverable — ink-pressed linen box, hand-lettered story card, silk velvet reveal',
          'Six hero products with dual emotional framing',
          'AI-native workflow — Claude Code for engineering, Gemini for product imagery, Sora for video',
        ],
      },
      {
        type: 'split',
        heading: 'Mobile-First Homepage',
        body: 'Dual CTAs from the very first screen — "Find the Perfect Gift" and "Explore for Yourself." The emotional fork happens before the user sees a single product.',
        visual: '/cs/memoir-mobile-hero.webp',
        visualType: 'image',
      },
      {
        type: 'insight',
        heading: 'The AI-Native Workflow',
        body: 'This project was built by one designer using AI as a force multiplier across every dimension:',
        bullets: [
          'Claude Code — full engineering execution. 4,060+ lines of production React from conversational prompts.',
          'Gemini — product imagery generation. Six products, each with multiple mood shots.',
          'Sora — brand video generation. Emotional storytelling without a production team.',
          '30,000+ words of strategy documentation became AI prompts — the strategy IS the prompt.',
          'Stack collapsed from 6 tools to 3: Claude Code + Shopify Headless + Vercel',
        ],
      },
      {
        type: 'statement',
        quote: 'The strategy is the prompt. 30,000 words of positioning, buyer psychology, and brand narrative became the AI\'s context — and the output was better for it.',
        body: 'This is the emerging model: designers who can write deeply AND build with AI ship 10x faster.',
      },
      {
        type: 'decision',
        heading: 'Why Shopify Headless (Not Custom)',
        body: 'The founding team initially wanted a fully custom backend. I pushed for Shopify Headless — not because it was easier, but because it was strategically correct:',
        bullets: [
          'Inventory, payments, and shipping are solved problems — custom-building them wastes time on non-differentiating work',
          'Shopify handles PCI compliance, fraud detection, and tax calculation',
          'The differentiation is in the front-end experience and emotional architecture — that\'s where design effort should concentrate',
          'Time saved: 3 weeks instead of 3+ months for a comparable custom build',
        ],
      },
      {
        type: 'visual',
        heading: 'The Unboxing Experience',
        body: 'The unboxing isn\'t packaging — it\'s the final act of the emotional narrative. Every element is designed to extend the purchase emotion into a physical ritual.',
        visual: '/cs/memoir-mobile-unbox1.webp',
        visualType: 'image',
      },
      {
        type: 'actions',
        heading: 'Touch-First Design Decisions',
        body: 'Not just "responsive" — genuinely mobile-native:',
        bullets: [
          'Swipeable product galleries with momentum physics — feels native, not web',
          'Bottom-anchored CTAs always visible — the action is always one tap away',
          'Full-bleed product imagery — no wasted viewport on a 5.8" screen',
          'Moment-based navigation ("Anniversary," "Birthday") instead of category-based ("Rings," "Necklaces")',
          'Cart drawer, not cart page — preserves browsing context and reduces abandonment',
        ],
      },
      {
        type: 'impact',
        heading: 'What This Project Demonstrates',
        metrics: [
          { value: '4,060+', label: 'Lines of Code Shipped' },
          { value: '3 Weeks', label: 'Concept to Live' },
          { value: '3 AI Tools', label: 'Force Multipliers' },
          { value: '0 Handoffs', label: 'Design → Production' },
        ],
      },
      {
        type: 'insight',
        heading: 'The Bigger Implication',
        body: 'Memoir isn\'t just a jewellery site. It\'s proof of a new model:',
        bullets: [
          'One designer can ship a complete e-commerce experience in 3 weeks using AI tools',
          'Deep strategy + AI execution > large teams with shallow strategy',
          'The "AI-native designer" isn\'t a buzzword — it\'s a designer who can hold strategy, design, and engineering simultaneously',
          'The moat isn\'t code or pixels — it\'s the 30,000 words of thinking that precedes both',
        ],
      },
      {
        type: 'cta',
        heading: 'Read the full case study',
        subheading: 'Explore every design decision, the complete AI workflow, product pages, gift guide, unboxing system, and the strategic foundation.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MINT V8 — 13 slides
  // ─────────────────────────────────────────────
  'mint-v8': {
    slug: 'mint-v8',
    accentColor: '#156CEF',
    slides: [
      {
        type: 'title',
        heading: 'Mint V8',
        subheading: 'Token-Based, Theme-Ready Design System with PCS Logic',
        body: 'Design System Lead · ClearTax · 2023',
      },
      {
        type: 'problem',
        heading: 'Why Clear Needed a New System',
        body: 'Clear (ClearTax) had grown through acquisitions and rapid feature development. The result was design chaos:',
        bullets: [
          '760+ button variants and 624+ badge variants — nobody knew which to use',
          'Three fragmented systems — Basil, old Mint, and ad hoc components with no shared logic',
          'Engineers hardcoding UI because they didn\'t trust the existing components',
          'Theming was impossible — every regional brand required full component duplication',
          'Zero documentation — all knowledge was tribal',
        ],
      },
      {
        type: 'statement',
        quote: 'The problem wasn\'t that we had too many components. The problem was that we had no logic governing how components should be structured.',
        body: 'This realization led to PCS Logic — the core invention that made everything else possible.',
      },
      {
        type: 'insight',
        heading: 'The Breakthrough: PCS Logic',
        body: 'Every component, regardless of complexity, decomposes into exactly three zones:',
        bullets: [
          'Prefix — the leading element (icon, avatar, checkbox). Constrained to specific types per component.',
          'Content — the core content (text, label, value). Always present. The component\'s reason for existing.',
          'Suffix — the trailing element (icon, badge, action). Optional. Provides secondary information or actions.',
          'By constraining which elements are allowed in each zone per component type, you get massive flexibility within strict guardrails.',
        ],
      },
      {
        type: 'comparison',
        heading: 'Before PCS vs. After PCS',
        subheading: 'Before (Unstructured)|After (PCS Logic)',
        bullets: [
          '760 button variants — each a unique Figma component',
          'No naming convention — "Button_Primary_Large_WithIcon_v2_final"',
          'Adding a new variant meant duplicating and modifying existing',
          'Engineers guessing which component to use',
          '32 button variants — structured by PCS zones',
          'Systematic naming — ButtonPrimary/Prefix-Icon/Content-Text/Suffix-None',
          'New variants created by composing existing zones',
          'Engineers look up the PCS table and know exactly what to use',
        ],
      },
      {
        type: 'actions',
        heading: 'Phase 1 — Token Foundation',
        body: 'Before building any components, I established a comprehensive token system:',
        bullets: [
          'Typography tokens — functional naming (heading-lg, body-md) not appearance-based (font-24-bold)',
          'Spacing scale — 4px base unit, consistent rhythm across all components',
          'Colour tokens — semantic naming (surface-primary, text-accent) that maps to different values per theme',
          'Radius, elevation, shadows — all tokenized for consistency and theme-ability',
        ],
      },
      {
        type: 'split',
        heading: 'Colour Token Architecture',
        body: 'Functional names map to different values per theme. "surface-primary" is blue in CFC and purple in CSC — zero component changes needed.',
        visual: '/cs/mint-color-tokens.webp',
        visualType: 'image',
      },
      {
        type: 'insight',
        heading: 'Phase 2 — Atomic Components with PCS',
        body: 'Every component follows Atomic Design (Atoms → Molecules → Organisms) but with PCS Logic applied at every level:',
        bullets: [
          'Atoms — Button, Input, Badge, Tag. PCS defines their internal structure.',
          'Molecules — Search bar (Input + Button), Form field (Label + Input + Helper). PCS zones compose cleanly.',
          'Organisms — Data table, Filter panel, Navigation. Built from molecules that already follow PCS.',
          'Dynamic icon sets — icons automatically scale with component size for visual weight consistency.',
        ],
      },
      {
        type: 'decision',
        heading: 'The Theming Challenge',
        body: 'Clear operates two brands — CFC (blue) and CSC (purple). Previously, theming meant duplicating every component for each brand. My approach:',
        bullets: [
          'Components are theme-agnostic — they reference token names, never raw values',
          'Theme = token value map. CFC blue and CSC purple are just different token configurations.',
          'Zero component duplication — switch themes by swapping the token layer',
          'New brands can be added by creating a new token map. No design or engineering work on components.',
        ],
      },
      {
        type: 'decision',
        heading: 'The Adoption Strategy',
        body: 'I learned from past system rollouts that mandating adoption fails. Teams resist being told what to use. My approach was different:',
        bullets: [
          'Make the new system easier than the old one — if old patterns require more effort, migration happens naturally',
          'Weekly workshops — not presentations, but hands-on building sessions where teams create real features with Mint V8',
          'Figma playground — a sandbox where anyone can experiment without consequences',
          'Token sync pipeline — design tokens auto-sync to code, so what designers see is what engineers get',
          'Gradual deprecation — old components get "deprecated" labels, not deletion. No breaking changes.',
        ],
      },
      {
        type: 'statement',
        quote: 'Adoption is a design problem. If your system requires a mandate to be used, the system has failed.',
        body: '100% adoption in 6 weeks. Without a single mandate.',
      },
      {
        type: 'impact',
        heading: 'Results',
        metrics: [
          { value: '760 → 32', label: 'Button Variants' },
          { value: '80%', label: 'Total Variant Reduction' },
          { value: '70%', label: 'Dev Effort Saved' },
          { value: '6 Weeks', label: '100% Adoption' },
        ],
      },
      {
        type: 'cta',
        heading: 'Read the full case study',
        subheading: 'Explore PCS Logic in detail, the full token architecture, atomic component breakdown, theming system, and adoption strategy.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // EXCHANGE — 11 slides
  // ─────────────────────────────────────────────
  'zzazz-exchange': {
    slug: 'zzazz-exchange',
    accentColor: '#F59E0B',
    slides: [
      {
        type: 'title',
        heading: 'Exchange',
        subheading: 'Query-Led Content Discovery',
        body: 'Designer · UX Architect · Zzazz.ai · 2025',
      },
      {
        type: 'problem',
        heading: 'The Fundamental Problem',
        body: 'The existing Exchange was built as a live market listing with price tables and performance metrics. The foundation was solid, but it assumed users were financial traders. The actual users — content consumers, writers, researchers — just wanted to ask a question and get an answer.',
        bullets: [
          'Users had to learn too many new concepts before extracting insight',
          'Getting a simple answer required 3–4 filters and knowing the system structure in advance',
          'The UI looked like a trading terminal — but users weren\'t traders',
          'ZZAZZ\'s thesis says price makes content more accessible. The table-heavy UI made pricing feel like a barrier.',
        ],
      },
      {
        type: 'statement',
        quote: 'Users think in questions, not dashboard operations. They want to type "How is Modi vs Trump content performing?" — not reverse-engineer a filter combination.',
        body: 'This insight came directly from user conversations and reshaped the entire interaction model.',
      },
      {
        type: 'insight',
        heading: 'The Core Tension I Identified',
        body: 'The product says "price helps you decide." The UI says "here\'s a spreadsheet." Those can\'t coexist. I needed to design an interaction model where price enters the experience after relevance — as supporting context, not as the first thing users see.',
      },
      {
        type: 'comparison',
        heading: 'Three Directions Explored',
        subheading: 'Rejected Approaches|Chosen: Hybrid Approach',
        bullets: [
          'Module approach — better filters, familiar dashboard. Doesn\'t solve the core "translate intent to filters" problem.',
          'Pure chat — fully conversational. Solves discovery but removes structured views power users need.',
          'Users state their need in natural language first — the entry point is a query, not a dashboard',
          'Tables and graphs appear as artifacts when the query warrants them — on demand, not on arrival',
          'Two user modes served: exploration ("What\'s trending?") AND evaluation ("Compare these three articles")',
        ],
      },
      {
        type: 'actions',
        heading: 'Why Each Design Principle Exists',
        bullets: [
          'Query-first entry — in interviews, every user articulated what they wanted in one sentence. Translating to filters took 2+ minutes and often failed.',
          'Show curated subset, not everything — the old Exchange showed 50+ rows on load. Users spent 30 seconds just orienting before finding relevant content.',
          'Tables as artifacts, not front door — structured views are powerful for comparison, but only after the user has context.',
          'Price as context, not gate — price works as a positive signal alongside quality indicators. When price appears first, it triggers loss aversion. Sequencing matters.',
        ],
      },
      {
        type: 'split',
        heading: 'The Redesigned Experience',
        body: 'Query → curated results with pricing signals → drill into any piece for full pricing history and comparison. TimePay activates inline for paid services — no redirects, no checkout pages breaking the discovery flow.',
        visual: '/cs/zzazz-exchange-redesign-video.mp4',
        visualType: 'video',
      },
      {
        type: 'decision',
        heading: 'What I\'d Reconsider',
        body: 'Two areas where the design needs further iteration:',
        bullets: [
          'Suggested queries need real usage data — initial suggestions are manually curated. In production, they should come from actual search patterns.',
          'Chat-to-table transition needs smoother bridging — users in testing occasionally lost context when switching modes. Progressive reveal may work better than full view change.',
        ],
      },
      {
        type: 'impact',
        heading: 'Impact',
        body: 'The Exchange went from feeling like a trading terminal to feeling like an intelligent research assistant that happens to understand content pricing.',
        metrics: [
          { value: 'Query-Led', label: 'New Interaction Model' },
          { value: '3 Modes', label: 'Query / Results / Compare' },
          { value: '50%', label: 'Higher CTR Projected' },
        ],
      },
      {
        type: 'cta',
        heading: 'Read the full case study',
        subheading: 'Explore the complete trade-off analysis, before/after screenshots, design principles with rationale, and self-critique.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PUBLISH — 8 slides
  // ─────────────────────────────────────────────
  'zzazz-publish': {
    slug: 'zzazz-publish',
    accentColor: '#F59E0B',
    slides: [
      { type: 'title', heading: 'Publish', subheading: 'The Publisher Workspace', body: 'Designer · UX Architect · Zzazz.ai · 2025' },
      { type: 'problem', heading: 'The Challenge', body: 'Publishers needed to adopt ZZAZZ\'s pricing model — but they wouldn\'t expose prices to readers until they trusted the system. The workspace needed to be valuable as an internal decision tool before it could become a public-facing feature.' },
      { type: 'insight', heading: 'Four Research Insights', bullets: ['Publishers adopt internally first — pricing as a decision tool before showing it publicly', 'Different publishers need different workflows — editorial, revenue, competitive views', 'Revenue attribution is critical — publishers need to see which content earns and through which access path', 'Comparison is the primary use case — "How does my content compare to competitors?"'] },
      { type: 'actions', heading: 'What I Designed', bullets: ['Modular workspace with 3 configurable dashboards — Editorial Planning, Revenue Attribution, Competitive Benchmarking', 'Pricing intelligence — see content worth, WHY it\'s priced that way, and market comparisons', 'Custom analytics — trends over time, competitive positioning, revenue breakdown by access path', 'Direct integrations to Exchange and Signal Pill for live market context'] },
      { type: 'split', heading: 'Publisher Dashboard', body: 'Each publisher configures their workspace around their primary use case — editorial decision-making, revenue tracking, or competitive analysis. The same data, different lenses.', visual: '/cs/zzazz-publish-video.mp4', visualType: 'video' },
      { type: 'split', heading: 'Analytics & Intelligence', body: 'Pricing intelligence shows not just what content is worth, but why — which signals drive the price, how it compares to market, and where revenue comes from.', visual: '/cs/zzazz-publish-dashboard-video.mp4', visualType: 'video' },
      { type: 'impact', heading: 'Outcome', body: 'Publishers adopted pricing as an internal intelligence tool before showing prices to readers — validating Publish as a standalone product, not just a feature.', metrics: [{ value: '3', label: 'Dashboard Configs' }, { value: 'Internal-First', label: 'Adoption Validated' }, { value: 'Complete', label: 'Design Scope (0→1)' }] },
      { type: 'cta', heading: 'Read the full case study', subheading: 'Explore the modular workspace, publisher research, and all three dashboard configurations.' },
    ],
  },

  // ─────────────────────────────────────────────
  // MOMENTS — 8 slides
  // ─────────────────────────────────────────────
  'zzazz-moments': {
    slug: 'zzazz-moments',
    accentColor: '#F59E0B',
    slides: [
      { type: 'title', heading: 'Moments', subheading: 'Direct Creator Monetization', body: 'Designer · UX Architect · Zzazz.ai · 2025' },
      { type: 'problem', heading: 'The Creator Problem', body: 'Most platforms gate monetization behind follower counts, views, and virality. YouTube requires 1,000 subscribers. Instagram requires brand deals. Medium ties revenue to claps. A newcomer with genuinely valuable insight earns almost nothing.', quote: 'ZZAZZ\'s thesis: content has intrinsic value independent of creator popularity. If the LPM can price content by quality, creators should earn from day one.' },
      { type: 'insight', heading: 'The Design Challenge', body: 'How do you convince creators to publish on a new platform? By giving them something no other platform offers:', bullets: ['Pre-publish pricing — see what your content is worth before you publish it', 'Real-time quality feedback — iterate and watch the price adjust as you improve', 'Earnings from day one — no follower thresholds, no waiting for virality', 'Rights control — view-only, transferable, editorial, or derivative. Creator decides.'] },
      { type: 'actions', heading: 'The 5-Step Creator Workflow', bullets: ['Create — write, record, or upload content in any format', 'Preview Pricing — LPM shows market valuation before publishing. Transparency into why it\'s valued that way.', 'Improve — iterate and watch price adjust in real-time. This creates a quality feedback loop that doesn\'t exist anywhere else.', 'Set Rights — configure exactly how content can be used downstream', 'Publish & List — content enters Exchange, competes on value not brand'] },
      { type: 'split', heading: 'The Creator Experience', body: 'Pre-publish pricing creates a fundamentally new relationship between creator and content. For the first time, creators can see market value before committing to publish — and use that signal to improve their work.', visual: '/cs/zzazz-moments-video.mp4', visualType: 'video' },
      { type: 'insight', heading: 'Ecosystem Flywheel', body: 'Moments isn\'t just a creator tool — it\'s the supply engine for the entire ecosystem:', bullets: ['More diverse, higher-quality content → more valuable Exchange', 'More valuable Exchange → more revenue through TimePay', 'More revenue → attracts more creators → better supply', 'DOTS Protocol protects creators\' work downstream → trust → more willingness to publish'] },
      { type: 'impact', heading: 'Impact', metrics: [{ value: '0 → 1', label: 'Built from Scratch' }, { value: '5-Step', label: 'Creator Workflow' }, { value: 'Real-Time', label: 'Price Feedback Loop' }] },
      { type: 'cta', heading: 'Read the full case study', subheading: 'Explore the creator workflow, pre-publish pricing system, rights configuration, and ecosystem flywheel.' },
    ],
  },

  // ─────────────────────────────────────────────
  // TIMEPAY — 10 slides
  // ─────────────────────────────────────────────
  'zzazz-timepay': {
    slug: 'zzazz-timepay',
    accentColor: '#F59E0B',
    slides: [
      { type: 'title', heading: 'TimePay', subheading: 'The Behavior Bridge for Priced Content', body: 'Designer · UX Architect · Zzazz.ai · 2025' },
      { type: 'problem', heading: 'The Adoption Problem', body: 'Pricing content is technically solved by the LPM. But making users actually pay for content they\'re trained to get for free is a behavioral design problem:', bullets: ['Subscription conversion: 1.9% industry average', 'Paywall abandonment: 57% of users leave and never return', 'Users don\'t resist paying — they resist commitment to an uncertain outcome', 'A single "subscribe" button forces a binary choice on a spectrum of intent'] },
      { type: 'insight', heading: 'The Behavioral Insight', body: 'Different users are in different behavioral states when they encounter priced content. A decisive user wants to pay and read. An engaged user would pay if the cost were lower. A cost-sensitive user won\'t pay at all but will give attention. One payment model can\'t serve all three states.' },
      { type: 'actions', heading: 'Three Access Paths', body: 'Each path matches a behavioral state — not a user segment, but a moment of intent:', bullets: ['Cash Payment — direct purchase at market price. For decisive users who know what they want. Highest margin, lowest volume.', 'TPC Credits — earn through engagement, sharing, and participation. Spend on content. A circular economy where active users accumulate value. For engaged users who value the ecosystem.', 'Sponsored Access — brands pay for user access in exchange for attention. Cricket content shows cricket brand ads. Zero friction for cost-sensitive users. For users who would never pay but will engage with relevant brands.'] },
      { type: 'visual', heading: 'TPC Credit Loop', body: 'The credit system creates a self-reinforcing cycle: Earn → Store → Redeem → Earn Again. Active participation in the ecosystem generates value that can be spent on content.', visual: '/cs/zzazz-tpc-credit-loop.svg', visualType: 'image' },
      { type: 'decision', heading: 'Why Mobile-First', body: 'Content access decisions happen on impulse during mobile browsing. Desktop checkout flows kill the impulse. The entire TimePay experience was designed at 390px first:', bullets: ['Native bottom sheet with three clear options — one tap to choose', 'Apple Pay / Google Pay integration — no form filling, no friction', 'Content unlocks seamlessly — no redirect, no loading page, the article appears', 'Micropayment psychology — ₹5 feels trivial on a phone, expensive on a checkout page'] },
      { type: 'split', heading: 'The Access Experience', body: 'A native bottom sheet presents three clear options. The user picks one, the content unlocks. No checkout page, no registration wall, no 5-step payment flow. The entire transaction happens in the context where the user is already reading.', visual: '/cs/zzazz-timepay-video.mp4', visualType: 'video' },
      { type: 'comparison', heading: 'TimePay vs. Traditional Models', subheading: 'Traditional Paywall|TimePay', bullets: ['One option: Subscribe or leave', 'Binary choice forces commitment anxiety', '57% abandonment, 1.9% conversion', 'Three options matched to behavioral state', 'Cash, credits, or sponsored — something for every intent level', '80–98% of users engage with at least one path'] },
      { type: 'impact', heading: 'Impact', metrics: [{ value: '80–98%', label: 'Users Reached' }, { value: '50%', label: 'Higher CTR' }, { value: '3 Paths', label: 'Behavioral Access Model' }, { value: 'Concept → System', label: 'Full Scope' }] },
      { type: 'cta', heading: 'Read the full case study', subheading: 'Explore the three-path model, TPC credit loop, mobile-first rationale, and behavioral psychology behind each decision.' },
    ],
  },

  // ─────────────────────────────────────────────
  // SIGNAL PILL — 6 slides
  // ─────────────────────────────────────────────
  'zzazz-signal': {
    slug: 'zzazz-signal',
    accentColor: '#F59E0B',
    slides: [
      { type: 'title', heading: 'Signal Pill', subheading: 'Surfacing the Ecosystem Where Users Already Are', body: 'Designer · UX Architect · Zzazz.ai · 2025' },
      { type: 'problem', heading: 'The Problem', body: 'The original Signal Pill was a passive price display on partner publisher websites. It showed a number next to an article — useful, but it didn\'t create a pathway into the ecosystem. For users who never visit the Terminal or install the Plugin, this is the only touchpoint.' },
      { type: 'insight', heading: 'The Reframe', body: 'Signal Pill isn\'t a widget — it\'s the first impression of the entire ZZAZZ ecosystem for most users. It now communicates three things:', bullets: ['Content value signal — LPM price as an independent quality indicator. Higher-priced content perceived as more trustworthy.', 'Market context — how this piece compares to similar content in the market', 'Access pathway — for users who want to go deeper, a bridge into Exchange, TimePay, and the full ecosystem'] },
      { type: 'split', heading: 'The Redesigned Widget', body: 'Non-intrusive, contextually relevant, gateway not destination. Signal Pill enhances the reading experience without disrupting it — and creates awareness at the largest possible scale.', visual: '/cs/zzazz-signal-pill-video.mp4', visualType: 'video' },
      { type: 'impact', heading: 'Strategic Role', body: 'Signal Pill → Plugin → Terminal. The graduation path from discovery to commitment. Publishers monetize existing traffic. Users discover the ecosystem without visiting a new platform.', metrics: [{ value: 'Redesigned', label: 'Integration Layer' }, { value: 'Entry Point', label: 'Ecosystem Role' }, { value: 'Publisher Sites', label: 'Distribution Surface' }] },
      { type: 'cta', heading: 'Read the full case study', subheading: 'Explore the reframing, design principles, and ecosystem positioning.' },
    ],
  },

  // ─────────────────────────────────────────────
  // AD EXCHANGE — 7 slides
  // ─────────────────────────────────────────────
  'zzazz-ad-exchange': {
    slug: 'zzazz-ad-exchange',
    accentColor: '#F59E0B',
    slides: [
      { type: 'title', heading: 'Ad Exchange', subheading: 'Content-Intent Contextual Advertising', body: 'Designer · UX Architect · Zzazz.ai · 2025' },
      { type: 'problem', heading: 'The Gap I Identified', body: 'TimePay\'s third path — sponsored access — had no backend engine. Meanwhile, cookie-based ad targeting is dying. ZZAZZ had the infrastructure to build something fundamentally better: ads targeted by content intent, not user tracking.' },
      { type: 'insight', heading: 'Content-Intent Model', body: 'Traditional ads track users. ZZAZZ\'s LPM already evaluates content deeply — not just "sports" but cricket, performance, achievement, competition. A user reading that article has expressed intent through their content choice.', bullets: ['The content tells you what the user cares about right now', 'Match brands to content intent: cricket equipment, sports streaming, athletic wear', 'The user gets free access. The brand reaches a high-intent audience. The creator earns. Three-way value.'] },
      { type: 'comparison', heading: 'Content-Intent vs. Cookie Targeting', subheading: 'Cookie-Based (Dying)|Content-Intent (ZZAZZ)', bullets: ['Tracks users across websites — privacy invasive', 'Consent fatigue — users click "accept" without reading', 'Declining accuracy as browsers block third-party cookies', 'Passive targeting — user may not be in a relevant context right now', 'No user tracking — privacy-native by design', 'No consent required — targeting is based on content, not behavior', 'Higher intent — user is actively consuming relevant content', 'Premium pricing — priced content environments signal engaged, quality audiences'] },
      { type: 'decision', heading: 'What I Delivered', body: 'Product design isn\'t always screens. Sometimes the highest-leverage contribution is defining what needs to exist and why:', bullets: ['Gap analysis — identified the missing engine powering TimePay\'s sponsored access path', 'Landscape research — mapped the dying cookie ecosystem and emerging alternatives', 'Product architecture — defined the content-intent matching logic and three-way value model', 'Future scoping — deliverables for engineering to build the matching engine'] },
      { type: 'impact', heading: 'Impact', body: 'Ad Exchange enables TimePay\'s third access path — making ZZAZZ accessible to the 57% of users who would never pay but will engage with relevant brands.', metrics: [{ value: '0 → 1', label: 'Conceived & Architected' }, { value: 'Content-Intent', label: 'Targeting Model' }, { value: 'Enables', label: 'TimePay Sponsored Path' }] },
      { type: 'cta', heading: 'Read the full case study', subheading: 'Explore the gap analysis, content-intent model, cookie comparison, and strategic positioning.' },
    ],
  },

  // ─────────────────────────────────────────────
  // DOTS — 6 slides
  // ─────────────────────────────────────────────
  'zzazz-dots': {
    slug: 'zzazz-dots',
    accentColor: '#F59E0B',
    slides: [
      { type: 'title', heading: 'DOTS Protocol', subheading: 'Ownership, Lineage & Revenue Attribution', body: 'Designer · UX Architect · Zzazz.ai · 2025' },
      { type: 'problem', heading: 'The Trust Problem', body: 'Content gets copied easily and the original creator loses revenue and attribution. AI accelerates this — summarize, rephrase, redistribute in seconds. Without an ownership layer, creators won\'t publish their best work. The ecosystem can\'t grow without trust.' },
      { type: 'actions', heading: 'How DOTS Works', body: 'Every piece of content gets a DOT identifier that carries permanent ownership, rights, and lineage information:', bullets: ['Original Registration — DOT-123 records creator, timestamp, and rights configuration. Ownership is permanent.', 'Derivative Tracking — when content is remixed, the derivative gets DOT-1234 linking back to the original. The lineage chain is permanent and unforgeable.', 'Automatic Revenue Splits — when a derivative earns revenue, the original creator automatically receives their configured share. No invoicing, no disputes.', 'Lineage Visualization — creators see their full derivative tree and downstream revenue. Every contribution remains attributed and monetizable.'] },
      { type: 'split', heading: 'Lineage Model', body: 'Original content → derivative → lineage tree → revenue split flowing back. Creators participate in the downstream value of everything their work inspires.', visual: '/cs/zzazz-dots-lineage.svg', visualType: 'image' },
      { type: 'impact', heading: 'Ecosystem Role', body: 'Without DOTS, Moments can\'t fully protect creators. Supply weakens. Exchange has less content. TimePay has less to monetize. DOTS completes the trust loop that makes the entire ecosystem viable.', metrics: [{ value: 'Ownership', label: 'Layer Architected' }, { value: 'Lineage', label: 'Permanent Tracking' }, { value: 'Auto-Split', label: 'Revenue Attribution' }] },
      { type: 'cta', heading: 'Read the full case study', subheading: 'Explore the ownership model, lineage tracking, revenue splits, and ecosystem trust loop.' },
    ],
  },
};
