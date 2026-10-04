import { Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import { CONTACT } from '@/data';

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-burgundy-800 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-semibold">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight mb-6 leading-tight text-balance">
            Have a project that needs integrated technical services?
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mb-8 rounded-full" />
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-light">
            From AC and plumbing to flooring, painting, ceilings, and carpentry — Zad Almadina provides
            a range of technical solutions in one place. Contact us today for a quote.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phone1Raw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-burgundy-900 font-semibold hover:bg-gold-400 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-[1.03]"
            >
              <Phone size={18} />
              Call Us
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gold-400 text-gold-400 font-semibold hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white hover:text-burgundy-800 transition-all duration-300"
            >
              <Send size={18} />
              Send Your Request
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
