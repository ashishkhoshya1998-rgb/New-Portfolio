import { useState, useEffect, useCallback, useRef } from 'react';

interface TopNavProps {
  currentPath: string;
}

const navLinks = [
  { label: 'Index', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume.html' },
];

const socials = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashish-khoshya-676b99183/',
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
  const socialsBtnRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const socialsDropdownRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const [logoText, setLogoText] = useState('AK');
  const [logoFade, setLogoFade] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document !== 'undefined') {
      return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ak-theme', next);
  }, [theme]);

  // On case study pages, always show blur bg
  const isCaseStudy = currentPath === '/projects' && typeof window !== 'undefined' && window.location.pathname.startsWith('/project/');

  // Subtle logo toggle — AK ↔ आ forever — respect reduced motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    let isHindi = false;
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    const swap = () => {
      setLogoFade(false); // fade out (0.5s CSS)
      t1 = setTimeout(() => {
        isHindi = !isHindi;
        setLogoText(isHindi ? 'आ' : 'AK'); // swap text while invisible
        t2 = setTimeout(() => setLogoFade(true), 50); // fade in after a tick
      }, 550); // wait for fade-out to fully complete
    };
    const interval = setInterval(swap, 4000);
    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(isCaseStudy || window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isCaseStudy]);

  // Close socials dropdown on click outside or Escape
  useEffect(() => {
    if (!socialsOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.topnav__socials-wrap')) setSocialsOpen(false);
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSocialsOpen(false);
        socialsBtnRef.current?.focus();
      }
    };
    // Focus first link in dropdown on open
    const firstLink = socialsDropdownRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();
    document.addEventListener('click', handler);
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [socialsOpen]);

  // Lock body when menu open + focus trap + Escape + focus return
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';

    // Move focus into menu
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [menuOpen]);

  // Fluid highlight for nav links — cursor "pours" into button
  useEffect(() => {
    const container = navLinksRef.current;
    if (!container) return;
    const highlight = container.querySelector('.topnav__highlight') as HTMLElement;
    if (!highlight) return;

    const links = container.querySelectorAll<HTMLElement>('.topnav__link');
    let currentEl: HTMLElement | null = null;

    const onEnter = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      currentEl = el;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Position highlight behind the hovered link
      highlight.style.left = (elRect.left - containerRect.left) + 'px';
      highlight.style.width = elRect.width + 'px';

      // Radial reveal from cursor entry point
      const cursorX = e.clientX - elRect.left;
      const cursorY = e.clientY - elRect.top;
      highlight.style.clipPath = `circle(0% at ${cursorX}px ${cursorY}px)`;
      highlight.style.opacity = '1';

      // Expand the circle to fill the button
      requestAnimationFrame(() => {
        highlight.style.transition = 'clip-path 0.45s cubic-bezier(0.4, 0, 0.2, 1), left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease';
        highlight.style.clipPath = `circle(150% at ${cursorX}px ${cursorY}px)`;
      });
    };

    // When moving between links, slide the highlight fluidly
    const onMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      if (el !== currentEl) return; // only update for current hovered link
    };

    const onLeave = (e: MouseEvent) => {
      // Shrink back to cursor position when leaving
      const containerRect = container.getBoundingClientRect();
      const cursorX = e.clientX - containerRect.left - parseFloat(highlight.style.left || '0');
      const cursorY = e.clientY - (parseFloat(highlight.style.top || '0'));
      highlight.style.transition = 'clip-path 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease 0.15s';
      highlight.style.clipPath = `circle(0% at ${cursorX}px ${e.clientY - containerRect.top}px)`;
      setTimeout(() => { highlight.style.opacity = '0'; }, 300);
      currentEl = null;
    };

    links.forEach((link) => {
      link.addEventListener('mouseenter', onEnter as EventListener);
      link.addEventListener('mousemove', onMove as EventListener);
    });
    container.addEventListener('mouseleave', onLeave as EventListener);

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onEnter as EventListener);
        link.removeEventListener('mousemove', onMove as EventListener);
      });
      container.removeEventListener('mouseleave', onLeave as EventListener);
    };
  }, []);

  // Fluid highlight for standalone CTA buttons (Let's talk, etc.)
  useEffect(() => {
    const ctas = document.querySelectorAll<HTMLElement>('[data-fluid-cta]');
    const handlers: Array<{ el: HTMLElement; enter: EventListener; leave: EventListener }> = [];

    ctas.forEach((cta) => {
      const highlight = cta.querySelector('.topnav__cta-highlight') as HTMLElement;
      if (!highlight) return;

      const enter = (e: Event) => {
        const me = e as MouseEvent;
        const rect = cta.getBoundingClientRect();
        const cx = me.clientX - rect.left;
        const cy = me.clientY - rect.top;
        highlight.style.clipPath = `circle(0% at ${cx}px ${cy}px)`;
        highlight.style.opacity = '1';
        requestAnimationFrame(() => {
          highlight.style.transition = 'clip-path 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
          highlight.style.clipPath = `circle(150% at ${cx}px ${cy}px)`;
        });
      };

      const leave = (e: Event) => {
        const me = e as MouseEvent;
        const rect = cta.getBoundingClientRect();
        const cx = me.clientX - rect.left;
        const cy = me.clientY - rect.top;
        highlight.style.transition = 'clip-path 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease 0.2s';
        highlight.style.clipPath = `circle(0% at ${cx}px ${cy}px)`;
        setTimeout(() => { highlight.style.opacity = '0'; }, 300);
      };

      cta.addEventListener('mouseenter', enter);
      cta.addEventListener('mouseleave', leave);
      handlers.push({ el: cta, enter, leave });
    });

    return () => {
      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // Return focus to hamburger after close
    setTimeout(() => hamburgerRef.current?.focus(), 0);
  }, []);

  return (
    <>
      {/* ── Desktop Nav ── */}
      <nav
        className={`topnav ${scrolled ? 'topnav--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left: Avatar + Name + Greeting */}
        <a href="/" className="topnav__brand" aria-label="Ashish Khoshya — Home">
          <span
            className={`topnav__logo ${logoFade ? 'topnav__logo--visible' : 'topnav__logo--hidden'}`}
            lang={logoText === 'आ' ? 'hi' : 'en'}
            aria-hidden="true"
          >
            {logoText}
          </span>
        </a>

        {/* Centre: Nav links + Socials dropdown */}
        <div className="topnav__links" ref={navLinksRef}>
          <span className="topnav__highlight"></span>
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
              ref={socialsBtnRef}
              className={`topnav__link topnav__socials-btn ${socialsOpen ? 'topnav__socials-btn--open' : ''}`}
              onClick={() => setSocialsOpen(!socialsOpen)}
              aria-expanded={socialsOpen}
              aria-haspopup="true"
            >
              Socials
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="topnav__socials-chevron">
                <polyline points="2,3.5 5,6.5 8,3.5" />
              </svg>
            </button>
            {socialsOpen && (
              <div className="topnav__socials-dropdown" ref={socialsDropdownRef} role="menu">
                {socials.map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="topnav__socials-dropdown-link"
                    role="menuitem"
                    aria-label={`${s.title} (opens in new tab)`}
                  >
                    <span aria-hidden="true">{s.icon}</span>
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Theme toggle + CTA */}
        <div className="topnav__right">
          <button
            className="topnav__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <a href="https://www.linkedin.com/in/ashish-khoshya-676b99183/" target="_blank" rel="noopener noreferrer" className="topnav__cta" aria-label="Let's talk — opens LinkedIn in new tab" data-fluid-cta>
            <span className="topnav__cta-highlight"></span>
            <span className="topnav__cta-label">Let's talk!</span>
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="topnav__mobile-right">
          <button
            className="topnav__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button
            ref={hamburgerRef}
            className="topnav__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
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
              <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="mobile-menu__social" aria-label={`${s.title} (opens in new tab)`}>
                <span aria-hidden="true">{s.icon}</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
          <a href="https://www.linkedin.com/in/ashish-khoshya-676b99183/" target="_blank" rel="noopener noreferrer" className="mobile-menu__cta" onClick={closeMenu} aria-label="Let's talk — opens LinkedIn in new tab">
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
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
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
          cursor: none;
        }

        .topnav__logo {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: -1px;
          line-height: 1;
          display: inline-block;
          min-width: 32px;
          text-align: center;
          transition: opacity 0.5s ease;
        }

        .topnav__logo--visible {
          opacity: 1;
        }

        .topnav__logo--hidden {
          opacity: 0;
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
          cursor: none;
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
          background: var(--bg-elevated);
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
          cursor: none;
        }

        .topnav__socials-dropdown-link span {
          display: flex;
          align-items: center;
        }

        .topnav__socials-dropdown-link:hover {
          background: var(--overlay-soft);
          color: var(--accent);
        }

        /* Theme toggle */
        .topnav__theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: none;
          border: 1px solid var(--border);
          color: var(--text-muted);
          cursor: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }

        .topnav__theme-toggle:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: var(--overlay-soft);
        }

        /* Centre section — nav links */
        .topnav__links {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .topnav__highlight {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          border-radius: 8px;
          background: var(--overlay-soft);
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          clip-path: circle(0% at 50% 50%);
        }

        /* Right section */
        .topnav__right {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: flex-end;
        }

        .topnav__link {
          position: relative;
          z-index: 1;
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 8px;
          transition: color 0.2s;
          cursor: none;
        }

        .topnav__link:hover {
          color: var(--text);
        }

        .topnav__link--active {
          color: var(--text);
          font-weight: 700;
        }

        /* CTA */
        .topnav__cta {
          position: relative;
          overflow: hidden;
          font-size: 14px;
          font-weight: 500;
          padding: 8px 20px;
          border: 1px solid var(--accent);
          color: var(--accent);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: color 0.25s ease, border-color 0.25s ease;
          cursor: none;
        }

        .topnav__cta-highlight {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-full);
          background: var(--accent);
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          clip-path: circle(0% at 50% 50%);
        }

        .topnav__cta-label {
          position: relative;
          z-index: 1;
        }

        .topnav__cta:hover {
          color: var(--btn-hover-text);
          border-color: var(--accent);
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
          cursor: none;
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
          cursor: none;
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
          cursor: none;
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
          cursor: none;
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
          cursor: none;
        }

        .mobile-menu__cta:hover {
          background: var(--accent);
          color: var(--btn-hover-text);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .topnav {
            display: flex;
            justify-content: space-between;
            padding: 16px 20px;
            height: 60px;
          }

          .topnav__links {
            display: none;
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
