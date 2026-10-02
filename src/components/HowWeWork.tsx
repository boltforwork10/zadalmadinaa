import Reveal from './Reveal';
import { HOW_WE_WORK } from '@/data';

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
            How We Work
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            A streamlined process from first contact to final handover, ensuring clarity every step of the way.
          </p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[88px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-burgundy-200 via-gold-400 to-burgundy-200" />

          <div className="grid grid-cols-5 gap-4">
            {HOW_WE_WORK.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border-4 border-gold-400 flex items-center justify-center shadow-lg mb-6">
                    <span className="font-heading text-2xl font-extrabold text-burgundy-700 tracking-tight">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-burgundy-200 via-gold-400 to-burgundy-200" />

          <div className="space-y-10">
            {HOW_WE_WORK.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="relative">
                  <div className="absolute -left-[33px] w-10 h-10 rounded-full bg-white border-4 border-gold-400 flex items-center justify-center shadow-md">
                    <span className="font-heading text-xs font-bold text-burgundy-700 tracking-tight">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
