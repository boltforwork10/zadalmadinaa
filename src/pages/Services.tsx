import { Wind, Wrench, Droplets, ChefHat, Grid3x3, PaintRoller, Sparkles, Feather, Wallpaper, PanelsTopLeft, Layers, Waves, Hammer } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import HowWeWork from '@/components/HowWeWork';
import { SERVICES, IMAGES } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Wrench,
  Droplets,
  ChefHat,
  Grid3x3,
  PaintRoller,
  Sparkles,
  Feather,
  Wallpaper,
  PanelsTopLeft,
  Layers,
  Waves,
  Hammer,
};

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Technical Services"
        subtitle="A comprehensive range of technical services delivered with precision and expertise."
        image={IMAGES.pageHeaders.services}
        breadcrumb="Services"
      />

      <section className="py-24 md:py-32 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
              Complete Service Catalog
            </h2>
            <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              From installation and maintenance to finishing works — everything your building needs under one roof.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Wrench;
              return (
                <Reveal key={service.title} delay={(i % 3) * 0.08}>
                  <div className="group bg-white rounded-2xl p-8 border border-gray-100 h-full hover:shadow-xl hover:shadow-burgundy-700/5 hover:-translate-y-1 transition-all duration-400 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 h-1 w-0 gradient-gold transition-all duration-500 group-hover:w-full" />
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center group-hover:bg-burgundy-700 group-hover:text-gold-400 transition-all duration-400">
                        <Icon size={26} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-burgundy-800 font-bold mb-2 leading-snug tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <HowWeWork />
    </>
  );
}
