import Link from 'next/link';
import Image from 'next/image';
import { SectionReveal } from '@/components/SectionReveal';
import { InterviewPlayer } from '@/components/InterviewPlayer';
import { HeroVideo } from '@/components/HeroVideo';
import { StackedCards } from '@/components/StackedCards';
import { Carousel3D } from '@/components/Carousel3D';

export default function Home() {
  return (
    <div className="bg-ivory selection:bg-gold-light/40 selection:text-espresso">
      {/* 5.1 Hero (video) */}
      <section className="relative w-full min-h-screen bg-espresso flex items-end pb-24 md:pb-32 pt-40 md:pt-48 px-6 md:px-12 z-10 overflow-hidden">
        <HeroVideo src="/videos/251512.mp4" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-end mb-16 md:mb-24">
            <div className="md:col-span-7">
              <div className="eyebrow start mb-8">EST. 1965</div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-ivory tracking-tight">
                A family kitchen<br />
                serving Mazgaon<br />
                since 1965.
              </h1>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-8 pb-4">
              <p className="text-ivory/80 text-lg leading-relaxed font-sans text-balance">
                Babji is a warm neighbourhood name — a small family setup that grew because guests kept coming back for the biryani. Today we cater full weddings and pre-wedding functions, and open our own hall for the celebrations that matter most.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Full-service catering",
                sub: "Weddings · pre-wedding · family"
              },
              {
                title: "Hall for functions",
                sub: "Set for your celebration"
              },
              {
                title: "Loved since 1965",
                sub: "Sitafalwadi · Mazgaon"
              }
            ].map((card, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-espresso-soft/80 backdrop-blur-md rounded-[16px] p-8 shadow-soft border border-ivory/10">
                  <div className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase mb-4 font-semibold">Babji</div>
                  <h3 className="font-serif text-2xl text-ivory mb-2">{card.title}</h3>
                  <p className="text-ivory/60 font-sans text-sm">{card.sub}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5.2 The family story (sand) */}
      <section className="bg-sand py-24 md:py-32 px-6 md:px-12 -mt-[40px] pt-[80px] relative z-0">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6 leading-[1.05]">
              Told by the family<br />who runs it.
            </h2>
            <p className="font-sans text-ink/80 text-lg leading-relaxed mb-8 max-w-md">
              Two generations, one hall, and a menu that keeps growing with every wedding. Hear the family behind Babji talk about how the kitchen started, what they cook on the biggest days, and why this community keeps them going.
            </p>
            <p className="font-sans text-sm text-gold font-semibold uppercase tracking-widest">
              Tap play — the sound is worth it.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2} className="flex justify-center md:justify-end">
            <InterviewPlayer src="/videos/interview.mp4" />
          </SectionReveal>
        </div>
      </section>

      {/* 5.3 What we do (ivory) */}
      <section className="bg-ivory py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center mb-16">
          <div className="eyebrow mb-6">WHAT WE DO</div>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-[1.05]">Two ways to celebrate with us.</h2>
        </div>

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionReveal>
            <Link href="/catering" className="group relative block w-full h-[500px] md:h-[600px] rounded-[24px] overflow-hidden shadow-soft">
              <Image src="/images/thaal.jpg" alt="Catering" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <h3 className="font-serif text-4xl text-ivory mb-4">Catering</h3>
                <p className="font-sans text-ivory/80 text-lg leading-relaxed mb-6 max-w-md">
                  From an intimate family lunch to a 500-guest wedding — full-service catering, cooked with care.
                </p>
                <div className="font-sans text-gold font-semibold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                  See menu & packages <span className="text-lg leading-none">&rarr;</span>
                </div>
              </div>
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <Link href="/hall" className="group relative block w-full h-[500px] md:h-[600px] rounded-[24px] overflow-hidden shadow-soft">
              <Image src="/images/hall_12.jpg" alt="The Hall" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <h3 className="font-serif text-4xl text-ivory mb-4">The Hall</h3>
                <p className="font-sans text-ivory/80 text-lg leading-relaxed mb-6 max-w-md">
                  Our own hall in Mazgaon — a warm, decor-friendly space perfect for pre-wedding & family functions.
                </p>
                <div className="font-sans text-gold font-semibold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                  See the hall & book <span className="text-lg leading-none">&rarr;</span>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* 5.4 Signature dishes teaser (ivory) */}
      <section className="bg-ivory py-24 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <div className="eyebrow start mb-6">SIGNATURE DISHES</div>
              <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-[1.05]">
                The three we sell out <br/><span className="italic">every time</span>.
              </h2>
            </div>
            <div className="pb-2">
              <p className="font-sans text-ink/80 text-lg leading-relaxed max-w-md md:ml-auto">
                Guests come for the biryani and stay for these — the Babji specials we've been perfecting for two generations.
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Cards Scroll Animation */}
        <div className="w-full relative mt-12 mb-32">
          <StackedCards 
            items={[
              { img: "/images/sizzler.jpg", badge: "Sold Out Regularly", name: "Lebanese Pepper Butter Chicken" },
              { img: "/images/rollet.jpg", badge: "House Special", name: "Chicken Rollet" },
              { img: "/images/chicken.png", badge: "Guest Favourite", name: "Russian Cutlet" },
            ]}
          />
        </div>
      </section>

      {/* 5.5 Signature showcase (espresso) */}
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
                    <div className="relative aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden">
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

      {/* 5.6 Dark CTA (espresso) - Pro Editorial Redesign */}
      <section className="bg-espresso py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle glowing orb in background */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-8">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gold" />
                <div className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-bold">READY TO SERVE</div>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-ivory leading-[0.95] tracking-tight mb-8">
                Ready to serve <br />
                <span className="italic text-gold-light/90">these delicacies</span> <br />
                at your event?
              </h2>
            </SectionReveal>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right border-l lg:border-l-0 lg:border-r border-gold/20 pl-8 lg:pl-0 lg:pr-8 py-4">
            <SectionReveal delay={0.1}>
              <p className="font-sans text-ivory/70 text-lg leading-relaxed mb-10 max-w-sm">
                Tell us the date and guest count. We'll cook these for you — plus a menu shaped perfectly around your celebration.
              </p>
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <Link href="/catering" className="group flex items-center justify-between gap-6 bg-gold text-espresso rounded-full px-8 py-5 font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all shadow-[0_0_40px_rgba(201,169,97,0.15)]">
                  <span>Book Catering</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <Link href="/catering" className="group flex items-center justify-between gap-6 rounded-full px-8 py-5 font-semibold text-sm tracking-widest uppercase border border-ivory/20 text-ivory hover:bg-ivory hover:text-espresso transition-all">
                  <span>View Full Menu</span>
                  <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">&rarr;</span>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 5.7 Highlights gallery (ivory) - Redesigned Editorial Portrait Slider */}
      <section className="bg-ivory py-32 pl-6 md:pl-12 overflow-hidden relative">
        <div className="max-w-[1240px] mx-auto mb-16 pr-6 md:pr-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <div className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-bold">HIGHLIGHTS</div>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-espresso leading-[1.05] tracking-tight">
              Recent plates, <br />
              <span className="italic text-gold">recent celebrations.</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-sans text-ink/70 text-lg leading-relaxed max-w-sm pb-2">
              Scroll horizontally through a few moments from recent functions at Babji.
            </p>
          </SectionReveal>
        </div>

        <Carousel3D items={[
          { img: "/images/rollet.jpg", title: "Chicken Rollet", desc: "A crowd favourite starter" },
          { img: "/images/regenerate_2K_202608301011.jpeg", title: "Full House", desc: "A packed celebration at our Mazgaon hall" },
          { img: "/images/fish.jpg", title: "Tandoori Fried Fish", desc: "Crispy, spiced perfection" },
          { img: "/images/sizzler.jpg", title: "Sizzler Spread", desc: "Our signature sizzling platter" },
        ]} />
      </section>

      {/* 5.8 Testimonials (sand) - Minimalist Premium Upgrade */}
      <section className="bg-sand py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          
          {/* The Image Collage Header (Matching the Reference) */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 mb-16 md:mb-24 h-[300px] md:h-[450px]">
            {/* Col 1 */}
            <SectionReveal delay={0.1} className="hidden lg:flex flex-col gap-4 translate-y-8">
              <div className="relative w-[70px] h-[100px] rounded-[16px] overflow-hidden shadow-md">
                <Image src="/images/sizzler.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
              <div className="relative w-[70px] h-[140px] rounded-[16px] overflow-hidden shadow-md">
                <Image src="/images/hall_12.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
            </SectionReveal>
            
            {/* Col 2 */}
            <SectionReveal delay={0.2} className="hidden md:flex flex-col gap-4 -translate-y-4">
              <div className="relative w-[90px] h-[110px] rounded-[20px] overflow-hidden shadow-md">
                <Image src="/images/thaal.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
              <div className="relative w-[90px] h-[130px] rounded-[20px] overflow-hidden shadow-md">
                <Image src="/images/rollet.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
            </SectionReveal>

            {/* Col 3 */}
            <SectionReveal delay={0.3} className="hidden sm:block">
              <div className="relative w-[110px] md:w-[130px] h-[180px] md:h-[240px] rounded-[24px] overflow-hidden shadow-lg translate-y-6">
                <Image src="/images/fish.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
            </SectionReveal>

            {/* Col 4 (Center Hero Pill) */}
            <SectionReveal delay={0.4} className="z-10">
              <div className="relative w-[140px] sm:w-[160px] md:w-[200px] h-[240px] sm:h-[280px] md:h-[340px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-xl border-4 border-ivory">
                <Image src="/images/regenerate_2K_202608301011.jpeg" alt="Centerpiece" fill className="object-cover" quality={100} unoptimized />
              </div>
            </SectionReveal>

            {/* Col 5 */}
            <SectionReveal delay={0.5} className="hidden sm:flex flex-col gap-4 -translate-y-8">
              <div className="relative w-[110px] md:w-[130px] h-[110px] md:h-[130px] rounded-[24px] overflow-hidden shadow-lg">
                <Image src="/images/hall_12.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
              <div className="relative w-[110px] md:w-[130px] h-[140px] md:h-[180px] rounded-[24px] overflow-hidden shadow-lg">
                <Image src="/images/sizzler.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
            </SectionReveal>

            {/* Col 6 */}
            <SectionReveal delay={0.6} className="hidden md:block">
              <div className="relative w-[90px] h-[220px] rounded-[20px] overflow-hidden shadow-md translate-y-4">
                <Image src="/images/rollet.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
            </SectionReveal>

            {/* Col 7 */}
            <SectionReveal delay={0.7} className="hidden lg:flex flex-col gap-4 -translate-y-6">
              <div className="relative w-[70px] h-[100px] rounded-[16px] overflow-hidden shadow-md">
                <Image src="/images/fish.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
              <div className="relative w-[70px] h-[120px] rounded-[16px] overflow-hidden shadow-md">
                <Image src="/images/thaal.jpg" alt="Food" fill className="object-cover" quality={100} unoptimized />
              </div>
            </SectionReveal>
          </div>

          {/* Heading Section */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <SectionReveal delay={0.2} className="flex flex-col items-center">
              <div className="inline-block border border-espresso/20 rounded-full px-6 py-2 text-sm font-sans tracking-widest text-espresso mb-8 bg-ivory/50">
                Testimonials
              </div>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-espresso leading-[1.1] tracking-tight mb-2">
                Trusted by families and hosts
              </h2>
              <p className="font-sans text-xl md:text-3xl text-ink/40">
                across Mumbai for generations
              </p>
            </SectionReveal>
          </div>

          {/* The Minimalist Grid (No Card Backgrounds) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                quote: "We booked the hall for our daughter's nikah. The food was so warm and generous, and everything was served on time. It felt like family was hosting us, not a vendor.",
                name: "Fatima S.",
                type: "Nikah Booking",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80"
              },
              {
                quote: "Growing up in Sitafalwadi, Babji was always our go-to. Now having them cater our own family functions just brings it full circle. Nothing else feels like home.",
                name: "Hussain M.",
                type: "Catering Client",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80"
              },
              {
                quote: "The biryani and the chicken starters were cleared out completely! My guests couldn't stop praising the taste. The hall arrangement was seamless too.",
                name: "Zainab A.",
                type: "Pre-wedding Function",
                avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&q=80"
              }
            ].map((t, i) => (
                <SectionReveal key={i} delay={0.4 + (i * 0.1)}>
                  <div className="flex flex-col h-full bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-espresso/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(201,169,97,0.1)] hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 relative group overflow-hidden">
                    {/* Decorative Top Accent */}
                    <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex gap-1.5 mb-8">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-gold fill-gold drop-shadow-sm" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="font-serif text-espresso/90 text-lg md:text-xl leading-relaxed mb-10 flex-grow italic">"{t.quote}"</p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-espresso/5">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md ring-2 ring-gold/20">
                         <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                      </div>
                      <div>
                        <div className="font-sans font-bold text-espresso tracking-wide">{t.name}</div>
                        <div className="font-sans text-xs uppercase tracking-widest text-gold mt-1">{t.type}</div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5.9 Closing CTA (espresso) */}
      <section className="bg-espresso py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <div className="eyebrow mb-8">LET'S CATER IT</div>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6 leading-[1.05]">
            Planning a wedding, pre-wedding<br className="hidden md:block"/> or family function?
          </h2>
          <p className="font-sans text-ivory/70 text-lg mb-10 max-w-lg">
            Tell us your date and guest count. We'll cook, serve and take care of it all — you just show up and celebrate.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/hall#book" className="btn-gold rounded-full px-8 py-4 font-semibold text-sm tracking-widest uppercase w-full sm:w-auto">
              Book Now &rarr;
            </Link>
            <Link href="/catering" className="rounded-full px-8 py-4 font-semibold text-sm tracking-widest uppercase border border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso transition-colors w-full sm:w-auto">
              See our menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
