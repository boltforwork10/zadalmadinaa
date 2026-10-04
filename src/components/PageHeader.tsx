import { Link } from 'react-router-dom';
import { ChevronRight, Chrome as Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb: string;
};

export default function PageHeader({ title, subtitle, image, breadcrumb }: PageHeaderProps) {
  const { t } = useTranslation();

  return (
    <section className="relative h-[420px] md:h-[480px] w-full overflow-hidden flex items-end">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/90 via-burgundy-950/70 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
        <Reveal>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-5">
            <Link to="/" className="flex items-center gap-1.5 text-white/60 hover:text-gold-400 transition-colors">
              <Home size={14} />
              {t('pageHeader.home')}
            </Link>
            <ChevronRight size={14} className="text-gold-500/60" />
            <span className="text-gold-400 font-medium">{breadcrumb}</span>
          </nav>

          <h1 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          <div className="w-20 h-1 gradient-gold mt-6 rounded-full" />
          {subtitle && (
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mt-5 font-light">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
