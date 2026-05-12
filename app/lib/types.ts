// Types for Products, Orders, Users, etc.

export interface Product {
  id: string
  name: string
  category: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  stock: number
  rating: number
  reviews: number
  benefits?: string[]
  ingredients?: string[]
  nutritional_info?: Record<string, string>
  usage?: string
  sku: string
  created_at: string
  updated_at: string
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  price: number
  product?: Product
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: string
  paymentStatus: 'pending' | 'completed' | 'failed'
  shippingAddress: Address
  billingAddress: Address
  created_at: string
  updated_at: string
}

export interface Address {
  id: string
  name: string
  email: string
  phone: string
  street: string
  city: string
  department: string
  zipCode: string
  country: string
  isDefault?: boolean
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  avatar?: string
  addresses?: Address[]
  orders?: Order[]
  created_at: string
  updated_at: string
}

export interface Combo {
  id: string
  name: string
  description: string
  image: string
  products: Product[]
  originalPrice: number
  discountedPrice: number
  discount: number
  badge?: string
  created_at: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  comment: string
  verified: boolean
  created_at: string
}

export interface Promotion {
  id: string
  code: string
  discount: number
  type: 'percentage' | 'fixed'
  minAmount?: number
  maxUses?: number
  expiresAt: string
}
