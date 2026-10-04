import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const STEPS = ['01', '02', '03', '04', '05'];

export default function HowWeWork() {
  const { t } = useTranslation();

  return (
    <section id="how-we-work" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">{t('howWeWork.eyebrow')}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
            {t('howWeWork.title')}
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t('howWeWork.subtitle')}
          </p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[88px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-burgundy-200 via-gold-400 to-burgundy-200" />

          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border-4 border-gold-400 flex items-center justify-center shadow-lg mb-6">
                    <span className="font-heading text-2xl font-extrabold text-burgundy-700 tracking-tight">{step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-3 tracking-tight">{t(`howWeWork.steps.${i}.title`)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(`howWeWork.steps.${i}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-burgundy-200 via-gold-400 to-burgundy-200" />

          <div className="space-y-10">
            {STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-gold-400 flex items-center justify-center shadow-md">
                    <span className="font-heading text-xs font-bold text-burgundy-700 tracking-tight">{step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-2 tracking-tight">{t(`howWeWork.steps.${i}.title`)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(`howWeWork.steps.${i}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
