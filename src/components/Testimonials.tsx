import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

import 'swiper/css';
import 'swiper/css/pagination';

type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const testimonials: TestimonialItem[] = useMemo(() => {
    const raw = t('testimonials.items', { returnObjects: true });
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
      return Object.values(raw as Record<string, TestimonialItem>);
    }
    if (Array.isArray(raw)) {
      return raw as TestimonialItem[];
    }
    return [];
  }, [t, lang]);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-burgundy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">{t('testimonials.eyebrow')}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
            {t('testimonials.title')}
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
        </Reveal>

        <Reveal delay={0.1}>
          <Swiper
            key={`testimonials-${lang}`}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={testimonials.length > 1}
            className="pb-14"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="text-center max-w-3xl mx-auto px-4">
                  <Quote size={48} className="text-gold-500/40 mx-auto mb-6" />
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={20} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-8 text-balance">
                    "{item.quote}"
                  </p>
                  <div>
                    <p className="text-gold-400 font-heading font-bold text-lg">{item.name}</p>
                    <p className="text-white/50 text-sm mt-1">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
