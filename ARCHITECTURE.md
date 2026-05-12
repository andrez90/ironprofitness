# 🏗️ Arquitectura de IRONPRO FITNESS

Documentación técnica de la arquitectura y decisiones de diseño.

## 📊 Diagrama General

```
┌─────────────────────────────────────────────────────┐
│           IRONPRO FITNESS - E-COMMERCE Platform         │
├─────────────────────────────────────────────────────┤
│                    Frontend Layer                    │
│  ┌──────────────────────────────────────────────┐   │
│  │   Next.js 14 App Router + TypeScript         │   │
│  │   ├─ Pages (Home, Products, Cart, Checkout) │   │
│  │   ├─ Components (Reusable UI)                │   │
│  │   └─ Admin (Dashboard)                        │   │
│  └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│                   Client State Layer                 │
│  ┌──────────────────────────────────────────────┐   │
│  │   Zustand Store                              │   │
│  │   ├─ Cart State (add/remove/update)          │   │
│  │   ├─ UI State (sidebar, modals)              │   │
│  │   └─ Persisted with localStorage             │   │
│  └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│                   Styling Layer                      │
│  ┌──────────────────────────────────────────────┐   │
│  │   Tailwind CSS + Framer Motion               │   │
│  │   ├─ Dark theme premium                      │   │
│  │   ├─ Responsive design                       │   │
│  │   └─ Smooth animations                       │   │
│  └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│                 Integration Layer                    │
│  ┌──────────────────────────────────────────────┐   │
│  │   APIs & External Services                   │   │
│  │   ├─ Stripe (Payments)                       │   │
│  │   ├─ Supabase (Database + Auth)              │   │
│  │   ├─ Cloudinary (Image CDN)                  │   │
│  │   └─ WhatsApp Business API                   │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## 📁 Estructura de Carpetas

```
app/
├── api/                          # API Routes (Next.js App Router)
│   ├── route.ts                  # Health check
│   └── webhooks/stripe/route.ts  # Stripe webhooks
│
├── components/                   # Componentes reutilizables
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer
│   ├── ProductCard.tsx          # Tarjeta de producto
│   ├── ComboCard.tsx            # Tarjeta de combo
│   ├── HeroSection.tsx          # Hero banner
│   ├── CategoriesGrid.tsx       # Grid de categorías
│   ├── FeaturedProducts.tsx     # Productos destacados
│   └── ComboSection.tsx         # Sección de combos
│
├── lib/                          # Utilities & Configuration
│   ├── config.ts                # 🔑 Configuración central de tienda
│   ├── types.ts                 # TypeScript interfaces
│   ├── data.ts                  # Mock data (productos, combos)
│   ├── env.ts                   # Variables de entorno
│   ├── utils.ts                 # Helper functions
│   └── supabase.ts              # (Próximo) Cliente Supabase
│
├── store/                        # Zustand Store (Estado Global)
│   └── useStore.ts              # Cart, UI state con persistencia
│
├── admin/                        # Panel Administrativo
│   └── page.tsx                 # Dashboard admin
│
├── cart/                         # Página del Carrito
│   └── page.tsx                 # Cart page
│
├── checkout/                     # Proceso de Compra
│   └── page.tsx                 # Checkout (3 pasos)
│
├── products/                     # Listado de Productos
│   └── page.tsx                 # All products with filters
│
├── product/[id]/                # Página Individual
│   └── page.tsx                 # Product detail page
│
├── category/[id]/               # Página de Categoría
│   └── page.tsx                 # Category filtered products
│
├── combos/                       # Página de Combos
│   └── page.tsx                 # All combos
│
├── globals.css                   # Global Tailwind + animations
├── layout.tsx                    # Root layout
└── page.tsx                      # Home page

public/                           # Static assets
├── images/
└── icons/

styles/                           # (Opcional) Custom styles
```

## 🔄 Flujo de Datos

### Agregar Producto al Carrito

```
ProductCard (Click)
    ↓
useStore.addToCart(product, quantity)
    ↓
Zustand Store (update state)
    ↓
localStorage.setItem('ironpro-fitness-store', state)
    ↓
Cart component re-renders
    ↓
useStore.getCartCount() shows badge
```

### Checkout Flow

```
Cart Page
    ↓
useStore.getCartTotal() → calculate totals
    ↓
Proceed → /checkout
    ↓
Step 1: Shipping Address (form validation)
    ↓
Step 2: Payment Method (radio select)
    ↓
Step 3: Order Review
    ↓
Confirm → POST /api/orders
    ↓
Stripe Integration
    ↓
Success/Failure
```

## 🎨 Componentes Principales

### Header
- Logo + Store name
- Search bar (desktop)
- Navigation (desktop)
- Cart icon con badge
- Mobile menu

### ProductCard
- Imagen con hover zoom
- Descuentos badges
- Rating con estrellas
- Precio con línea tachada
- Botones: Agregar carrito + WhatsApp
- Responsive móvil

### ComboCard
- Imagen del combo
- Badge especial (Bestseller, etc)
- Lista de productos incluidos
- Precio con ahorro destacado
- CTA: Agregar combo

### HeroSection
- Fullscreen con gradientes
- Texto grande + CTA
- Stats (500+ productos, 10k+ clientes)
- Trust badges

## 🔐 Seguridad

### Frontend
- ✅ Validación de formularios
- ✅ XSS prevention con React
- ✅ CSRF tokens (backend)
- ✅ No guardar tokens sensibles en localStorage

### Backend (Próximo)
- 🔜 API authentication con Supabase
- 🔜 Rate limiting
- 🔜 Input validation & sanitization
- 🔜 CORS configuration

## ⚡ Performance

### Optimizaciones
- Next.js Image Optimization
- Lazy loading de componentes
- Code splitting automático
- Zustand para estado eficiente
- CSS purging con Tailwind
- Preload de crítico resources

### Métricas
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## 📦 Dependencias Principales

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^10.16.0",
  "zustand": "^4.4.0",
  "@supabase/supabase-js": "^2.38.0",
  "@stripe/react-stripe-js": "^2.4.0",
  "lucide-react": "latest"
}
```

## 🔄 Próximas Integraciones

### Phase 1: Core (Done ✅)
- Frontend UI/UX
- Carrito local
- Checkout MVP
- Admin básico

### Phase 2: Backend (En Desarrollo)
- Supabase PostgreSQL
- Autenticación usuarios
- Base de datos de órdenes
- API REST

### Phase 3: Pagos (Próximo)
- Stripe integration
- Multiple payment methods
- Webhook handling
- Invoice generation

### Phase 4: Marketing
- Email campaigns
- WhatsApp automation
- Analytics
- Loyalty program

## 🧪 Testing

```bash
# Unit tests (próximo)
npm run test

# E2E tests (próximo)
npm run test:e2e

# Type checking
npm run type-check
```

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Vercel Deployment
```bash
vercel deploy --prod
```

---

**IRONPRO FITNESS Tech Stack: Moderno, Escalable y Premium ⚡**
