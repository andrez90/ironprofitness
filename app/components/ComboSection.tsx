'use client'

import { mockCombos } from '@/app/lib/data'
import { ComboCard } from './ComboCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ComboSection() {
  return (
    <section className="container-custom py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">🎁 Combos Premium</h2>
          <p className="text-text-muted">Packs especiales con máximo ahorro</p>
        </div>
        <Link
          href="/combos"
          className="btn-outline hidden md:inline-flex gap-2 items-center"
        >
          Ver todos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {mockCombos.map((combo) => (
          <ComboCard key={combo.id} combo={combo} />
        ))}
      </div>

      <Link href="/combos" className="btn-primary w-full md:hidden py-3 flex items-center justify-center gap-2">
        Ver más combos <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  )
}
