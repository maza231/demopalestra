"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

// useLayoutEffect lato client, useEffect lato server (evita warning in SSR)
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type GallerySliderProps = {
  images: readonly string[];
  /** Millisecondi tra uno scorrimento automatico e il successivo. */
  autoplayMs?: number;
};

/**
 * Slider "center mode" a loop infinito, senza dipendenze.
 * - immagine centrale grande, quelle ai lati più piccole e oscurate
 * - loop continuo: agli estremi si vedono comunque le immagini opposte
 *   (tecnica dei cloni: l'array è triplicato e si riposiziona in modo invisibile)
 * - scorrimento automatico (in pausa al passaggio del mouse / al tocco)
 * - frecce, pallini e swipe
 */
export default function GallerySlider({
  images,
  autoplayMs = 3000,
}: GallerySliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = images.length;

  // Array triplicato: [cloni | reali | cloni] per il loop senza estremi
  const slides = [...images, ...images, ...images];

  // pos = indice nell'array triplicato; si parte dal set centrale
  const [pos, setPos] = useState(count);
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mette in pausa l'autoplay e lo fa ripartire dopo un po' (utile su touch)
  const pauseThenResume = useCallback((delay = 2500) => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), delay);
  }, []);

  // Indice logico (0..count-1) dell'immagine centrata
  const logical = ((pos % count) + count) % count;

  // Centra la slide attiva calcolando la traslazione del track
  const recalc = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const slide = track.children[pos] as HTMLElement | undefined;
    if (!slide) return;
    setOffset(slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2);
  }, [pos]);

  // Aggiorna l'offset prima del repaint: lo "snap" del loop resta invisibile
  useIsoLayoutEffect(() => {
    recalc();
  }, [recalc]);

  useEffect(() => {
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  // Quando finisce l'animazione, se siamo finiti su un clone
  // riportiamo (senza transizione) la posizione nel set centrale.
  const handleTransitionEnd = useCallback(() => {
    if (pos < count || pos >= count * 2) {
      setAnimate(false);
      setPos(count + logical);
    }
  }, [pos, count, logical]);

  // Riattiva la transizione dopo lo "snap" invisibile
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true))
    );
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const move = useCallback((delta: number) => {
    setAnimate(true);
    setPos((p) => p + delta);
  }, []);

  // Vai a una specifica immagine (clic su pallino o slide laterale)
  const goTo = useCallback(
    (targetLogical: number) => {
      setAnimate(true);
      setPos((p) => {
        const cur = ((p % count) + count) % count;
        let diff = targetLogical - cur;
        // scegli la direzione più breve nel loop
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        return p + diff;
      });
    },
    [count]
  );

  // Autoplay
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => move(1), autoplayMs);
    return () => clearInterval(id);
  }, [paused, count, autoplayMs, move]);

  // Pulizia del timer di ripresa
  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => pauseThenResume()}
    >
      {/* Viewport */}
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex items-center gap-4 ease-out [will-change:transform] sm:gap-6 ${
            animate ? "transition-transform duration-700" : ""
          }`}
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {slides.map((src, i) => {
            const isActive = i === pos;
            return (
              <button
                type="button"
                key={i}
                onClick={() => goTo(i % count)}
                aria-label={`Vai all'immagine ${(i % count) + 1}`}
                tabIndex={i >= count && i < count * 2 ? 0 : -1}
                className={`relative aspect-[16/10] w-[82%] flex-shrink-0 overflow-hidden rounded-2xl transition-[transform,opacity] duration-700 ease-out [will-change:transform] sm:aspect-[16/9] sm:w-[60%] lg:w-[52%] ${
                  isActive ? "scale-100 opacity-100 shadow-xl" : "scale-90 opacity-70"
                }`}
              >
                <Image
                  src={src}
                  alt={`Foto della palestra ${(i % count) + 1}`}
                  fill
                  sizes="(max-width: 1024px) 82vw, 600px"
                  className="object-cover"
                  priority={i === count}
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

      {/* Pallini */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Vai all'immagine ${i + 1}`}
            aria-current={logical === i}
            className={`h-2.5 rounded-full transition-all ${
              logical === i ? "w-6 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
