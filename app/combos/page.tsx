'use client'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { mockCombos } from '@/app/lib/data'
import { ComboCard } from '@/app/components/ComboCard'

export default function CombosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1">
        <div className="container-custom py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">🎁 Combos Premium</h1>
            <p className="text-text-muted">Packs especiales diseñados para tus objetivos de fitness con máximo ahorro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {mockCombos.map((combo) => (
              <ComboCard key={combo.id} combo={combo} />
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-opacity-10 bg-white border border-border rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              Podemos crear combos personalizados según tus necesidades. Contáctanos por WhatsApp
            </p>
            <a
              href="https://wa.me/573000000000?text=Quiero un combo personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              💬 Pedir Combo Personalizado
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
