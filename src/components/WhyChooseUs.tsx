import { Layers, ClipboardList, Ruler, Lightbulb, Grid, BadgeCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import { IMAGES, WHY_CHOOSE_US } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  Layers,
  ClipboardList,
  Ruler,
  Lightbulb,
  Grid,
  BadgeCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <Reveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-burgundy-700/15">
                <img
                  src={IMAGES.whyChooseUs}
                  alt="Professional engineers at work"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-burgundy-700 text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                <p className="font-heading text-4xl font-extrabold text-gold-400 tracking-tight">100%</p>
                <p className="text-sm text-white/80 mt-1">Commitment to quality on every project</p>
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-5 -left-5 w-24 h-24 border-t-4 border-l-4 border-gold-500 rounded-tl-2xl -z-0" />
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal>
              <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Why Choose Us</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight mb-6">
                Excellence in Every Detail
              </h2>
              <div className="w-20 h-1 gradient-gold mb-8 rounded-full" />
            </Reveal>

            <div className="space-y-5">
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = iconMap[item.icon] ?? BadgeCheck;
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="flex items-start gap-4 group">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-offwhite text-gold-600 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-burgundy-900 transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-1 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
