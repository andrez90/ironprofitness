'use client'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { CategoriesGrid } from './components/CategoriesGrid'
import { FeaturedProducts } from './components/FeaturedProducts'
import { ComboSection } from './components/ComboSection'
import { storeConfig } from '@/app/lib/config'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Trust Section */}
        <section className="container-custom py-12 border-y border-border">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2">Envío Rápido</h3>
              <p className="text-text-muted text-sm">Despachamos en 24h a toda Colombia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Mejor Precio</h3>
              <p className="text-text-muted text-sm">Garantizamos los mejores precios del mercado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-lg mb-2">100% Original</h3>
              <p className="text-text-muted text-sm">Todos nuestros productos son verificados</p>
            </div>
          </div>
        </section>

        <CategoriesGrid />
        <FeaturedProducts />
        <ComboSection />

        {/* WhatsApp Promo */}
        <section className="container-custom py-16 bg-gradient-dark rounded-2xl my-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas Asesoría?</h2>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              Nuestro equipo de expertos en fitness está disponible 24/7 para ayudarte a elegir los mejores suplementos
            </p>
            <a
              href={`https://wa.me/${storeConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hola IRONPRO FITNESS, necesito ayuda con mis suplementos`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex gap-2 items-center text-lg"
            >
              💬 Chat en WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
