import { ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  HeartHandshake,
};

const ICONS = ['ShieldCheck', 'Clock', 'HeartHandshake'];

export default function CoreValues() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">{t('coreValues.eyebrow')}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
            {t('coreValues.title')}
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t('coreValues.subtitle')}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {ICONS.map((iconName, i) => {
            const Icon = iconMap[iconName] ?? ShieldCheck;
            return (
              <Reveal key={i} delay={i * 0.12}>
                <div className="group bg-white rounded-2xl p-10 border border-gray-100 h-full hover:shadow-xl hover:shadow-burgundy-700/10 transition-all duration-500 relative overflow-hidden">
                  {/* Gold accent */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gold-50 rounded-bl-full opacity-60 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl gradient-gold text-burgundy-900 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-400">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-heading text-xl text-burgundy-800 font-bold mb-4 tracking-tight">
                      {t(`coreValues.values.${i}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`coreValues.values.${i}.desc`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
