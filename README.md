# IRONPRO FITNESS - Platform Premium de Suplementos Deportivos

Una plataforma e-commerce moderna, escalable y optimizada para conversión de suplementos deportivos.

> Documentación completa disponible en `DOCUMENTATION.md`

## 🚀 Características

- **Diseño Premium & Moderno**: Dark mode con acentos neon, inspirado en Gymshark, Nike, MyProtein
- **Ultra Rápido**: Optimizado para performance en móvil y desktop
- **Carrito Inteligente**: Con Zustand para estado global, persistencia local
- **Productos Dinámicos**: Catálogo completo con filtros, búsqueda, sorting
- **Combos Premium**: Packs con descuentos automáticos
- **Checkout Simplificado**: Máximo 2 pasos, múltiples métodos de pago
- **Panel Administrativo**: Gestión de productos, inventario, configuración
- **Integración WhatsApp**: Botones flotantes, compra directa por WhatsApp
- **Configuración Centralizada**: Cambiar nombre de tienda, colores, contactos desde `config.ts`

## 📋 Tech Stack

- **Frontend**: Next.js 14 + TypeScript + React 18
- **Styling**: Tailwind CSS + Framer Motion
- **Estado**: Zustand + Persist Middleware
- **Backend**: Supabase (PostgreSQL + Auth)
- **Pagos**: Stripe
- **Imágenes**: Cloudinary
- **Deployment**: Vercel

## 📦 Instalación

### 1. Requisitos Previos

- Node.js 18+ y npm/yarn
- Cuenta en Supabase
- Cuenta en Stripe
- Cuenta en Cloudinary (opcional)

### 2. Clonar & Instalar

```bash
cd "IronPro Fitness"
npm install
# o yarn install
```

### 3. Configurar Variables de Entorno

```bash
cp .env.example .env.local
```

Completa las variables en `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_stripe_key_publico
STRIPE_SECRET_KEY=tu_stripe_key_secreto
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloudinary_name
```

### 4. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### Cambiar Nombre de la Tienda

Edita `app/lib/config.ts`:

```typescript
export const storeConfig = {
  name: 'MI TIENDA FITNESS', // Cambiar aquí
  tagline: 'Premium Sports Supplements',
  // ... más configuración
}
```

### Modificar Colores

En `tailwind.config.ts`:

```typescript
colors: {
  primary: '#ef4444',    // Rojo actual
  secondary: '#f97316',  // Naranja actual
  // Cambiar según tu marca
}
```

### Productos Iniciales

Los productos mock están en `app/lib/data.ts`. Conecta tu Supabase para usar datos reales.

## 📂 Estructura del Proyecto

```
app/
├── components/           # Componentes reutilizables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── HeroSection.tsx
│   └── ...
├── lib/
│   ├── config.ts        # Configuración central
│   ├── types.ts         # TypeScript types
│   ├── data.ts          # Datos mock
│   └── env.ts           # Variables de entorno
├── store/
│   └── useStore.ts      # Zustand store (carrito)
├── api/                 # API routes
├── admin/               # Panel administrativo
├── cart/                # Página del carrito
├── checkout/            # Página de checkout
├── products/            # Listado de productos
├── combos/              # Página de combos
├── product/[id]/        # Página individual de producto
├── category/[id]/       # Página de categoría
└── page.tsx             # Home page
```

## 🔗 Páginas Principales

- `/` - Home con hero, categorías, productos destacados
- `/products` - Todos los productos con filtros
- `/product/[id]` - Detalle individual del producto
- `/category/[id]` - Productos por categoría
- `/combos` - Página de combos premium
- `/cart` - Carrito de compras
- `/checkout` - Proceso de compra (3 pasos)
- `/admin` - Panel administrativo

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Iniciar servidor desarrollo
npm run build        # Build para producción
npm start            # Iniciar servidor producción
npm run lint         # Ejecutar linting
npm run type-check   # Verificar tipos TypeScript
```

## 💳 Integración de Pagos

### Stripe

1. Obtén tus keys de [Stripe Dashboard](https://dashboard.stripe.com)
2. Agrega a `.env.local`
3. Implementa el webhook en producción

### Métodos de Pago Locales (Colombia)

La app soporta:
- Tarjetas crédito/débito
- Transferencia bancaria
- PSE
- Nequi
- Daviplata
- Addi
- Pago contra entrega

## 🚀 Deployment

### Vercel (Recomendado)

```bash
vercel deploy
```

Configura las variables de entorno en Vercel Dashboard.

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Optimización Mobile

- Responsive design 100%
- Lazy loading de imágenes
- Optimización de performance
- Touch-friendly buttons
- Mobile-first CSS

## 🔐 Seguridad

- Variables de entorno protegidas
- No guardar keys en código
- HTTPS en producción
- Rate limiting en APIs
- Validación de datos en backend

## 🐛 Troubleshooting

### Puerto 3000 ocupado

```bash
lsof -i :3000
kill -9 <PID>
```

### Problemas con dependencias

```bash
rm -rf node_modules package-lock.json
npm install
```

### Variables de entorno no cargan

- Reinicia el servidor: `npm run dev`
- Verifica `.env.local` está en raíz
- No quites puntos de `.env`

## 📞 Soporte

- 📧 Email: info@ironprofitness.com
- 💬 WhatsApp: +57 300 000 0000
- 🐛 Issues: GitHub Issues

## 📝 Próximas Mejoras

- [ ] Integración Supabase completa
- [ ] Sistema de autenticación usuarios
- [ ] Wishlists y favoritos
- [ ] Reviews verificados
- [ ] Sistema de puntos/loyalty
- [ ] Marketing automation
- [ ] Analytics avanzados
- [ ] App móvil nativa (React Native)

## 📄 Licencia

Desarrollado con ❤️ para IRONPRO FITNESS

---

**Made with ⚡ for Premium Fitness**
