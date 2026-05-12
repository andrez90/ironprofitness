# DOCUMENTACIÓN COMPLETA - IRONPRO FITNESS

## 1. Visión General

IRONPRO FITNESS es una plataforma e-commerce premium para suplementos deportivos. Está diseñada para ofrecer:
- una experiencia visual moderna y minimalista,
- un rendimiento rápido y responsive,
- un flujo de conversión optimizado,
- soporte para ventas por carrito, WhatsApp y futuros marketplaces.

## 2. Stack Tecnológico

- **Next.js 14** con App Router
- **React 18**
- **TypeScript 5.3**
- **Tailwind CSS 3.4**
- **Zustand** para estado del carrito
- **Framer Motion** para animaciones
- **Supabase** como backend planeado
- **Stripe** para pagos planeados
- **Cloudinary** para CDN de imágenes

## 3. Estructura del Proyecto

```
.
├── app/
│   ├── admin/
│   ├── api/
│   ├── cart/
│   ├── checkout/
│   ├── category/
│   ├── combos/
│   ├── components/
│   ├── lib/
│   ├── product/
│   └── page.tsx
├── public/
├── styles/
├── .env.example
├── ARCHITECTURE.md
├── COMPLETION_CHECKLIST.md
├── FEATURES.md
├── IMPLEMENTATION_SUMMARY.md
├── NAVIGATION_MAP.md
├── QUICK_START.md
├── README.md
├── WELCOME.md
└── DOCUMENTATION.md
```

## 4. Archivos Clave

### app/lib/config.ts
Contiene toda la configuración global de la tienda:
- nombre de la marca
- descripción y tagline
- contacto y redes sociales
- métodos de pago
- categorías
- datos de checkout y envío

### app/lib/data.ts
Incluye el catálogo de productos de ejemplo y combos. Es el punto de partida para migrar más tarde a Supabase.

### app/store/useStore.ts
Implementa el carrito con Zustand y persistencia en `localStorage`.

### app/components/
Componentes reutilizables que mantienen la UI consistente en:
- `Header.tsx`
- `Footer.tsx`
- `ProductCard.tsx`
- `ComboCard.tsx`
- `HeroSection.tsx`
- `CategoriesGrid.tsx`
- `FeaturedProducts.tsx`
- `ComboSection.tsx`

## 5. Rutas Principales

- `/` - Home con hero, categorías, productos destacados y combos
- `/products` - Listado completo de productos con filtros y ordenamiento
- `/product/[id]` - Detalle del producto con galería, cantidad y CTA de WhatsApp
- `/category/[id]` - Filtrado por categoría
- `/combos` - Combos premium
- `/cart` - Carrito de compras con resumen y cálculos
- `/checkout` - Proceso de pago multi-paso
- `/admin` - Panel administrativo básico

## 6. Flujo de Compra

1. El usuario navega en la home o lista de productos.
2. Selecciona un producto y abre la página de detalle.
3. Agrega producto al carrito.
4. Revisa el carrito, ajusta cantidades y continúa.
5. Completa el checkout en pasos de envío, pago y confirmación.
6. Finaliza el pedido.

## 7. Setup Completo

### 7.1 Requisitos

- Node.js 18+
- npm 10+ o yarn

### 7.2 Instalación

```bash
cd "c:\Users\andre\Desktop\Codigos\IronPro Fitness"
npm install
```

### 7.3 Variables de entorno

Duplica el archivo de ejemplo:

```bash
copy .env.example .env.local
```

Rellena estas variables según tu entorno:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### 7.4 Ejecutar en desarrollo

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

### 7.5 Compilación para producción

```bash
npm run build
```

## 8. Personalización

### 8.1 Cambiar nombre de la tienda

Editar `app/lib/config.ts`:

```ts
export const storeConfig = {
  name: 'IRONPRO FITNESS',
  tagline: 'Premium Sports Supplements',
  ...
}
```

### 8.2 Cambiar colores

Editar `tailwind.config.ts`:

```ts
colors: {
  primary: '#ef4444',
  secondary: '#f97316',
  ...
}
```

### 8.3 Cambiar WhatsApp

Editar `app/lib/config.ts`:

```ts
whatsapp: '+57 300 000 0000',
```

### 8.4 Añadir categorías

En `app/lib/config.ts`, agregar nuevos objetos a `categories`.

## 9. Backend y Datos

### 9.1 Datos mock actuales

Los productos están en `app/lib/data.ts`. Este archivo contiene:
- `mockProducts`
- `mockCombos`

### 9.2 Supabase (próximo)

El proyecto está preparado para migrar a Supabase con estas tablas planificadas:
- `products`
- `orders`
- `users`
- `addresses`

### 9.3 Stripe (próximo)

La arquitectura incluye dependencias Stripe y la plantilla para integrarlo en el checkout.

## 10. Panel Administrativo

### Secciones

- Dashboard con KPIs de ingreso, productos, combos e inventario.
- Productos: lista, crear y eliminar.
- Inventario: alertas de stock bajo.
- Configuración: nombre de tienda, email y WhatsApp.

## 11. Deployment

Recomendado: **Vercel**.

Pasos básicos:
1. Conectar repositorio.
2. Configurar variables de entorno.
3. Desplegar.

## 12. Scripts disponibles

- `npm run dev` - desarrollo
- `npm run build` - compilación de producción
- `npm start` - servidor de producción
- `npm run lint` - linting
- `npm run type-check` - verificación de tipos

## 13. Troubleshooting

### Error: puerto 3000 ocupado

```bash
npx kill-port 3000
```

### Error: módulo no encontrado

```bash
rm -rf node_modules
npm install
```

### Variables de entorno no cargan

- Asegúrate de reiniciar el servidor
- Confirma que `.env.local` existe en la raíz

## 14. Contacto y Soporte

- Email: `info@ironprofitness.com`
- WhatsApp: `+57 300 000 0000`

---

## 15. Notas finales

Esta documentación es el repositorio central para guiar el desarrollo, despliegue y personalización de IRONPRO FITNESS.
