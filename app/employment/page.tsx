import Link from 'next/link';
import PageHero from '../components/PageHero';

const perks = [
  'Competitive pay',
  'Year-round work',
  'Hands-on training available',
  'Work in your community',
  'Family-owned team culture',
  'All city permits handled by us',
];

export default function EmploymentPage() {
  return (
    <>
      <PageHero
        title="Join the Tritex Team"
        subtitle="We're always looking for hardworking, reliable people who take pride in their craft."
        breadcrumb="Employment"
      />

      {/* Application section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">Now Hiring</p> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Tritex Application
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
             Want to join our TriTex team? Please print out our application, fill it out, and email it back to our office manager Heather! The address to send that to is {" "}
              <a href="mailto:chase@tritextx.com" className="text-brand-tan hover:underline font-semibold">
                chase@tritextx.com
              </a>
            </p>
          </div>

          {/* Download card */}
          <div className="bg-brand-brown rounded-2xl p-10 text-white text-center max-w-md mx-auto mb-16">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-brand-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-extrabold text-xl mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Application (PDF)
            </h3>
            <p className="text-white/60 text-sm mb-6">Print, fill out, and email to us</p>
            <a
              href="https://img1.wsimg.com/blobby/go/4f6744ba-85c7-4267-aea2-e0ed35524729/downloads/Application.pdf?ver=1757614459500"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Application
            </a>
          </div>

          {/* Why work with us */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-3">Why Tritex</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                A Team You Can Be Proud Of
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-slate-600 leading-relaxed mb-6">
                Whether you&apos;re an experienced fencer, laborer, or just starting out — we&apos;d love to hear from you. No formal resume required. We value work ethic and attitude above all else.
              </p>
              <ul className="space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-brand-tan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Contact to apply */}
            {/* <div className="bg-brand-cream rounded-2xl p-8">
              <h3 className="font-extrabold text-xl text-brand-charcoal mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Apply Today
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Download the application above or reach out directly. Call or email with your name, number, and a bit about your experience.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:3258127143"
                  className="flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold py-3.5 rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 325-812-7143
                </a>
                <a
                  href="mailto:chase@tritextx.com?subject=Employment Inquiry"
                  className="flex items-center justify-center gap-2 border-2 border-brand-charcoal hover:bg-brand-charcoal text-brand-charcoal hover:text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email chase@tritextx.com
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-brown text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  Send a Message Online
                </Link>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
