import Link from 'next/link';
import PageHero from '../components/PageHero';

const values = [
  { title: 'Quality Materials', desc: 'We source only the best materials suited for West Texas weather — no shortcuts, no compromises.', color: 'bg-brand-charcoal' },
  { title: 'Expert Crew', desc: 'Seasoned professionals who treat your property with the same care they would their own.', color: 'bg-brand-brown' },
  { title: 'Fair & Transparent', desc: 'No hidden fees. No surprises. We give you a straight quote and stick to it.', color: 'bg-brand-tan' },
  { title: '100% Satisfaction', desc: "We stand behind every project. If you're not satisfied, we make it right.", color: 'bg-brand-rust' },
];

const markets = ['Commercial', 'Industrial', 'Residential', 'Agricultural'];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Tritex"
        subtitle="Over 30 years of solutions built together — one project at a time."
        breadcrumb="Who We Are"
      />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal leading-tight mb-5" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Built on Reputation.<br />Proven by Results.
              </h2>
              <div className="section-divider mb-7" />
              <p className="text-slate-600 leading-relaxed mb-5">
                Tritex was founded on a simple belief: that every client deserves unparalleled professionalism, quality materials, and guaranteed satisfaction — no matter the size of the project. That belief hasn&apos;t changed in over 30 years.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Based in San Angelo, TX, we serve the entire surrounding West Texas region across commercial, industrial, residential, and agricultural markets. From a single gate to a full commercial perimeter fence, we bring the same dedication to every job.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We know our reputation rests on every project we complete. That&apos;s why we never cut corners — on materials, on craftsmanship, or on the respect we show for your property and your vision.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {markets.map((m) => (
                  <span key={m} className="bg-brand-charcoal/8 border border-brand-charcoal/15 text-brand-charcoal text-sm font-semibold px-4 py-2 rounded-lg">
                    {m}
                  </span>
                ))}
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Get a Free Estimate
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '30+',  label: 'Years of Experience', bg: 'bg-brand-charcoal' },
                { stat: '4',    label: 'Markets Served',      bg: 'bg-brand-brown' },
                { stat: '100%', label: 'Satisfaction Rate',   bg: 'bg-brand-tan' },
                { stat: 'Free', label: 'Estimates Always',    bg: 'bg-brand-rust' },
              ].map(({ stat, label, bg }) => (
                <div key={label} className={`${bg} text-white rounded-2xl p-8 flex flex-col justify-between min-h-36`}>
                  <span className="text-4xl font-extrabold" style={{ fontFamily: 'var(--font-montserrat)' }}>{stat}</span>
                  <span className="text-sm text-white/70 font-medium mt-3">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Our Core Values
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-3 h-10 ${color} rounded-full mb-5`} />
                <h3 className="font-bold text-brand-charcoal text-base mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-brown text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 mb-8 text-lg">We offer free in-person estimates across San Angelo and surrounding West Texas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://tritextx.mybudgetquote.com/budget" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg">
              Get Instant Quote Online
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white/30 hover:border-brand-tan text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
