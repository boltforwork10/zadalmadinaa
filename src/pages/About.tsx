import { Eye, Target } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import CoreValues from '@/components/CoreValues';
import CTABanner from '@/components/CTABanner';
import { IMAGES } from '@/data';

export default function About() {
  return (
    <>
      <PageHeader
        title="About Zad Almadina"
        subtitle="Integrated technical solutions for your home and building in Dubai."
        image={IMAGES.pageHeaders.about}
        breadcrumb="About Us"
      />

      {/* Company Overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-center mb-20">
            <Reveal>
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-3 rounded-[2rem] border border-gold-300/70 -rotate-3" />
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-burgundy-900/15 bg-burgundy-50">
                  <img
                    src="/images/image.png"
                    alt="Zad Almadina technical services professional on site"
                    className="w-full aspect-[4/5] object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-5 -right-4 md:-right-6 rounded-xl bg-burgundy-800 px-5 py-3 text-white shadow-xl">
                  <p className="text-gold-400 text-xs tracking-[0.18em] uppercase font-semibold">On site</p>
                  <p className="font-heading text-sm font-bold mt-1">Professional expertise</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">About Us</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
                Zad Almadina Technical Services
              </h2>
              <div className="w-20 h-1 gradient-gold mt-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed font-light mt-8 max-w-2xl">
                We are a specialized company in technical services, maintenance, installation, and finishing
                works in Dubai, providing comprehensive solutions for various real estate and building needs.
                We strive to provide multiple technical services under one roof, helping our clients accomplish
                their work easily and efficiently.
              </p>
            </Reveal>
          </div>

          {/* Vision & Mission cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal delay={0.15}>
              <div className="group relative bg-gradient-to-br from-offwhite to-white border border-gray-100 rounded-2xl p-10 h-full hover:shadow-2xl hover:shadow-burgundy-700/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-burgundy-700 text-gold-400 flex items-center justify-center mb-6 shadow-lg">
                    <Eye size={28} />
                  </div>
                  <h3 className="font-heading text-2xl text-burgundy-800 font-bold mb-4 tracking-tight">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be a reliable partner in technical services and maintenance by providing practical
                    solutions and quality execution.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="group relative bg-gradient-to-br from-offwhite to-white border border-gray-100 rounded-2xl p-10 h-full hover:shadow-2xl hover:shadow-burgundy-700/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl gradient-gold text-burgundy-900 flex items-center justify-center mb-6 shadow-lg">
                    <Target size={28} />
                  </div>
                  <h3 className="font-heading text-2xl text-burgundy-800 font-bold mb-4 tracking-tight">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Providing integrated technical services with attention to detail, handling every project
                    with professionalism and responsibility.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CoreValues />
      <CTABanner />
    </>
  );
}
