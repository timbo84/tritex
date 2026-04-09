import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tritex | Solutions Built Together | San Angelo, TX",
  description:
    "West Texas' most trusted contractor — fencing, custom gates, metal buildings, concrete, and more. Over 30 years serving San Angelo, TX. Free estimates.",
  keywords:
    "fence company San Angelo, fencing contractor Texas, custom gates, ranch fence, metal buildings, concrete, San Angelo TX",
  openGraph: {
    title: "Tritex | Solutions Built Together | San Angelo, TX",
    description:
      "Over 30 years of experience. Solutions built together — fencing, gates, metal buildings & more. Serving San Angelo and West Texas.",
    type: "website",
  },
};

const footerLinks = [
  { label: 'About Us',          href: '/about' },
  { label: 'Our Services',      href: '/services' },
  { label: 'Project Gallery',   href: '/gallery' },
  { label: 'Offers & Discounts',href: '/offers' },
  { label: 'FAQ',               href: '/faq' },
  { label: 'Contact',           href: '/contact' },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>

        {/* ── Footer ── */}
        <footer className="bg-brand-brown text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* Brand column */}
              <div>
                <Link href="/" className="inline-block mb-5 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Tritex — Solutions Built Together"
                    width={220}
                    height={74}
                    className="h-16 w-auto object-contain rounded-lg"
                  />
                </Link>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  Over 30 years of unmatched quality across West Texas. Your reputation is our reputation — on every project.
                </p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.facebook.com', label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                    { href: 'https://www.instagram.com', label: 'Instagram', custom: true },
                    { href: 'https://www.youtube.com',  label: 'YouTube',   custom: false, yt: true },
                  ].map(({ href, label, path, custom, yt }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 bg-white/10 hover:bg-brand-tan rounded-lg flex items-center justify-center transition-colors"
                    >
                      {custom ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="17.5" cy="6.5" r="1.5"/>
                        </svg>
                      ) : yt ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                          <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d={path}/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest text-brand-tan mb-5">Quick Links</h3>
                <ul className="space-y-2.5 text-sm">
                  {footerLinks.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="text-white/65 hover:text-brand-tan-light transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest text-brand-tan mb-5">Contact Us</h3>
                <ul className="space-y-3 text-sm text-white/65">
                  {[
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>,
                      content: <span>5508 Christoval Rd<br/>San Angelo, TX 76904</span>,
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>,
                      content: <a href="tel:3258127143" className="hover:text-brand-tan-light transition-colors">325-812-7143</a>,
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
                      content: <a href="mailto:chase@tritextx.com" className="hover:text-brand-tan-light transition-colors">chase@tritextx.com</a>,
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>,
                      content: <span>Mon–Fri: 8 AM – 5 PM · Sat–Sun: Closed</span>,
                    },
                  ].map(({ icon, content }, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-brand-tan mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {icon}
                      </svg>
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
              <span>© {new Date().getFullYear()} Tritex. All rights reserved.</span>
              <span>San Angelo, TX · Licensed &amp; Insured</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
