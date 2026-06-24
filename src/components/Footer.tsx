import {
  WhatsAppIcon,
  PhoneIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/Icons";
import { whatsappLink, telLink } from "@/lib/links";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">{site.tagline}</p>
          <div className="mt-5 flex gap-3">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contatti
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={telLink()} className="flex items-center gap-2.5 transition hover:text-white">
                <PhoneIcon className="h-4 w-4" /> {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0" /> {site.address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Orari
          </h3>
          <ul className="space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-ink-muted">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-content px-5 py-5 text-center text-xs text-ink-muted sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
