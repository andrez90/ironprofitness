'use client'

import { useState } from 'react'
import Link from 'next/link'
import { APP_CONFIG } from '@/app/lib/config'
import { useStore } from '@/app/store/useStore'
import { ShoppingCart, Search, Menu, X, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const cartCount = useStore((state) => state.getCartCount())

  return (
    <>
      {/* TOP BAR - PREMIUM DARK */}
      <div className="hidden sm:block bg-black/40 backdrop-blur-md border-b border-white/5 text-xs text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          <div className="flex gap-6 text-gray-300">
            <a href={`tel:${APP_CONFIG.contact.phone}`} className="hover:text-red-500 transition">
              📞 {APP_CONFIG.contact.phone}
            </a>
            <a href={`mailto:${APP_CONFIG.contact.email}`} className="hover:text-red-500 transition">
              ✉️ {APP_CONFIG.contact.email}
            </a>
          </div>
          <div className="flex gap-4">
            <a href={APP_CONFIG.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              Instagram
            </a>
            <a href={APP_CONFIG.contact.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER - GLASSMORPHISM */}
      <header className="bg-black/80 backdrop-blur-lg border-b border-white/10 sticky top-0 z-40 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/30"
              >
                ⚡
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-black text-base sm:text-lg bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent">
                  {APP_CONFIG.storeName}
                </h1>
                <p className="text-xs text-gray-400 font-light">{APP_CONFIG.storeSlogan}</p>
              </div>
            </Link>

            {/* SEARCH BAR - DESKTOP */}
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              className="hidden md:flex flex-1 max-w-sm mx-4"
            >
              <div className="w-full relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition"
                />
              </div>
            </motion.div>

            {/* NAVIGATION - DESKTOP */}
            <nav className="hidden lg:flex gap-1">
              {APP_CONFIG.categories.slice(0, 5).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-white/5 rounded-lg transition"
                >
                  {cat.emoji} {cat.label}
                </Link>
              ))}
              <Link
                href="/combos"
                className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-white/5 rounded-lg transition"
              >
                🎁 Combos
              </Link>
            </nav>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* WHATSAPP QUICK BUTTON */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${APP_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs sm:text-sm font-bold rounded-lg transition shadow-lg shadow-green-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </motion.a>

              {/* SEARCH MOBILE */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition text-gray-300 hover:text-red-400"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* CART */}
              <Link
                href="/cart"
                className="relative p-2 hover:bg-white/10 rounded-lg transition text-gray-300 hover:text-red-400"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-red-500/50"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              {/* MOBILE MENU TOGGLE */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition text-gray-300 hover:text-red-400"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 md:hidden"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition"
                />
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-black/90 backdrop-blur-lg border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {APP_CONFIG.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-white/10 rounded-lg transition"
              >
                {cat.emoji} {cat.label}
              </Link>
            ))}
            <Link
              href="/combos"
              className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-white/10 rounded-lg transition"
            >
              🎁 Combos
            </Link>
          </div>
        </motion.nav>
      )}
    </>
  )
}
