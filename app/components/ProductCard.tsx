'use client'

import { Product } from '@/app/lib/types'
import { useStore } from '@/app/store/useStore'
import { Star, ShoppingCart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { storeConfig } from '@/app/lib/config'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const addToCart = useStore((state) => state.addToCart)
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    addToCart(product, 1)
  }

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa comprar: ${product.name}\nPrecio: $${product.price.toLocaleString('es-CO')}`
  )
  const whatsappUrl = `https://wa.me/${storeConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  return (
    <div className="group relative bg-opacity-10 bg-white border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-darker aspect-square">
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {discount > 0 && (
            <div className="badge badge-primary">
              -{discount}%
            </div>
          )}
          {product.stock < 5 && product.stock > 0 && (
            <div className="badge bg-warning bg-opacity-20 text-warning">
              Pocas unidades
            </div>
          )}
          {product.stock === 0 && (
            <div className="badge bg-red-500 bg-opacity-20 text-red-400">
              Agotado
            </div>
          )}
        </div>

        {/* Overlay Actions - Desktop */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end justify-center pb-4 gap-2">
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 rounded-lg py-2 text-sm disabled:opacity-50"
          >
            <ShoppingCart className="w-4 h-4 inline mr-2" />
            Agregar
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-text-muted font-semibold uppercase mb-2">
          {product.category}
        </p>

        {/* Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-text line-clamp-2 hover:text-primary transition mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 text-xs">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3"
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                color={i < Math.floor(product.rating) ? '#fbbf24' : '#64748b'}
              />
            ))}
          </div>
          <span className="text-text-muted">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-primary">
            ${product.price.toLocaleString('es-CO')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-text-faint line-through">
              ${product.originalPrice.toLocaleString('es-CO')}
            </span>
          )}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="btn-primary flex-1 py-2 text-sm disabled:opacity-50"
          >
            <ShoppingCart className="w-4 h-4 inline mr-1" />
            Agregar
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
