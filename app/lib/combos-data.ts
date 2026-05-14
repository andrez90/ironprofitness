// ==================== IRONPRO FITNESS - COMBOS INTELIGENTES ====================
// Combos Premium diseñados para máxima conversión
// Siempre con Proteína + Creatina en Volumen y Definición

import { Combo } from './types';

export const ONDA_FITNESS_COMBOS: Combo[] = [
  // ==================== COMBO VOLUMEN BÁSICO ====================
  {
    id: 'combo-volumen-basico',
    name: '🔥 COMBO VOLUMEN INICIAL',
    description: 'La opción más económica para empezar a ganar masa muscular. Proteína + Creatina.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80',
    products: [
      'pro-super-mega-2lb',    // Super Mega 2lb - $55,000
      'crea-creatina-3',       // Creatina 3 - $20,000
    ],
    originalPrice: 75000,
    discountedPrice: 65000,
    discount: 13,
    badge: '⭐ MEJOR PRECIO',
    category: 'volumen',
    created_at: new Date().toISOString(),
  },

  // ==================== COMBO VOLUMEN PRO ====================
  {
    id: 'combo-volumen-pro',
    name: '💪 COMBO VOLUMEN PRO',
    description: 'Para ganancia de masa acelerada. Ganador premium + Creatina Micronizada + Aminoácidos.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80',
    products: [
      'pro-mega-gt-3-2',       // Mega G T 3.2lbs - $100,000
      'crea-mic-300',          // Creatine Mic 300 - $60,000
      'ami-alpha-bcaa',        // Alpha BCAA - $70,000
    ],
    originalPrice: 230000,
    discountedPrice: 195000,
    discount: 15,
    badge: '💎 RECOMENDADO',
    category: 'volumen',
    created_at: new Date().toISOString(),
  },

  // ==================== COMBO DEFINICIÓN BÁSICO ====================
  {
    id: 'combo-definicion-basico',
    name: '⚡ COMBO DEFINICIÓN LITE',
    description: 'Proteína ligera + Creatina. Perfecto para tonificar sin gastar de más.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80',
    products: [
      'pro-mega-lite-1-2',     // Mega Lite 1.2 lbs - $60,000
      'crea-creatina-3',       // Creatina 3 - $20,000
    ],
    originalPrice: 80000,
    discountedPrice: 70000,
    discount: 12,
    badge: '✨ ECONÓMICO',
    category: 'definicion',
    created_at: new Date().toISOString(),
  },

  // ==================== COMBO DEFINICIÓN PREMIUM ====================
  {
    id: 'combo-definicion-premium',
    name: '🔥 COMBO DEFINICIÓN PREMIUM',
    description: 'Proteína aislada limpia + Creatina Premium + Quemador potente.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80',
    products: [
      'pro-bipro-classic-2lb', // Bi Pro Classic - $100,000
      'crea-legend-fit',       // Legend Fit - $120,000
      'que-hydroxycut',        // Hydroxycut - $120,000
    ],
    originalPrice: 340000,
    discountedPrice: 285000,
    discount: 16,
    badge: '👑 ÉLITE',
    category: 'definicion',
    created_at: new Date().toISOString(),
  },

  // ==================== COMBO FUERZA MÁXIMA ====================
  {
    id: 'combo-fuerza-maxima',
    name: '⚡ COMBO FUERZA MÁXIMA',
    description: 'Whey Protein + Creatina Premium + Pre-entreno. Para rendir al máximo.',
    image: 'https://images.unsplash.com/photo-1606403842097-8476fea00bed?w=500&q=80',
    products: [
      'pro-best-whey-2lb',     // Best Whey - $120,000
      'crea-platinum-c',       // Platinum C - $150,000
      'pre-venom',             // Venom Pre - $150,000
    ],
    originalPrice: 420000,
    discountedPrice: 350000,
    discount: 16,
    badge: '🔥 FUERZA',
    category: 'fuerza',
    created_at: new Date().toISOString(),
  },
];

export default ONDA_FITNESS_COMBOS;
