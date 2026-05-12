# 🗺️ IRONPRO FITNESS - Mapa de Navegación

**Guía visual de todas las páginas y cómo navegar**

---

## 🏠 Home Page `/`

```
┌─────────────────────────────────────────────────┐
│                    HEADER                       │
│  LOGO | SEARCH | CART 🛒(badge)               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           HERO SECTION (Full Screen)            │
│  Título gigante + CTA buttons                  │
│  Background animado con gradientes              │
│  Stats: 500+ productos, 10k+ clientes, 24h    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         TRUST BADGES (Centered)                 │
│  100% Originales | Envío Gratis | Garantía   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│     CATEGORÍAS GRID (8 categorías con iconos)   │
│  💪 Proteínas | ⚡ Creatinas | 📈 Ganadores  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│     FEATURED PRODUCTS (4-8 productos)           │
│  Cards con hover, rating, precio               │
│  "Ver todos" → /products                        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│     COMBOS PREMIUM (3 combos destacados)        │
│  Con badges, ahorro, lista de productos       │
│  "Ver más combos" → /combos                    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│    WHATSAPP PROMO (CTA final con botón)        │
│  "¿Necesitas asesoría? Chat en WhatsApp"      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                   FOOTER                        │
│  Links, Social, Payment methods, Legal         │
└─────────────────────────────────────────────────┘
```

---

## 🛍️ Todos los Productos `/products`

```
┌──────────────────────────────────────┐
│  BACK | "Todos los Productos"        │
├──────────────────────────────────────┤
│  SIDEBAR (Desktop)     │  PRODUCTS   │
│  ├─ Categorías        │  GRID (4)   │
│  ├─ Rango precio      │             │
│  └─ (checkboxes)      │  Filter: ▼  │
│                       │  Sort: ▼    │
│                       │             │
│  Products display...   │             │
└──────────────────────────────────────┘
```

**Funcionalidades**:
- Filtrar por categoría
- Filtrar por rango de precio
- Sorting: precio ↑↓, rating ↓, featured
- Display: # de productos
- Mobile: Filtros en select

---

## 📦 Producto Individual `/product/[id]`

```
┌────────────────────────────────────────┐
│  HOME / PRODUCTOS / PRODUCTO           │ (Breadcrumb)
├────────────────────────────────────────┤
│  GALERÍA        │  DETALLES            │
│  ┌──────────┐   │  NOMBRE              │
│  │  IMAGEN  │   │  ⭐⭐⭐⭐⭐ (245)    │
│  │ (Hover)  │   │  PRECIO GRANDE 🔴    │
│  └──────────┘   │  Stock: 15 unidades  │
│  [thumb1]       │                      │
│  [thumb2]       │  Cantidad: [- 1 +]   │
│  [thumb3]       │  [Agregar Carrito]   │
│                 │  [Comprar WhatsApp]  │
│                 │  [❤️ Favorito]       │
│                 │  [↗️ Compartir]      │
│                 │                      │
│                 │  BENEFICIOS:         │
│                 │  ✓ Proteína           │
│                 │  ✓ Bajo lactosa      │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  DESCRIPCIÓN | INGREDIENTES            │
│  Información detallada del producto     │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  PRODUCTOS RELACIONADOS (4 cards)      │
│  Otros productos de la misma categoría │
└────────────────────────────────────────┘
```

---

## 📂 Categoría `/category/[id]`

```
┌──────────────────────────────────────┐
│  HOME / PRODUCTOS / PROTEÍNAS        │ (Breadcrumb)
├──────────────────────────────────────┤
│  💪 PROTEÍNAS (12 productos)         │ (Título + count)
│                                      │
│  Productos filtrados (Grid 4)        │
│  [Card] [Card] [Card] [Card]        │
│  [Card] [Card] [Card] [Card]        │
│                                      │
└──────────────────────────────────────┘
```

---

## 🎁 Combos Premium `/combos`

```
┌──────────────────────────────────────┐
│  HOME / COMBOS                       │ (Breadcrumb)
├──────────────────────────────────────┤
│  🎁 COMBOS PREMIUM                  │
│  "Packs especiales con máximo ahorro"│
├──────────────────────────────────────┤
│  [COMBO 1]  [COMBO 2]  [COMBO 3]   │
│  • Vol.     • Def.     • Fuerza    │
│  Incluye:   Incluye:   Incluye:    │
│  • Prot     • Prot     • Prot      │
│  • Creat    • Creat    • Creat     │
│  $499k      $399k      $449k       │
│                                     │
├──────────────────────────────────────┤
│  ¿No encuentras lo que buscas?       │
│  [Pedir combo personalizado]         │
└──────────────────────────────────────┘
```

---

## 🛒 Carrito `/cart`

```
┌─────────────────────────────────────┐
│  ← ATRÁS | TU CARRITO               │
├──────────────────────────────────────┤
│  ITEMS (Left)          │ RESUMEN (Right)
│  ┌──────────────────┐  │ ┌──────────┐
│  │ [IMG] PRODUCTO   │  │ │ Subtotal │
│  │ $100k x 2        │  │ │ Impuesto │
│  │ Qty: [- 1 +] $200k  │ │ Envío    │
│  │ [❌]             │  │ │ TOTAL    │
│  ├──────────────────┤  │ │          │
│  │ [IMG] PRODUCTO   │  │ │ [Pagar]  │
│  │ $150k x 1        │  │ │ [Seguir] │
│  │ Qty: [- 1 +] $150k  │ │ [✓ Gratis]│
│  │ [❌]             │  │ └──────────┘
│  └──────────────────┘  │
│                        │
│  [Seguir Comprando]    │
└─────────────────────────────────────┘
```

---

