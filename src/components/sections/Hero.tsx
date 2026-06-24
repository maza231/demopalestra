import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { site } from "@/config/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Immagine di sfondo */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
        alt="Interno della palestra con attrezzature moderne"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay per leggibilità del testo */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/40" />

      <div className="relative mx-auto w-full max-w-content px-5 py-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            {site.tagline}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Allenati a {site.city},
            <br />
            <span className="text-brand-light">cambia il tuo ritmo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            Sala pesi, corsi di gruppo e personal training con istruttori
            qualificati. Il primo passo? Scrivici: ti aspettiamo per una visita
            gratuita.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton variant="whatsapp">Scrivici su WhatsApp</CTAButton>
            <CTAButton variant="call">Chiama ora</CTAButton>
            <a
              href="#contatti"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Vieni a trovarci
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-300">
            📍 {site.address} · ☎ {site.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
