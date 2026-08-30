import Link from 'next/link';
import Image from 'next/image';
import { SectionReveal } from '@/components/SectionReveal';
import { EnquiryForm } from '@/components/EnquiryForm';

export const metadata = {
  title: 'Catering & Menu | Babji Caterers',
  description: 'Three ways to feast. From an intimate family lunch to a wedding-scale spread with live counters.',
};

export default function CateringPage() {
  return (
    <div className="bg-ivory selection:bg-gold-light/40 selection:text-espresso">
      {/* 6.1 Hero (espresso) */}
      <section className="bg-espresso pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-12 text-center rounded-b-[40px] shadow-2xl relative z-10">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <div className="eyebrow mb-8">LET'S CATER IT</div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory mb-6 leading-[1.05]">
            Planning a wedding, pre-wedding<br className="hidden md:block"/> or family function?
          </h1>
          <p className="font-sans text-ivory/70 text-lg mb-10 max-w-lg">
            Tell us your date and guest count. We'll cook, serve and take care of it all — you just show up and celebrate.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="#book" className="btn-gold rounded-full px-8 py-4 font-semibold text-sm tracking-widest uppercase w-full sm:w-auto">
              Book Now &rarr;
            </Link>
            <Link href="#menu" className="rounded-full px-8 py-4 font-semibold text-sm tracking-widest uppercase border border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso transition-colors w-full sm:w-auto">
              See our menu
            </Link>
          </div>
        </div>
      </section>

      {/* 6.2 Packages (ivory) */}
      <section id="menu" className="bg-ivory py-24 md:py-32 px-6 md:px-12 -mt-[40px] pt-[80px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="eyebrow mb-6">MENU & PACKAGES</div>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-4 leading-[1.05]">Three ways to feast.</h2>
            <p className="font-sans text-ink/70 text-lg">Scroll to explore each package — prices are placeholders and are tailored during the tasting.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">
            {/* Classic */}
            <SectionReveal delay={0}>
              <div className="bg-white rounded-[16px] p-8 md:p-10 shadow-soft border border-sand">
                <h3 className="font-serif text-3xl text-espresso mb-2">Classic</h3>
                <p className="font-sans text-ink/60 text-sm mb-6 pb-6 border-b border-sand">Warm, homely feast for smaller gatherings.</p>
                <div className="font-serif text-4xl text-espresso mb-8">₹— <span className="font-sans text-sm text-ink/50">/ plate</span></div>
                <ul className="flex flex-col gap-4 font-sans text-sm text-ink/80">
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> 2 starters (1 veg · 1 non-veg)</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Chicken biryani or mutton pulao</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Dal fry & seasonal sabzi</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Rotis, salad, chutneys</li>
                </ul>
              </div>
            </SectionReveal>

            {/* Signature */}
            <SectionReveal delay={0.1}>
              <div className="bg-white rounded-[16px] p-8 md:p-12 shadow-xl border border-gold/30 relative transform lg:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-espresso text-ivory text-[10px] font-sans font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Loved
                </div>
                <h3 className="font-serif text-3xl text-espresso mb-2">Signature</h3>
                <p className="font-sans text-ink/60 text-sm mb-6 pb-6 border-b border-sand">Our most-loved menu — the Babji thaal.</p>
                <div className="font-serif text-4xl text-espresso mb-8">₹— <span className="font-sans text-sm text-ink/50">/ plate</span></div>
                <ul className="flex flex-col gap-4 font-sans text-sm text-ink/80">
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> 4 starters (veg + non-veg)</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Paneer lababdar, mixed dal</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Signature biryani selection</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Signature dessert platter</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Plus all items in Classic</li>
                </ul>
              </div>
            </SectionReveal>

            {/* Premium */}
            <SectionReveal delay={0.2}>
              <div className="bg-white rounded-[16px] p-8 md:p-10 shadow-soft border border-sand">
                <h3 className="font-serif text-3xl text-espresso mb-2">Premium</h3>
                <p className="font-sans text-ink/60 text-sm mb-6 pb-6 border-b border-sand">A wedding-scale spread with live counters.</p>
                <div className="font-serif text-4xl text-espresso mb-8">₹— <span className="font-sans text-sm text-ink/50">/ plate</span></div>
                <ul className="flex flex-col gap-4 font-sans text-sm text-ink/80">
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Welcome mocktails & live chaat</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> 6 starters · 3 mains · biryani</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Tandoor & pasta counter</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Assorted breads, curries</li>
                  <li className="flex items-start gap-3"><span className="text-gold mt-0.5">●</span> Dessert counter with sweets</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 6.3 Signature dish showcase (espresso) */}
      <section className="bg-espresso py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-32">
          {[
            {
              id: "01",
              name: "Cheesy Chicken\nSizzler Platter",
              desc: "Golden fried chicken bites drenched in our creamy cheese sauce, plated beside a molten-cheese burger and hand-cut fries. A meal in itself.",
              img: "/images/sizzler.jpg"
            },
            {
              id: "02",
              name: "Chicken in Saffron\nCream, Charred Corn",
              desc: "Tender chicken steeped in a rich, aromatic saffron cream reduction, balanced perfectly with smoky charred corn kernels. A modern classic.",
              img: "/images/chicken.png"
            },
            {
              id: "03",
              name: "Mutton Raan\nwith Spiced Rice",
              desc: "Slow-cooked leg of lamb, marinated overnight in our secret blend of family spices, served over a bed of fragrant biryani rice. Fall-off-the-bone tender.",
              img: "/images/raan.jpg"
            },
            {
              id: "04",
              name: "Chicken in White\nWine Cream & Charred Corn",
              desc: "Tender chicken finished in a delicate white-wine cream, showered with fresh herbs and black sesame — paired with our smoky charred corn on a gold platter.",
              img: "/images/rollet.jpg"
            }
          ].map((dish, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={dish.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${isEven ? 'md:order-2' : ''}`}>
                  <SectionReveal>
                    <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl">
                      <Image src={dish.img} alt={dish.name} fill className="object-cover" />
                    </div>
                  </SectionReveal>
                </div>
                <div className={`${isEven ? 'md:order-1' : ''}`}>
                  <SectionReveal delay={0.1}>
                    <div className="w-4 h-4 rotate-45 border border-gold mb-8 hidden md:block" />
                    <div className="font-sans text-[11px] tracking-[0.25em] text-gold uppercase mb-6">SIGNATURE {dish.id}</div>
                    <h3 className="font-serif text-5xl md:text-6xl text-ivory mb-6 whitespace-pre-line leading-[1.05]">{dish.name}</h3>
                    <p className="font-sans text-ivory/70 text-lg leading-relaxed mb-8 max-w-md">{dish.desc}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-px bg-gold" />
                      <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase">BABJI SPECIAL</span>
                    </div>
                  </SectionReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6.4 Family dishes gallery (ivory) */}
      <section className="bg-ivory py-24 md:py-32 pl-6 md:pl-12 overflow-hidden">
        <div className="max-w-[1240px] mx-auto mb-16 pr-6 md:pr-12">
          <div className="eyebrow start mb-6">FAMILY DISHES</div>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-4 leading-[1.05]">
            A taste of what we cook.
          </h2>
          <p className="font-sans text-ink/70 text-lg">Scroll horizontally through the plates we serve at Babji celebrations.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory pr-6 md:pr-12" style={{ cursor: 'grab' }}>
          {[
            { img: "/images/raan.jpg", title: "Mutton Raan" },
            { img: "/images/fish.jpg", title: "Tandoori Fried Fish" },
            { img: "/images/sizzler.jpg", title: "Sizzler Platter" },
            { img: "/images/rollet.jpg", title: "Chicken Rollet" },
            { img: "/images/chicken.png", title: "Saffron Chicken" },
          ].map((item, i) => (
            <div key={i} className="shrink-0 w-[85vw] md:w-[600px] snap-center">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-soft group">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-serif text-2xl text-ivory tracking-wide">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.5 How it works (sand) */}
      <section className="bg-sand py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="eyebrow mb-6">HOW IT WORKS</div>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-[1.05]">Three simple steps.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Enquire",
                desc: "Tell us your date, guest count and function type — via the booking form or WhatsApp."
              },
              {
                step: "2",
                title: "Tasting & Plan",
                desc: "We meet, sample the menu, and shape a package around your celebration and budget."
              },
              {
                step: "3",
                title: "We cater your day",
                desc: "Our team handles cooking, setup and service — you just show up and enjoy."
              }
            ].map((s, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[16px] shadow-soft border border-sand/50 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-espresso text-gold flex items-center justify-center font-serif text-xl mb-6">
                    {s.step}
                  </div>
                  <div className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase mb-3">STEP 0{s.step}</div>
                  <h3 className="font-serif text-2xl text-espresso mb-4">{s.title}</h3>
                  <p className="font-sans text-ink/70 leading-relaxed">{s.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6 Booking CTA (espresso) */}
      <section id="book" className="bg-espresso py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="eyebrow mb-6">BOOK CATERING</div>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-[1.05]">Tell us about your celebration.</h2>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
