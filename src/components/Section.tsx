import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Wrapper di sezione con spaziatura e larghezza massima coerenti. */
export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

/** Intestazione di sezione riutilizzabile (occhiello + titolo + sottotitolo). */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? "text-ink-muted" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
