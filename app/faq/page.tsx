import Link from 'next/link';
import PageHero from '../components/PageHero';

const faqs = [
  {
    q: 'Do you offer free estimates?',
    a: 'Yes — we offer completely free in-person estimates throughout San Angelo and the surrounding West Texas area. We come to your property to assess the project and create the best plan for your vision.',
    category: 'Estimates',
  },
  {
    q: 'How do I get an instant online quote?',
    a: "Visit our Instant Quote tool (linked in the navigation) and answer a few simple questions about your project. It's quick, easy, and gives you a preliminary price right away. We'll follow up to finalize details.",
    category: 'Estimates',
  },
  {
    q: 'What types of fencing do you install?',
    a: 'We install all types — wood privacy, chain-link, vinyl, wrought iron, pipe, barbed wire, high-tensile, ranch-style, and more. If you need it, we can build it.',
    category: 'Services',
  },
  {
    q: 'Do you offer discounts for military or first responders?',
    a: 'Absolutely. We proudly offer special discounts for active military, veterans, and first responders. Contact us or visit our Offers page for details.',
    category: 'Discounts',
  },
  {
    q: 'What markets do you serve?',
    a: 'We work across commercial, industrial, residential, and agricultural markets throughout San Angelo and West Texas. No project is too big or too small.',
    category: 'Services',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes, Tritex is fully licensed and insured. We maintain all required certifications so you can have complete peace of mind on every project.',
    category: 'Company',
  },
  {
    q: 'Do you offer DIY material packages?',
    a: 'Yes! If you prefer to build yourself, we can supply everything you need — cut and prepped to your specifications. Visit our Services page for more info.',
    category: 'Services',
  },
  {
    q: 'How long does a typical fence installation take?',
    a: 'Timeline depends on project size, material, and current schedule. Most residential fence projects are completed within 1–3 days. We\'ll give you a clear timeline during your estimate.',
    category: 'Process',
  },
  {
    q: 'Do you build metal buildings?',
    a: "Yes — we design and build durable metal buildings for agricultural, commercial, and personal use. Ask us during your estimate for sizing, materials, and current lead times.",
    category: 'Services',
  },
  {
    q: 'What are your hours?',
    a: 'We are open Monday through Friday, 8:00 AM to 5:00 PM. We are closed on weekends and major holidays. For urgent matters, leave us a message and we\'ll get back to you as soon as possible.',
    category: 'Company',
  },
];

const categoryColors: Record<string, string> = {
  Estimates:  'bg-brand-tan text-white',
  Services:   'bg-brand-charcoal text-white',
  Discounts:  'bg-brand-rust text-white',
  Company:    'bg-brand-brown text-white',
  Process:    'bg-brand-stone text-white',
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before starting your project."
        breadcrumb="FAQ"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map(({ q, a, category }) => (
              <div key={q} className="bg-brand-cream rounded-2xl p-6 border border-brand-cream">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-tan text-white rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-brand-charcoal">{q}</h3>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${categoryColors[category]}`}>
                        {category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand-charcoal rounded-2xl p-8 text-white text-center">
            <h3 className="font-extrabold text-xl mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Still Have Questions?
            </h3>
            <p className="text-white/65 mb-6">We&apos;re happy to help. Give us a call or send us a message.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:3258127143" className="inline-flex items-center justify-center gap-2 bg-brand-tan hover:bg-brand-brown-light text-white font-bold px-7 py-3 rounded-xl transition-colors">
                Call 325-812-7143
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white/25 hover:border-brand-tan text-white font-semibold px-7 py-3 rounded-xl transition-colors">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
