'use client'

import { Combo } from '@/app/lib/types'
import { useStore } from '@/app/store/useStore'
import { mockProducts } from '@/app/lib/data'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

interface ComboCardProps {
  combo: Combo
}

export function ComboCard({ combo }: ComboCardProps) {
  const addToCart = useStore((state) => state.addToCart)
  const discount = Math.round(
    ((combo.originalPrice - combo.discountedPrice) / combo.originalPrice) * 100
  )

  const comboProducts = combo.products
    .map(id => mockProducts.find(p => p.id === id))
    .filter(Boolean) as any[]

  const handleAddToCart = () => {
    // For combos, we'd add each product
    comboProducts.forEach(product => {
      addToCart(product, 1)
    })
  }

  return (
    <div className="group relative bg-opacity-10 bg-white border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-darker aspect-video">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {combo.badge && (
          <div className="absolute top-3 right-3 badge badge-secondary">
            {combo.badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-2">
          {combo.name}
        </h3>
        <p className="text-text-muted text-sm mb-4">
          {combo.description}
        </p>

        {/* Products List */}
        <div className="mb-4 space-y-2">
          <p className="text-xs font-semibold text-text-muted uppercase">Incluye:</p>
          <div className="space-y-1">
            {comboProducts.slice(0, 3).map((product) => (
              <p key={product.id} className="text-xs text-text-muted">
                ✓ {product.name}
              </p>
            ))}
            {comboProducts.length > 3 && (
              <p className="text-xs text-text-muted">
                + {comboProducts.length - 3} productos más
              </p>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-2xl font-bold text-primary">
            ${combo.discountedPrice.toLocaleString('es-CO')}
          </span>
          <span className="text-sm text-text-faint line-through">
            ${combo.originalPrice.toLocaleString('es-CO')}
          </span>
          <span className="badge badge-primary">
            Ahorro: ${(combo.originalPrice - combo.discountedPrice).toLocaleString('es-CO')}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={handleAddToCart}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Agregar Combo
        </button>
      </div>
    </div>
  )
}
