/**
 * Contact page.
 * The form uses Formspree (formspree.io) for free email delivery.
 * Replace YOUR_FORM_ID with the ID from your Formspree project.
 */
import PageHero from '../components/PageHero';

const contactInfo = [
  {
    label: 'Phone',
    value: '325-812-7143',
    href: 'tel:3258127143',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>,
  },
  {
    label: 'Email',
    value: 'chase@tritextx.com',
    href: 'mailto:chase@tritextx.com',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
  },
  {
    label: 'Address',
    value: '5508 Christoval Rd, San Angelo, TX 76904',
    href: 'https://maps.google.com/?q=5508+Christoval+Rd+San+Angelo+TX+76904',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>,
  },
  {
    label: 'Hours',
    value: 'Mon–Fri: 8:00 AM – 5:00 PM · Sat–Sun: Closed',
    href: null,
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We offer free in-person estimates. Reach out — we'd love to hear about your project."
        breadcrumb="Get In Touch"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact info — left */}
            <div className="lg:col-span-2 space-y-4">
              <div className="mb-6">
                <p className="text-brand-tan font-semibold text-sm uppercase tracking-widest mb-2">Reach Out</p>
                <h2 className="text-2xl font-extrabold text-brand-charcoal" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  We&apos;re Here to Help
                </h2>
              </div>

              {contactInfo.map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-4 bg-brand-cream rounded-2xl p-5">
                  <div className="w-11 h-11 bg-brand-charcoal text-brand-tan rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{icon}</svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-stone mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-brand-charcoal hover:text-brand-tan transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-brand-charcoal text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Instant quote CTA */}
              <div className="bg-brand-charcoal rounded-2xl p-6 text-white mt-6">
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Want Instant Pricing?</h3>
                <p className="text-white/65 text-sm mb-4">Use our online quote tool for a quick estimate in minutes.</p>
                <a
                  href="https://tritextx.mybudgetquote.com/budget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
                >
                  Get Instant Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact form — right */}
            <div className="lg:col-span-3">
              <div className="bg-brand-cream rounded-2xl p-8">
                <h3 className="font-extrabold text-brand-charcoal text-xl mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Send Us a Message
                </h3>
                {/*
                  To activate this form:
                  1. Create a free account at formspree.io
                  2. Create a new form and copy your form ID
                  3. Replace YOUR_FORM_ID in the action URL below
                */}
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="John"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-tan focus:ring-2 focus:ring-brand-tan/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Smith"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-tan focus:ring-2 focus:ring-brand-tan/20 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(325) 000-0000"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-tan focus:ring-2 focus:ring-brand-tan/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-tan focus:ring-2 focus:ring-brand-tan/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-tan focus:ring-2 focus:ring-brand-tan/20 transition"
                    >
                      <option value="">Select a service...</option>
                      <option>Fencing</option>
                      <option>Custom / Automatic Gates</option>
                      <option>DIY Package</option>
                      <option>Staining</option>
                      <option>Metal Building</option>
                      <option>Water Storage</option>
                      <option>Concrete</option>
                      <option>Erosion Control</option>
                      <option>Plasma Cutting</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project — size, location, timeline, any questions..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-tan focus:ring-2 focus:ring-brand-tan/20 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-tan hover:bg-brand-brown-light text-white font-bold py-4 rounded-xl transition-colors shadow-md text-sm"
                  >
                    Send Message
                  </button>

                  <p className="text-brand-stone text-xs text-center">
                    We typically respond within 1 business day. For urgent matters, call <a href="tel:3258127143" className="text-brand-tan font-semibold">325-812-7143</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-brand-cream border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 h-96">
            <iframe
              src="https://maps.google.com/maps?q=5508+Christoval+Rd+San+Angelo+TX+76904&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tritex location — 5508 Christoval Rd, San Angelo, TX"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.google.com/?q=5508+Christoval+Rd+San+Angelo+TX+76904"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-tan hover:underline font-semibold text-sm"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