## 💳 Checkout `/checkout` (3 Pasos)

### Paso 1: Envío
```
┌──────────────────────────────────────┐
│ ① Envío  ② Pago  ③ Confirmar       │ (Steps)
├──────────────────────────────────────┤
│ INFORMACIÓN DE ENVÍO                 │
│ [Nombre completo]                    │
│ [Email]            [Teléfono]        │
│ [Dirección]                          │
│ [Ciudad]           [Departamento]    │
│                                      │
│                    [Continuar al Pago]│
├──────────────────────────────────────┤
│ Resumen pedido (Sticky) →            │
│  • 2x Producto 1: $200k             │
│  • 1x Producto 2: $150k             │
│                                      │
│  Subtotal: $350k                    │
│  Impuesto: $28k                     │
│  Envío: Gratis ✓                    │
│  TOTAL: $378k                       │
└──────────────────────────────────────┘
```

### Paso 2: Pago
```
┌──────────────────────────────────────┐
│ ① Envío  ② Pago  ③ Confirmar       │
├──────────────────────────────────────┤
│ MÉTODO DE PAGO                       │
│ ◯ 💳 Tarjeta crédito/débito         │
│ ◯ 🏦 Transferencia bancaria         │
│ ◯ 📱 PSE                            │
│ ◉ 📱 Nequi (selected)               │
│ ◯ 📱 Daviplata                      │
│ ◯ 💳 Addi                           │
│ ◯ 🚚 Pago contra entrega            │
│                                      │
│ [← Atrás]      [Revisar Pedido →]  │
└──────────────────────────────────────┘
```

### Paso 3: Confirmar
```
┌──────────────────────────────────────┐
│ ① Envío  ② Pago  ③ Confirmar       │
├──────────────────────────────────────┤
│ CONFIRMAR PEDIDO                     │
│                                      │
│ ENVÍO A:                             │
│ Juan Pérez                           │
│ Calle 123 #45-67                     │
│ Bogotá, Cundinamarca                │
│                                      │
│ MÉTODO DE PAGO:                      │
│ Nequi                                │
│                                      │
│ [← Atrás]  [✓ Confirmar Pedido]    │
└──────────────────────────────────────┘
```

---

## 👨‍💼 Admin Dashboard `/admin`

```
┌─────────────────────────────────┐
│  IRONPRO ADMIN                  │
├─────────────────────────────────┤
│ SIDEBAR              │ CONTENT   │
│ ├─ Dashboard         │           │
│ ├─ Productos         │           │
│ ├─ Inventario        │           │
│ ├─ Pedidos           │           │
│ └─ Configuración     │           │
│                      │ KPIs:     │
│                      │ Ingresos  │
│                      │ Productos │
│                      │ Stock Bajo│
│                      │ Combos    │
└─────────────────────────────────┘

Dashboard View:
├─ [$ Ingresos] [📦 Productos] [⚠️ Stock] [🎁 Combos]
├─ Tabla de productos con acciones
├─ Alertas de inventario
└─ Configuración básica
```

---

## 🧭 Flujos de Usuarios

### Flujo de Compra Típico

```
HOME
  ↓
Browse / Search / Filter
  ↓
View Product Details
  ↓
Add to Cart
  ↓
View Cart (Continue or Remove)
  ↓
Checkout:
  - Enter Shipping
  - Select Payment
  - Confirm Order
  ↓
Success / Error
```

### Flujo Admin

```
/admin
  ↓
View Dashboard (KPIs)
  ↓
Add/Edit Products
  ↓
Manage Inventory
  ↓
View Orders (próximo)
  ↓
Update Settings
```

---

## 🔗 Rutas Completas

| Ruta | Componentes | CTA |
|------|-----------|-----|
| `/` | Home, Header, Footer, HeroSection, Categories, Featured, Combos | Productos/Combos |
| `/products` | Header, Footer, ProductCard grid, Filters, Search | Producto/Carrito |
| `/product/[id]` | ProductDetail, Gallery, Related, Header, Footer | Carrito/WhatsApp |
| `/category/[id]` | CategoryFilter, ProductCard grid, Header, Footer | Producto |
| `/combos` | ComboCard grid, Header, Footer | Combos |
| `/cart` | CartItems, Summary, Header, Footer | Checkout |
| `/checkout` | 3-step form, Summary, Header, Footer | Success |
| `/admin` | Dashboard, Tables, Forms | Configuración |

---

## 📱 Responsividad por Página

| Página | Mobile | Tablet | Desktop |
|--------|--------|--------|---------|
| Home | Stack, Full | 2 cols | Hero grande |
| Productos | 2 cols | 2-3 cols | Sidebar + 3 cols |
| Producto | Full | Full | 2 cols |
| Carrito | Stack | Stack | 2-col layout |
| Checkout | Full | Full | 2-col layout |
| Admin | Mobile nav | Sidebar | Sidebar + content |

---

## 🎯 Key Pages Performance

- **Home**: Hero animado + 3 secciones = scroll fluido
- **Productos**: Filtros reactivos + grid lazy load
- **Producto**: Galería zoom + related products
- **Carrito**: Actualización en tiempo real
- **Checkout**: Validación instant + step navigation
- **Admin**: KPIs + Tabla editable

---

## 💡 Tips de Navegación

1. **Buscar**: Usa el search en header (próximo)
2. **Filtrar**: Usa categorías o rango precio
3. **Carrito**: Icono en header siempre visible
4. **Checkout**: 3 pasos simples
5. **Admin**: Accede con `/admin`
6. **WhatsApp**: Botón en cada producto

---

Este mapa de navegación te ayuda a entender la experiencia de usuario completa de IRONPRO FITNESS. **¡Listo para navegar! ⚡**
