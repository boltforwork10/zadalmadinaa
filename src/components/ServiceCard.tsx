import { Wind, Droplets, Zap, LayoutGrid, PaintRoller, Square, CircleCheck as CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Droplets,
  Zap,
  LayoutGrid,
  PaintRoller,
  Square,
};

export type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
  features: string[];
};

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.iconName] ?? Wind;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-burgundy-700/10 hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col">
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Dark rounded icon box overlapping bottom-left */}
        <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-xl bg-burgundy-800 text-gold-400 flex items-center justify-center shadow-lg ring-4 ring-white">
          <Icon size={26} />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 pt-9 flex flex-col flex-1">
        <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-2 leading-snug tracking-tight">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2.5 mt-auto">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="shrink-0 text-gold-600 mt-0.5" />
              <span className="text-sm text-gray-600 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Gold accent bar */}
      <div className="h-1 w-0 gradient-gold transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
