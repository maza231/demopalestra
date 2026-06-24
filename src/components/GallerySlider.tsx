"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type GallerySliderProps = {
  images: readonly string[];
  /** Millisecondi tra uno scorrimento automatico e il successivo. */
  autoplayMs?: number;
};

/**
 * Slider "center mode" senza dipendenze:
 * - immagine centrale grande, quelle ai lati più piccole e oscurate
 * - scorrimento automatico (in pausa al passaggio del mouse / al tocco)
 * - frecce, pallini, swipe e loop infinito
 */
export default function GallerySlider({
  images,
  autoplayMs = 4000,
}: GallerySliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = images.length;
  const go = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count]
  );

  // Centra la slide attiva calcolando la traslazione del track
  const recalc = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const slide = track.children[active] as HTMLElement | undefined;
    if (!slide) return;
    const target =
      slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
    setOffset(target);
  }, [active]);

  useEffect(() => {
    recalc();
  }, [recalc]);

  useEffect(() => {
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  // Autoplay (in pausa quando paused === true)
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => go(active + 1), autoplayMs);
    return () => clearInterval(id);
  }, [paused, active, count, autoplayMs, go]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      {/* Viewport */}
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-4 transition-transform duration-700 ease-out sm:gap-6"
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {images.map((src, i) => {
            const isActive = i === active;
            return (
              <button
                type="button"
                key={src}
                onClick={() => go(i)}
                aria-label={`Vai all'immagine ${i + 1}`}
                className={`relative aspect-[16/10] w-[82%] flex-shrink-0 overflow-hidden rounded-2xl transition-all duration-700 ease-out sm:aspect-[16/9] sm:w-[60%] lg:w-[52%] ${
                  isActive
                    ? "scale-100 opacity-100 shadow-xl"
                    : "scale-90 opacity-70"
                }`}
              >
                <Image
                  src={src}
                  alt={`Foto della palestra ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 82vw, 600px"
                  className="object-cover"
                  priority={i === 0}
                />
                {/* Velo scuro sulle immagini laterali */}
                <div
                  className={`absolute inset-0 bg-ink transition-opacity duration-700 ${
                    isActive ? "opacity-0" : "opacity-45"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Frecce */}
      <button
        type="button"
        onClick={() => go(active - 1)}
        aria-label="Immagine precedente"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition hover:bg-white sm:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(active + 1)}
        aria-label="Immagine successiva"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition hover:bg-white sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Pallini */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Vai all'immagine ${i + 1}`}
            aria-current={active === i}
            className={`h-2.5 rounded-full transition-all ${
              active === i ? "w-6 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
