type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
};

/** Card recensione/social proof. */
export default function TestimonialCard({ name, role, text }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="mb-3 flex gap-1 text-brand" aria-label="5 stelle su 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
        ))}
      </div>
      <blockquote className="flex-1 text-slate-700">“{text}”</blockquote>
      <figcaption className="mt-4">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </figcaption>
    </figure>
  );
}
