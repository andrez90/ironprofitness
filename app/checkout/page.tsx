'use client'

import { useState } from 'react'
import { APP_CONFIG } from '../lib/config'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/cart" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Volver al Carrito
          </Link>
          <div className="flex-1" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            {APP_CONFIG.storeName} Checkout
          </h1>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-red-500' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-red-500 text-white' : 'bg-gray-800'}`}>
              1
            </div>
            <span className="font-semibold hidden sm:inline">Envío</span>
          </div>
          <div className={`h-1 w-16 sm:w-24 mx-4 rounded ${step >= 2 ? 'bg-red-500' : 'bg-gray-800'}`} />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-red-500' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-red-500 text-white' : 'bg-gray-800'}`}>
              2
            </div>
            <span className="font-semibold hidden sm:inline">Pago</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            {step === 1 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <h2 className="text-xl font-bold mb-6">Información de Envío</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Nombre Completo</label>
                    <input type="text" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Teléfono / WhatsApp</label>
                    <input type="tel" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Dirección de Entrega</label>
                    <input type="text" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Ciudad</label>
                    <input type="text" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Departamento</label>
                    <input type="text" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition" />
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-red-600/20"
                >
                  Continuar al Pago
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Método de Pago</h2>
                  <button onClick={() => setStep(1)} className="text-sm text-red-400 hover:text-red-300">Editar envío</button>
                </div>
                
                <div className="space-y-4 mb-8">
                  {APP_CONFIG.paymentMethods.map(method => (
                    <label key={method.id} className="flex items-center justify-between p-4 border border-white/20 rounded-xl cursor-pointer hover:bg-white/5 transition has-[:checked]:border-red-500 has-[:checked]:bg-red-500/10">
                      <div className="flex items-center gap-4">
                        <input type="radio" name="payment" className="w-5 h-5 accent-red-500" />
                        <span className="font-semibold">{method.label}</span>
                      </div>
                      <span className="text-2xl">{method.icon}</span>
                    </label>
                  ))}
                </div>

                <button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Confirmar y Pagar
                </button>
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md sticky top-8">
              <h3 className="text-lg font-bold mb-4">Resumen</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">💪</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Producto Demo</p>
                    <p className="text-xs text-gray-400">1x</p>
                  </div>
                  <p className="font-bold">$120.000</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span>$120.000</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Envío</span>
                  <span className="text-green-400">Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 mt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-red-400">$120.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
