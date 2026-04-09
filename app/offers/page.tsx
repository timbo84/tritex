import Link from 'next/link';
import PageHero from '../components/PageHero';

const discountCards = [
  {
    title: 'Active Military',
    desc: 'Currently serving in any branch of the U.S. Armed Forces? We honor your commitment with a special discount on all services.',
    icon: '🎖️',
    bg: 'bg-brand-charcoal',
  },
  {
    title: 'Veterans',
    desc: 'Honorably discharged veterans receive a special thank-you discount. Your service and sacrifice are appreciated.',
    icon: '⭐',
    bg: 'bg-brand-brown',
  },
  {
    title: 'First Responders',
    desc: 'Police, fire, paramedics, and other first responders are eligible for a special discount on any Tritex service.',
    icon: '🚒',
    bg: 'bg-brand-rust',
  },
];

export default function OffersPage() {
  return (
    <>
      <PageHero
        title="Offers & Discounts"
        subtitle="Special pricing for those who serve our communities — and more."
        breadcrumb="Special Offers"
      />

      {/* Military / first responder discount */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">Giving Back</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Discounts for Those Who Serve
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="text-slate-500 max-w-2xl mx-auto">
              We believe in giving back to the people who protect and serve our communities. Show valid ID and receive a special discount on any Tritex service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {discountCards.map(({ title, desc, icon, bg }) => (
              <div key={title} className={`${bg} text-white rounded-2xl p-8 text-center`}>
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-extrabold text-xl mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm mb-5">
              Contact us to verify eligibility and apply your discount to your estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:3258127143" className="inline-flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md">
                Call to Verify &amp; Redeem
              </a>
              <a href="https://tritextx.mybudgetquote.com/budget" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-brand-charcoal hover:bg-brand-charcoal text-brand-charcoal hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors">
                Get Instant Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Estimate */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">Always Free</p>
              <h2 className="text-3xl font-extrabold text-brand-charcoal mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Free In-Person Estimates
              </h2>
              <div className="section-divider mb-5" />
              <p className="text-slate-600 leading-relaxed mb-4">
                No commitment, no pressure. We come to your property, assess the project, and give you a clear, fair estimate — completely free of charge.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Prefer to start online? Use our Instant Quote tool to get preliminary pricing in minutes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://tritextx.mybudgetquote.com/budget" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-brown text-white font-bold py-4 rounded-xl transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Instant Quote Online
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 border-2 border-brand-charcoal hover:bg-brand-charcoal text-brand-charcoal hover:text-white font-semibold py-4 rounded-xl transition-colors">
                Request In-Person Estimate
              </Link>
              <a href="tel:3258127143" className="flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold py-4 rounded-xl transition-colors">
                Call 325-812-7143
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Employment */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">Join the Team</p>
              <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Employment Opportunities
              </h2>
              <div className="w-14 h-1 bg-brand-tan rounded-full mb-6" />
              <p className="text-white/65 leading-relaxed mb-5">
                We&apos;re always looking for hardworking, reliable people who take pride in their craft. Whether you&apos;re an experienced fencer, laborer, or just starting out — we&apos;d love to hear from you.
              </p>
              <ul className="space-y-2 text-white/65 text-sm">
                {['Competitive pay', 'Year-round work', 'Hands-on training available', 'Work in your community'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-tan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-brown rounded-2xl p-8">
              <h3 className="font-extrabold text-xl mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>Apply Today</h3>
              <p className="text-white/65 text-sm mb-6">
                Call us or send an email with your name, phone number, and a little bit about your experience. No formal resume required.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:3258127143" className="flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
                  Call 325-812-7143
                </a>
                <a href="mailto:chase@tritextx.com?subject=Employment Inquiry" className="flex items-center justify-center gap-2 border-2 border-white/25 hover:border-brand-tan text-white font-semibold py-3.5 rounded-xl transition-colors text-sm">
                  Email chase@tritextx.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
