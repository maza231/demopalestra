import Image from "next/image";

type ServiceCardProps = {
  title: string;
  text: string;
  image: string;
};

/** Card di un corso/servizio con immagine ottimizzata. */
export default function ServiceCard({ title, text, image }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-ink">{title}</h3>
        <p className="text-slate-600">{text}</p>
      </div>
    </article>
  );
}
