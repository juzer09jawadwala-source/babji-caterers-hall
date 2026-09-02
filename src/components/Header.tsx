'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/catering', label: 'CATERING' },
    { href: '/hall', label: 'THE HALL' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ease-in-out ${
          scrolled ? 'bg-ivory/85 backdrop-blur-2xl py-3 border-b border-espresso/5 shadow-sm' : 'bg-gradient-to-b from-black/40 to-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M11 2v13M15 2v13M7 2v13M5 2v13M9 2v13M13 2v13M17 2v13M19 2v13M3 15h18" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl leading-none tracking-wide transition-colors duration-300 ${scrolled ? 'text-espresso' : 'text-ivory drop-shadow-md'}`}>Babji</span>
              <span className={`font-sans text-[9px] tracking-[0.2em] mt-1 transition-colors duration-300 ${scrolled ? 'text-espresso-soft' : 'text-ivory/90 drop-shadow-sm'}`}>CATERERS & HALL</span>
            </div>
          </Link>

          {/* Centre: Nav Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative group font-sans text-xs tracking-widest transition-colors duration-300 ${
                    scrolled 
                      ? 'text-espresso-soft hover:text-espresso' 
                      : 'text-ivory/90 hover:text-ivory drop-shadow-sm'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-px bg-gold transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Phone & CTA Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+918976086766" className={`font-sans text-sm transition-colors duration-300 ${scrolled ? 'text-espresso-soft hover:text-espresso' : 'text-ivory hover:text-gold drop-shadow-sm'}`}>
              +91 89760 86766
            </a>
            <Link
              href="/hall#book"
              className="btn-gold rounded-full px-6 py-2.5 text-xs font-semibold tracking-wide shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-espresso' : 'text-ivory drop-shadow-md'}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-espresso text-ivory flex flex-col p-6 md:px-12"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M11 2v13M15 2v13M7 2v13M5 2v13M9 2v13M13 2v13M17 2v13M19 2v13M3 15h18" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl leading-none tracking-wide text-ivory">Babji</span>
                </div>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-2">
                <X className="w-8 h-8 text-ivory" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 mt-24">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-5xl text-ivory/90 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto mb-10 flex flex-col gap-4">
              <a href="https://wa.me/918976086766" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-forest text-ivory font-medium">
                WhatsApp Kasim
              </a>
              <a href="https://wa.me/919664074104" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-ivory/20 text-ivory font-medium">
                WhatsApp Burhan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
