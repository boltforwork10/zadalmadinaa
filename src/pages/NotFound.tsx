import { Link } from 'react-router-dom';
import { Chrome as HomeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <p className="font-heading text-[120px] md:text-[180px] font-extrabold text-burgundy-100 leading-none tracking-tight">
          404
        </p>
        <h1 className="font-heading text-2xl md:text-3xl text-burgundy-800 font-bold mb-4 tracking-tight -mt-4">
          {t('notFound.title')}
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          {t('notFound.desc')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-burgundy-700 text-white font-semibold hover:bg-burgundy-800 transition-all duration-300 hover:shadow-xl hover:shadow-burgundy-700/20"
        >
          <HomeIcon size={18} />
          {t('notFound.backHome')}
        </Link>
      </div>
    </section>
  );
}
