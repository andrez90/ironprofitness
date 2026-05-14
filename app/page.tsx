'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroSection } from './components/HeroSection'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ONDA_FITNESS_PRODUCTS } from './lib/products-data'
import { ONDA_FITNESS_COMBOS } from './lib/combos-data'
import { APP_CONFIG } from './lib/config'
import { Star, TrendingUp, Gift } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  // Top products by rating
  const topProducts = ONDA_FITNESS_PRODUCTS.slice(0, 8)
  
  // Highlighted combos
  const highlightedCombos = ONDA_FITNESS_COMBOS.slice(0, 3)
  
  // Categories
  const categories = APP_CONFIG.categories

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        
        {/* HERO SECTION */}
        <HeroSection />

        {/* CATEGORIES SECTION */}
        <section className="py-16 sm:py-24 bg-black border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white">
                Explora Nuestras <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Categorías</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Todo lo que necesitas para tu transformación
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4"
            >
              {categories.map((cat) => (
                <motion.div key={cat.id} variants={item}>
                  <Link href={`/category/${cat.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 backdrop-blur-sm cursor-pointer transition"
                    >
                      <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-125 transition">{cat.emoji}</div>
                      <p className="text-xs sm:text-sm font-semibold text-center text-gray-300 group-hover:text-red-400 transition">{cat.label}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FEATURED COMBOS SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-4">
                <Gift className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">COMBOS ESPECIALES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white">
                Paquetes de <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Máximo Ahorro</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Combos inteligentes diseñados para volumen o definición
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {highlightedCombos.map((combo) => (
                <motion.div
                  key={combo.id}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 backdrop-blur-md flex flex-col"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-white text-xs font-bold z-10 shadow-lg">
                    {combo.discount}% OFF
                  </div>

                  {/* Image */}
                  <div className="relative h-48 w-full bg-black/50 flex items-center justify-center overflow-hidden">
                     {/* <img src={combo.image} alt={combo.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" /> */}
                     <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🎁</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{combo.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{combo.description}</p>
                      
                      {/* Products list */}
                      <div className="space-y-2 mb-6">
                        {combo.products.map((productId, idx) => {
                          const product = ONDA_FITNESS_PRODUCTS.find(p => p.id === productId);
                          return (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <span className="text-red-400">✓</span>
                              <span className="line-clamp-1">{product ? product.name : 'Producto Premium'}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-gray-400 text-sm line-through">
                            ${combo.originalPrice.toLocaleString('es-CO')}
                          </p>
                          <p className="text-2xl font-bold text-white">
                            ${combo.discountedPrice.toLocaleString('es-CO')}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/combo/${combo.id}`}
                        className="block w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition text-center shadow-lg shadow-red-600/20"
                      >
                        Ver Combo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                href="/combos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-red-500/50 text-white font-bold rounded-lg transition"
              >
                Ver Todos los Combos → 
              </Link>
            </motion.div>
          </div>
        </section>

        {/* BEST SELLERS SECTION */}
        <section className="py-16 sm:py-24 bg-black border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">MÁS VENDIDOS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white">
                Productos <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Premium</span>
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {topProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 transition flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 sm:h-56 bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                      {product.category === 'proteina' ? '💪' : product.category === 'creatina' ? '⚡' : product.category === 'pre-entreno' ? '🔥' : '💊'}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm sm:text-base font-bold text-white flex-1 group-hover:text-red-400 transition line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">({product.reviews})</span>
                    </div>

                    <p className="text-xs text-gray-400 mb-4 line-clamp-2 flex-1">{product.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      {product.originalPrice && (
                        <p className="text-gray-400 text-xs line-through">
                          ${product.originalPrice.toLocaleString('es-CO')}
                        </p>
                      )}
                      <p className="text-xl sm:text-2xl font-bold text-white">
                        ${product.price.toLocaleString('es-CO')}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/product/${product.id}`}
                      className="block w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-bold rounded-lg transition text-center shadow-lg shadow-red-600/20"
                    >
                      Ver Producto
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition shadow-lg shadow-red-600/50"
              >
                Ver Catálogo Completo →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* TRUST & FEATURES SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div variants={item} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 transition text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✅</div>
                <h3 className="font-bold text-white mb-2">Productos Originales</h3>
                <p className="text-sm text-gray-400">100% garantizados directamente de fabricantes</p>
              </motion.div>

              <motion.div variants={item} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 transition text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚚</div>
                <h3 className="font-bold text-white mb-2">Envío Rápido</h3>
                <p className="text-sm text-gray-400">Entrega en 2-3 días hábiles a toda Colombia</p>
              </motion.div>

              <motion.div variants={item} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 transition text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💳</div>
                <h3 className="font-bold text-white mb-2">Pagos Flexibles</h3>
                <p className="text-sm text-gray-400">Sistecrédito, Addi, PSE y Pago contra entrega</p>
              </motion.div>

              <motion.div variants={item} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-500/50 transition text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                <h3 className="font-bold text-white mb-2">Soporte 24/7</h3>
                <p className="text-sm text-gray-400">Atención personalizada vía WhatsApp</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="py-16 sm:py-24 bg-black border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">
                Suscríbete a Nuestras <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Ofertas</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Recibe notificaciones de nuevos productos, combos especiales y ofertas exclusivas
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 transition"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition shadow-lg shadow-red-600/50">
                  Suscribirse
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
