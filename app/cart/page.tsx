'use client'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { useStore } from '@/app/store/useStore'
import { Minus, Plus, X, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { storeConfig } from '@/app/lib/config'

export default function CartPage() {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)
  const updateCartQuantity = useStore((state) => state.updateCartQuantity)
  const getCartTotal = useStore((state) => state.getCartTotal)

  const total = getCartTotal()
  const shipping = total > storeConfig.checkout.freeShippingThreshold ? 0 : 30000
  const subtotal = total
  const tax = Math.round(subtotal * 0.08) // Approximate tax

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-dark">
        <Header />
        <main className="flex-1">
          <div className="container-custom py-20 text-center">
            <ShoppingBag className="w-20 h-20 mx-auto mb-4 text-text-muted opacity-50" />
            <h1 className="text-3xl font-bold mb-2">Tu carrito está vacío</h1>
            <p className="text-text-muted mb-8">Descubre nuestros productos premium</p>
            <Link href="/products" className="btn-primary inline-block">
              Continuar Comprando
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1">
        <div className="container-custom py-12">
          <h1 className="text-4xl font-bold mb-8">Tu Carrito</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-opacity-10 bg-white border border-border rounded-xl p-4 flex gap-4"
                >
                  <img
                    src={item.product?.image}
                    alt={item.product?.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-text mb-1">
                      {item.product?.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-3">
                      ${item.price.toLocaleString('es-CO')} x unidad
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-opacity-10 bg-white rounded-lg">
                        <button
                          onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                          className="p-2 hover:bg-opacity-20 hover:bg-white transition rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                          className="p-2 hover:bg-opacity-20 hover:bg-white transition rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-primary text-lg">
                          ${(item.price * item.quantity).toLocaleString('es-CO')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-text-muted hover:text-primary transition self-start p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-opacity-10 bg-white border border-border rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-text-muted">
                    <span>Subtotal ({cart.length} items)</span>
                    <span>${subtotal.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Impuesto (8%)</span>
                    <span>${tax.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Envío</span>
                    <span className={shipping === 0 ? 'text-success font-bold' : ''}>
                      {shipping === 0 ? '✓ Gratis' : `$${shipping.toLocaleString('es-CO')}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="text-3xl font-bold text-primary">
                    ${(subtotal + tax + shipping).toLocaleString('es-CO')}
                  </span>
                </div>

                <Link href="/checkout" className="btn-primary w-full mb-3 py-3 flex items-center justify-center">
                  Proceder al Pago
                </Link>

                <Link href="/products" className="btn-outline w-full py-3 flex items-center justify-center">
                  Seguir Comprando
                </Link>

                {shipping === 0 && (
                  <p className="text-xs text-success text-center mt-4">
                    ✓ ¡Envío gratis en esta compra!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
