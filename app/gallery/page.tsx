import Link from 'next/link';
import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';

const categories = [
  {
    title: 'Cedar Privacy',
    slug: 'cedar-privacy',
    images: [
      '/cedar-privacy1.png',
      '/cedar-privacy2.png',
      '/cedar-privacy3.png',
      '/cedar-privacy4.png',
      '/cedar-privacy5.png',
      '/cedar-privacy6.png',
    ],
  },
  {
    title: 'Ornamental Iron',
    slug: 'ornamental-iron',
    images: [
      '/ornamental1.png',
      '/ornamental2.png',
      '/ornamental3.png',
      '/ornamental4.png',
      '/ornamental5.png',
      '/ornamental6.png',
    ],
  },
  {
    title: 'Ranch & Field Fence',
    slug: 'ranch-field',
    images: [
      '/ranch1.png',
      '/ranch2.png',
      '/ranch3.png',
      '/ranch4.png',
      '/ranch5.png',
      '/ranch6.png',
    ],
  },
  {
    title: 'Chain Link',
    slug: 'chain-link',
    images: [
      '/chain1.png',
      '/chain2.png',
      '/chain3.png',
      '/chain4.png',
      '/chain5.png',
      '/chain6.png',
    ],
  },
  {
    title: 'Metal',
    slug: 'metal',
    images: [
      '/metal1.png',
      '/metal2.png',
      '/metal3.png',
      '/metal4.png',
      '/metal5.png',
      '/metal6.png',
    ],
  },
  {
    title: 'Gates',
    slug: 'gates',
    images: [
      '/gate1.png',
      '/gate2.png',
      '/gate3.png',
      '/gate4.png',
      '/gate5.png',
      '/gate6.png',
    ],
  },
  {
    title: 'Metal Buildings',
    slug: 'metal-buildings',
    images: [
      '/metal-building1.png',
      '/metal-building2.png',
      '/metal-building3.png',
      '/metal-building4.png',
    ],
  },
  {
    title: 'Custom Projects',
    slug: 'custom-projects',
    images: [
      '/custom1.png',
      '/custom2.png',
      '/custom3.png',
      '/custom4.png',
      '/custom5.png',
      '/custom6.png',
      '/custom7.png',
      '/custom8.png',
      '/custom9.png',
      '/custom10.png',
      '/custom11.png',
      '/custom12.png',
    ],
  },
  {
    title: 'Behind the Scenes',
    slug: 'behind-scenes',
    images: [
      '/behind1.png',
      '/behind2.png',
      '/behind3.png',
      '/behind4.png',
      '/behind5.png',
      '/behind6.png',
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Project Gallery"
        subtitle="Whether you need a new fence, custom gate, metal building, or something completely unique — we have a solution for you."
        breadcrumb="Our Work"
      />

      {/* Category nav */}
      <nav className="bg-white border-b border-slate-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors bg-brand-cream text-brand-charcoal hover:bg-brand-tan hover:text-white"
            >
              {c.title}
            </a>
          ))}
        </div>
      </nav>

      <div>
        {categories.map(({ title, slug, images }, catIdx) => (
          <section
            key={slug}
            id={slug}
            className={`py-16 ${catIdx % 2 === 0 ? 'bg-brand-cream' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section header */}
              <div className="mb-8">
                <p className="text-brand-tan font-semibold text-xs uppercase tracking-widest mb-2">
                  Portfolio
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {title}
                </h2>
                <div className="w-12 h-1 bg-brand-tan rounded-full mt-3" />
              </div>

              {/* Photo grid */}
              <GalleryGrid images={images} title={title} />
            </div>
          </section>
        ))}

        {/* Social note */}
        <div className="py-10 text-center bg-brand-cream border-t border-slate-200">
          <p className="text-brand-stone text-sm">
            More photos on{' '}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-brand-tan hover:underline font-semibold">Facebook</a>
            {' '}and{' '}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-tan hover:underline font-semibold">Instagram</a>
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="py-14 bg-brand-brown text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Like What You See?
          </h2>
          <p className="text-white/65 mb-6">Let&apos;s build something great together. Get a free estimate today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-8 py-3.5 rounded-xl transition-colors">
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
