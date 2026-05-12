'use client'

import { useState } from 'react'
import { mockProducts, mockCombos } from '@/app/lib/data'
import { Trash2, Plus, BarChart3, ShoppingBag, Users, Settings } from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'inventory' | 'orders' | 'settings'>('dashboard')
  const [products, setProducts] = useState(mockProducts)
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, category: '', stock: 0 })

  const totalRevenue = products.reduce((sum, p) => sum + (p.price * 10), 0)
  const totalProducts = products.length
  const lowStockItems = products.filter(p => p.stock < 5).length

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0) {
      const product = {
        ...newProduct,
        id: Date.now().toString(),
        rating: 4.5,
        reviews: 0,
        sku: `SKU-${Date.now()}`,
        description: 'Nuevo producto',
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd26b86?w=500&q=80',
        stock: newProduct.stock,
      }
      setProducts([...products, product as any])
      setNewProduct({ name: '', price: 0, category: '', stock: 0 })
    }
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Sidebar */}
      <div className="w-64 bg-darker border-r border-border p-6 fixed h-screen overflow-y-auto">
        <h1 className="text-2xl font-bold mb-8 text-primary">IRONPRO ADMIN</h1>

        <nav className="space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'products', label: 'Productos', icon: ShoppingBag },
            { id: 'inventory', label: 'Inventario', icon: 'Box' },
            { id: 'orders', label: 'Pedidos', icon: 'Package' },
            { id: 'settings', label: 'Configuración', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-2 ${
                activeTab === item.id
                  ? 'bg-primary text-white'
                  : 'text-text-muted hover:text-primary'
              }`}
            >
              {item.icon === 'Box' ? (
                <span>📦</span>
              ) : item.icon === 'Package' ? (
                <span>📮</span>
              ) : (
                <item.icon className="w-4 h-4" />
              )}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-opacity-10 bg-white border border-border rounded-lg p-6">
                <p className="text-text-muted text-sm mb-2">Ingresos Totales</p>
                <p className="text-3xl font-bold text-primary">
                  ${(totalRevenue).toLocaleString('es-CO')}
                </p>
              </div>
              <div className="bg-opacity-10 bg-white border border-border rounded-lg p-6">
                <p className="text-text-muted text-sm mb-2">Productos</p>
                <p className="text-3xl font-bold text-secondary">{totalProducts}</p>
              </div>
              <div className="bg-opacity-10 bg-white border border-border rounded-lg p-6">
                <p className="text-text-muted text-sm mb-2">Stock Bajo</p>
                <p className="text-3xl font-bold text-warning">{lowStockItems}</p>
              </div>
              <div className="bg-opacity-10 bg-white border border-border rounded-lg p-6">
                <p className="text-text-muted text-sm mb-2">Combos</p>
                <p className="text-3xl font-bold text-success">{mockCombos.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Gestionar Productos</h2>

            {/* Add Product Form */}
            <div className="bg-opacity-10 bg-white border border-border rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Agregar Producto</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="input-base"
                />
                <input
                  type="number"
                  placeholder="Precio"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
                  className="input-base"
                />
                <input
                  type="text"
                  placeholder="Categoría"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className="input-base"
                />
                <input
                  type="number"
                  placeholder="Stock"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: Number(e.target.value)})}
                  className="input-base"
                />
                <button
                  onClick={handleAddProduct}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Agregar
                </button>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-darker border-b border-border">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold">Producto</th>
                    <th className="text-left px-4 py-3 font-bold">Precio</th>
                    <th className="text-left px-4 py-3 font-bold">Stock</th>
                    <th className="text-left px-4 py-3 font-bold">Categoría</th>
                    <th className="text-left px-4 py-3 font-bold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-border hover:bg-opacity-5 hover:bg-white transition">
                      <td className="px-4 py-3">{product.name}</td>
                      <td className="px-4 py-3">${product.price.toLocaleString('es-CO')}</td>
                      <td className="px-4 py-3">
                        <span className={product.stock < 5 ? 'text-warning font-bold' : ''}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-4 py-3">{product.category}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-400 hover:text-red-300 transition flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Inventory */}
        {activeTab === 'inventory' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Inventario</h2>

            <div className="grid gap-4">
              {products
                .filter(p => p.stock < 10)
                .map((product) => (
                  <div key={product.id} className="bg-opacity-10 bg-white border border-border rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{product.name}</h3>
                      <p className="text-sm text-text-muted">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className={product.stock < 3 ? 'font-bold text-red-400' : product.stock < 5 ? 'font-bold text-warning' : ''}>
                        {product.stock} unidades
                      </p>
                      <p className="text-sm text-text-muted">SKU: {product.sku}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Pedidos</h2>
            <p className="text-text-muted">Sistema de pedidos en desarrollo...</p>
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Configuración</h2>

            <div className="bg-opacity-10 bg-white border border-border rounded-lg p-6 max-w-md">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre de la Tienda</label>
                  <input
                    type="text"
                    defaultValue="IRONPRO FITNESS"
                    className="input-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email de Contacto</label>
                  <input
                    type="email"
                    defaultValue="info@ironprofitness.com"
                    className="input-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">WhatsApp</label>
                  <input
                    type="text"
                    defaultValue="+57 300 000 0000"
                    className="input-base"
                  />
                </div>
                <button className="btn-primary w-full py-3">Guardar Cambios</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
