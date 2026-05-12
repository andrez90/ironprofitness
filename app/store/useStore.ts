'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '@/app/lib/types'

interface StoreState {
  // Cart
  cart: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number

  // UI
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      
      addToCart: (product: Product, quantity: number) => {
        set((state) => {
          const existingItem = state.cart.find(item => item.productId === product.id)
          
          if (existingItem) {
            return {
              cart: state.cart.map(item =>
                item.productId === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }
          
          return {
            cart: [...state.cart, {
              id: `${product.id}-${Date.now()}`,
              productId: product.id,
              quantity,
              price: product.price,
              product,
            }],
          }
        })
      },
      
      removeFromCart: (productId: string) => {
        set((state) => ({
          cart: state.cart.filter(item => item.productId !== productId),
        }))
      },
      
      updateCartQuantity: (productId: string, quantity: number) => {
        set((state) => ({
          cart: state.cart.map(item =>
            item.productId === productId
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        }))
      },
      
      clearCart: () => {
        set({ cart: [] })
      },
      
      getCartTotal: () => {
        const { cart } = get()
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      getCartCount: () => {
        const { cart } = get()
        return cart.reduce((count, item) => count + item.quantity, 0)
      },

      // UI
      sidebarOpen: false,
      setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
    }),
    {
      name: 'onda-fitness-store',
    }
  )
)
