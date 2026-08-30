import Link from 'next/link';
import Image from 'next/image';
import { SectionReveal } from '@/components/SectionReveal';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Gallery } from '@/components/Gallery';
import { HeroVideo } from '@/components/HeroVideo';

export const metadata = {
  title: 'The Hall | Babji Caterers & Hall',
  description: 'A warm, decor-friendly hall in Sitafalwadi, Mazgaon — with on-site catering from the same family kitchen you already love.',
};

export default function HallPage() {
  return (
    <div className="bg-ivory selection:bg-gold-light/40 selection:text-espresso">
      
      {/* 1. Cinematic Hero */}
      <section className="relative w-full min-h-screen bg-espresso flex items-end pb-16 md:pb-24 px-6 md:px-12 shadow-2xl z-10 overflow-hidden">
        <HeroVideo src="/videos/hall.mp4" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold" />
              <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-bold">The Venue</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-ivory leading-[0.95] tracking-tight">
              The Hall <br />
              <span className="italic text-gold-light/90">at</span> Sitafalwadi
            </h1>
          </div>
          <div className="hidden md:flex flex-col items-end pb-4">
            <span className="font-sans text-xs tracking-widest text-ivory/60 uppercase mb-2">Scroll to explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. Split Editorial Specs (ivory) */}
      <section className="bg-ivory py-32 px-6 md:px-12 relative z-0">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <SectionReveal>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] mb-8">
                A space designed for the moments that matter.
              </h2>
              <p className="font-sans text-ink/70 text-lg leading-relaxed max-w-md">
                We built this hall so our neighbors could celebrate without compromise. A clean, beautiful canvas that you can decorate as you wish, paired with the legendary food you already know.
              </p>
            </SectionReveal>
          </div>
          
          <div className="lg:col-span-7 flex flex-col">
            {[
              {
                title: "Capacity",
                val: "200 - 300 Guests",
                desc: "Comfortable seating for large gatherings, perfect for nikahs, receptions, and community events."
              },
              {
                title: "Catering",
                val: "In-house Only",
                desc: "No outside vendor headache. Authentic Bohra thaals, buffets, and live counters cooked by our family."
              },
              {
                title: "Decor",
                val: "Fully Customisable",
                desc: "Bring your own decorator or use our trusted partners. Stages, elaborate floral setups, and lighting welcome."
              },
              {
                title: "Facilities",
                val: "Ready for Events",
                desc: "Air-conditioned areas, dedicated washing sections for thaals, and clean guest facilities."
              }
            ].map((spec, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="border-t border-espresso/10 py-10 flex flex-col md:flex-row gap-6 md:gap-12 group hover:border-gold/50 transition-colors">
                  <div className="md:w-1/3">
                    <h3 className="font-sans text-xs tracking-[0.2em] text-gold uppercase font-bold mb-2">{spec.title}</h3>
                    <p className="font-serif text-2xl text-espresso">{spec.val}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-sans text-ink/70 text-base leading-relaxed group-hover:text-ink transition-colors">{spec.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
            <SectionReveal delay={0.4}>
              <div className="border-t border-espresso/10 w-full" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 3. The Gallery (sand) */}
      <section className="bg-sand py-32 px-6 md:px-12 border-t border-ivory/50">
        <div className="max-w-[1240px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div>
                <div className="eyebrow start mb-6">INSIDE THE HALL</div>
                <h2 className="font-serif text-5xl md:text-7xl text-espresso leading-[1.05]">
                  Real functions.<br />
                  <span className="italic text-gold">Real memories.</span>
                </h2>
              </div>
              <p className="font-sans text-ink/70 text-lg max-w-sm text-balance">
                Scroll through recent celebrations. We provide the canvas, you bring the color.
              </p>
            </div>
          </SectionReveal>
          
          {/* We reuse the existing Gallery component but give it a ton of breathing room */}
          <div className="mt-12 bg-white/50 p-4 md:p-8 rounded-[32px] shadow-sm border border-ivory/60">
            <Gallery />
          </div>
        </div>
      </section>

      {/* 4. Visit Us / Map (ivory) - Floating Card Design */}
      <section className="bg-ivory py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle background typographic watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none z-0">
          <h2 className="font-serif text-[20vw] leading-none whitespace-nowrap">MAZGAON</h2>
        </div>

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <SectionReveal className="h-full">
            {/* The Map Card */}
            <div className="w-full h-[500px] lg:h-full min-h-[500px] rounded-[32px] overflow-hidden shadow-xl border border-sand">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3082538183187!2d72.8398188153406!3d18.966395387149866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce42485e9e09%3A0xc3b8a1c8f69a5e8c!2sBabji%20Caterers%20%26%20Hall!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-[0.95] contrast-[1.05]"
              />
            </div>
          </SectionReveal>

          <div className="flex flex-col gap-8 h-full">
            <SectionReveal delay={0.1}>
              <div className="bg-white p-10 md:p-14 rounded-[32px] shadow-soft border border-sand/50">
                <h3 className="font-serif text-3xl md:text-4xl text-espresso mb-6">Come see the space</h3>
                <p className="font-sans text-ink/70 text-lg leading-relaxed mb-8">
                  We invite you to walk through the hall and envision your event. We are open every day from 10:00 AM to 10:00 PM.
                </p>
                <div className="space-y-4">
                  <p className="font-sans font-semibold text-espresso">Babji Caterers & Hall</p>
                  <p className="font-sans text-ink/70">Sitafalwadi, Mazgaon<br/>Mumbai 400010, Maharashtra</p>
                  <a href="https://maps.google.com/?q=Babji+Caterers+and+Hall,+Sitafalwadi,+Mazgaon,+Mumbai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-gold hover:text-gold-light text-xs font-bold tracking-widest uppercase transition-colors">
                    Get Directions <span className="text-lg leading-none">&rarr;</span>
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} className="flex-grow">
              <div className="bg-espresso text-ivory p-10 md:p-14 rounded-[32px] shadow-xl h-full flex flex-col justify-center">
                <div className="eyebrow start mb-8 opacity-80">DIRECT BOOKINGS</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-serif text-2xl text-gold-light mb-1">Kasim Vadiwala</h4>
                    <p className="font-sans text-[10px] tracking-widest text-ivory/50 uppercase mb-4">Elder Brother</p>
                    <a href="https://wa.me/918976086766" className="font-sans text-sm block mb-1 hover:text-gold transition-colors">+91 89760 86766</a>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-gold-light mb-1">Burhan Vadiwala</h4>
                    <p className="font-sans text-[10px] tracking-widest text-ivory/50 uppercase mb-4">Younger Brother</p>
                    <a href="https://wa.me/919664074104" className="font-sans text-sm block hover:text-gold transition-colors">+91 96640 74104</a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 5. Booking Arch Layout (espresso) */}
      <section id="book" className="bg-espresso py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 h-full hidden lg:block">
            <SectionReveal className="h-full">
              {/* Elegant Arched Window Image */}
              <div className="relative w-full h-[800px] rounded-t-[500px] rounded-b-[24px] overflow-hidden shadow-2xl border-4 border-ivory/5">
                <Image src="/images/regenerate_2K_202608301011.jpeg" alt="A real function at Babji Hall" fill className="object-cover" quality={100} unoptimized />
                <div className="absolute inset-0 bg-espresso/20 mix-blend-overlay" />
              </div>
            </SectionReveal>
          </div>
          <div className="lg:col-span-7">
            <SectionReveal delay={0.1}>
              <div className="mb-12">
                <div className="eyebrow start mb-6">RESERVE THE DATE</div>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] tracking-tight">
                  Tell us about your <span className="italic text-gold">celebration.</span>
                </h2>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[32px] border border-ivory/10 shadow-2xl">
                <EnquiryForm />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
