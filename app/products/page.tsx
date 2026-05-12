'use client'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { mockProducts } from '@/app/lib/data'
import { ProductCard } from '@/app/components/ProductCard'
import { useState } from 'react'
import { storeConfig } from '@/app/lib/config'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured')

  let filteredProducts = selectedCategory
    ? mockProducts.filter(p => p.category === selectedCategory)
    : mockProducts

  // Sort
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold mb-8">Todos los Productos</h1>

          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block space-y-6">
              {/* Categories Filter */}
              <div>
                <h3 className="font-bold text-lg mb-4">Categorías</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      selectedCategory === null
                        ? 'bg-primary text-white'
                        : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    Todos los productos
                  </button>
                  {storeConfig.categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
                        selectedCategory === cat.id
                          ? 'bg-primary text-white'
                          : 'text-text-muted hover:text-primary'
                      }`}
                    >
                      {cat.icon} {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-bold text-lg mb-4">Rango de Precio</h3>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>$0 - $50.000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>$50.000 - $100.000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>$100.000 - $200.000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>$200.000+</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Top Controls */}
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <p className="text-text-muted">
                  Mostrando {filteredProducts.length} productos
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="input-base"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Menor Precio</option>
                  <option value="price-high">Mayor Precio</option>
                  <option value="rating">Mayor Calificación</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
