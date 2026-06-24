import { site } from "@/config/site";

/** Costruisce il link WhatsApp con messaggio precompilato. */
export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Costruisce il link telefonico (tel:) a partire dal numero mostrato. */
export function telLink(): string {
  const digits = site.phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

/** Link a Google Maps per indicazioni / visita in sede. */
export function mapsLink(): string {
  return site.mapsUrl;
}
