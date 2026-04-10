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
                Welcome to the Tritex Family! Tritex is proud to say that we are a family-owned &amp; operated business, located in San Angelo, Texas. We pride ourselves on our customer service, quality and efficiency in every project we do.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                We have helped customers improve their homes, businesses and ranches for the last 10 years, all over Texas and New Mexico. We stand behind our guarantee of customer satisfaction with quality work.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Tritex offers a one year workmanship warranty on all installations. Our family is equipped to handle any size job, large or small. We have the equipment to work with any type of material, allowing us to complete your work in an efficient manner. We have you covered!
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Tritex is fully insured for all of your job needs. Our company is with you from the beginning: from the estimate to the whole installation process, as well as taking care of all city permits. We believe in good quality work and stand behind every product we build.
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

      {/* Videos */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">See Our Work</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Watch Tritex in Action
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Introduction to Tritex',  src: 'https://www.loom.com/embed/ef96025d3be648ba8524def0aa835403' },
              { title: 'Plasma Cutting',          src: 'https://player.vimeo.com/video/882524788?h=bf2a04d21d&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1' },
              { title: 'Close Up Plasma Cutting', src: 'https://player.vimeo.com/video/882525794?h=ba2f9a0a77&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1' },
              { title: 'Project Showcase',        src: 'https://www.youtube.com/embed/qkkcBI-vRKE' },
              { title: 'Behind the Build',        src: 'https://www.youtube.com/embed/20-JYhL0xcQ' },
            ].map(({ title, src }) => (
              <div key={title} className="rounded-2xl overflow-hidden shadow-md aspect-video bg-black">
                <iframe
                  src={src}
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={title}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/process" className="inline-flex items-center gap-2 text-brand-tan hover:underline font-semibold">
              View all videos on Our Process page →
            </Link>
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
