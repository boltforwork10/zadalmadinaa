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
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-burgundy-700 text-gold-400 font-heading text-xl font-extrabold tracking-tight">
                Z
              </div>
              <div className="leading-tight">
                <p className="font-heading text-sm font-bold tracking-wider text-gold-400">
                  ZAD ALMADINA
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/60">
                  Technical Services L.L.C
                </p>
              </div>
            </div>
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
