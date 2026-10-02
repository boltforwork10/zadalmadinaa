import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-burgundy-700 text-gold-400 font-heading text-xl font-extrabold tracking-tight">
            Z
          </div>
          <div className="leading-tight">
            <p className={`font-heading text-sm font-bold tracking-wider ${scrolled ? 'text-burgundy-700' : 'text-white'}`}>
              ZAD ALMADINA
            </p>
            <p className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-gold-600' : 'text-gold-400'}`}>
              Technical Services
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            scrolled
              ? 'bg-burgundy-700 text-white hover:bg-burgundy-800'
              : 'bg-gold-500 text-burgundy-900 hover:bg-gold-400'
          }`}
        >
          <Phone size={16} />
          <span>Call Now</span>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden ${scrolled ? 'text-burgundy-700' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
          <ul className="flex flex-col py-4 px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-gray-700 font-medium hover:text-burgundy-700 border-b border-gray-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-burgundy-700 text-white font-semibold"
              >
                <Phone size={16} />
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
