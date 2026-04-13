import { projects as rawProjects } from '../data/projects';
import { decks } from '../data/decks';

const projects = [...rawProjects].sort((a, b) => Number(b.year) - Number(a.year));

export default function ProjectCarousel() {
  return (
    <>
      <section className="pc">
        {/* Section header */}
        <div className="content-wrap pc__header">
          <h2 className="pc__header-title">Selected Work</h2>
          <div className="pc__header-meta">
            <span className="pc__header-count">{projects.length} Case Studies</span>
            <span className="pc__header-sep">/</span>
            <span className="pc__header-year">2021 — 2026</span>
          </div>
        </div>

        {/* 2-column grid */}
        <div className="content-wrap pc__grid">
          {projects.map((p, i) => (
            <article key={p.slug} className="gd-card">
              <div className="gd-card__text">
                <div>
                  <h3 className="gd-card__title">{p.title}</h3>
                  <p className="gd-card__desc">{p.subtitle}</p>
                </div>
                <div className="gd-card__ctas">
                  <a
                    href={`/project/${p.slug}`}
                    className="gd-cta"
                    style={{ '--cta-accent': p.accentColor } as React.CSSProperties}
                    onClick={(e) => {
                      const img = (e.currentTarget.closest('.gd-card') as HTMLElement)?.querySelector('.gd-card__img') as HTMLImageElement;
                      if (img) {
                        e.preventDefault();
                        const rect = img.getBoundingClientRect();
                        sessionStorage.setItem('ak-project-rect', JSON.stringify({
                          top: rect.top, left: rect.left, width: rect.width, height: rect.height,
                          slug: p.slug, coverImage: p.coverImage,
                        }));
                        window.location.href = `/project/${p.slug}`;
                      }
                    }}
                  >
                    {p.slug === 'memoir' && (
                      <svg className="gd-cta__lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    )}
                    Full Case Study
                  </a>
                  {(decks as Record<string, unknown>)[p.slug] && (
                    <a
                      href={`/deck/${p.slug}`}
                      className="gd-cta"
                      style={{ '--cta-accent': p.accentColor } as React.CSSProperties}
                    >
                      Quick Read
                    </a>
                  )}
                </div>
              </div>
              <a
                href={`/project/${p.slug}`}
                className="gd-card__img-link"
                data-cursor="View"
                onClick={(e) => {
                  e.preventDefault();
                  const img = (e.currentTarget as HTMLElement).querySelector('.gd-card__img') as HTMLImageElement;
                  if (img) {
                    const rect = img.getBoundingClientRect();
                    sessionStorage.setItem('ak-project-rect', JSON.stringify({
                      top: rect.top, left: rect.left, width: rect.width, height: rect.height,
                      slug: p.slug, coverImage: p.coverImage,
                    }));
                  }
                  window.location.href = `/project/${p.slug}`;
                }}
              >
                <img
                  src={p.coverImage}
                  alt={p.title}
                  className="gd-card__img"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
              </a>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="content-wrap pc__footer">
          <a href="/projects" className="pc__all-link">View all projects <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <style>{`
        .pc {
          position: relative;
          padding: 96px 0 64px;
        }

        /* Header */
        .pc__header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 48px;
          padding-bottom: 20px;
          border-bottom: 0.5px solid var(--border);
        }

        .pc__header-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600;
          color: var(--text);
          line-height: 1.1;
        }

        .pc__header-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-body);
        }

        .pc__header-sep { opacity: 0.3; }
        .pc__header-count { font-weight: 500; }
        .pc__header-year { font-variant-numeric: tabular-nums; }

        /* ── Grid ── */
        .pc__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 28px;
        }

        /* ── Card (shared with projects page via same class names) ── */
        .gd-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          overflow: visible;
          background: transparent;
        }

        .gd-card__text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px 28px;
          min-height: 280px;
        }

        .gd-card__title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .gd-card__desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          flex: 1;
        }

        .gd-card__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .gd-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 14px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.15s ease;
          cursor: none;
        }

        .gd-cta:hover {
          background: var(--cta-accent, var(--accent));
          border-color: var(--cta-accent, var(--accent));
          color: #000;
          transform: translateY(-1px);
        }

        .gd-cta__lock {
          opacity: 0.5;
          flex-shrink: 0;
        }

        .gd-cta:hover .gd-cta__lock {
          opacity: 0.8;
        }

        .gd-card__img-link {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          aspect-ratio: 4 / 3;
        }

        .gd-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 8px;
          transition: transform 0.5s var(--ease-out-expo), border-radius 0.5s var(--ease-out-expo);
        }

        .gd-card:hover .gd-card__img {
          transform: scale(1.03);
          border-radius: 32px;
        }

        /* Footer link */
        .pc__footer {
          text-align: center;
          margin-top: 48px;
        }

        .pc__all-link {
          font-size: 15px;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          transition: color 0.2s;
        }

        .pc__all-link:hover {
          color: var(--accent-hover);
        }

        /* ── Mobile ── */
        @media (max-width: 1024px) {
          .pc__grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .pc {
            padding: 64px 0 48px;
          }

          .pc__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 32px;
          }

          .gd-card {
            grid-template-columns: 1fr;
          }

          .gd-card__img-link {
            order: -1;
            aspect-ratio: 16 / 9;
          }

          .gd-card__text {
            min-height: auto;
            padding: 24px 20px;
          }

          .gd-card__title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}
