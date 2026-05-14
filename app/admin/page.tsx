'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Package, Users, DollarSign, AlertCircle } from 'lucide-react'
import { ONDA_FITNESS_PRODUCTS } from '../lib/products-data'

export default function AdminDashboard() {
  const lowStockProducts = ONDA_FITNESS_PRODUCTS.filter(p => p.stock < 30)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Última actualización:</span>
          <span className="text-white">Justo ahora</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition" />
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Ventas del Mes</p>
              <p className="text-2xl font-bold">$12.4M</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400">+15%</span>
            <span className="text-gray-500">vs mes anterior</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition" />
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pedidos Activos</p>
              <p className="text-2xl font-bold">48</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-400">12 por despachar</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition" />
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Nuevos Clientes</p>
              <p className="text-2xl font-bold">124</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400">+8%</span>
            <span className="text-gray-500">vs mes anterior</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition" />
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-500/20 rounded-xl text-red-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Alertas Stock</p>
              <p className="text-2xl font-bold text-red-400">{lowStockProducts.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-red-400">Requieren atención</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Últimos Pedidos</h2>
            <button className="text-sm text-red-400 hover:text-red-300">Ver todos</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400 border-b border-white/10">
                <tr>
                  <th className="pb-3 font-medium">Pedido</th>
                  <th className="pb-3 font-medium">Cliente</th>
                  <th className="pb-3 font-medium">Fecha</th>
                  <th className="pb-3 font-medium">Estado</th>
                  <th className="pb-3 font-medium text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-white/5 transition">
                    <td className="py-4 font-medium">#ORD-{1000 + i}</td>
                    <td className="py-4 text-gray-300">Cliente Ejemplo {i}</td>
                    <td className="py-4 text-gray-400">Hoy, 10:4{i} AM</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${i % 2 === 0 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {i % 2 === 0 ? 'Completado' : 'Pendiente'}
                      </span>
                    </td>
                    <td className="py-4 text-right font-bold">${(120000 * i).toLocaleString('es-CO')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Stock Bajo</h2>
            <AlertCircle className="w-5 h-5 text-red-400" />
          </div>
          <div className="space-y-4">
            {lowStockProducts.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-red-500/20">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-xl">
                  {product.category === 'proteina' ? '💪' : '⚡'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{product.name}</p>
                  <p className="text-xs text-gray-400">SKU: {product.sku}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-400">{product.stock}</p>
                  <p className="text-xs text-gray-500">unids</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white transition">
            Ver inventario completo
          </button>
        </div>
      </div>
    </div>
  )
}
