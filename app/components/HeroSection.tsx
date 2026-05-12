'use client'

import { storeConfig } from '@/app/lib/config'
import { mockCombos, mockProducts } from '@/app/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="relative container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                <span className="gradient-text">Transforma</span>
                <br />
                <span className="text-text">tu físico con</span>
                <br />
                <span className="gradient-text">IRONPRO FITNESS</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Suplementos premium 100% originales. Entrega rápida, precios competitivos y asesoría experta.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Comprar Ahora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/combos"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                Ver Combos 🎁
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-text-muted">Productos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">10K+</p>
                <p className="text-sm text-text-muted">Clientes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-success">24h</p>
                <p className="text-sm text-text-muted">Despacho</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="aspect-square relative">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&q=80"
                alt="Hero Image"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-b border-border bg-opacity-100 bg-white">
        <div className="container-custom py-6 flex flex-wrap justify-around gap-4 text-center text-sm">
          <div>
            <p className="text-primary font-bold">✅ 100% Originales</p>
            <p className="text-text-muted text-xs">Todos nuestros productos</p>
          </div>
          <div>
            <p className="text-primary font-bold">📦 Envío Gratis</p>
            <p className="text-text-muted text-xs">Compras mayores a $500.000</p>
          </div>
          <div>
            <p className="text-primary font-bold">🔄 Garantía</p>
            <p className="text-text-muted text-xs">Devolución 30 días</p>
          </div>
          <div>
            <p className="text-primary font-bold">💬 Soporte 24/7</p>
            <p className="text-text-muted text-xs">Por WhatsApp y email</p>
          </div>
        </div>
      </div>
    </section>
  )
}
