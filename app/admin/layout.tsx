'use client'

import Link from 'next/link'
import { LayoutDashboard, Package, ShoppingBag, Users, BarChart3, Settings, LogOut } from 'lucide-react'
import { APP_CONFIG } from '../lib/config'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { name: 'Inventario', icon: Package, href: '/admin/inventory' },
    { name: 'Pedidos', icon: ShoppingBag, href: '/admin/orders' },
    { name: 'Clientes', icon: Users, href: '/admin/clients' },
    { name: 'Analíticas', icon: BarChart3, href: '/admin/analytics' },
    { name: 'Configuración', icon: Settings, href: '/admin/settings' },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-black bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            {APP_CONFIG.storeName}
          </h2>
          <p className="text-xs text-gray-500 mt-1">Admin Panel Pro</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition group"
            >
              <item.icon className="w-5 h-5 group-hover:text-red-400 transition" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col h-screen">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
          <h2 className="text-xl font-black bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            {APP_CONFIG.storeName}
          </h2>
          <button className="p-2 border border-white/10 rounded-lg">
            <LayoutDashboard className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
