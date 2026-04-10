'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Services',   href: '/services' },
  { label: 'Gallery',    href: '/gallery' },
  { label: 'FAQ',        href: '/faq' },
  { label: 'Offers',     href: '/offers' },
  { label: 'Employment', href: '/employment' },
  { label: 'Contact',    href: '/contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-charcoal shadow-lg py-2'
          : 'bg-brand-charcoal py-4'
      } border-b border-white/10`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Tritex home" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Tritex — Solutions Built Together"
            width={200}
            height={68}
            className="h-16 w-auto object-contain rounded-lg"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link px-3 py-2 rounded text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-tan-light active'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* CTA */}
          <li className="ml-3">
            <a
              href="https://tritextx.mybudgetquote.com/budget"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Instant Quote
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-charcoal-dark border-t border-white/10 px-4 pb-5 pt-3">
          <ul className="flex flex-col gap-1 mb-3">
            {navLinks.map(({ label, href }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-colors text-sm ${
                      isActive
                        ? 'bg-brand-brown text-brand-tan-light'
                        : 'text-white/90 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="https://tritextx.mybudgetquote.com/budget"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get Instant Quote
          </a>
        </div>
      </div>
    </header>
  );
}
