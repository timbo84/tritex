import Link from 'next/link';
import PageHero from '../components/PageHero';

const services = [
  {
    title: 'All Types of Fencing',
    desc: 'Wood privacy, chain-link, vinyl, wrought iron, pipe, barbed wire, high-tensile, ranch — if you need a fence, we build it. Every style is available for residential, commercial, agricultural, and industrial applications.',
    tag: 'Most Popular',
    tagColor: 'bg-brand-tan',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2m0-6v12m4-12v12m4-12v12m4-12v12m2 0h-2M3 6h18" />,
  },
  {
    title: 'Custom & Automatic Gates',
    desc: 'Handcrafted custom entry gates and fully automated gate systems with access control. We design and install for any property size — from residential driveways to large commercial entrances.',
    tag: null,
    tagColor: '',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />,
  },
  {
    title: 'DIY Packages',
    desc: "Want to build it yourself? We supply everything you need — cut and prepped to your specifications. Quality materials, helpful guidance, and competitive pricing so you can tackle the project with confidence.",
    tag: null,
    tagColor: '',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
  },
  {
    title: 'Staining',
    desc: 'We offer pre-dipped, stained, and sealed cedar fencing that protects the wood from the harsh West Texas sun and weather. Staining extends fence life significantly while giving it a beautiful, finished look.',
    tag: null,
    tagColor: '',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  },
  {
    title: 'Metal Buildings',
    desc: 'Durable, cost-effective metal buildings for agricultural storage, workshops, commercial use, and more. We design and build structures that stand up to West Texas wind, heat, and storms.',
    tag: null,
    tagColor: '',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7v1m0-1a2 2 0 012-2h14a2 2 0 012 2v1M3 7h18m-6 7v7M9 14v7m0-7h6" />,
  },
  {
    title: 'Water Storage',
    desc: 'Custom water storage solutions for ranches, farms, and agricultural operations throughout West Texas. From tanks to ponds, we help you manage your water resources effectively.',
    tag: null,
    tagColor: '',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 0c0 0-3 3.75-3 6.75a3 3 0 006 0c0-3-3-6.75-3-6.75z" />,
  },
  {
    title: 'Concrete',
    desc: 'Professional concrete work including slabs, pads, driveways, foundations, sidewalks, and decorative finishes. We bring the same precision and quality to our concrete work as everything else we do.',
    tag: null,
    tagColor: '',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  },
  {
    title: 'Erosion Control',
    desc: 'Effective erosion control solutions to protect your land and preserve property value. We assess your site and implement the right measures — from riprap and retaining structures to vegetation support.',
    tag: null,
    tagColor: '',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Plasma Cutting & More',
    desc: 'Precision plasma cutting for custom metal fabrication, decorative designs, signage, art pieces, and specialty projects. If you can imagine it, we can cut it. Ask us about custom work.',
    tag: 'Custom Work',
    tagColor: 'bg-brand-rust',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From fencing to metal buildings — all delivered with 30+ years of West Texas expertise."
        breadcrumb="What We Do"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, desc, tag, tagColor, icon }) => (
              <div key={title} className="service-card bg-brand-cream rounded-2xl p-7 border border-brand-cream relative">
                {tag && (
                  <span className={`absolute top-5 right-5 ${tagColor} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
                    {tag}
                  </span>
                )}
                <div className="w-14 h-14 bg-brand-charcoal text-brand-tan rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{icon}</svg>
                </div>
                <h3 className="font-extrabold text-brand-charcoal text-lg mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Don&apos;t See What You Need?
          </h2>
          <p className="text-white/65 mb-8 text-lg">We handle a wide variety of custom projects. Give us a call — chances are we can help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3258127143" className="inline-flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Call 325-812-7143
            </a>
            <a href="https://tritextx.mybudgetquote.com/budget" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/25 hover:border-brand-tan text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Get an Instant Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
