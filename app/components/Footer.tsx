'use client'

import { storeConfig } from '@/app/lib/config'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darker border-t border-border text-text-muted mt-16">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-text mb-4">{storeConfig.name}</h3>
            <p className="text-sm leading-relaxed mb-4">
              {storeConfig.description}
            </p>
            <div className="text-sm space-y-2">
              <p>📞 {storeConfig.phone}</p>
              <p>✉️ {storeConfig.email}</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-text mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm">
              {storeConfig.categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="hover:text-primary transition"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-text mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-primary transition">Preguntas Frecuentes</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition">Envíos</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition">Devoluciones</Link></li>
              <li><Link href="/track" className="hover:text-primary transition">Rastrear Pedido</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-primary transition">Términos y Condiciones</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Política de Privacidad</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary transition">Cookies</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contacto</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-border pt-8 mb-8">
          <p className="text-sm font-semibold text-text mb-4">Métodos de Pago Aceptados</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {storeConfig.paymentMethods.map((method) => (
              <div
                key={method.id}
                className="aspect-square rounded-lg bg-opacity-5 bg-white border border-border flex items-center justify-center text-2xl"
                title={method.label}
              >
                {method.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {currentYear} {storeConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {Object.entries(storeConfig.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition capitalize"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
