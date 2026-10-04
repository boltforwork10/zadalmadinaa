import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-burgundy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex mb-6" aria-label="Zad Almadina Technical Services home">
              <img
                src="/logo.png"
                alt="Zad Almadina Technical Services"
                className="w-[220px] h-auto object-contain"
              />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm">
              Integrated Technical Services in Dubai. From installation and maintenance to finishing
              works — comprehensive solutions under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-gold-400 mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-white/60 hover:text-gold-400 transition-colors text-sm group"
                  >
                    <ChevronRight size={14} className="text-gold-600 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-gold-400 mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm">
                  <Phone size={18} className="text-gold-600 shrink-0 mt-0.5" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm break-all">
                  <Mail size={18} className="text-gold-600 shrink-0 mt-0.5" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-gold-600 shrink-0 mt-0.5" />
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 ZAD ALMADINA TECHNICAL SERVICES L.L.C. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
