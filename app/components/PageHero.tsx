interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="page-hero-bg text-white pt-36 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {breadcrumb && (
          <p className="text-brand-tan-light text-sm font-semibold uppercase tracking-widest mb-3">
            {breadcrumb}
          </p>
        )}
        <h1
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {/* Bottom accent line */}
        <div className="mt-6 w-16 h-1 bg-brand-tan rounded-full" />
      </div>
    </section>
  );
}
