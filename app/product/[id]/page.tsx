'use client'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { mockProducts } from '@/app/lib/data'
import { useStore } from '@/app/store/useStore'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { Star, ShoppingCart, MessageCircle, Heart, Share2 } from 'lucide-react'
import { storeConfig } from '@/app/lib/config'
import Link from 'next/link'
import { ProductCard } from '@/app/components/ProductCard'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find(p => p.id === params.id)
  const [quantity, setQuantity] = useState(1)
  const addToCart = useStore((state) => state.addToCart)

  if (!product) notFound()

  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa comprar: ${product.name}\nPrecio: $${product.price.toLocaleString('es-CO')}\nCantidad: ${quantity}`
  )
  const whatsappUrl = `https://wa.me/${storeConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1">
        <div className="container-custom py-8">
          {/* Breadcrumb */}
          <div className="flex gap-2 text-sm text-text-muted mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">Productos</Link>
            <span>/</span>
            <span className="text-text">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative bg-darker rounded-xl overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {discount > 0 && (
                  <div className="absolute top-4 left-4 badge badge-primary text-lg">
                    -{discount}%
                  </div>
                )}
              </div>
              {product.images && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="rounded-lg cursor-pointer hover:opacity-80 transition" />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <p className="text-sm text-text-muted uppercase font-semibold mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-text-muted">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      color={i < Math.floor(product.rating) ? '#fbbf24' : '#64748b'}
                    />
                  ))}
                </div>
                <span className="text-sm">
                  <span className="font-bold text-text">{product.rating}</span>
                  <span className="text-text-muted"> ({product.reviews} reseñas)</span>
                </span>
              </div>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price.toLocaleString('es-CO')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-text-faint line-through">
                      ${product.originalPrice.toLocaleString('es-CO')}
                    </span>
                  )}
                </div>
                {product.stock > 0 && (
                  <p className="text-sm text-success">✓ En stock - {product.stock} unidades disponibles</p>
                )}
                {product.stock === 0 && (
                  <p className="text-sm text-red-400">✗ Producto agotado</p>
                )}
              </div>

              {/* Quantity & CTA */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold">Cantidad:</span>
                  <div className="flex items-center gap-2 bg-opacity-10 bg-white rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-opacity-20 hover:bg-white transition rounded"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-opacity-20 hover:bg-white transition rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="btn-primary w-full py-3 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg text-lg flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comprar por WhatsApp
                </a>
              </div>

              {/* Quick Links */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <button className="flex-1 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" />
                  Favorito
                </button>
                <button className="flex-1 py-3 rounded-lg border border-border text-text-muted hover:border-primary hover:text-primary transition flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Compartir
                </button>
              </div>

              {/* Benefits */}
              {product.benefits && (
                <div className="bg-opacity-3 bg-white border border-border rounded-lg p-4 space-y-2">
                  <h3 className="font-bold text-sm uppercase text-text-muted">Beneficios:</h3>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm flex gap-2">
                        <span className="text-primary">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-16">
            <div className="bg-opacity-3 bg-white border border-border rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Descripción Detallada</h3>
                  <p className="text-text-muted leading-relaxed mb-4">
                    {product.description}
                  </p>
                  {product.usage && (
                    <>
                      <h4 className="font-bold mb-2">Modo de Uso:</h4>
                      <p className="text-text-muted text-sm mb-4">{product.usage}</p>
                    </>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Ingredientes</h3>
                  {product.ingredients && (
                    <ul className="space-y-2 text-sm text-text-muted">
                      {product.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Productos Relacionados</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
