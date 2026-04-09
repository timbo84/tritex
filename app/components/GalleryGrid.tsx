'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface GalleryGridProps {
  images: string[];
  title: string;
}

export default function GalleryGrid({ images, title }: GalleryGridProps) {
  const [active, setActive] = useState<{ src: string; index: number } | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive({ src, index: i })}
            className="relative aspect-square rounded-xl overflow-hidden group block w-full"
            aria-label={`View ${title} photo ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} project ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-cream transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-brand-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src={active.src}
                alt={`${title} project ${active.index + 1}`}
                fill
                className="object-contain rounded-xl"
                sizes="90vw"
                priority
              />
            </div>

            {/* Caption */}
            <p className="text-center text-white/60 text-sm mt-3">
              {title} · Photo {active.index + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
