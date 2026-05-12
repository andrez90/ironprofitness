// Store Configuration - All store settings in one place
export const storeConfig = {
  // Brand & Store Name
  name: 'IRONPRO FITNESS',
  tagline: 'Premium Sports Supplements',
  description: 'Modern premium e-commerce platform for sports supplements',
  
  // Contact & Social
  whatsapp: '+57 300 000 0000',
  email: 'info@ironprofitness.com',
  phone: '+57 (1) 000 0000',
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/ironprofitness',
    tiktok: 'https://tiktok.com/@ironprofitness',
    facebook: 'https://facebook.com/ironprofitness',
    youtube: 'https://youtube.com/ironprofitness',
  },
  
  // Checkout Settings
  checkout: {
    minCheckoutValue: 50000,
    maxCheckoutValue: 10000000,
    shippingDays: '3-5 días hábiles',
    freeShippingThreshold: 500000,
  },
  
  // Payment Methods
  paymentMethods: [
    { id: 'card', label: 'Tarjeta de Crédito/Débito', icon: '💳' },
    { id: 'transfer', label: 'Transferencia Bancaria', icon: '🏦' },
    { id: 'pse', label: 'PSE', icon: '📱' },
    { id: 'nequi', label: 'Nequi', icon: '📱' },
    { id: 'daviplata', label: 'Daviplata', icon: '📱' },
    { id: 'addi', label: 'Addi', icon: '💳' },
    { id: 'cod', label: 'Pago Contra Entrega', icon: '🚚' },
  ],
  
  // Categories
  categories: [
    { id: 'protein', label: 'Proteínas', icon: '💪' },
    { id: 'creatine', label: 'Creatinas', icon: '⚡' },
    { id: 'gainers', label: 'Ganadores de Masa', icon: '📈' },
    { id: 'preworkout', label: 'Pre Entrenos', icon: '🔥' },
    { id: 'burners', label: 'Quemadores', icon: '🌡️' },
    { id: 'vitamins', label: 'Vitaminas', icon: '💊' },
    { id: 'accessories', label: 'Accesorios', icon: '⚙️' },
    { id: 'combos', label: 'Combos', icon: '🎁' },
  ],
  
  // Colors & Theme
  colors: {
    primary: '#ef4444',    // Red
    secondary: '#f97316',  // Orange
    success: '#22c55e',    // Green
    warning: '#eab308',    // Yellow
    dark: '#0a0a0a',       // Dark
    darker: '#111',        // Darker
    text: '#e2e8f0',       // Light text
  },
  
  // SEO
  seo: {
    siteName: 'IRONPRO FITNESS',
    locale: 'es_CO',
  },
}
