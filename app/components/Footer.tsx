'use client'

import { APP_CONFIG } from '@/app/lib/config'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/95 backdrop-blur-md border-t border-white/10 text-gray-400 mt-20">
      {/* MAIN FOOTER CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* ABOUT */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4">
              <h3 className="font-black text-lg bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent mb-2">
                {APP_CONFIG.storeName}
              </h3>
              <p className="text-gray-400 text-xs font-light">{APP_CONFIG.storeSlogan}</p>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              {APP_CONFIG.description}
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${APP_CONFIG.contact.phone}`} className="flex items-center gap-2 hover:text-red-400 transition">
                <Phone className="w-4 h-4" /> {APP_CONFIG.contact.phone}
              </a>
              <a href={`mailto:${APP_CONFIG.contact.email}`} className="flex items-center gap-2 hover:text-red-400 transition">
                <Mail className="w-4 h-4" /> {APP_CONFIG.contact.email}
              </a>
            </div>
          </motion.div>

          {/* CATEGORÍAS */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-white mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm">
              {APP_CONFIG.categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    {cat.emoji} {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* INFORMACIÓN */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-white mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-red-400 transition">Sobre Nosotros</Link></li>
              <li><Link href="/faq" className="hover:text-red-400 transition">Preguntas Frecuentes</Link></li>
              <li><Link href="/shipping" className="hover:text-red-400 transition">Envíos</Link></li>
              <li><Link href="/returns" className="hover:text-red-400 transition">Devoluciones</Link></li>
              <li><Link href="/track" className="hover:text-red-400 transition">Rastrear Pedido</Link></li>
            </ul>
          </motion.div>

          {/* POLÍTICAS */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold text-white mb-4">Políticas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-red-400 transition">Privacidad</Link></li>
              <li><Link href="/terms" className="hover:text-red-400 transition">Términos y Condiciones</Link></li>
              <li><Link href="/contact" className="hover:text-red-400 transition">Contacto</Link></li>
              <li><Link href="/sitemap" className="hover:text-red-400 transition">Mapa del Sitio</Link></li>
            </ul>
          </motion.div>

          {/* SOCIAL & CONTACT */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <h4 className="font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex gap-3 mb-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={APP_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/50 transition"
              >
                📸
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={APP_CONFIG.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 border border-white/20 rounded-lg flex items-center justify-center text-white hover:border-white/50 transition"
              >
                🎵
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={`https://wa.me/${APP_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-green-500/50 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-xs text-gray-600">Horario de atención: Lun - Vie 8am - 6pm</p>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/5 py-6">
          
          {/* TRUST BADGES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl mb-2">🚚</div>
              <p className="text-xs font-semibold text-white">Envío Rápido</p>
              <p className="text-xs text-gray-500">{APP_CONFIG.checkout.shippingDays}</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl mb-2">💳</div>
              <p className="text-xs font-semibold text-white">7 Formas de Pago</p>
              <p className="text-xs text-gray-500">Seguro y fácil</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl mb-2">✅</div>
              <p className="text-xs font-semibold text-white">Garantía</p>
              <p className="text-xs text-gray-500">Productos originales</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl mb-2">💬</div>
              <p className="text-xs font-semibold text-white">Soporte 24/7</p>
              <p className="text-xs text-gray-500">Vía WhatsApp</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {currentYear} {APP_CONFIG.storeName}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <p>Hecho con ❤️ para atletas</p>
            <a href="/sitemap" className="hover:text-red-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
