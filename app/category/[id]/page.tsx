'use client'

import { ONDA_FITNESS_PRODUCTS } from '../../lib/products-data'
import { APP_CONFIG } from '../../lib/config'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id;
  const category = APP_CONFIG.categories.find(c => c.id === categoryId);
  const products = ONDA_FITNESS_PRODUCTS.filter((p: any) => p.category === categoryId);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-red-500/30">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-900/40 via-black to-orange-900/40 border-b border-white/10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {category && (
              <div className="text-6xl mb-4">{category.emoji}</div>
            )}
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                {category ? category.label : 'Categoría'}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explora nuestra selección premium.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product: any) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 transition flex flex-col"
                >
                  <div className="relative overflow-hidden h-56 bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {category ? category.emoji : '💪'}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>

                    <div className="mt-auto">
                      <p className="text-2xl font-bold text-white mb-4">
                        ${product.price.toLocaleString('es-CO')}
                      </p>

                      <Link
                        href={`/product/${product.id}`}
                        className="block w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition text-center shadow-lg shadow-red-600/20"
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
              <p className="text-2xl font-bold text-white mb-2">No hay productos en esta categoría</p>
              <Link href="/products" className="text-red-400 hover:text-red-300 transition">
                Ver todos los productos
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
