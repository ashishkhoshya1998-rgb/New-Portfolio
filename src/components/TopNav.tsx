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
  { label: 'li', href: 'https://linkedin.com/in/ashish-khoshya', title: 'LinkedIn' },
  { label: 'tw', href: 'https://twitter.com/ashishkhoshya', title: 'Twitter' },
  { label: 'be', href: 'https://behance.net/ashishkhoshya', title: 'Behance' },
];

function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/' || currentPath === '';
  return currentPath.startsWith(href);
}

export default function TopNav({ currentPath }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // On case study pages, always show blur bg
  const isCaseStudy = currentPath === '/projects' && typeof window !== 'undefined' && window.location.pathname.startsWith('/project/');

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(isCaseStudy || window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isCaseStudy]);

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

        {/* Center: Socials */}
        <div className="topnav__socials">
          <span className="topnav__socials-label">Socials</span>
          <span className="topnav__socials-sep">/</span>
          {socials.map((s, i) => (
            <span key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="topnav__social-link"
                title={s.title}
                aria-label={s.title}
              >
                {s.label}
              </a>
              {i < socials.length - 1 && <span className="topnav__socials-sep">/</span>}
            </span>
          ))}
        </div>

        {/* Right: Nav links + Theme toggle + CTA */}
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
            {socials.map((s, i) => (
              <span key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="mobile-menu__social">
                  {s.title}
                </a>
                {i < socials.length - 1 && <span className="mobile-menu__sep">/</span>}
              </span>
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

        /* Socials (center) */
        .topnav__socials {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .topnav__socials-label {
          color: var(--text-muted);
        }

        .topnav__socials-sep {
          color: var(--border);
          user-select: none;
        }

        .topnav__social-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .topnav__social-link:hover {
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
          gap: 8px;
          font-size: 14px;
        }

        .mobile-menu__social {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .mobile-menu__social:hover {
          color: var(--accent);
        }

        .mobile-menu__sep {
          color: var(--border);
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

          .topnav__socials,
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
