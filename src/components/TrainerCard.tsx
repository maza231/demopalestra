"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { whatsappLink } from "@/lib/links";

type TrainerCardProps = {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  specialties: readonly string[];
};

/**
 * Flip card del personal trainer.
 * Si gira al passaggio del mouse (desktop) o al tap (mobile/touch).
 */
export default function TrainerCard({
  name,
  role,
  image,
  bio,
  experience,
  specialties,
}: TrainerCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card aspect-[3/4] w-full cursor-pointer [perspective:1200px]"
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Scopri di più su ${name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
    >
      <div
        className={`flip-inner relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONTE — foto */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          <Image
            src={image}
            alt={`${name} — ${role}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-sm text-brand-light">{role}</p>
            <span className="mt-2 inline-block text-xs text-slate-300">
              Tocca per scoprire di più →
            </span>
          </div>
        </div>

        {/* RETRO — dettagli */}
        <div className="absolute inset-0 flex flex-col rounded-2xl bg-ink p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-brand-light">{role}</p>
          <p className="mt-3 text-sm text-slate-300">{bio}</p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">
            {experience}
          </p>

          <ul className="mt-3 space-y-2">
            {specialties.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-slate-200">
                <CheckIcon className="h-4 w-4 flex-shrink-0 text-brand-light" />
                {s}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(
              `Ciao! Vorrei allenarmi con ${name}. Potete darmi info?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Allenati con {name.split(" ")[0]}
          </a>
        </div>
      </div>
    </div>
  );
}
