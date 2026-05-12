'use client'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { mockProducts } from '@/app/lib/data'
import { ProductCard } from '@/app/components/ProductCard'
import { notFound } from 'next/navigation'
import { storeConfig } from '@/app/lib/config'

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = storeConfig.categories.find(c => c.id === params.id)
  if (!category) notFound()

  const products = mockProducts.filter(p => p.category === params.id)

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1">
        <div className="container-custom py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">
              {category.icon} {category.label}
            </h1>
            <p className="text-text-muted">Descubre nuestros mejores productos en esta categoría</p>
            <p className="text-sm text-text-faint mt-2">{products.length} productos disponibles</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
