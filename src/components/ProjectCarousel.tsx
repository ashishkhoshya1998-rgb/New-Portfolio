import { useEffect, useRef } from 'react';
import { projects as rawProjects } from '../data/projects';
import { decks } from '../data/decks';

const projects = [...rawProjects].sort((a, b) => a.order - b.order);

export default function ProjectCarousel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.querySelectorAll('.gd-card__ctas').forEach((container) => {
      const highlight = container.querySelector('.gd-cta-highlight') as HTMLElement;
      const ctas = container.querySelectorAll('.gd-cta');
      if (!highlight || !ctas.length) return;

      const enterHandlers: Array<() => void> = [];
      ctas.forEach((cta) => {
        const handler = () => {
          const el = cta as HTMLElement;
          highlight.style.left = el.offsetLeft + 'px';
          highlight.style.width = el.offsetWidth + 'px';
          highlight.style.opacity = '1';
          ctas.forEach((c) => c.classList.remove('gd-cta--active'));
          el.classList.add('gd-cta--active');
        };
        enterHandlers.push(handler);
        cta.addEventListener('mouseenter', handler);
      });

      const leaveHandler = () => {
        highlight.style.opacity = '0';
        ctas.forEach((c) => c.classList.remove('gd-cta--active'));
      };
      container.addEventListener('mouseleave', leaveHandler);
    });
  }, []);

  return (
    <>
      <section className="pc" ref={sectionRef}>
        {/* Section header */}
        <div className="content-wrap pc__header">
          <h2 className="pc__header-title">Selected Work</h2>
          <div className="pc__header-meta">
            <span className="pc__header-count">{projects.length} Case Studies</span>
            <span className="pc__header-sep">/</span>
            <span className="pc__header-year">2021 — 2026</span>
          </div>
        </div>

        {/* Full-width project list */}
        <div className="content-wrap pc__grid">
          {projects.map((p, i) => (
            <article key={p.slug} className="gd-card">
              <div className="gd-card__text">
                <div>
                  <h3 className="gd-card__title">{p.title}</h3>
                  <p className="gd-card__subtitle">{p.subtitle}</p>
                  <p className="gd-card__overview">{p.overview}</p>
                  <div className="gd-card__meta">
                    <span className="gd-card__meta-item">{p.category}</span>
                    <span className="gd-card__meta-sep">·</span>
                    <span className="gd-card__meta-item">{p.role}</span>
                    <span className="gd-card__meta-sep">·</span>
                    <span className="gd-card__meta-item">{p.year}</span>
                  </div>
                </div>
                <div className="gd-card__ctas" style={{ '--cta-accent': p.accentColor } as React.CSSProperties}>
                  <span className="gd-cta-highlight"></span>
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
                    Case Study
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

        /* ── Full-width list ── */
        .pc__grid {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* ── Card: text left, image right ── */
        .gd-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
          overflow: visible;
          background: transparent;
        }

        /* Text side */
        .gd-card__text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 280px;
        }

        .gd-card__title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .gd-card__subtitle {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .gd-card__overview {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .gd-card__meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-muted);
          letter-spacing: 0.3px;
        }

        .gd-card__meta-sep {
          opacity: 0.3;
        }

        /* CTAs */
        .gd-card__ctas {
          position: relative;
          display: flex;
          flex-wrap: nowrap;
          gap: 10px;
          margin-top: 24px;
          width: fit-content;
        }

        .gd-cta-highlight {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          border-radius: 8px;
          background: var(--cta-accent, var(--accent));
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      width 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.2s ease;
        }

        .gd-cta {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 12px 24px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: var(--text);
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s ease, border-color 0.25s ease;
          cursor: none;
        }

        .gd-cta--active {
          color: #000;
          border-color: transparent;
        }

        .gd-cta__lock {
          opacity: 0.5;
          flex-shrink: 0;
          transition: opacity 0.25s ease;
        }

        .gd-cta--active .gd-cta__lock {
          opacity: 0.8;
        }

        /* Image side */
        .gd-card__img-link {
          display: block;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid var(--border);
          aspect-ratio: 3 / 2;
          transition: border-radius 0.5s var(--ease-out-expo);
        }

        .gd-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s var(--ease-out-expo);
        }

        .gd-card:hover .gd-card__img-link {
          border-radius: 32px;
        }

        .gd-card:hover .gd-card__img {
          transform: scale(1.03);
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

        /* ── Mobile — keep as-is ── */
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

          .pc__grid {
            gap: 40px;
          }

          .gd-card {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .gd-card__img-link {
            order: -1;
            aspect-ratio: 16 / 9;
          }

          .gd-card__text {
            min-height: auto;
            padding: 20px 0 0;
          }

          .gd-card__title {
            font-size: 22px;
          }

          .gd-card__overview {
            display: none;
          }

          .gd-card__meta {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
