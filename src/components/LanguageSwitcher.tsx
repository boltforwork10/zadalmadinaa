import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

type LanguageOption = {
  code: 'en' | 'ar';
  label: string;
  nativeLabel: string;
};

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية' },
];

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  const changeLanguage = (code: 'en' | 'ar') => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors duration-300"
        aria-label={t('nav.changeLanguage')}
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{current.nativeLabel}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-[120]">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors duration-200 ${
                lang.code === i18n.language
                  ? 'bg-gold-50 text-gold-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {lang.nativeLabel}
              {lang.code === i18n.language && (
                <span className="w-2 h-2 rounded-full bg-gold-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
