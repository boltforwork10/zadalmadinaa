import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, CONTACT } from '@/data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    img: IMAGES.hero1,
    heading: 'Integrated Technical Solutions for Your Home and Building',
  },
  {
    img: IMAGES.hero2,
    heading: 'Integrated Technical Solutions for Your Home and Building',
  },
  {
    img: IMAGES.hero3,
    heading: 'Integrated Technical Solutions for Your Home and Building',
  },
];

const subheading =
  'Zad Almadina Technical Services L.L.C — We offer a comprehensive range of installation, maintenance, and technical services for buildings and facilities. Quality execution, attention to detail, and solutions tailored to every project\'s needs.';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="absolute inset-0 h-full w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="h-full">
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                alt="Dubai architecture"
                className="h-full w-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/80 via-burgundy-950/50 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
                Zad Almadina Technical Services L.L.C
              </p>
              <h1 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-balance">
                {slides[activeIndex].heading}
              </h1>
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-9 max-w-xl font-light">
                {subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-burgundy-900 font-semibold tracking-wide hover:bg-gold-400 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-[1.03]"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/70 text-white font-semibold tracking-wide hover:bg-white hover:text-burgundy-700 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Contact via WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2 bg-gold-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
