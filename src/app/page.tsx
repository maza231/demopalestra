import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import Section, { SectionHeading } from "@/components/Section";
import FeatureItem from "@/components/FeatureItem";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrainerCard from "@/components/TrainerCard";
import CTAButton from "@/components/CTAButton";
import {
  features,
  services,
  trainers,
  plans,
  gallery,
  testimonials,
  site,
} from "@/config/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Vantaggi */}
        <Section id="vantaggi" className="bg-slate-50">
          <SectionHeading
            eyebrow="Perché noi"
            title="Tutto ciò che ti serve per allenarti al meglio"
            subtitle="Una palestra pensata per farti raggiungere i tuoi obiettivi, in un ambiente curato e motivante."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} text={f.text} />
            ))}
          </div>
        </Section>

        {/* Corsi & Servizi */}
        <Section id="servizi">
          <SectionHeading
            eyebrow="Corsi & Servizi"
            title="Scegli come allenarti"
            subtitle="Dalla sala pesi ai corsi di gruppo, fino al percorso 1-to-1 con il personal trainer."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} text={s.text} image={s.image} />
            ))}
          </div>
        </Section>

        {/* Personal Trainer / Team */}
        <Section id="team">
          <SectionHeading
            eyebrow="Il nostro team"
            title="I personal trainer al tuo fianco"
            subtitle="Passa il mouse o tocca una card per scoprire chi sono e le loro specializzazioni."
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {trainers.map((t) => (
              <TrainerCard key={t.name} {...t} />
            ))}
          </div>
        </Section>

        {/* Abbonamenti */}
        <Section id="abbonamenti" className="bg-slate-50">
          <SectionHeading
            eyebrow="Abbonamenti"
            title="Piani semplici e trasparenti"
            subtitle="Nessun costo nascosto. Contattaci per la promo del mese e per la prima visita gratuita."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <PricingCard key={p.name} {...p} />
            ))}
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery">
          <SectionHeading
            eyebrow="La palestra"
            title="Dai un'occhiata ai nostri spazi"
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Foto della palestra ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonianze */}
        <Section id="recensioni" className="bg-slate-50">
          <SectionHeading
            eyebrow="Dicono di noi"
            title="Le storie di chi si allena qui"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Section>

        {/* Banner CTA */}
        <section className="bg-brand">
          <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-5 py-14 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Pronto a iniziare da {site.name}?
            </h2>
            <p className="max-w-xl text-white/90">
              Scrivici su WhatsApp o chiamaci: ti fissiamo subito la tua prima
              visita gratuita.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton variant="whatsapp">Scrivici su WhatsApp</CTAButton>
              <CTAButton variant="call" className="!bg-white !text-brand hover:!bg-slate-100">
                Chiama ora
              </CTAButton>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
