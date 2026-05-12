'use client'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { useStore } from '@/app/store/useStore'
import { storeConfig } from '@/app/lib/config'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, CreditCard } from 'lucide-react'

export default function CheckoutPage() {
  const cart = useStore((state) => state.cart)
  const getCartTotal = useStore((state) => state.getCartTotal)
  const clearCart = useStore((state) => state.clearCart)

  const [step, setStep] = useState<'shipping' | 'payment' | 'confirm'>('shipping')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    department: '',
    zipCode: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('card')

  const total = getCartTotal()
  const shipping = total > storeConfig.checkout.freeShippingThreshold ? 0 : 30000
  const tax = Math.round(total * 0.08)
  const finalTotal = total + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-dark">
        <Header />
        <main className="flex-1">
          <div className="container-custom py-20 text-center">
            <p className="text-text-muted mb-4">Tu carrito está vacío</p>
            <Link href="/products" className="btn-primary inline-block">
              Continuar Comprando
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('confirm')
  }

  const handleConfirm = () => {
    // In production, integrate Stripe here
    alert(`Pedido confirmado por $${finalTotal.toLocaleString('es-CO')}`)
    clearCart()
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1">
        <div className="container-custom py-8">
          <Link href="/cart" className="flex items-center gap-2 text-primary hover:text-secondary transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver al carrito
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              {/* Steps */}
              <div className="flex gap-4 mb-8">
                {['shipping', 'payment', 'confirm'].map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                        step === s || (i < ['shipping', 'payment', 'confirm'].indexOf(step))
                          ? 'bg-primary text-white'
                          : 'bg-opacity-10 bg-white text-text-muted'
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < 2 && <div className="w-12 h-1 bg-opacity-10 bg-white" />}
                  </div>
                ))}
              </div>

              {/* Shipping Step */}
              {step === 'shipping' && (
                <form onSubmit={handleShippingSubmit} className="space-y-6 bg-opacity-10 bg-white border border-border rounded-xl p-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    Información de Envío
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="input-base"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="input-base"
                        placeholder="juan@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="input-base"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Dirección *</label>
                      <input
                        type="text"
                        required
                        value={formData.street}
                        onChange={(e) => setFormData({...formData, street: e.target.value})}
                        className="input-base"
                        placeholder="Calle 123 #45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ciudad *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="input-base"
                        placeholder="Bogotá"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Departamento *</label>
                      <input
                        type="text"
                        required
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="input-base"
                        placeholder="Cundinamarca"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full py-3">
                    Continuar al Pago
                  </button>
                </form>
              )}

              {/* Payment Step */}
              {step === 'payment' && (
                <form onSubmit={handlePaymentSubmit} className="space-y-6 bg-opacity-10 bg-white border border-border rounded-xl p-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    Método de Pago
                  </h2>

                  <div className="space-y-3">
                    {storeConfig.paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className="flex items-center gap-4 p-4 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-opacity-5 hover:bg-primary transition"
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-semibold">{method.label}</span>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('shipping')}
                      className="btn-outline flex-1 py-3"
                    >
                      Atrás
                    </button>
                    <button type="submit" className="btn-primary flex-1 py-3">
                      Revisar Pedido
                    </button>
                  </div>
                </form>
              )}

              {/* Confirm Step */}
              {step === 'confirm' && (
                <div className="space-y-6 bg-opacity-10 bg-white border border-border rounded-xl p-6">
                  <h2 className="text-2xl font-bold">Confirmar Pedido</h2>

                  <div className="space-y-4 pb-6 border-b border-border">
                    <div>
                      <h3 className="font-bold mb-2">Datos de Envío</h3>
                      <p className="text-sm text-text-muted">{formData.fullName}</p>
                      <p className="text-sm text-text-muted">{formData.street}</p>
                      <p className="text-sm text-text-muted">{formData.city}, {formData.department}</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Método de Pago</h3>
                      <p className="text-sm text-text-muted">
                        {storeConfig.paymentMethods.find(m => m.id === paymentMethod)?.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('payment')}
                      className="btn-outline flex-1 py-3"
                    >
                      Atrás
                    </button>
                    <button onClick={handleConfirm} className="btn-primary flex-1 py-3">
                      Confirmar Pedido
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-opacity-10 bg-white border border-border rounded-xl p-6 sticky top-24 space-y-6">
                <h2 className="text-xl font-bold">Resumen del Pedido</h2>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-text-muted">{item.quantity}x {item.product?.name}</span>
                      <span>${(item.price * item.quantity).toLocaleString('es-CO')}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-6 border-t border-border">
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Subtotal</span>
                    <span>${total.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Impuesto (8%)</span>
                    <span>${tax.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Envío</span>
                    <span className={shipping === 0 ? 'text-success font-bold' : ''}>
                      {shipping === 0 ? '✓ Gratis' : `$${shipping.toLocaleString('es-CO')}`}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total:</span>
                    <span className="text-3xl font-bold text-primary">
                      ${finalTotal.toLocaleString('es-CO')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
