'use client'

import { ONDA_FITNESS_PRODUCTS } from '../../lib/products-data'
import { APP_CONFIG } from '../../lib/config'
import Link from 'next/link'
import { ArrowLeft, Star, ShoppingCart, ShieldCheck, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = ONDA_FITNESS_PRODUCTS.find(p => p.id === params.id) || ONDA_FITNESS_PRODUCTS[0];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 pb-24">
      {/* Navbar Minimal */}
      <nav className="border-b border-white/10 p-4 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Volver
          </Link>
          <span className="font-bold text-xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            {APP_CONFIG.storeName}
          </span>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl overflow-hidden flex items-center justify-center relative group">
              <div className="text-9xl group-hover:scale-110 transition-transform duration-500">
                {product.category === 'proteina' ? '💪' : product.category === 'creatina' ? '⚡' : product.category === 'pre-entreno' ? '🔥' : '💊'}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:border-red-500 transition" />
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-2">
              <span className="text-red-400 text-sm font-bold uppercase tracking-wider">{product.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">{product.reviews} reseñas verificadas</span>
            </div>

            <div className="mb-8">
              {product.originalPrice && (
                <p className="text-gray-500 text-lg line-through mb-1">${product.originalPrice.toLocaleString('es-CO')}</p>
              )}
              <div className="flex items-end gap-4">
                <p className="text-4xl sm:text-5xl font-bold text-white">${product.price.toLocaleString('es-CO')}</p>
                {product.originalPrice && (
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold mb-1 border border-red-500/50">
                    Ahorras ${(product.originalPrice - product.price).toLocaleString('es-CO')}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {product.benefits?.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                    ✓
                  </div>
                  <span className="text-sm font-semibold">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-4 mb-8">
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-red-600/20 text-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                Comprar Ahora
              </Link>
              <a
                href={`https://wa.me/${APP_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hola%20quiero%20comprar%20el%20producto%20${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-white/20 hover:border-green-500 hover:bg-green-500/10 text-white font-bold py-4 rounded-xl transition text-lg"
              >
                Comprar por WhatsApp
              </a>
            </div>

            {/* Trust Info */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-gray-400" />
                <div>
                  <p className="font-bold text-sm">Envío Seguro</p>
                  <p className="text-xs text-gray-500">2-3 días hábiles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-gray-400" />
                <div>
                  <p className="font-bold text-sm">Garantía</p>
                  <p className="text-xs text-gray-500">100% Original</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}
