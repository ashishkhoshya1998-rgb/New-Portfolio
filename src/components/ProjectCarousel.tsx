import { useEffect, useRef, useState, useCallback } from 'react';
import { projects as rawProjects } from '../data/projects';

const projects = [...rawProjects].sort((a, b) => Number(b.year) - Number(a.year));

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [lerpPos, setLerpPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  const active = projects[activeIndex];

  // IntersectionObserver to track active card
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.5 }
      );
      obs.observe(card);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lerp cursor
  useEffect(() => {
    const animate = () => {
      setLerpPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.15,
        y: prev.y + (cursorPos.y - prev.y) * 0.15,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [cursorPos]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleCardEnter = useCallback(() => setCursorVisible(true), []);
  const handleCardLeave = useCallback(() => setCursorVisible(false), []);

  return (
    <>
      <section className="pc" ref={sectionRef} onMouseMove={handleMouseMove}>
        {/* Section header */}
        <div className="content-wrap pc__header">
          <h2 className="pc__header-title">Selected Work</h2>
          <div className="pc__header-meta">
            <span className="pc__header-count">{projects.length} Case Studies</span>
            <span className="pc__header-sep">/</span>
            <span className="pc__header-year">2021 — 2026</span>
          </div>
        </div>

        {/* Three-zone layout */}
        <div className="content-wrap pc__layout">
          {/* Left — Thumbnails */}
          <div className="pc__thumbs">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                className={`pc__thumb ${i === activeIndex ? 'pc__thumb--active' : ''}`}
                style={{
                  borderColor: i === activeIndex ? p.accentColor : 'transparent',
                  backgroundColor: `${p.accentColor}22`,
                }}
                onClick={() => {
                  cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                aria-label={`View ${p.title}`}
              >
                <span style={{ color: p.accentColor }}>{p.initial}</span>
              </button>
            ))}
          </div>

          {/* Center — Project cards */}
          <div className="pc__cards">
            {projects.map((p, i) => (
              <a
                key={p.slug}
                ref={(el) => { cardRefs.current[i] = el as HTMLDivElement; }}
                className="pc__card"
                href={`/project/${p.slug}`}
                style={{
                  borderColor: `${p.accentColor}26`,
                  background: `linear-gradient(135deg, var(--card-bg), ${p.accentColor}08)`,
                }}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                onClick={(e) => {
                  e.preventDefault();
                  const img = e.currentTarget.querySelector('.pc__card-cover') as HTMLImageElement;
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
                  className="pc__card-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="pc__card-gradient" />
                <div className="pc__card-inner">
                  <h3 className="pc__card-title">{p.title}</h3>
                  <span className="pc__card-meta">{p.category} · {p.year}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Right — Sticky metadata */}
          <div className="pc__meta">
            <div className="pc__meta-inner">
              <div className="pc__meta-year" key={`year-${active.year}`}>{active.year}</div>
              <div className="pc__meta-role" key={`role-${active.slug}`}>{active.role}</div>
              <p className="pc__meta-desc" key={`desc-${active.slug}`}>{active.overview}</p>
              <a href="/projects" className="pc__meta-link">All projects ↗</a>
            </div>
          </div>
        </div>


        {/* Custom cursor */}
        <div
          className={`pc__cursor ${cursorVisible ? 'pc__cursor--visible' : ''}`}
          style={{ left: lerpPos.x, top: lerpPos.y }}
        >
          View
        </div>
      </section>

      <style>{`
        .pc {
          position: relative;
          padding: 96px 0 64px;
          cursor: none;
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

        .pc__header-sep {
          opacity: 0.3;
        }

        .pc__header-count {
          font-weight: 500;
        }

        .pc__header-year {
          font-variant-numeric: tabular-nums;
        }

        /* Three-zone layout */
        .pc__layout {
          display: grid;
          grid-template-columns: 80px 1fr 280px;
          gap: 32px;
          align-items: start;
        }

        /* Thumbnails */
        .pc__thumbs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 120px;
        }

        .pc__thumb {
          width: 60px;
          height: 60px;
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading-condensed);
          font-size: 24px;
          opacity: 0.4;
          transition: opacity 0.3s, border-color 0.3s;
          cursor: pointer;
        }

        .pc__thumb--active {
          opacity: 1;
        }

        /* Cards */
        .pc__cards {
          display: flex;
          flex-direction: column;
          gap: 120px;
          max-width: 100%;
        }

        .pc__card {
          position: relative;
          aspect-ratio: 16 / 9;
          border: 1px solid;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          cursor: none;
          transition: transform 0.3s var(--ease-out-expo);
        }

        .pc__card:hover {
          transform: scale(1.01);
          box-shadow: 0 12px 40px var(--shadow-light);
        }

        .pc__card-cover {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          transition: transform 0.5s var(--ease-out-expo);
          pointer-events: none;
        }

        .pc__card:hover .pc__card-cover {
          transform: scale(1.05);
        }

        .pc__card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--gradient-overlay) 0%, var(--gradient-mid) 40%, var(--gradient-light) 70%, transparent 100%);
          pointer-events: none;
        }

        .pc__card-inner {
          position: relative;
          z-index: 1;
        }

        .pc__card-meta {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 6px;
          display: block;
        }

        .pc__card-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          text-shadow: 0 2px 12px var(--shadow-color);
        }

        /* Metadata */
        .pc__meta {
          position: sticky;
          top: 120px;
        }

        .pc__meta-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pc__meta-year {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 700;
          color: var(--text);
          animation: fadeSlide 0.4s var(--ease-out-expo);
        }

        .pc__meta-role {
          font-size: 15px;
          color: var(--text);
          animation: fadeSlide 0.4s var(--ease-out-expo) 0.05s both;
        }

        .pc__meta-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          animation: fadeSlide 0.4s var(--ease-out-expo) 0.1s both;
        }

        .pc__meta-link {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          transition: color 0.2s;
        }

        .pc__meta-link:hover {
          color: var(--accent-hover);
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Cursor */
        .pc__cursor {
          position: fixed;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--accent);
          color: var(--btn-hover-text);
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 100;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: transform 0.3s var(--ease-out-expo), opacity 0.3s;
        }

        .pc__cursor--visible {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .pc {
            cursor: auto;
            padding: 64px 0 48px;
          }

          .pc__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 32px;
          }

          .pc__layout {
            display: flex;
            flex-direction: column;
            gap: 48px;
          }

          .pc__thumbs,
          .pc__meta,
          .pc__cursor {
            display: none;
          }

          .pc__cards {
            gap: 48px;
            max-width: 100%;
          }

          .pc__card {
            aspect-ratio: 3 / 2;
            cursor: pointer;
          }


          .pc__card-inner {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .pc__card-title {
            font-size: 22px;
          }

        }
      `}</style>
    </>
  );
}
