import {
  Wind,
  Droplets,
  Zap,
  ChefHat,
  LayoutGrid,
  PaintRoller,
  Sparkles,
  PenTool,
  Image as ImageIcon,
  Square,
  Brush,
  Waves,
  Hammer,
  CircleCheck as CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Droplets,
  Zap,
  ChefHat,
  LayoutGrid,
  PaintRoller,
  Sparkles,
  PenTool,
  Image: ImageIcon,
  Square,
  Brush,
  Waves,
  Hammer,
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
  const { t } = useTranslation();
  const Icon = iconMap[service.iconName] ?? Wind;

  const title = t(`services.items.${service.id}.title`);
  const description = t(`services.items.${service.id}.description`);
  const rawFeatures = t(`services.items.${service.id}.features`, { returnObjects: true });
  const features = Array.isArray(rawFeatures)
    ? rawFeatures.filter((feature): feature is string => typeof feature === 'string')
    : [];

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:shadow-burgundy-700/10 hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col">
      {/* Image wrapper — overflow-hidden clips only the image zoom */}
      <div className="relative rounded-t-2xl overflow-hidden">
        <img
          src={service.imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-56 object-cover bg-gray-200 group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Dark icon box overlapping the image/body boundary — outside overflow-hidden so it's never clipped */}
      <div className="absolute top-[12.25rem] left-6 w-14 h-14 rounded-xl bg-burgundy-800 text-gold-400 flex items-center justify-center shadow-lg border-4 border-white z-10">
        <Icon size={24} />
      </div>

      {/* Body — pt-8 clears the protruding icon */}
      <div className="p-6 pt-8 flex flex-col flex-1">
        <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-2 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2.5 mt-auto">
          {features.map((feature) => (
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
