import Image from 'next/image';
import Link from 'next/link';
import GoogleReviews from './components/GoogleReviews';

const featuredServices = [
  {
    title: 'All Types of Fencing',
    desc: 'Wood, chain-link, vinyl, iron, ranch, and more — built to last in West Texas conditions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2m0-6v12m4-12v12m4-12v12m4-12v12m2 0h-2M3 6h18" />
      </svg>
    ),
  },
  {
    title: 'Custom & Automatic Gates',
    desc: 'Handcrafted custom entry systems — manual or automated — for any property type.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Metal Buildings',
    desc: 'Durable, cost-effective metal buildings for ag, commercial, and personal use.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7v1m0-1a2 2 0 012-2h14a2 2 0 012 2v1M3 7h18m-6 7v7M9 14v7m0-7h6" />
      </svg>
    ),
  },
  {
    title: 'Concrete',
    desc: 'Pads, driveways, foundations, and decorative concrete — done right the first time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Staining',
    desc: 'Pre-dipped, stained and sealed cedar that protects your investment for years.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Plasma Cutting & More',
    desc: 'Precision plasma cutting for custom metal fabrication, art, and specialty projects.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex flex-col justify-end bg-[#2d2420] overflow-hidden">
        {/* Text content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-36 pb-10">
          <div className="inline-flex items-center gap-2 bg-brand-tan/20 border border-brand-tan/40 text-brand-tan-light text-sm font-semibold px-5 py-2 rounded-full mb-8 animate-fade-in">
            <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Solutions Built Together · Over 30 Years in West Texas
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 animate-fade-in-up"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            West Texas&apos;{' '}
            <span className="text-brand-tan">Most Trusted</span>
            <br />Contractor
          </h1>

          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Commercial · Residential · Agricultural · Industrial. Unparalleled professionalism, quality materials, and guaranteed satisfaction — on every project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="https://tritextx.mybudgetquote.com/budget"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get an Instant Quote
            </a>
            <a
              href="tel:3258127143"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white/70 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 325-812-7143
            </a>
          </div>
        </div>

        {/* Gate image pinned to bottom, full width, no cropping */}
        <div className="relative w-full">
          <Image
            src="/gate.png"
            alt="Tritex custom iron gate — San Angelo, TX"
            width={1920}
            height={400}
            className="w-full h-auto block"
            priority
          />
          {/* Fade from dark bg into the top of the image */}
          <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#2d2420] to-transparent" />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-brand-brown py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white text-center">
            {[
              { stat: '30+',      label: 'Years Experience' },
              { stat: 'Free',     label: 'In-Person Estimates' },
              { stat: 'Licensed', label: '& Insured' },
              { stat: '100%',     label: 'Satisfaction Guaranteed' },
            ].map(({ stat, label }) => (
              <div key={stat} className="py-2">
                <div className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-montserrat)' }}>{stat}</div>
                <div className="text-xs font-medium text-white/70 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">About Tritex</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal leading-tight mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Built on Reputation.<br />Backed by 30 Years.
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-slate-600 leading-relaxed mb-4">
                Tritex has served San Angelo and surrounding West Texas communities for over three decades — delivering commercial, industrial, residential, and agricultural projects with craftsmanship that keeps customers coming back.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We know our reputation rests on every project. That&apos;s why we never cut corners — from materials to crew professionalism on your property.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-brown text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '30+',  label: 'Years in Business',  bg: 'bg-brand-charcoal' },
                { stat: '100%', label: 'Satisfaction Rate',  bg: 'bg-brand-brown' },
                { stat: '4',    label: 'Markets Served',     bg: 'bg-brand-tan' },
                { stat: 'Free', label: 'Estimate — Always',  bg: 'bg-brand-rust' },
              ].map(({ stat, label, bg }) => (
                <div key={label} className={`${bg} text-white rounded-2xl p-7 flex flex-col justify-between min-h-32`}>
                  <span className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-montserrat)' }}>{stat}</span>
                  <span className="text-sm font-medium text-white/75 mt-3">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Our Services
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-slate-500 max-w-xl mx-auto">From fencing to metal buildings to plasma cutting — all with the same standard of excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {featuredServices.map(({ title, desc, icon }) => (
              <div key={title} className="service-card bg-white rounded-2xl p-6 border border-white shadow-sm">
                <div className="w-12 h-12 bg-brand-charcoal text-brand-tan rounded-xl flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-brand-charcoal text-base mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-brown text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md">
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <GoogleReviews />

      {/* ── MILITARY DISCOUNT CTA ── */}
      <section className="py-16 bg-brand-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-tan/20 border border-brand-tan/40 text-brand-tan-light text-sm font-semibold px-5 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 10l1.293-1.293zM11.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L12.586 14l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Special Discounts Available
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Proud to Honor Those Who Serve
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8">
            Special discounts for active military, veterans, and first responders — because your service means everything to us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/offers" className="inline-flex items-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg">
              View Offers &amp; Discounts
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/25 hover:border-brand-tan text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>, label: 'Phone',    value: '325-812-7143',       href: 'tel:3258127143' },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>, label: 'Email',    value: 'chase@tritextx.com', href: 'mailto:chase@tritextx.com' },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>, label: 'Location', value: 'San Angelo, TX 76904',  href: 'https://maps.google.com/?q=5508+Christoval+Rd+San+Angelo+TX' },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-2 group p-4 rounded-2xl hover:bg-brand-cream transition-colors"
              >
                <div className="w-11 h-11 bg-brand-charcoal text-brand-tan rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{icon}</svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-stone">{label}</span>
                <span className="font-semibold text-brand-charcoal group-hover:text-brand-tan transition-colors text-sm">{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
