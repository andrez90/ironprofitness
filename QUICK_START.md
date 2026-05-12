# ⚡ Quick Start Guide - IRONPRO FITNESS

Guía rápida para iniciar el proyecto en 5 minutos.

## 1️⃣ Clonar el Repositorio

```bash
cd "c:\Users\andre\Desktop\Codigos"
cd "IronPro Fitness"
```

## 2️⃣ Instalar Dependencias

```bash
npm install
```

O con yarn:

```bash
yarn install
```

## 3️⃣ Variables de Entorno

```bash
# Copia el archivo de ejemplo
cp .env.example .env.local

# O en Windows:
copy .env.example .env.local
```

Abre `.env.local` y completa con datos ficticios para desarrollo:

```env
NEXT_PUBLIC_SUPABASE_URL=https://example.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=demo
```

## 4️⃣ Iniciar el Servidor

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 5️⃣ ¡Listo! 🎉

Verás:
- ✅ Home page premium con hero section
- ✅ Categorías de productos
- ✅ Carrito funcional con Zustand
- ✅ Checkout en 3 pasos
- ✅ Panel admin en `/admin`

---

## 📱 Probar Características

### Home Page
```
localhost:3000/
```

### Todos los Productos
```
localhost:3000/products
```

### Categoría Específica (Proteínas)
```
localhost:3000/category/protein
```

### Producto Individual
```
localhost:3000/product/1
```

### Carrito
```
localhost:3000/cart
```

### Checkout
```
localhost:3000/checkout
```

### Panel Admin
```
localhost:3000/admin
```

---

## 🎨 Personalizar Rápido

### 1. Cambiar nombre de tienda

Abre `app/lib/config.ts`:

```typescript
export const storeConfig = {
  name: 'MI TIENDA PREMIUM',  // ← Cambiar aquí
  // ...
}
```

### 2. Cambiar colores

Abre `tailwind.config.ts`:

```typescript
colors: {
  primary: '#ff6b35',    // Naranja
  secondary: '#f7931e',  // Naranja claro
  // ...
}
```

### 3. Cambiar WhatsApp

Abre `app/lib/config.ts`:

```typescript
whatsapp: '+57 312 345 6789',  // ← Tu número
```

---

## 🚀 Build para Producción

```bash
npm run build
npm start
```

---

## 📚 Documentación Completa

Lee [README.md](README.md) para documentación detallada.

---

## 🐛 Errores Comunes

### Error: "Cannot find module 'lucide-react'"

```bash
npm install lucide-react
```

### Error: "Port 3000 is already in use"

```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error: "Environmental variable not found"

- Verifica que `.env.local` esté en la raíz del proyecto
- Reinicia el servidor con `npm run dev`
- No quotes alrededor de valores en `.env.local`

---

## ✅ Checklist de Setup

- [ ] `npm install` completado sin errores
- [ ] `.env.local` creado con variables
- [ ] `npm run dev` ejecutándose sin errores
- [ ] Página home visible en localhost:3000
- [ ] Productos visibles
- [ ] Carrito agregando items
- [ ] Checkout funcionando

---

## 🎯 Próximos Pasos

1. **Conectar Supabase**: [Documentación Supabase](https://supabase.com/docs)
2. **Configurar Stripe**: [Documentación Stripe](https://stripe.com/docs)
3. **Deploy a Vercel**: [Documentación Vercel](https://vercel.com/docs)
4. **Agregar tu dominio**: DNS pointing a Vercel

---

## 💬 ¿Preguntas?

- 📧 info@ironprofitness.com
- 💬 WhatsApp Business API (integración futura)
- 🐛 GitHub Issues

---

**Happy coding with ⚡ IRONPRO FITNESS**
