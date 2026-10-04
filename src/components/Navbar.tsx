import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm border-b border-gray-100 py-3">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="Zad Almadina Technical Services home">
          <img
            src="/logo.png"
            alt="Zad Almadina Technical Services"
            className="w-[190px] sm:w-[220px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold-500 ${
                    isActive ? 'text-gold-600' : 'text-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`tel:${CONTACT.phone1Raw}`}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-burgundy-700 text-white hover:bg-burgundy-800"
        >
          <Phone size={16} />
          <span>Call Now</span>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-burgundy-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-[110] bg-white shadow-xl border-t border-gray-100">
          <ul className="flex flex-col py-4 px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 font-medium border-b border-gray-50 ${
                      isActive ? 'text-gold-600' : 'text-gray-700 hover:text-burgundy-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={`tel:${CONTACT.phone1Raw}`}
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
