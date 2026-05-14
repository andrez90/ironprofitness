// ==================== IRONPRO FITNESS - APP CONFIG ====================
// Configuración global - EDITABLE fácilmente desde aquí
// Cambiar "IronPro Fitness" por tu marca en cualquier momento

export const APP_CONFIG = {
  // ========== BRANDING (EDITABLE) ==========
  storeName: 'IronPro Fitness',
  storeSlogan: 'Fuerza, Rendimiento y Tecnología.',
  description: 'Tienda premium de suplementos deportivos. La mejor selección para maximizar tus resultados.',

  // ========== CONTACTO ==========
  contact: {
    whatsapp: '+573001234567',
    email: 'info@ironprofitness.co',
    phone: '+57 300 1234567',
    instagram: 'https://instagram.com/ironprofitness',
    tiktok: 'https://tiktok.com/@ironprofitness',
    facebook: 'https://facebook.com/ironprofitness',
  },

  // ========== ENVÍO ==========
  checkout: {
    minCheckoutValue: 50000,
    maxCheckoutValue: 10000000,
    shippingDays: '2-3 días hábiles',
    freeShippingThreshold: 200000,
    baseShipping: 15000,
  },

  // ========== MÉTODOS DE PAGO ==========
  paymentMethods: [
    { id: 'card', label: 'Tarjeta de Crédito/Débito', icon: '💳' },
    { id: 'transfer', label: 'Transferencia Bancaria', icon: '🏦' },
    { id: 'pse', label: 'PSE', icon: '📱' },
    { id: 'nequi', label: 'Nequi', icon: '📱' },
    { id: 'daviplata', label: 'Daviplata', icon: '📱' },
    { id: 'addi', label: 'Addi', icon: '💳' },
    { id: 'sistecredito', label: 'Sistecrédito', icon: '💳' },
    { id: 'cod', label: 'Contra Entrega', icon: '🚚' },
  ],

  // ========== CATEGORÍAS ==========
  categories: [
    { id: 'proteina', label: 'Proteína', icon: '💪', emoji: '💪', order: 1 },
    { id: 'creatina', label: 'Creatina', icon: '⚡', emoji: '⚡', order: 2 },
    { id: 'pre-entreno', label: 'Pre-Entreno', icon: '🔥', emoji: '🔥', order: 3 },
    { id: 'aminoacidos', label: 'Aminoácidos', icon: '🧬', emoji: '🧬', order: 4 },
    { id: 'quemador', label: 'Quemadores', icon: '🌡️', emoji: '🌡️', order: 5 },
    { id: 'vitaminas', label: 'Vitaminas', icon: '💊', emoji: '💊', order: 6 },
    { id: 'nutrition', label: 'Nutrición', icon: '🥗', emoji: '🥗', order: 7 },
    { id: 'accessories', label: 'Accesorios', icon: '⚙️', emoji: '⚙️', order: 8 },
    { id: 'combos', label: 'Combos', icon: '🎁', emoji: '🎁', order: 9 },
  ],

  // ========== COLORES PREMIUM DARK ==========
  colors: {
    primary: '#FF0000',      // Rojo deportivo
    secondary: '#FF8C00',    // Naranja energético
    accent: '#1a1a1a',       // Negro profundo
    muted: '#2d2d2d',        // Gris oscuro
    light: '#ffffff',        // Blanco limpio
    success: '#00dc82',      // Verde éxito
    warning: '#ffb81c',      // Amarillo alerta
    error: '#ff3860',        // Rojo error
    dark: '#050505',
    darker: '#000000',
    text: '#f8fafc',
  },

  // ========== ANIMACIONES ==========
  animations: {
    transition: 0.3,
    easingSmooth: [0.25, 0.46, 0.45, 0.94],
    easingSpring: [0.34, 1.56, 0.64, 1],
  },

  // ========== SEO ==========
  seo: {
    siteName: 'IronPro Fitness',
    locale: 'es_CO',
    title: 'IronPro Fitness | Suplementos Deportivos Premium',
    description: 'Compra suplementos deportivos premium. Las mejores proteínas, creatinas y pre-entrenos.',
    keywords: 'ironpro fitness, suplementos, proteína, creatina, fitness, gym, suplementación',
  },
};

// ========== LEGACY EXPORT (Compatibilidad) ==========
export const storeConfig = {
  name: APP_CONFIG.storeName,
  tagline: APP_CONFIG.storeSlogan,
  description: APP_CONFIG.description,
  whatsapp: APP_CONFIG.contact.whatsapp,
  email: APP_CONFIG.contact.email,
  phone: APP_CONFIG.contact.phone,
  social: {
    instagram: APP_CONFIG.contact.instagram,
    tiktok: APP_CONFIG.contact.tiktok,
    facebook: APP_CONFIG.contact.facebook,
  },
  checkout: APP_CONFIG.checkout,
  paymentMethods: APP_CONFIG.paymentMethods,
  categories: APP_CONFIG.categories,
  colors: APP_CONFIG.colors,
  seo: APP_CONFIG.seo,
}
