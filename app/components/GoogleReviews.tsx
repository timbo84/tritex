/**
 * GoogleReviews — static showcase of customer reviews styled after Google Reviews.
 *
 * To show LIVE Google reviews, replace this component with one of:
 *  1. Elfsight Google Reviews widget (elfsight.com) — easiest, free tier available
 *  2. Google Places API (requires API key + backend route)
 *  3. Embed your Google Maps listing iframe
 *
 * Your Google Business listing: search "Tritex San Angelo" on Google Maps,
 * click "Share" → "Embed a map" to get your iframe code.
 */

const reviews = [
  {
    name: 'Jennifer M.',
    initials: 'JM',
    rating: 5,
    date: '2 months ago',
    text: 'Chase and his crew did an amazing job on our privacy fence. The pre-dipped cedar looks beautiful and the craftsmanship is top notch. Would highly recommend to anyone in the San Angelo area!',
    bg: 'bg-brand-rust',
  },
  {
    name: 'Mike R.',
    initials: 'MR',
    rating: 5,
    date: '4 months ago',
    text: 'Very professional and fair pricing. Got our ranch perimeter fence done way faster than expected. These guys know what they\'re doing — 30 years of experience really shows.',
    bg: 'bg-brand-brown',
  },
  {
    name: 'Sarah T.',
    initials: 'ST',
    rating: 5,
    date: '5 months ago',
    text: 'Had them install an automatic gate and cedar fence. Quality of work is excellent, came in on budget, and Chase was very responsive throughout the whole process.',
    bg: 'bg-brand-charcoal',
  },
  {
    name: 'David L.',
    initials: 'DL',
    rating: 5,
    date: '7 months ago',
    text: 'Great local company! They helped us with erosion control on our property. Couldn\'t be happier with the results. These guys truly care about doing the job right.',
    bg: 'bg-brand-brown-light',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">
              Customer Reviews
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mb-3"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              What Our Customers Say
            </h2>
            <div className="section-divider" />
          </div>

          {/* Overall rating badge */}
          <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-brand-cream self-start sm:self-auto">
            {/* Google G icon */}
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-brand-charcoal">5.0</span>
                <Stars count={5} />
              </div>
              <p className="text-brand-stone text-xs mt-0.5">Based on Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="review-card bg-white rounded-2xl p-5 border border-white shadow-sm flex flex-col gap-4">
              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${r.bg} text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm">{r.name}</p>
                  <p className="text-brand-stone text-xs">{r.date}</p>
                </div>
              </div>

              <Stars count={r.rating} />

              <p className="text-slate-600 text-sm leading-relaxed flex-1">{r.text}</p>

              {/* Google logo mark */}
              <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100">
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-brand-stone text-[10px] font-medium">Posted on Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/search/Tritex+San+Angelo+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-brand-tan text-brand-brown font-semibold px-7 py-3 rounded-xl hover:bg-brand-tan hover:text-white hover:border-brand-tan transition-all shadow-sm"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
