import type { ReactNode } from "react";
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import { whatsappLink, telLink, mapsLink } from "@/lib/links";

type Variant = "whatsapp" | "call" | "visit" | "outline";

type CTAButtonProps = {
  variant: Variant;
  children: ReactNode;
  /** Messaggio WhatsApp personalizzato (solo per variant="whatsapp"). */
  message?: string;
  className?: string;
  /** Su mobile WhatsApp/tel/maps aprono già l'app: non serve target. */
  fullWidth?: boolean;
};

const variantClasses: Record<Variant, string> = {
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5b] focus-visible:outline-[#25D366]",
  call: "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand",
  visit:
    "bg-white text-ink hover:bg-slate-100 focus-visible:outline-white border border-slate-200",
  outline:
    "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
};

/** Pulsante CTA che incapsula le 3 azioni di conversione. */
export default function CTAButton({
  variant,
  children,
  message,
  className = "",
  fullWidth = false,
}: CTAButtonProps) {
  const href =
    variant === "whatsapp"
      ? whatsappLink(message)
      : variant === "call"
        ? telLink()
        : variant === "visit"
          ? mapsLink()
          : "#";

  const isExternal = variant === "whatsapp" || variant === "visit";

  const Icon =
    variant === "whatsapp"
      ? WhatsAppIcon
      : variant === "call"
        ? PhoneIcon
        : variant === "visit"
          ? MapPinIcon
          : null;

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-base font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        variantClasses[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </a>
  );
}
