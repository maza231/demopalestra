import { iconMap, type IconName } from "@/components/Icons";

type FeatureItemProps = {
  icon: IconName;
  title: string;
  text: string;
};

/** Singolo vantaggio: icona + titolo + testo. */
export default function FeatureItem({ icon, title, text }: FeatureItemProps) {
  const Icon = iconMap[icon];
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}
