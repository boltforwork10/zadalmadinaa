import { ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import { CORE_VALUES } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  HeartHandshake,
};

export default function CoreValues() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Our Values</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
            Core Values
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            The principles that guide every project we undertake and every relationship we build.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, i) => {
            const Icon = iconMap[value.icon] ?? ShieldCheck;
            return (
              <Reveal key={value.title} delay={i * 0.12}>
                <div className="group bg-white rounded-2xl p-10 border border-gray-100 h-full hover:shadow-xl hover:shadow-burgundy-700/10 transition-all duration-500 relative overflow-hidden">
                  {/* Gold accent */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gold-50 rounded-bl-full opacity-60 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl gradient-gold text-burgundy-900 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-400">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-heading text-xl text-burgundy-800 font-bold mb-4 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.desc}
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
