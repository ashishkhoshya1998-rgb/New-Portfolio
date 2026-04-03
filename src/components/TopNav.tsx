import { useState, useEffect, useCallback } from 'react';

interface TopNavProps {
  currentPath: string;
}

const navLinks = [
  { label: 'Index', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

const socials = [
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/ashish-khoshya',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    title: 'Behance',
    href: 'https://www.behance.net/ashishkhos9d01',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/ashishkhoshya1998-rgb',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  },
];

function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/' || currentPath === '';
  return currentPath.startsWith(href);
}

export default function TopNav({ currentPath }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

  // On case study pages, always show blur bg
  const isCaseStudy = currentPath === '/projects' && typeof window !== 'undefined' && window.location.pathname.startsWith('/project/');

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(isCaseStudy || window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isCaseStudy]);

  // Close socials dropdown on click outside
  useEffect(() => {
    if (!socialsOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.topnav__socials-wrap')) setSocialsOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [socialsOpen]);

  // Lock body when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* ── Desktop Nav ── */}
      <nav
        className={`topnav ${scrolled ? 'topnav--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left: Avatar + Name + Greeting */}
        <a href="/" className="topnav__brand">
          <span className="topnav__logo">AK</span>
        </a>

        {/* Right: Nav links + Socials dropdown + CTA */}
        <div className="topnav__right">
          <div className="topnav__links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`topnav__link ${isActive(link.href, currentPath) ? 'topnav__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <div className="topnav__socials-wrap">
              <button
                className={`topnav__link topnav__socials-btn ${socialsOpen ? 'topnav__socials-btn--open' : ''}`}
                onClick={() => setSocialsOpen(!socialsOpen)}
                aria-expanded={socialsOpen}
              >
                Socials
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="topnav__socials-chevron">
                  <polyline points="2,3.5 5,6.5 8,3.5" />
                </svg>
              </button>
              {socialsOpen && (
                <div className="topnav__socials-dropdown">
                  {socials.map((s) => (
                    <a
                      key={s.title}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="topnav__socials-dropdown-link"
                    >
                      {s.icon}
                      <span>{s.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <a href="mailto:ashish.khoshya1998@gmail.com" className="topnav__cta">
            Let's talk!
          </a>
        </div>

        {/* Mobile: hamburger + theme toggle */}
        <div className="topnav__mobile-right">
          <button
            className="topnav__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </button>

        <nav className="mobile-menu__nav">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-menu__link ${isActive(link.href, currentPath) ? 'mobile-menu__link--active' : ''}`}
              onClick={closeMenu}
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <div className="mobile-menu__socials">
            {socials.map((s) => (
              <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="mobile-menu__social" aria-label={s.title}>
                {s.icon}
                <span>{s.title}</span>
              </a>
            ))}
          </div>
          <a href="mailto:ashish.khoshya1998@gmail.com" className="mobile-menu__cta" onClick={closeMenu}>
            Let's talk!
          </a>
        </div>
      </div>

      <style>{`
        /* ── Desktop Nav ── */
        .topnav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          background: transparent;
          transition: background 0.3s, backdrop-filter 0.3s;
        }

        .topnav--scrolled {
          background: var(--nav-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Brand */
        .topnav__brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .topnav__logo {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: -1px;
          line-height: 1;
        }

        /* Socials dropdown */
        .topnav__socials-wrap {
          position: relative;
        }

        .topnav__socials-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }

        .topnav__socials-chevron {
          transition: transform 0.2s;
        }

        .topnav__socials-btn--open .topnav__socials-chevron {
          transform: rotate(180deg);
        }

        .topnav__socials-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          background: var(--card-bg, rgba(30, 30, 30, 0.95));
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 8px;
          min-width: 160px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          animation: socials-dropdown-in 0.15s ease-out;
        }

        @keyframes socials-dropdown-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .topnav__socials-dropdown-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }

        .topnav__socials-dropdown-link:hover {
          background: rgba(255, 255, 255, 0.06);
          color: var(--accent);
        }

        /* Right section */
        .topnav__right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .topnav__links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .topnav__link {
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .topnav__link:hover {
          color: var(--accent);
        }

        .topnav__link--active {
          color: var(--text);
          font-weight: 700;
        }

        /* CTA */
        .topnav__cta {
          font-size: 14px;
          font-weight: 500;
          padding: 8px 20px;
          border: 1px solid var(--accent);
          color: var(--accent);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .topnav__cta:hover {
          background: var(--accent);
          color: var(--bg);
        }

        /* Mobile controls — hidden on desktop */
        .topnav__mobile-right {
          display: none;
          align-items: center;
          gap: 16px;
        }

        .topnav__hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 10px;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
        }

        .topnav__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text);
          border-radius: 1px;
          transition: background 0.2s;
        }

        /* ── Mobile Menu Overlay ── */
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--nav-bg);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 32px 48px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
        }

        .mobile-menu--open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu__close {
          position: absolute;
          top: 16px;
          right: 24px;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu__nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 48px;
        }

        .mobile-menu__link {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 700;
          color: var(--text-muted);
          text-decoration: none;
          transform: translateX(40px);
          opacity: 0;
          transition: transform 0.5s var(--ease-out-expo), opacity 0.5s var(--ease-out-expo), color 0.2s;
        }

        .mobile-menu--open .mobile-menu__link {
          transform: translateX(0);
          opacity: 1;
        }

        .mobile-menu__link:hover {
          color: var(--accent);
        }

        .mobile-menu__link--active {
          color: var(--text);
        }

        .mobile-menu__footer {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-menu__socials {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .mobile-menu__social {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .mobile-menu__social:hover {
          color: var(--accent);
        }

        .mobile-menu__cta {
          display: inline-block;
          align-self: flex-start;
          font-size: 16px;
          font-weight: 500;
          padding: 12px 28px;
          border: 1px solid var(--accent);
          color: var(--accent);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .mobile-menu__cta:hover {
          background: var(--accent);
          color: var(--bg);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .topnav {
            padding: 16px 20px;
            height: 60px;
          }

          .topnav__right {
            display: none;
          }

          .topnav__mobile-right {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
