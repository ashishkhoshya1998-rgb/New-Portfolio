import { useState, useEffect, useRef } from 'react';

export default function RightInfoPanel() {
  const [opacity, setOpacity] = useState(1);
  const helpRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 400) {
        setOpacity(1);
      } else if (y >= 600) {
        setOpacity(0);
      } else {
        setOpacity(1 - (y - 400) / 200);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const link = helpRef.current;
    if (!link) return;
    const hl = link.querySelector('.right-panel__help-highlight') as HTMLElement;
    if (!hl) return;

    const onEnter = (e: MouseEvent) => {
      const rect = link.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      hl.style.transition = 'none';
      hl.style.clipPath = `circle(0% at ${cx}px ${cy}px)`;
      hl.style.opacity = '1';
      requestAnimationFrame(() => {
        hl.style.transition = 'clip-path 0.45s cubic-bezier(0.4,0,0.2,1)';
        hl.style.clipPath = `circle(150% at ${cx}px ${cy}px)`;
      });
    };
    const onLeave = (e: MouseEvent) => {
      const rect = link.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      hl.style.transition = 'clip-path 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.15s ease 0.2s';
      hl.style.clipPath = `circle(0% at ${cx}px ${cy}px)`;
      setTimeout(() => { hl.style.opacity = '0'; }, 300);
    };

    link.addEventListener('mouseenter', onEnter);
    link.addEventListener('mouseleave', onLeave);
    return () => {
      link.removeEventListener('mouseenter', onEnter);
      link.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <aside className="right-panel" style={{ opacity, pointerEvents: opacity < 0.1 ? 'none' : 'auto' }}>
        <div className="right-panel__top">
          <div className="right-panel__services">
            <span>Design Systems</span>
            <span>Product Design</span>
            <span>Research &amp; Strategy</span>
            <span>Build with AI</span>
          </div>
          <a ref={helpRef} href="https://www.linkedin.com/in/ashish-khoshya-676b99183/" target="_blank" rel="noopener noreferrer" className="right-panel__help" aria-label="How can I help? Opens LinkedIn in new tab">
            <span className="right-panel__help-highlight"></span>
            <span className="right-panel__help-label">How can I help? <span aria-hidden="true">↗</span></span>
          </a>
        </div>
        <div className="right-panel__bottom">
          <p className="right-panel__bio">
            Senior Product Designer specialized in enterprise workflows, design systems, and AI-native product development.
            I build for ClearTax, Zzazz.ai &amp; complex product problems.
          </p>
          <span className="right-panel__badge">IIT Guwahati</span>
        </div>
      </aside>

      <style>{`
        .right-panel {
          position: fixed;
          right: 0;
          top: 80px;
          width: 280px;
          padding: 32px 24px;
          z-index: 50;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: calc(100vh - 80px);
          transition: opacity 0.15s linear;
        }

        .right-panel__top {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .right-panel__services {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 14px;
          color: var(--text);
          line-height: 1.5;
        }

        .right-panel__help {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
          transition: color 0.2s;
          cursor: none;
        }

        .right-panel__help-highlight {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: var(--overlay-soft);
          opacity: 0;
          clip-path: circle(0% at 50% 50%);
          pointer-events: none;
        }

        .right-panel__help-label {
          position: relative;
          z-index: 1;
        }

        .right-panel__help:hover {
          color: var(--accent);
        }

        .right-panel__bottom {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .right-panel__bio {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .right-panel__badge {
          font-size: 11px;
          color: var(--text-muted);
        }

        [data-theme='light'] .right-panel__services,
        [data-theme='light'] .right-panel__help,
        [data-theme='light'] .right-panel__bio,
        [data-theme='light'] .right-panel__badge {
          text-shadow: 0 0 16px var(--bg), 0 0 32px var(--bg), 0 0 48px var(--bg);
        }

        @media (max-width: 768px) {
          .right-panel {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
