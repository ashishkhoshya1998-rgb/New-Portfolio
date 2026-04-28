export interface Slide {
  label: string;
  content: string;
}

export interface Deck {
  slug: string;
  title: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  slides: Slide[];
}

export const decks: Record<string, Deck> = {

  // ─────────────────────────────────────────────
  // GSTR-3B Filing Redesign
  // ─────────────────────────────────────────────
  'gstr-3b': {
    slug: 'gstr-3b',
    title: 'GSTR-3B Filing Redesign',
    accentColor: '#22C55E',
    accentBg: '#EAF3DE',
    accentText: '#3B6D11',
    slides: [
      {
        label: 'Cover',
        content: `
          <div class="tag">B2B · Enterprise UX · Clear (ClearTax)</div>
          <div class="slide-title">GSTR-3B Filing Redesign</div>
          <div class="slide-subtitle">Simplifying GST compliance at scale for 1.4 crore+ businesses across India</div>
          <div class="divider"></div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">87%</div><div class="metric-label">Filing time reduced</div></div>
            <div class="metric-card"><div class="metric-num">53%</div><div class="metric-label">3B adoption (from 18%)</div></div>
            <div class="metric-card"><div class="metric-num">94%</div><div class="metric-label">Reconciliation accuracy</div></div>
            <div class="metric-card"><div class="metric-num">73%</div><div class="metric-label">Escalations reduced</div></div>
          </div>
          <div class="divider"></div>
          <div class="info-grid">
            <div><div class="info-label">Role</div><div class="info-value">UX Design · Research · UI</div></div>
            <div><div class="info-label">Duration</div><div class="info-value">Jun 2022 – Feb 2024</div></div>
            <div><div class="info-label">Ownership</div><div class="info-value">End-to-end UX lead</div></div>
            <div><div class="info-label">Scope</div><div class="info-value">50+ interviews · 500+ tickets</div></div>
          </div>
        `,
      },
      {
        label: 'Problem',
        content: `
          <div class="slide-label">Problem definition</div>
          <div class="slide-title">5 core failure points</div>
          <div class="slide-subtitle">The GSTN portal and Clear GST 1.0 limited users to filing one GSTIN at a time — an enterprise with 120 GSTINs repeated the same painful workflow 120 times.</div>
          <div class="step-row"><div class="step-num">1</div><div class="step-content"><div class="step-title">High cognitive load</div><div class="step-desc">Manual tracking across GSTINs multiplied mental burden — users had no single view of filing status or liability.</div></div></div>
          <div class="step-row"><div class="step-num">2</div><div class="step-content"><div class="step-title">Forced Excel dependency</div><div class="step-desc">82% of users copied data from Excel to the portal — the platform lacked filtering, pivoting, and bulk actions natively.</div></div></div>
          <div class="step-row"><div class="step-num">3</div><div class="step-content"><div class="step-title">Reconciliation anxiety</div><div class="step-desc">Matching GSTR-2B with purchase registers was opaque. 65% of support tickets were ITC mismatch complaints.</div></div></div>
          <div class="step-row"><div class="step-num">4</div><div class="step-content"><div class="step-title">Table-4 confusion</div><div class="step-desc">Users didn't understand what ITC they could claim vs. reverse. CAs re-checked Table-4 entries 3–4 times before submitting.</div></div></div>
          <div class="step-row"><div class="step-num">5</div><div class="step-content"><div class="step-title">Flow abandonment</div><div class="step-desc">A standalone data source step caused 47% drop-off — users didn't understand why it existed or what to do.</div></div></div>
          <div class="quote-block">
            <div class="quote-text">"My team of 6 spends 5 full days every month filing for 120 GSTINs. We make mistakes because the process creates mistakes."</div>
            <div class="quote-attr">CFO, Manufacturing Firm</div>
          </div>
        `,
      },
      {
        label: 'Research',
        content: `
          <div class="slide-label">Research</div>
          <div class="slide-title">50+ interviews · 500+ tickets · 3 usability tests</div>
          <div class="metric-grid metric-grid-3">
            <div class="metric-card" style="text-align:center"><div class="metric-num">50+</div><div class="metric-label">User interviews</div></div>
            <div class="metric-card" style="text-align:center"><div class="metric-num">500+</div><div class="metric-label">Tickets analysed</div></div>
            <div class="metric-card" style="text-align:center"><div class="metric-num">3</div><div class="metric-label">Usability tests</div></div>
          </div>
          <div class="insight-row">
            <div class="insight-icon">📋</div>
            <div class="insight-body"><div class="kf-head">Multi-GSTIN burden was #1 pain point</div><div class="kf-body">78% of enterprises with 10+ GSTINs cited multi-filing as their biggest pain. One FMCG finance team: 5 full days/month for 120 GSTINs.</div></div>
          </div>
          <div class="insight-row">
            <div class="insight-icon">📊</div>
            <div class="insight-body"><div class="kf-head">Excel as a crutch</div><div class="kf-body">82% copied from Excel to portal. Lack of in-platform grouping and pivoting increased error rates by 25%.</div></div>
          </div>
          <div class="insight-row">
            <div class="insight-icon">😰</div>
            <div class="insight-body"><div class="kf-head">ITC mismatches caused fear, not just inconvenience</div><div class="kf-body">MSME owners feared ITC blockages from vendor errors in GSTR-1 — leading to over-checking and filing delays.</div></div>
          </div>
          <div class="insight-row">
            <div class="insight-icon">❓</div>
            <div class="insight-body"><div class="kf-head">Table-4 was a black box</div><div class="kf-body">Users had no live feedback on how reconciliation choices affected final ITC. 89% reverted to Excel — CAs rechecked 3–4 times before submitting.</div></div>
          </div>
        `,
      },
      {
        label: 'Data Source',
        content: `
          <div class="slide-label">Design solution</div>
          <div class="slide-title">Data Source Selection</div>
          <div class="slide-subtitle">Table-specific mapping with dropdown menus, smart auto-suggested defaults for SMEs, and a preview mode to validate auto-filled values before proceeding.</div>
          <div class="screen"><img src="/cs/gstr-wireframe-a.webp" alt="Data source selection wireframe" /></div>
        `,
      },
      {
        label: 'Dashboard',
        content: `
          <div class="slide-label">Design solution</div>
          <div class="slide-title">Multi-GSTIN Filing Dashboard</div>
          <div class="slide-subtitle">Centralised status overview tracking pending filings, tax liabilities, and ITC statuses. Batch filing for 10+ GSTINs in one click — enterprises activated 20+ GSTINs in under 10 minutes.</div>
          <div class="screen"><img src="/cs/gstr-wireframe-b.webp" alt="Multi-GSTIN dashboard wireframe" /></div>
          <div class="kf-card">
            <div class="kf-head">Why this matters</div>
            <div class="kf-body">Users no longer context-switch between GSTINs. One view shows what's pending, what's risky, and what's ready to file — eliminating the mental tracking that caused errors.</div>
          </div>
        `,
      },
      {
        label: 'Reconciliation',
        content: `
          <div class="slide-label">Design solution</div>
          <div class="slide-title">Pre-Filing Reconciliation Engine</div>
          <div class="slide-subtitle">Split-view comparison of GSTR-2B vs Purchase Register with mismatches highlighted. Bulk approve/reject for 100+ invoices in one click.</div>
          <div class="screen"><img src="/cs/gstr-wireframe-c.webp" alt="Reconciliation engine wireframe" /></div>
          <div class="screen"><img src="/cs/gstr-data-prep.gif" alt="Data preparation flow" /></div>
        `,
      },
      {
        label: 'Table-4',
        content: `
          <div class="slide-label">Design solution</div>
          <div class="slide-title">Table-4 Live Preview</div>
          <div class="slide-subtitle">Users didn't trust auto-generated values. I designed a live side panel that shows cause-and-effect in real time — each reconciliation action immediately updates Table-4, turning a black box into a transparent system.</div>
          <div class="screen"><img src="/cs/gstr-wireframe-d.webp" alt="Table-4 live preview wireframe" /></div>
          <div class="screen"><img src="/cs/gstr-tax-calc.gif" alt="Tax calculation review" /></div>
          <div class="quote-block">
            <div class="quote-text">"The live previews made Table-4 feel less like a mystery."</div>
            <div class="quote-attr">Meera, Tax Consultant</div>
          </div>
        `,
      },
      {
        label: 'Upload',
        content: `
          <div class="slide-label">Design solution</div>
          <div class="slide-title">Upload & Filing Flow</div>
          <div class="slide-subtitle">Streamlined GSTN upload with automated OTP capture and a unified filing status dashboard covering all GSTINs. Filing time dropped from 30 min to under 2 min per batch.</div>
          <div class="screen"><img src="/cs/gstr-upload.gif" alt="Upload to GSTN" /></div>
          <div class="screen"><img src="/cs/gstr-filing.gif" alt="Filing and status dashboard" /></div>
        `,
      },
      {
        label: 'Iterations',
        content: `
          <div class="slide-label">Post-launch iteration</div>
          <div class="slide-title">What field shadowing revealed</div>
          <div class="slide-subtitle">Post-launch, the 90-90-90 adoption drive revealed a critical flaw: adoption ≠ proficiency. CSMs were doing tasks for users to hit targets. I shifted to direct user shadowing.</div>
          <div class="kf-card">
            <div class="kf-head">Iteration 1 — Data source moved inline</div>
            <div class="kf-body">Moved the standalone configuration step inside the form itself. Drop-off: 47% → near zero.</div>
          </div>
          <div class="screen"><img src="/cs/gstr-datasrc-redesign.gif" alt="Data source moved inline" /></div>
          <div class="kf-card">
            <div class="kf-head">Iteration 2 — Excel-free grouping</div>
            <div class="kf-body">Native grouping and subgrouping replaced the need for Excel pivot tables entirely.</div>
          </div>
          <div class="screen"><img src="/cs/gstr-excel-free.gif" alt="Native grouping replacing Excel" /></div>
          <div class="kf-card">
            <div class="kf-head">Iteration 3 — Transparent Table-4</div>
            <div class="kf-body">Real-time ITC impact previews — every row action updates the final number live.</div>
          </div>
          <div class="screen"><img src="/cs/gstr-table4.gif" alt="Table-4 live preview iteration" /></div>
        `,
      },
      {
        label: 'Impact',
        content: `
          <div class="slide-label">Impact</div>
          <div class="slide-title">Results across three phases</div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">87%</div><div class="metric-label">Filing time cut (1hr → 8min)</div></div>
            <div class="metric-card"><div class="metric-num">53%</div><div class="metric-label">3B adoption (from 18%)</div></div>
            <div class="metric-card"><div class="metric-num">94%</div><div class="metric-label">Reconciliation accuracy</div></div>
            <div class="metric-card"><div class="metric-num">73%</div><div class="metric-label">Escalations down (92→25/wk)</div></div>
          </div>
          <table class="impact-table">
            <thead><tr><th>Metric</th><th>Clear 1.0</th><th>2.0 Launch</th><th>Post-launch</th></tr></thead>
            <tbody>
              <tr><td>GSTR-3B adoption</td><td>18%</td><td>42%</td><td class="good">53%</td></tr>
              <tr><td>Speed per GSTIN</td><td>~1 hour</td><td>&lt;10 min</td><td class="good">&lt;8 min</td></tr>
              <tr><td>Recon accuracy</td><td>80%</td><td>92%</td><td class="good">94%</td></tr>
              <tr><td>CSM escalations/wk</td><td>92</td><td>80</td><td class="good">25</td></tr>
              <tr><td>Revenue</td><td>₹60cr</td><td>₹100cr</td><td class="good">₹108cr</td></tr>
              <tr><td>Automation</td><td>10%</td><td>30%</td><td class="good">60%</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        label: 'Reflection',
        content: `
          <div class="slide-label">Reflections</div>
          <div class="slide-title">What I'd carry forward</div>
          <div class="reflection-card">
            <div class="refl-num">01</div>
            <div class="refl-title">Adoption ≠ proficiency</div>
            <div class="refl-body">Incentivising usage without ensuring understanding backfires. Field shadowing revealed what dashboards couldn't — users were filing but not mastering the tool.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">02</div>
            <div class="refl-title">Context beats isolation</div>
            <div class="refl-body">Moving the data source step inline was a small structural change with massive UX impact. Where something lives in a flow shapes how users understand it.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">03</div>
            <div class="refl-title">Transparency builds trust</div>
            <div class="refl-body">Users needed to see how their actions shaped outcomes. Live Table-4 previews transformed anxiety into confidence — and drove adoption where mandates had failed.</div>
          </div>
        `,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Zzazz.ai
  // ─────────────────────────────────────────────
  'zzazz-ai': {
    slug: 'zzazz-ai',
    title: 'Zzazz.ai',
    accentColor: '#F59E0B',
    accentBg: '#FEF3D6',
    accentText: '#8B5E0A',
    slides: [
      {
        label: 'Cover',
        content: `
          <div class="tag">AI-Native · Marketplace · Ecosystem Design</div>
          <div class="slide-title">Zzazz.ai</div>
          <div class="slide-subtitle">Designing the UX foundation for a new information economy — from Product Designer to ecosystem architect.</div>
          <div class="divider"></div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">7</div><div class="metric-label">Verticals architected</div></div>
            <div class="metric-card"><div class="metric-num">50%</div><div class="metric-label">Higher CTR projected</div></div>
            <div class="metric-card"><div class="metric-num">80–98%</div><div class="metric-label">Users reached</div></div>
            <div class="metric-card"><div class="metric-num">2→4</div><div class="metric-label">Design team built</div></div>
          </div>
          <div class="divider"></div>
          <div class="info-grid">
            <div><div class="info-label">Role</div><div class="info-value">Designer · UX Architect · Product Architect</div></div>
            <div><div class="info-label">Year</div><div class="info-value">2025</div></div>
            <div><div class="info-label">Scope</div><div class="info-value">7 verticals · 3 form factors</div></div>
            <div><div class="info-label">Shift</div><div class="info-value">Product Designer → Ecosystem Architect</div></div>
          </div>
        `,
      },
      {
        label: 'Problem',
        content: `
          <div class="slide-label">Problem space</div>
          <div class="slide-title">The content economy is broken on three sides</div>
          <div class="screen"><img src="/cs/zzazz-problem-space.svg" alt="Problem space — three broken sides" /></div>
          <div class="step-row"><div class="step-num">1</div><div class="step-content"><div class="step-title">For creators & publishers</div><div class="step-desc">AI scrapes content, subscription conversion is low, individual creators earn almost nothing. Monetization is tied to views and brand strength, not content quality.</div></div></div>
          <div class="step-row"><div class="step-num">2</div><div class="step-content"><div class="step-title">For consumers</div><div class="step-desc">Too much content, relevance is poor, paywalls frustrate. No shared signal for what's worth your time or money.</div></div></div>
          <div class="step-row"><div class="step-num">3</div><div class="step-content"><div class="step-title">For market infrastructure</div><div class="step-desc">Content gets copied easily, no system-wide ownership layer, cookie-based ad logic is declining.</div></div></div>
        `,
      },
      {
        label: 'Before',
        content: `
          <div class="slide-label">What existed when I joined</div>
          <div class="slide-title">Disconnected POCs, no ecosystem logic</div>
          <div class="slide-subtitle">The base idea was strong. The LPM (Large Pricing Model) worked. But verticals weren't connected into a coherent story.</div>
          <div class="screen-row">
            <div class="screen"><img src="/cs/zzazz-state-entry-exchange.jpg" alt="Exchange before" /><div class="screen-caption">Exchange — table-heavy listing</div></div>
            <div class="screen"><img src="/cs/zzazz-state-entry-publish.jpg" alt="Publish before" /><div class="screen-caption">Publish — basic metrics</div></div>
            <div class="screen"><img src="/cs/zzazz-state-entry-signal.jpg" alt="Signal before" /><div class="screen-caption">Signal Pill — basic widget</div></div>
          </div>
          <div class="quote-block">
            <div class="quote-text">"I shifted the conversation from 'Which POC do we ship first?' to 'What ecosystem makes any single POC believable?'"</div>
          </div>
        `,
      },
      {
        label: 'Ecosystem',
        content: `
          <div class="slide-label">Ecosystem architecture</div>
          <div class="slide-title">7 verticals, each solving a different adoption problem</div>
          <div class="screen"><img src="/cs/zzazz-ecosystem-map.svg" alt="Ecosystem map — 7 verticals" /></div>
          <div class="step-row"><div class="step-num">1</div><div class="step-content"><div class="step-title">Exchange</div><div class="step-desc">Rethink & redesign — query-led, AI-native interaction model</div></div></div>
          <div class="step-row"><div class="step-num">2</div><div class="step-content"><div class="step-title">Publish</div><div class="step-desc">Complete design — workspace, dashboards, analytics, earnings</div></div></div>
          <div class="step-row"><div class="step-num">3</div><div class="step-content"><div class="step-title">Moments</div><div class="step-desc">New vertical — creator workflow, pre-publish pricing</div></div></div>
          <div class="step-row"><div class="step-num">4</div><div class="step-content"><div class="step-title">TimePay</div><div class="step-desc">Rethink & redesign — three-path access (cash, credits, sponsored attention)</div></div></div>
          <div class="step-row"><div class="step-num">5</div><div class="step-content"><div class="step-title">Ad Exchange + DOTS + Signal Pill</div><div class="step-desc">Contextual ads, ownership layer, pricing widget — completing the ecosystem</div></div></div>
        `,
      },
      {
        label: 'Exchange',
        content: `
          <div class="slide-label">Vertical deep-dive</div>
          <div class="slide-title">Exchange — From Trading Terminal to Research Assistant</div>
          <div class="slide-subtitle">Users think in questions, not dashboards. The old table-heavy UI made pricing feel like a barrier — the exact opposite of ZZAZZ's thesis that price makes content more accessible.</div>
          <div class="screen"><img src="/cs/zzazz-exchange-before.jpg" alt="Exchange before — table-heavy" /><div class="screen-caption">Before — table-heavy, filter-dependent interface</div></div>
          <div class="screen"><video src="/cs/zzazz-exchange-video.mp4" autoplay loop muted playsinline></video><div class="screen-caption">After — query-led hybrid interface</div></div>
          <div class="screen"><video src="/cs/zzazz-exchange-redesign-video.mp4" autoplay loop muted playsinline></video><div class="screen-caption">Redesigned experience — chat + structured views on demand</div></div>
        `,
      },
      {
        label: 'TimePay + Publish',
        content: `
          <div class="slide-label">Vertical deep-dives</div>
          <div class="slide-title">TimePay & Publish</div>
          <div class="kf-card">
            <div class="kf-head">TimePay — Three-path access system</div>
            <div class="kf-body">Cash, credits, or sponsored attention. Captures 80–98% of users who'd never subscribe. Payment activates inline — no redirect breaks the discovery flow.</div>
          </div>
          <div class="screen"><video src="/cs/zzazz-timepay-video.mp4" autoplay loop muted playsinline></video></div>
          <div class="kf-card">
            <div class="kf-head">Publish — Publisher workspace</div>
            <div class="kf-body">Pricing intelligence, performance analytics, custom dashboards, and earnings views. Publishers used pricing as an internal decision tool before exposing prices to readers.</div>
          </div>
          <div class="screen"><video src="/cs/zzazz-publish-video.mp4" autoplay loop muted playsinline></video></div>
        `,
      },
      {
        label: 'Distribution',
        content: `
          <div class="slide-label">Distribution strategy</div>
          <div class="slide-title">Three form factors for three adoption stages</div>
          <div class="slide-subtitle">Widget → Plugin → Terminal. A graduation path from discovering the ecosystem on publisher sites, to exploring across the web, to committing fully.</div>
          <div class="kf-card"><div class="kf-head">Terminal — Full ecosystem, chat-based</div><div class="kf-body">Natural language queries → structured artifacts. Paid services trigger TimePay inline.</div></div>
          <div class="screen"><video src="/cs/zzazz-terminal-video.mp4" autoplay loop muted playsinline></video></div>
          <div class="kf-card"><div class="kf-head">Plugin — Browser extension</div><div class="kf-body">Meets users in existing behavior. Paste URL → pricing → TimePay → unlocked.</div></div>
          <div class="screen"><video src="/cs/zzazz-plugin-video.mp4" autoplay loop muted playsinline></video></div>
          <div class="kf-card"><div class="kf-head">Widget — Embedded on publisher sites</div><div class="kf-body">Browse, compare, access via TimePay — without leaving the publisher's property.</div></div>
          <div class="screen"><video src="/cs/zzazz-widget-video.mp4" autoplay loop muted playsinline></video></div>
        `,
      },
      {
        label: 'Flow',
        content: `
          <div class="slide-label">System design</div>
          <div class="slide-title">The Ecosystem in Motion</div>
          <div class="slide-subtitle">Content enters → pricing applied → protection added → discovery → access → revenue flows back → the loop reinforces.</div>
          <div class="screen"><img src="/cs/zzazz-ecosystem-flow.svg" alt="End-to-end ecosystem flow" /></div>
          <div class="insight-row">
            <div class="insight-icon">💡</div>
            <div class="insight-body"><div class="kf-head">The critical realization</div><div class="kf-body">Pricing only becomes believable when discovery, access, monetization, ad logic, rights, ownership, and creator incentives all work together as one ecosystem. That realization was the most important strategic contribution I made.</div></div>
          </div>
        `,
      },
      {
        label: 'Impact',
        content: `
          <div class="slide-label">Impact & signals</div>
          <div class="slide-title">What this project demonstrates</div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">7</div><div class="metric-label">Verticals architected</div></div>
            <div class="metric-card"><div class="metric-num">3</div><div class="metric-label">Form factors shipped</div></div>
            <div class="metric-card"><div class="metric-num">50%</div><div class="metric-label">Higher CTR projected</div></div>
            <div class="metric-card"><div class="metric-num">2→4</div><div class="metric-label">Design team built</div></div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">01</div>
            <div class="refl-title">I see gaps others miss and act on them</div>
            <div class="refl-body">Joined as Product Designer. Identified the gap was in ecosystem logic, GTM thinking, and adoption psychology. Expanded my own scope.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">02</div>
            <div class="refl-title">I think in systems, not screens</div>
            <div class="refl-body">Seven verticals connected into a coherent ecosystem where each piece reinforces the others.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">03</div>
            <div class="refl-title">I design around user psychology</div>
            <div class="refl-body">Price shifts from signal to friction the moment payment enters. Users need behavior bridges, not lower prices.</div>
          </div>
        `,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Memoir
  // ─────────────────────────────────────────────
  'memoir': {
    slug: 'memoir',
    title: 'Memoir',
    accentColor: '#C9A96E',
    accentBg: '#F5EDE0',
    accentText: '#6B5A35',
    slides: [
      {
        label: 'Cover',
        content: `
          <div class="tag">Consumer · D2C · Mobile-First · User Research</div>
          <div class="slide-title">Memoir</div>
          <div class="slide-subtitle">Designing an emotion-led D2C jewellery experience — from competitive research and user interviews to a mobile-first product that reframes jewellery as emotional resolution.</div>
          <div class="divider"></div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">8</div><div class="metric-label">User interviews</div></div>
            <div class="metric-card"><div class="metric-num">2</div><div class="metric-label">Journey maps</div></div>
            <div class="metric-card"><div class="metric-num">20+</div><div class="metric-label">Screens designed</div></div>
            <div class="metric-card"><div class="metric-num">~2 Mo</div><div class="metric-label">Research → Ship</div></div>
          </div>
          <div class="divider"></div>
          <div class="info-grid">
            <div><div class="info-label">Role</div><div class="info-value">UX Designer</div></div>
            <div><div class="info-label">Year</div><div class="info-value">2026</div></div>
            <div><div class="info-label">Team</div><div class="info-value">3 Members (Design · Jewellery · Eng)</div></div>
            <div><div class="info-label">Scope</div><div class="info-value">Research · IA · Interaction · Mobile-First</div></div>
          </div>
        `,
      },
      {
        label: 'Research',
        content: `
          <div class="slide-label">Research phase</div>
          <div class="slide-title">8 competitors audited · 8 depth interviews</div>
          <div class="slide-subtitle">Audited 8 D2C jewellery brands across navigation, gifting features, and mobile quality. Conducted 8 semi-structured interviews (4 gifters, 4 self-purchasers) — 45–60 min each.</div>
          <div class="step-row"><div class="step-num">1</div><div class="step-content"><div class="step-title">Gifters suffer choice paralysis</div><div class="step-desc">"I don't need more options. I need someone to tell me which one is right." — 6 of 8 participants felt overwhelmed by product grids.</div></div></div>
          <div class="step-row"><div class="step-num">2</div><div class="step-content"><div class="step-title">Self-purchasers need permission, not persuasion</div><div class="step-desc">"If someone had just said 'you've earned this,' I might have checked out." — 4 of 4 women described purchase guilt.</div></div></div>
          <div class="step-row"><div class="step-num">3</div><div class="step-content"><div class="step-title">The unboxing matters as much as the product</div><div class="step-desc">"Half the gift is how it arrives." — 5 of 8 participants mentioned packaging in unprompted contexts.</div></div></div>
          <div class="kf-card">
            <div class="kf-head">Key competitive finding</div>
            <div class="kf-body">Not a single competitor (Giva, CaratLane, Mia, etc.) designed a guided gifting journey. Gift features were bolt-on additions — never integrated into core navigation or product discovery.</div>
          </div>
        `,
      },
      {
        label: 'Insight',
        content: `
          <div class="slide-label">Core insight</div>
          <div class="slide-title">Two audiences, two anxieties, one site</div>
          <div class="quote-block">
            <div class="quote-text">"People don't buy jewellery. They buy emotional resolution."</div>
          </div>
          <div class="ba-row">
            <div class="ba-box ba-before">
              <div class="ba-label">The Gifter</div>
              Carries taste anxiety — "What if she doesn't like it?" He doesn't speak jewellery language. He wants someone to tell him "this is the one."
            </div>
            <div class="ba-box ba-after">
              <div class="ba-label">The Self-Purchaser</div>
              Carries guilt — "Should I really spend this on myself?" Culturally conditioned to spend on family. Needs permission, not persuasion.
            </div>
          </div>
          <div class="kf-card">
            <div class="kf-head">This insight became the architecture</div>
            <div class="kf-body">Two parallel emotional journeys sharing a single product catalogue and checkout — branching at the copy and navigation layer, not the infrastructure layer. Every component adapts based on a single initial signal: the homepage CTA.</div>
          </div>
        `,
      },
      {
        label: 'Homepage',
        content: `
          <div class="slide-label">Homepage & navigation</div>
          <div class="slide-title">Dual CTAs + Occasion-First Navigation</div>
          <div class="slide-subtitle">The homepage captures purchase intent before the user sees a product. "First Light" / "In Her Honour" instead of "Rings" / "Necklaces" — because 6 of 8 gifters searched by occasion, not product type.</div>
          <div class="screen-row">
            <div class="screen"><img src="/cs/memoir-mobile-hero.webp" alt="Homepage with dual CTAs" /><div class="screen-caption">Dual CTAs: Shop Now + Find a Gift</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-moments.webp" alt="Moment navigation" /><div class="screen-caption">Occasion navigation + trust strip</div></div>
          </div>
        `,
      },
      {
        label: 'Gift Guide',
        content: `
          <div class="slide-label">Gifter journey — from research</div>
          <div class="slide-title">3-Step Gift Guide → 3 Curated Picks</div>
          <div class="slide-subtitle">Born from the research finding that gifters suffer choice paralysis. Full-screen, one-handed mobile flow that narrows the full catalogue to 3 recommendations via relationship × occasion matching.</div>
          <div class="screen-row screen-row-3">
            <div class="screen"><img src="/cs/memoir-mobile-gift-step1.webp" alt="Step 1: Who is this for?" /><div class="screen-caption">Step 1: Who is this for?</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-gift-step2.webp" alt="Step 2: What's the occasion?" /><div class="screen-caption">Step 2: Occasion</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-gift-step3.webp" alt="Step 3: Curated picks" /><div class="screen-caption">Step 3: 3 picks, not 50</div></div>
          </div>
          <div class="kf-card">
            <div class="kf-head">Design decision</div>
            <div class="kf-body">3 recommendations, not 12. One participant: "If you show me 3, I'll pick one. If you show me 12, I'll leave." Limiting output was a deliberate choice backed by research.</div>
          </div>
        `,
      },
      {
        label: 'Product',
        content: `
          <div class="slide-label">Product page</div>
          <div class="slide-title">Dual Copy + Gift Toggle + Story</div>
          <div class="slide-subtitle">Each product carries two parallel framings — gifter hook and self-purchaser hook — surfaced contextually. Gift toggle reveals an inline parchment card with pre-written messages.</div>
          <div class="screen-row screen-row-3">
            <div class="screen"><img src="/cs/memoir-mobile-product.webp" alt="Product page" /><div class="screen-caption">Full-bleed product + emotional hook</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-gift-card.webp" alt="Gift card toggle" /><div class="screen-caption">Inline gift card (not modal)</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-story.webp" alt="Product story" /><div class="screen-caption">The Story Behind This Piece</div></div>
          </div>
        `,
      },
      {
        label: 'Unboxing',
        content: `
          <div class="slide-label">From research: 5 of 8 mentioned packaging</div>
          <div class="slide-title">The Unboxing Ritual</div>
          <div class="slide-subtitle">"How She'll Receive It" — three swipeable steps resolving the gifter's core anxiety: "What will she actually experience?" Designed in collaboration with Alka's packaging vision.</div>
          <div class="screen-row screen-row-3">
            <div class="screen"><img src="/cs/memoir-mobile-unbox1.webp" alt="The Opening" /><div class="screen-caption">The Opening</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-unbox2.webp" alt="The Narrative" /><div class="screen-caption">The Narrative</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-unbox3.webp" alt="The Reveal" /><div class="screen-caption">The Reveal</div></div>
          </div>
        `,
      },
      {
        label: 'Cart',
        content: `
          <div class="slide-label">Checkout</div>
          <div class="slide-title">Cart & Checkout — Gift Persistence</div>
          <div class="slide-subtitle">Cart drawer slides up from bottom. "GIFT WRAPPED" badge on gifted items. Gift messages persist through checkout as cart line attributes. Bottom-anchored CTA with total always visible.</div>
          <div class="screen-row">
            <div class="screen"><img src="/cs/memoir-mobile-cart-drawer.webp" alt="Cart drawer" /><div class="screen-caption">Cart drawer with gift badge</div></div>
            <div class="screen"><img src="/cs/memoir-mobile-cart.webp" alt="Full cart view" /><div class="screen-caption">Full cart + bottom checkout</div></div>
          </div>
        `,
      },
      {
        label: 'Validation',
        content: `
          <div class="slide-label">Impact & validation</div>
          <div class="slide-title">Usability Testing + Pre-Launch Targets</div>
          <div class="slide-subtitle">Informal usability sessions with 5 participants on the functional prototype validated key design decisions.</div>
          <div class="step-row"><div class="step-num">✓</div><div class="step-content"><div class="step-title">Gift guide: 5/5 completed without assistance</div><div class="step-desc">Average completion time: 38 seconds across the 3-step flow.</div></div></div>
          <div class="step-row"><div class="step-num">✓</div><div class="step-content"><div class="step-title">Gift card: 4/5 engaged with parchment card</div><div class="step-desc">2 typed custom messages, 2 selected pre-written options.</div></div></div>
          <div class="step-row"><div class="step-num">✓</div><div class="step-content"><div class="step-title">Unboxing: highest-engagement product section</div><div class="step-desc">"Oh, so this is what she'll actually get. That's nice." — Test participant</div></div></div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">>60%</div><div class="metric-label">Gift guide completion target</div></div>
            <div class="metric-card"><div class="metric-num"><70%</div><div class="metric-label">Cart abandonment target</div></div>
            <div class="metric-card"><div class="metric-num">>3.5m</div><div class="metric-label">Session duration target</div></div>
            <div class="metric-card"><div class="metric-num">80–150</div><div class="metric-label">Orders target (Day 90)</div></div>
          </div>
        `,
      },
      {
        label: 'Reflection',
        content: `
          <div class="slide-label">What I learned</div>
          <div class="slide-title">Reflections</div>
          <div class="reflection-card">
            <div class="refl-num">01</div>
            <div class="refl-title">Research before tools</div>
            <div class="refl-body">The competitive audit and interviews took 3 weeks — a third of the timeline. But every design decision was grounded in real patterns. The occasion-first IA, the 3-recommendation limit, the inline gift card — all came from research.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">02</div>
            <div class="refl-title">Permission framing over persuasion framing</div>
            <div class="refl-body">"Choose yourself" outperformed "Treat yourself" in every test. Self-purchasers don't need convincing — they need permission. This reframing changed the entire tone of the self-purchaser journey.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">03</div>
            <div class="refl-title">AI accelerates execution, not thinking</div>
            <div class="refl-body">The research, strategy, and design decisions were human-led. AI tools compressed the build timeline. The gift guide works because of what we learned from users in interviews — not because of what any AI suggested.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">04</div>
            <div class="refl-title">The unboxing is product</div>
            <div class="refl-body">Making the unboxing a browsable digital feature — not just physical packaging — turned out to be the highest-engagement section. Alka's packaging vision brought into the digital product layer through close collaboration.</div>
          </div>
        `,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Mint V8 Design System
  // ─────────────────────────────────────────────
  'mint-v8': {
    slug: 'mint-v8',
    title: 'Mint V8 Design System',
    accentColor: '#156CEF',
    accentBg: '#E0EDFE',
    accentText: '#0B3D8A',
    slides: [
      {
        label: 'Cover',
        content: `
          <div class="tag">Design System · Token Architecture · B2B</div>
          <div class="slide-title">Mint V8 Design System</div>
          <div class="slide-subtitle">Token-based, theme-ready system with PCS Logic — reducing 760 button variants to 32 while supporting multi-theme architecture.</div>
          <div class="divider"></div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">80%</div><div class="metric-label">Variant reduction</div></div>
            <div class="metric-card"><div class="metric-num">70%</div><div class="metric-label">Dev effort saved</div></div>
            <div class="metric-card"><div class="metric-num">100%</div><div class="metric-label">Adoption in 6 weeks</div></div>
            <div class="metric-card"><div class="metric-num">0</div><div class="metric-label">Component duplication</div></div>
          </div>
          <div class="divider"></div>
          <div class="info-grid">
            <div><div class="info-label">Role</div><div class="info-value">Design System Lead</div></div>
            <div><div class="info-label">Company</div><div class="info-value">Clear (ClearTax)</div></div>
            <div><div class="info-label">Year</div><div class="info-value">2023</div></div>
            <div><div class="info-label">Scope</div><div class="info-value">Tokens · Components · Adoption</div></div>
          </div>
        `,
      },
      {
        label: 'Problem',
        content: `
          <div class="slide-label">The challenge</div>
          <div class="slide-title">5 reasons we needed to start over</div>
          <div class="step-row"><div class="step-num">1</div><div class="step-content"><div class="step-title">Fragmented systems</div><div class="step-desc">Finance Cloud and Supply Chain Cloud had no consistent UI — some used outdated Basil, others a barebones Mint library.</div></div></div>
          <div class="step-row"><div class="step-num">2</div><div class="step-content"><div class="step-title">Engineers hardcoding UI</div><div class="step-desc">Without a reliable system, engineers hardcoded visual decisions — diverging further with every sprint.</div></div></div>
          <div class="step-row"><div class="step-num">3</div><div class="step-content"><div class="step-title">Impossible theming</div><div class="step-desc">Regional theming for global expansion required duplicating entire component sets.</div></div></div>
          <div class="step-row"><div class="step-num">4</div><div class="step-content"><div class="step-title">Component variant explosion</div><div class="step-desc">760+ button variants. 624+ badges. 113+ inputs. Maintenance was a nightmare.</div></div></div>
          <div class="step-row"><div class="step-num">5</div><div class="step-content"><div class="step-title">Zero documentation</div><div class="step-desc">5 designers, 5 different answers. Design decisions were tribal knowledge.</div></div></div>
          <div class="quote-block">
            <div class="quote-text">"I don't trust the Figma components. I just hardcode CSS."</div>
            <div class="quote-attr">Amit, Frontend Engineer</div>
          </div>
        `,
      },
      {
        label: 'System',
        content: `
          <div class="slide-label">The system overview</div>
          <div class="slide-title">Mint V8 — Built from Tokens Up</div>
          <div class="screen"><img src="/cs/mint-hero.jpg" alt="Mint V8 design system overview" /></div>
          <div class="kf-card">
            <div class="kf-head">Tokens first, always</div>
            <div class="kf-body">I studied Material Design, Carbon, and atomic design. One insight: everything scalable starts with a token system. The team wanted quick wins. I pushed for a 3-week token foundation — every component built after would be theme-ready by default.</div>
          </div>
        `,
      },
      {
        label: 'Tokens',
        content: `
          <div class="slide-label">Foundation</div>
          <div class="slide-title">Token Architecture</div>
          <div class="slide-subtitle">Four categories: Typography, Spacing, Colour (functional names, not appearance), Radius/Elevation. System tokens → Reference tokens → Raw values.</div>
          <div class="screen"><video src="/cs/mint-token-arch.webm" autoplay loop muted playsinline></video><div class="screen-caption">Token architecture — system → reference → raw values</div></div>
          <div class="screen"><img src="/cs/mint-color-tokens.webp" alt="Colour token system" /><div class="screen-caption">Colour tokens — functional names mapped per theme</div></div>
        `,
      },
      {
        label: 'PCS Logic',
        content: `
          <div class="slide-label">The breakthrough</div>
          <div class="slide-title">PCS Logic — Prefix · Content · Suffix</div>
          <div class="slide-subtitle">As we built molecules, we hit a wall — component bloat. A whiteboard session revealed a pattern: nearly every component = Prefix + Content + Suffix. Constrained slots per component type.</div>
          <div class="screen"><img src="/cs/mint-button.gif" alt="PCS Logic reducing button variants" /><div class="screen-caption">Buttons: 760 variants → 32 with PCS Logic</div></div>
          <div class="metric-grid">
            <div class="metric-card"><div class="metric-num">760→32</div><div class="metric-label">Buttons</div></div>
            <div class="metric-card"><div class="metric-num">624→25</div><div class="metric-label">Badges</div></div>
            <div class="metric-card"><div class="metric-num">113→40</div><div class="metric-label">Inputs</div></div>
            <div class="metric-card"><div class="metric-num">80%</div><div class="metric-label">Total reduction</div></div>
          </div>
        `,
      },
      {
        label: 'Components',
        content: `
          <div class="slide-label">Building blocks</div>
          <div class="slide-title">Icons, Organisms & Atomic Design</div>
          <div class="kf-card">
            <div class="kf-head">Dynamic icon weights</div>
            <div class="kf-body">Each icon in multiple weights (body, label) — designers switch based on prominence. Fixed the visual imbalance between icons and text.</div>
          </div>
          <div class="screen"><img src="/cs/mint-icons.gif" alt="Dynamic icon weights" /></div>
          <div class="kf-card">
            <div class="kf-head">Organisms from PCS molecules</div>
            <div class="kf-body">Filter bars, form builders, data tables — all assembled from the same atomic PCS base. No one-off components.</div>
          </div>
          <div class="screen"><img src="/cs/mint-organisms.jpg" alt="Organisms assembled from PCS molecules" /></div>
        `,
      },
      {
        label: 'Theming',
        content: `
          <div class="slide-label">Multi-theme support</div>
          <div class="slide-title">Two Themes, Zero Component Duplication</div>
          <div class="slide-subtitle">Clear Finance Cloud (Blue) and Clear Supply Chain (Purple). They differ only in token values — no component changes needed.</div>
          <div class="screen"><img src="/cs/mint-theming.gif" alt="Live theming — CFC to CSC" /><div class="screen-caption">CFC (blue) → CSC (purple) — only token values swap</div></div>
          <div class="ba-row">
            <div class="ba-box ba-before">
              <div class="ba-label">Before</div>
              Each theme required duplicating entire component libraries. New region = new maintenance burden.
            </div>
            <div class="ba-box ba-after">
              <div class="ba-label">After</div>
              Token value swap. Every component, every organism — themed automatically with zero duplication.
            </div>
          </div>
        `,
      },
      {
        label: 'Adoption',
        content: `
          <div class="slide-label">Adoption strategy</div>
          <div class="slide-title">100% adoption — because the team chose it</div>
          <div class="slide-subtitle">The Design Manager wanted immediate system-wide deprecation. I pushed back — mandates create resistance. Each sprint that proved PCS Logic's value converted skeptics into advocates.</div>
          <div class="step-row"><div class="step-num">1</div><div class="step-content"><div class="step-title">Weekly PCS workshops</div><div class="step-desc">45-min sessions every Thursday. After 4 weeks, all designers were self-sufficient. Engineers attended too.</div></div></div>
          <div class="step-row"><div class="step-num">2</div><div class="step-content"><div class="step-title">Figma playground</div><div class="step-desc">Shared experimentation space with interactive PCS components for inline exploration.</div></div></div>
          <div class="step-row"><div class="step-num">3</div><div class="step-content"><div class="step-title">Gradual deprecation</div><div class="step-desc">2–3 screens per sprint migrated. By week 4, teams were voluntarily migrating their own screens.</div></div></div>
          <div class="quote-block">
            <div class="quote-text">"I was skeptical. Once I built with PCS, I couldn't go back."</div>
            <div class="quote-attr">Vikram, Sr. Product Designer</div>
          </div>
        `,
      },
      {
        label: 'Reflection',
        content: `
          <div class="slide-label">Reflections</div>
          <div class="slide-title">What I'd carry forward</div>
          <div class="reflection-card">
            <div class="refl-num">01</div>
            <div class="refl-title">Tokens first, always</div>
            <div class="refl-body">Everything scalable flows from a token system. Components built without tokens are houses built without foundations.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">02</div>
            <div class="refl-title">Structure > Style</div>
            <div class="refl-body">PCS abstracts structure, not just visuals. It's a thinking model as much as a design pattern — and that's what made it transferable to engineers.</div>
          </div>
          <div class="reflection-card">
            <div class="refl-num">03</div>
            <div class="refl-title">Adoption is a design problem</div>
            <div class="refl-body">Workshops and playgrounds beat mandates every time. Make the new system easier to use than the old one — and the team will choose it themselves.</div>
          </div>
        `,
      },
    ],
  },

};
