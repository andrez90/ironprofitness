'use client'

import { mockProducts } from '@/app/lib/data'
import { ProductCard } from './ProductCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FeaturedProducts() {
  const featured = mockProducts.slice(0, 8)

  return (
    <section className="container-custom py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Productos Destacados</h2>
          <p className="text-text-muted">Los favoritos de nuestros clientes</p>
        </div>
        <Link
          href="/products"
          className="btn-outline hidden md:inline-flex gap-2 items-center"
        >
          Ver todos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link href="/products" className="btn-primary w-full md:hidden py-3 flex items-center justify-center gap-2">
        Ver más productos <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  )
}
