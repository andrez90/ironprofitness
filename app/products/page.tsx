'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ONDA_FITNESS_PRODUCTS } from '../lib/products-data'
import { APP_CONFIG } from '../lib/config'
import { Search, X, Star, ChevronDown } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

type SortOption = 'relevance' | 'price-low' | 'price-high' | 'newest' | 'rating'

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('relevance')
  const [showFilters, setShowFilters] = useState(false)

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    let products = [...ONDA_FITNESS_PRODUCTS]

    // Filter by category
    if (selectedCategory) {
      products = products.filter(p => p.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      products = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.benefits && p.benefits.some(b => b.toLowerCase().includes(query)))
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        products.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        break
      case 'relevance':
      default:
        // Keep default order
        break
    }

    return products
  }, [selectedCategory, searchQuery, sortBy])

  const categories = APP_CONFIG.categories

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        {/* Hero Banner */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
              Nuestro <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Catálogo</span>
            </h1>
            <p className="text-gray-400">
              {filteredProducts.length} productos encontrados
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* SIDEBAR - DESKTOP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block space-y-6"
            >
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-white font-bold mb-3">Ordenar por</h3>
                <div className="space-y-2">
                  {[
                    { value: 'relevance' as SortOption, label: 'Relevancia' },
                    { value: 'price-low' as SortOption, label: 'Precio: Menor a Mayor' },
                    { value: 'price-high' as SortOption, label: 'Precio: Mayor a Menor' },
                    { value: 'rating' as SortOption, label: 'Mejor Valorados' },
                    { value: 'newest' as SortOption, label: 'Más Nuevos' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        sortBy === option.value
                          ? 'bg-red-600/30 text-red-400 border border-red-500/50'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-white font-bold mb-3">Categorías</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedCategory === null
                        ? 'bg-red-600/30 text-red-400 border border-red-500/50'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Todas las Categorías
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-center gap-2 ${
                        selectedCategory === cat.id
                          ? 'bg-red-600/30 text-red-400 border border-red-500/50'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{cat.emoji}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* MAIN CONTENT */}
            <div className="lg:col-span-3">
              
              {/* MOBILE FILTERS BUTTON */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition flex items-center justify-between"
                >
                  <span>Filtros y Ordenamiento</span>
                  <ChevronDown className={`w-5 h-5 transition ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* MOBILE FILTERS */}
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg space-y-6"
                    >
                      {/* Mobile Search */}
                      <div>
                        <input
                          type="text"
                          placeholder="Buscar..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 transition text-sm"
                        />
                      </div>

                      {/* Mobile Sort */}
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-2">Ordenar</h4>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value as SortOption)}
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 transition"
                        >
                          <option value="relevance">Relevancia</option>
                          <option value="price-low">Precio: Menor a Mayor</option>
                          <option value="price-high">Precio: Mayor a Menor</option>
                          <option value="rating">Mejor Valorados</option>
                          <option value="newest">Más Nuevos</option>
                        </select>
                      </div>

                      {/* Mobile Categories */}
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-2">Categoría</h4>
                        <div className="space-y-1">
                          <button
                            onClick={() => {
                              setSelectedCategory(null)
                              setShowFilters(false)
                            }}
                            className="w-full text-left px-3 py-2 rounded text-sm text-gray-400 hover:text-white hover:bg-white/10 transition"
                          >
                            Todas
                          </button>
                          {categories.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setSelectedCategory(cat.id)
                                setShowFilters(false)
                              }}
                              className="w-full text-left px-3 py-2 rounded text-sm text-gray-400 hover:text-white hover:bg-white/10 transition flex items-center gap-2"
                            >
                              <span>{cat.emoji}</span>
                              <span>{cat.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* DESKTOP SEARCH BAR */}
              <div className="hidden lg:block mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar productos en el catálogo..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 transition text-lg"
                  />
                </div>
              </div>

              {/* PRODUCTS GRID */}
              {filteredProducts.length > 0 ? (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={item}
                      whileHover={{ y: -5 }}
                      className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 transition"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden h-48 sm:h-56 bg-gradient-to-br from-red-500/20 to-orange-500/20">
                        <div className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl">
                          💪
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-sm sm:text-base font-bold text-white flex-1 group-hover:text-red-400 transition line-clamp-2">
                            {product.name}
                          </h3>
                        </div>

                        {/* Category badge */}
                        <div className="mb-2 inline-block px-2 py-1 bg-red-600/20 border border-red-500/50 text-red-400 text-xs font-semibold rounded">
                          {product.category}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">({product.reviews} reseñas)</span>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <p className="text-gray-400 text-xs line-through">
                            ${(product.originalPrice || product.price).toLocaleString('es-CO')}
                          </p>
                          <p className="text-xl sm:text-2xl font-bold text-white">
                            ${product.price.toLocaleString('es-CO')}
                          </p>
                        </div>

                        {/* Stock indicator */}
                        <div className="mb-4">
                          {product.stock > 10 ? (
                            <span className="text-xs text-green-400 font-semibold">✓ En stock</span>
                          ) : product.stock > 0 ? (
                            <span className="text-xs text-yellow-400 font-semibold">⚠ Solo {product.stock} disponibles</span>
                          ) : (
                            <span className="text-xs text-red-400 font-semibold">✗ Agotado</span>
                          )}
                        </div>

                        {/* CTA */}
                        <Link
                          href={`/product/${product.id}`}
                          className="block w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-bold rounded-lg transition text-center"
                        >
                          Ver Detalles
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No encontramos productos</h3>
                  <p className="text-gray-400 mb-6">
                    Intenta ajustar tus filtros o busca con otros términos
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory(null)
                      setSortBy('relevance')
                    }}
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
                  >
                    Limpiar filtros
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
