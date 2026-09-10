import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory/80 pt-24 pb-8 border-t border-gold/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
        
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M11 2v13M15 2v13M7 2v13M5 2v13M9 2v13M13 2v13M17 2v13M19 2v13M3 15h18" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl leading-none text-ivory tracking-wide">Babji Caterers & Hall</span>
            </div>
          </div>
          <div className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase mb-6">
            Since 1965 · Mazgaon, Mumbai
          </div>
          <p className="font-sans text-sm leading-relaxed mb-8 max-w-sm text-ivory/70">
            Full-service catering and a warm function hall — trusted by families in Mazgaon for weddings, pre-wedding functions and community celebrations since 1965.
          </p>
          <a
            href="https://wa.me/918976086766"
            className="inline-flex items-center gap-2 bg-[#25D366] text-[#063a1a] px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:brightness-105 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Visit Column */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase mb-2">Visit</h4>
          <p className="font-sans text-sm leading-relaxed text-ivory/80">
            Babji Caterers & Hall<br />
            Sitafalwadi, Mazgaon<br />
            Mumbai 400010, Maharashtra
          </p>
          <a
            href="https://maps.google.com/?q=Babji+Caterers+and+Hall,+Sitafalwadi,+Mazgaon,+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light text-sm flex items-center gap-1 transition-colors w-max"
          >
            Open in Google Maps &rarr;
          </a>
          
          <div className="mt-4 text-sm text-ivory/70">
            Open daily · 10:00 AM – 10:00 PM
          </div>
          
          <div className="mt-4 flex flex-col gap-2">
            <a href="tel:+918976086766" className="text-sm hover:text-gold transition-colors">
              <span className="text-ivory/50">Kasim Vadiwala</span> — +91 89760 86766
            </a>
            <a href="tel:+919664074104" className="text-sm hover:text-gold transition-colors">
              <span className="text-ivory/50">Burhan Vadiwala</span> — +91 96640 74104
            </a>
          </div>
        </div>

        {/* Explore Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase mb-2">Explore</h4>
          <Link href="/" className="text-sm hover:text-gold transition-colors w-max">Home</Link>
          <Link href="/catering" className="text-sm hover:text-gold transition-colors w-max">Catering & Menu</Link>
          <Link href="/hall" className="text-sm hover:text-gold transition-colors w-max">The Hall & Booking</Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/40">
        <p>© 2026 Babji Caterers & Hall. Made with love in Mumbai.</p>
        <p>+91 89760 86766</p>
      </div>
    </footer>
  );
}
