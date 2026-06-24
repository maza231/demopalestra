import Section, { SectionHeading } from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import { site } from "@/config/site";
import { telLink } from "@/lib/links";

export default function Contact() {
  return (
    <Section id="contatti" className="bg-ink">
      <SectionHeading
        light
        eyebrow="Contatti"
        title="Fai il primo passo, oggi"
        subtitle="Scrivici su WhatsApp, chiamaci o vieni direttamente in palestra: la prima visita è gratuita e senza impegno."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Info + CTA */}
        <div className="flex flex-col gap-6">
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-light">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Dove siamo</p>
                <p className="text-ink-muted">{site.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-light">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Telefono</p>
                <a href={telLink()} className="text-ink-muted transition hover:text-white">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-light">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Orari</p>
                <ul className="text-ink-muted">
                  {site.hours.map((h) => (
                    <li key={h.day}>
                      {h.day}: {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton variant="whatsapp">Scrivici su WhatsApp</CTAButton>
            <CTAButton variant="call">Chiama ora</CTAButton>
            <CTAButton variant="visit">Indicazioni</CTAButton>
          </div>
        </div>

        {/* Mappa */}
        <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
          <iframe
            title={`Mappa ${site.name}`}
            src={site.mapsEmbedUrl}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
