import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import ServiceCard from './ServiceCard';
import { SERVICES } from '@/data';

export default function FeaturedServices() {
  const { t } = useTranslation();
  const featured = SERVICES.slice(0, 6);

  return (
    <section id="featured-services" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">{t('featuredServices.eyebrow')}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
            {t('featuredServices.title')}
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t('featuredServices.subtitle')}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-burgundy-700 text-white font-semibold hover:bg-burgundy-800 transition-all duration-300 hover:shadow-xl hover:shadow-burgundy-700/20 hover:scale-[1.03]"
          >
            {t('featuredServices.viewAll')}
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
