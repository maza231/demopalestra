import CTAButton from "@/components/CTAButton";
import { CheckIcon } from "@/components/Icons";
import { site } from "@/config/site";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  perks: readonly string[];
  highlighted: boolean;
};

/** Card di un piano di abbonamento, con CTA WhatsApp dedicata. */
export default function PricingCard({
  name,
  price,
  period,
  description,
  perks,
  highlighted,
}: PricingCardProps) {
  const isNumeric = /^\d/.test(price);

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 ${
        highlighted
          ? "bg-ink text-white shadow-xl ring-2 ring-brand"
          : "bg-white text-ink shadow-sm ring-1 ring-slate-100"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Più scelto
        </span>
      )}

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className={`mt-1 text-sm ${highlighted ? "text-ink-muted" : "text-slate-500"}`}>
        {description}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        {isNumeric && <span className="text-2xl font-semibold">€</span>}
        <span className="font-display text-4xl font-bold">{price}</span>
        {period && (
          <span className={highlighted ? "text-ink-muted" : "text-slate-500"}>
            {period}
          </span>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5">
            <CheckIcon
              className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                highlighted ? "text-brand-light" : "text-brand"
              }`}
            />
            <span className={highlighted ? "text-slate-200" : "text-slate-700"}>
              {perk}
            </span>
          </li>
        ))}
      </ul>

      <CTAButton
        variant="whatsapp"
        fullWidth
        className="mt-8"
        message={`Ciao! Sono interessato/a all'abbonamento "${name}" presso ${site.name}. Potete darmi maggiori info?`}
      >
        Richiedi info
      </CTAButton>
    </div>
  );
}
