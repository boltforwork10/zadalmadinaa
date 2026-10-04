import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data';

type Project = (typeof PROJECTS)[0];

export default function ProjectsGrid({ showFilter = true }: { showFilter?: boolean }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filter */}
        {showFilter && (
          <Reveal className="flex flex-wrap justify-center gap-3 mb-12">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-burgundy-700 text-white shadow-lg shadow-burgundy-700/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-400 hover:text-burgundy-700'
                }`}
              >
                {t(`projects.categories.${cat}`)}
              </button>
            ))}
          </Reveal>
        )}

        {/* Masonry grid */}
        <motion.div
          className="masonry"
          layout
        >
          <AnimatePresence>
            {filtered.map((project, i) => {
              const projectIndex = PROJECTS.indexOf(project);
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Reveal delay={(i % 3) * 0.08}>
                    <button
                      onClick={() => setSelected(project)}
                      className="group relative block w-full overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer mb-6"
                    >
                      <img
                        src={project.img}
                        alt={t(`projects.items.${projectIndex}.title`)}
                        loading="lazy"
                        className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                        style={{ aspectRatio: i % 3 === 1 ? '4/3' : '1/1' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                        <p className="text-gold-400 text-xs tracking-wider uppercase mb-1">{t(`projects.categories.${project.category}`)}</p>
                        <h3 className="text-white font-heading text-lg font-bold tracking-tight">{t(`projects.items.${projectIndex}.title`)}</h3>
                      </div>
                    </button>
                  </Reveal>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-white"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-burgundy-700 text-white flex items-center justify-center hover:bg-burgundy-800 transition-colors"
              >
                <X size={20} />
              </button>
              <img src={selected.img} alt={t(`projects.items.${PROJECTS.indexOf(selected)}.title`)} className="w-full max-h-[70vh] object-cover" />
              <div className="p-6">
                <p className="text-gold-600 text-xs tracking-wider uppercase mb-2">{t(`projects.categories.${selected.category}`)}</p>
                <h3 className="font-heading text-2xl text-burgundy-800 font-bold tracking-tight">{t(`projects.items.${PROJECTS.indexOf(selected)}.title`)}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
