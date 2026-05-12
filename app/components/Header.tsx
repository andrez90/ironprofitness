'use client'

import { useState } from 'react'
import Link from 'next/link'
import { storeConfig } from '@/app/lib/config'
import { useStore } from '@/app/store/useStore'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const cartCount = useStore((state) => state.getCartCount())

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark border-b border-border text-xs text-text-muted">
        <div className="container-custom py-2 flex justify-between items-center">
          <div className="hidden sm:flex gap-4">
            <a href={`tel:${storeConfig.phone}`} className="hover:text-primary transition">
              📞 {storeConfig.phone}
            </a>
            <a href={`mailto:${storeConfig.email}`} className="hover:text-primary transition">
              ✉️ {storeConfig.email}
            </a>
          </div>
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

      {/* Main Header */}
      <header className="bg-dark border-b border-border sticky top-0 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold">
                ⚡
              </div>
              <span className="font-bold text-lg hidden sm:inline gradient-text">
                {storeConfig.name}
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="input-base w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex gap-2">
              {storeConfig.categories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition"
                >
                  {cat.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              {/* Search Mobile */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden p-2 hover:bg-opacity-10 hover:bg-primary rounded-lg transition"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2 hover:bg-opacity-10 hover:bg-primary rounded-lg transition"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Menu Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-opacity-10 hover:bg-primary rounded-lg transition"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {searchOpen && (
            <div className="mt-4 md:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="input-base w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="mt-4 lg:hidden space-y-2 border-t border-border pt-4">
              {storeConfig.categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="block px-4 py-2 text-sm font-medium text-text-muted hover:text-primary hover:bg-opacity-10 hover:bg-primary rounded-lg transition"
                >
                  {cat.icon} {cat.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${storeConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm font-medium text-text-muted hover:text-primary hover:bg-opacity-10 hover:bg-primary rounded-lg transition"
              >
                💬 WhatsApp
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
