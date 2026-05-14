'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ONDA_FITNESS_COMBOS } from '../lib/combos-data';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CombosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCombos =
    selectedCategory === 'all'
      ? ONDA_FITNESS_COMBOS
      : ONDA_FITNESS_COMBOS.filter((combo) => combo.category === selectedCategory);

  const categories = ['all', 'volumen', 'definicion', 'fuerza'];
  const categoryLabels: Record<string, string> = {
    all: 'Todos',
    volumen: 'Volumen',
    definicion: 'Definición',
    fuerza: 'Fuerza',
  };

  return (
    <div className="min-h-screen bg-black flex flex-col text-white selection:bg-red-500/30">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-900/40 via-black to-orange-900/40 border-b border-white/10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Combos</span> Inteligentes
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Packs diseñados para maximizar tus resultados. Siempre con Proteína y Creatina incluidas al mejor precio.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Combos Grid */}
          {filteredCombos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredCombos.map((combo) => (
                <motion.div
                  key={combo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 backdrop-blur-md flex flex-col"
                >
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-white text-xs font-bold z-10 shadow-lg">
                    {combo.discount}% OFF
                  </div>

                  <div className="relative h-56 w-full bg-black/50 flex items-center justify-center overflow-hidden">
                     <div className="text-7xl group-hover:scale-110 transition-transform duration-300">🎁</div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-red-400 tracking-wider uppercase">{combo.badge}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2 leading-tight">{combo.name}</h3>
                      <p className="text-gray-400 text-sm mb-6">{combo.description}</p>
                    </div>

                    <div className="border-t border-white/10 pt-6 mt-auto">
                      <div className="flex items-end justify-between mb-6">
                        <div>
                          <p className="text-gray-500 text-sm line-through mb-1">
                            ${combo.originalPrice.toLocaleString('es-CO')}
                          </p>
                          <p className="text-3xl font-bold text-white">
                            ${combo.discountedPrice.toLocaleString('es-CO')}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/combo/${combo.id}`}
                        className="block w-full px-4 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition text-center shadow-lg shadow-red-600/20"
                      >
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl">
              <Gift className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-2">No hay combos disponibles</p>
              <p className="text-gray-400">Prueba seleccionando otra categoría</p>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
