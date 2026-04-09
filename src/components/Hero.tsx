import { useEffect, useState } from 'react';

const cyclingWords = ['SYSTEMS', 'ENTERPRISE', 'AI', 'COMPLEXITY', 'SCALE'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Cycling words
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % cyclingWords.length);
        setAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations are handled by the Astro page script (hero-animations.ts)
  // to avoid React StrictMode double-mount issues with async GSAP imports.

  return (
    <>
      <section className="hero" id="hero">
        {/* Layer 1: dot grid — done via CSS */}

        {/* Layer 2: background image (dark + light variants) */}
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="hero__bg-img hero__bg-img--dark"
          aria-hidden="true"
        />
        <img
          src="/images/hero-bg-light.webp"
          alt=""
          className="hero__bg-img hero__bg-img--light"
          aria-hidden="true"
        />

        {/* Layer 3: massive typography */}
        <div className="hero__text">
          <span className="hero__greeting">Hi there, I'm Ashish</span>
          <div className="hero__line1">I DESIGN</div>
          <div className="hero__line2">
            FOR{' '}
            <span className="hero__cycling-wrap">
              <span
                className={`hero__cycling-word ${animating ? 'hero__cycling-word--out' : 'hero__cycling-word--in'}`}
              >
                {cyclingWords[wordIndex]}
              </span>
            </span>
          </div>
        </div>


        {/* Layer 6: scroll indicator */}
        <div className="hero__scroll">
          <span className="hero__scroll-text">(Scroll down)</span>
          <svg className="hero__scroll-arrow" width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="2" x2="8" y2="20" />
            <polyline points="2 14 8 20 14 14" />
          </svg>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          background-color: var(--bg);
          background-image: radial-gradient(circle, var(--accent) 1px, transparent 1px);
          background-size: 80px 80px;
          background-position: 0 0;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: var(--bg);
          opacity: 0.97;
          z-index: 0;
        }

        /* Layer 2: BG image */
        .hero__bg-img {
          position: absolute;
          right: 0;
          top: 0;
          width: 60%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          mix-blend-mode: lighten;
          z-index: 1;
          pointer-events: none;
        }

        /* Theme-based image swap */
        .hero__bg-img--light { display: none; }
        .hero__bg-img--dark { display: block; }

        [data-theme='light'] .hero__bg-img--dark { display: none; }
        [data-theme='light'] .hero__bg-img--light {
          display: block;
          mix-blend-mode: multiply;
        }

        [data-theme='light'] .hero::before {
          opacity: 0.94;
        }

        /* Layer 3: massive text */
        .hero__text {
          position: absolute;
          bottom: 10%;
          left: 32px;
          z-index: 3;
        }

        .hero__greeting {
          display: block;
          font-family: var(--font-display);
          font-size: 18px;
          font-style: italic;
          color: var(--accent);
          margin-bottom: 12px;
          opacity: 0;
        }

        .hero__line1,
        .hero__line2 {
          font-family: var(--font-heading-condensed);
          font-size: clamp(80px, 15vw, 200px);
          text-transform: uppercase;
          color: var(--text);
          letter-spacing: -2px;
          line-height: 0.9;
          opacity: 0;
        }

        /* Cycling word */
        .hero__cycling-wrap {
          display: inline-block;
          position: relative;
          overflow: hidden;
          vertical-align: bottom;
        }

        .hero__cycling-word {
          display: inline-block;
          color: var(--accent);
          transition: transform 0.4s var(--ease-out-expo), opacity 0.4s var(--ease-out-expo);
        }

        .hero__cycling-word--in {
          transform: translateY(0);
          opacity: 1;
        }

        .hero__cycling-word--out {
          transform: translateY(-30px);
          opacity: 0;
        }

        /* Layer 6: scroll indicator */
        .hero__scroll {
          position: absolute;
          bottom: 32px;
          left: 32px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0;
          color: var(--text-muted);
        }

        .hero__scroll-text {
          font-size: 13px;
        }

        .hero__scroll-arrow {
          animation: hero-bounce 1.5s ease-in-out infinite;
        }

        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero {
            min-height: 100svh;
          }

          .hero__bg-img {
            width: 100%;
            opacity: 0;
          }

          .hero__bg-img {
            opacity: 0.3;
          }

          .hero__text {
            left: 20px;
            bottom: 15%;
          }

          .hero__line1,
          .hero__line2 {
            font-size: clamp(48px, 12vw, 80px);
            letter-spacing: -1px;
          }

          .hero__scroll {
            left: 20px;
            bottom: 24px;
          }
        }
      `}</style>
    </>
  );
}
