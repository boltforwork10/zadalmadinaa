import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from './Reveal';
import { PROJECTS } from '@/data';

export default function Projects() {
  const [selected, setSelected] = useState<(typeof PROJECTS)[0] | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy-800 font-extrabold tracking-tight">
            Projects & Portfolio
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            A showcase of our technical expertise across residential and commercial properties in Dubai.
          </p>
        </Reveal>

        {/* Masonry grid */}
        <div className="masonry">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.1}>
              <button
                onClick={() => setSelected(project)}
                className="group relative block w-full overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ aspectRatio: i % 3 === 1 ? '4/3' : '1/1' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <p className="text-gold-400 text-xs tracking-wider uppercase mb-1">{project.category}</p>
                  <h3 className="text-white font-heading text-lg font-bold tracking-tight">{project.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
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
              <img src={selected.img} alt={selected.title} className="w-full max-h-[70vh] object-cover" />
              <div className="p-6">
                <p className="text-gold-600 text-xs tracking-wider uppercase mb-2">{selected.category}</p>
                <h3 className="font-heading text-2xl text-burgundy-800 font-bold tracking-tight">{selected.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
