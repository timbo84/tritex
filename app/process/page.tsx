import Link from 'next/link';
import PageHero from '../components/PageHero';

const videos = [
  {
    id: 'loom',
    title: 'Introduction to Tritex',
    desc: 'A quick and easy way to get  pricing with a few simple clicks.',
    src: 'https://www.loom.com/embed/ef96025d3be648ba8524def0aa835403',
  },
  {
    id: 'vimeo1',
    title: 'Plasma Cutting',
    desc: 'Watch our plasma cutting capabilities — precision metalwork for gates, custom projects, and more.',
    src: 'https://player.vimeo.com/video/882524788?h=bf2a04d21d&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1',
  },
  {
    id: 'vimeo2',
    title: 'Close Up Plasma Cutting',
    desc: 'A close-up look at our plasma cutting process — the detail and precision that goes into every cut.',
    src: 'https://player.vimeo.com/video/882525794?h=ba2f9a0a77&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1',
  },
  {
    id: 'yt1',
    title: 'Our Work — Project Showcase',
    desc: 'A look at some of our recent completed projects across West Texas.',
    src: 'https://www.youtube.com/embed/qkkcBI-vRKE',
  },
  {
    id: 'yt2',
    title: 'Behind the Build',
    desc: 'See how we approach projects from start to finish — every detail matters.',
    src: 'https://www.youtube.com/embed/20-JYhL0xcQ',
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Our Process"
        subtitle="From the first estimate to the final nail — see how Tritex gets it done."
        breadcrumb="Our Process"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">Watch & Learn</p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              See Tritex in Action
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="space-y-16">
            {videos.map(({ id, title, desc, src }) => (
              <div key={id} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Video */}
                <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
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
                {/* Text */}
                <div className="lg:col-span-2">
                  <div className="w-10 h-1 bg-brand-tan rounded-full mb-4" />
                  <h3
                    className="text-xl sm:text-2xl font-extrabold text-brand-charcoal mb-3"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-brown text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/65 mb-6">Get a free estimate and let&apos;s build something great together.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://tritextx.mybudgetquote.com/budget"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get an Instant Quote
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
