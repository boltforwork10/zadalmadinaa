import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS, CONTACT } from '@/data';
import WhatsAppIcon from './WhatsAppIcon';

const NAV_KEYS = ['home', 'about', 'services', 'projects', 'contact'] as const;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-burgundy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex mb-6" aria-label={t('nav.ariaHome')}>
              <img
                src="/footer.png"
                alt={t('nav.logoAlt')}
                className="w-[220px] h-auto object-contain"
              />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-gold-400 mb-6 tracking-tight">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link, i) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-white/60 hover:text-gold-400 transition-colors text-sm group"
                  >
                    <ChevronRight size={14} className="text-gold-600 group-hover:translate-x-1 transition-transform" />
                    {t(`nav.${NAV_KEYS[i]}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-gold-400 mb-6 tracking-tight">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${CONTACT.phone1Raw}`} className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm">
                  <Phone size={18} className="text-gold-600 shrink-0 mt-0.5" />
                  {CONTACT.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone2Raw}`} className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm">
                  <Phone size={18} className="text-gold-600 shrink-0 mt-0.5" />
                  {CONTACT.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm"
                >
                  <WhatsAppIcon size={18} className="text-gold-600 shrink-0 mt-0.5" />
                  {CONTACT.whatsapp}
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
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
