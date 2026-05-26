'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEye } from 'react-icons/fa';

const certifications = [
  {
    name: 'Agentic AI Level 1 Developer',
    description: 'Successfully completed the Agentic AI Level 1 Developer Certificate (Batch 61, Roll # PIAIC248551) under the Presidential Initiative for Artificial Intelligence and Computing (PIAIC), recognizing advanced training in multi-agent workflows and generative systems.',
    image: '/piaic-agentic-ai-cert.png',
    issuer: 'Presidential Initiative for AI & Computing (PIAIC)',
    date: 'Jan 30, 2026'
  },
  {
    name: 'Generative AI & Agentic Workflows (Level 2)',
    description: 'Currently pursuing advanced specialized training in LangGraph, CrewAI, multi-agent frameworks, custom memory states, and production deployment.',
    image: '/coming-soon.png',
    issuer: 'PIAIC (In Progress)',
    date: 'Expected 2026'
  },
  {
    name: 'Full Stack & Web3 Developer Specialist',
    description: 'Actively mastering Next.js 14, TypeScript, secure backend architectures, and decentralized modern web development technologies.',
    image: '/coming-soon.png',
    issuer: 'GIAIC (In Progress)',
    date: 'Expected 2026'
  },
];

export default function Certifications() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay function
  useEffect(() => {
    if (isPaused || selectedCert) return;

    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex >= certifications.length - visibleCards ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCards, isPaused, selectedCert]);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#58b9e6] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Close details"
              >
                <FaTimes size={18} />
              </button>

              <div className="relative w-full h-64 sm:h-96">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  {selectedCert.issuer} • {selectedCert.date}
                </span>
                <h3 className="text-2xl font-bold text-[#58c6f1] mb-2">{selectedCert.name}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{selectedCert.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-md border-2 border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <motion.h2
          className="gradient-text text-5xl sm:text-6xl font-bold mb-8 text-[#58c6f1] text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Certifications
        </motion.h2>

        <div 
          className="relative mt-8 overflow-hidden px-2 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out gap-4"
            style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.name}-${index}`}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl shadow-xl flex-shrink-0 flex flex-col justify-between"
                style={{ width: `calc(${100 / visibleCards}% - 12px)` }}
                whileHover={{ y: -8, borderColor: 'rgba(88, 185, 230, 0.4)' }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="relative w-full h-40 rounded-xl overflow-hidden border border-gray-800 mb-4 group cursor-pointer" onClick={() => setSelectedCert(cert)}>
                    <Image 
                      src={cert.image} 
                      alt={cert.name} 
                      layout="fill" 
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-[#58b9e6] text-white p-3 rounded-full shadow-lg">
                        <FaEye size={20} />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-cyan-400 block mb-1">{cert.issuer}</span>
                  <h3 className="text-lg font-bold text-[#d1e8f8] line-clamp-1">{cert.name}</h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed line-clamp-2">{cert.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-semibold">{cert.date}</span>
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="text-sm font-bold text-[#58b9e6] hover:text-white transition-colors hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: certifications.length - visibleCards + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                startIndex === idx ? 'w-8 bg-[#58b9e6]' : 'w-2.5 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
