import { useState, useEffect } from 'react';

export default function RightInfoPanel() {
  const [opacity, setOpacity] = useState(1);

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

  return (
    <>
      <aside className="right-panel" style={{ opacity, pointerEvents: opacity < 0.1 ? 'none' : 'auto' }}>
        <div className="right-panel__top">
          <div className="right-panel__services">
            <span>Design Systems</span>
            <span>Product Design</span>
            <span>Research &amp; Strategy</span>
          </div>
          <a href="https://www.linkedin.com/messaging/compose/?to=ashish-khoshya-676b99183&body=Hi%20Ashish%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" rel="noopener noreferrer" className="right-panel__help">
            How can I help? ↗
          </a>
        </div>
        <div className="right-panel__bottom">
          <p className="right-panel__bio">
            Senior Product Designer specialized in enterprise workflows and design systems.
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
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
          transition: color 0.2s;
        }

        .right-panel__help:hover {
          text-decoration: underline;
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

        @media (max-width: 768px) {
          .right-panel {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
