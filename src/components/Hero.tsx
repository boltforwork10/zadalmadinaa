import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '@/data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    img: '/images/image copy.png',
    eyebrow: 'About Zad Almadina',
    heading: 'Discover Zad Almadina',
    subheading:
      'A trusted partner for comprehensive technical services and maintenance in Dubai, delivering quality, reliability, and attention to detail for every project.',
    buttonText: 'Learn More About Us',
    buttonTo: '/about',
  },
  {
    img: '/images/image copy 2.png',
    eyebrow: 'Our Services',
    heading: 'Expert Technical Solutions',
    subheading:
      'From air conditioning and plumbing to electromechanical works and luxury finishes, we provide a full spectrum of services under one roof.',
    buttonText: 'Explore Our Services',
    buttonTo: '/services',
  },
  {
    img: 'https://images.pexels.com/photos/17576484/pexels-photo-17576484.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    eyebrow: 'Our Portfolio',
    heading: 'Proven Track Record',
    subheading:
      'Explore our portfolio of successfully completed projects, showcasing our commitment to excellence across residential and commercial spaces.',
    buttonText: 'View Our Work',
    buttonTo: '/projects',
  },
  {
    img: 'https://images.pexels.com/photos/4266932/pexels-photo-4266932.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    eyebrow: 'Contact Us',
    heading: "Let's Build Together",
    subheading:
      'Ready to start your next project? Get in touch with our expert team today for a customized quote and professional consultation.',
    buttonText: 'Contact Us Today',
    buttonTo: '/contact',
  },
];

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
                alt={slide.heading}
                className="h-full w-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="relative z-40 flex items-center h-full max-w-7xl mx-auto px-6 pointer-events-none">
        <div className="relative z-40 max-w-2xl pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
                {slides[activeIndex].eyebrow}
              </p>
              <h1 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-balance">
                {slides[activeIndex].heading}
              </h1>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-9 max-w-xl font-light">
                {slides[activeIndex].subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={slides[activeIndex].buttonTo}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold tracking-wide hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-[1.03]"
                >
                  {slides[activeIndex].buttonText}
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/70 text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300"
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
            className="w-1 h-2 bg-yellow-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
