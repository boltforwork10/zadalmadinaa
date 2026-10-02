import { Eye, Target } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <Reveal className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
            Zad Almadina Technical Services
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
        </Reveal>

        {/* Intro text */}
        <Reveal delay={0.1} className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            We are a specialized company in technical services, maintenance, installation, and finishing
            works in Dubai, providing comprehensive solutions for various real estate and building needs.
            We strive to provide multiple technical services under one roof, helping our clients accomplish
            their work easily and efficiently.
          </p>
        </Reveal>

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
  );
}
