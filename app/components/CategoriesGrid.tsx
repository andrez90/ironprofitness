'use client'

import { storeConfig } from '@/app/lib/config'
import Link from 'next/link'

export function CategoriesGrid() {
  return (
    <section className="container-custom py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Categorías</h2>
        <p className="text-text-muted">Explora nuestras principales categorías de suplementos</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {storeConfig.categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="group relative bg-opacity-10 bg-white border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                {category.icon}
              </div>
              <h3 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">
                {category.label}
              </h3>
              <p className="text-sm text-text-muted">
                Descubre nuestros mejores productos en esta categoría
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
