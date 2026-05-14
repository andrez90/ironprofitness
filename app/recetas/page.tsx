'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ChefHat, Clock, Users, Zap } from 'lucide-react';

const fitnessRecipes = [
  {
    id: 'receta-1',
    name: 'BATIDO GANADOR DE MASA',
    category: 'batidos',
    servings: 2,
    prep_time: 5,
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd26b86?w=500&q=80',
    description: 'Batido alto en calorías y proteína para ganar masa muscular',
    ingredients: [
      { product: 'Gainz - Nutramerican 3.2lb', amount: '2 scoops (60g)', calories: 240 },
      { product: 'Leche entera', amount: '400 ml', calories: 280 },
      { product: 'Plátano', amount: '1 mediano', calories: 105 },
      { product: 'Crema de maní', amount: '2 cucharadas', calories: 190 },
      { product: 'Avena', amount: '40g', calories: 150 },
    ],
    total_calories: 965,
    protein_g: 40,
    carbs_g: 85,
    fat_g: 35,
    benefits: ['Ganancia muscular', 'Alto en calorías', 'Recuperación'],
  },
  {
    id: 'receta-2',
    name: 'BATIDO DEFINICIÓN EXTREMA',
    category: 'batidos',
    servings: 1,
    prep_time: 5,
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1590080876000-cd94c3bcad6e?w=500&q=80',
    description: 'Batido bajo en calorías, alto en proteína para definir',
    ingredients: [
      { product: 'Best Protein - Proscience 2lb', amount: '1 scoop (25g)', calories: 90 },
      { product: 'Leche descremada', amount: '200 ml', calories: 70 },
      { product: 'Fresas', amount: '100g', calories: 32 },
      { product: 'Hielo', amount: '1 taza', calories: 0 },
      { product: 'Canela', amount: '1 cucharadita', calories: 6 },
    ],
    total_calories: 198,
    protein_g: 25,
    carbs_g: 18,
    fat_g: 1,
    benefits: ['Definición', 'Bajo en grasa', 'Alto en proteína'],
  },
  {
    id: 'receta-3',
    name: 'TORTA PROTEICA DE CHOCOLATE',
    category: 'tortas',
    servings: 6,
    prep_time: 30,
    difficulty: 'Medio',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
    description: 'Torta deliciosa con proteína, perfecta para postres nutritivos',
    ingredients: [
      { product: 'Best Protein - Proscience 2lb', amount: '1 scoop (25g)', calories: 90 },
      { product: 'Harina de trigo', amount: '150g', calories: 520 },
      { product: 'Cacao en polvo', amount: '30g', calories: 90 },
      { product: 'Huevos', amount: '3 grandes', calories: 210 },
      { product: 'Miel', amount: '100ml', calories: 270 },
    ],
    total_calories: 1180,
    protein_g: 35,
    carbs_g: 150,
    fat_g: 20,
    benefits: ['Postre proteico', 'Satisfactorio', 'Energía sostenida'],
  },
  {
    id: 'receta-4',
    name: 'BARRAS ENERGÉTICAS CASERAS',
    category: 'snacks',
    servings: 12,
    prep_time: 20,
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1590080876000-cd94c3bcad6e?w=500&q=80',
    description: 'Barras energéticas con proteína para llevar a cualquier lado',
    ingredients: [
      { product: 'BiPro Classic - Nutramerican 2lb', amount: '2 scoops (50g)', calories: 190 },
      { product: 'Avena', amount: '200g', calories: 700 },
      { product: 'Mantequilla de maní', amount: '100g', calories: 600 },
      { product: 'Miel', amount: '50ml', calories: 135 },
      { product: 'Chocolate oscuro', amount: '50g', calories: 265 },
    ],
    total_calories: 1890,
    protein_g: 50,
    carbs_g: 200,
    fat_g: 75,
    benefits: ['Portátil', 'Energía rápida', 'Alto en proteína'],
  },
  {
    id: 'receta-5',
    name: 'PANCAKES PROTEICOS',
    category: 'pancakes',
    servings: 4,
    prep_time: 15,
    difficulty: 'Medio',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80',
    description: 'Pancakes altos en proteína para desayunos musculares',
    ingredients: [
      { product: 'Best Protein - Proscience 2lb', amount: '1 scoop (25g)', calories: 90 },
      { product: 'Huevos', amount: '2 grandes', calories: 140 },
      { product: 'Avena molida', amount: '100g', calories: 350 },
      { product: 'Plátano', amount: '1 mediano', calories: 105 },
      { product: 'Miel para servir', amount: '2 cucharadas', calories: 60 },
    ],
    total_calories: 745,
    protein_g: 32,
    carbs_g: 85,
    fat_g: 12,
    benefits: ['Desayuno completo', 'Saciante', 'Delicioso'],
  },
  {
    id: 'receta-6',
    name: 'BATIDO VERDE ENERGÉTICO',
    category: 'batidos',
    servings: 1,
    prep_time: 5,
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1590080876000-cd94c3bcad6e?w=500&q=80',
    description: 'Batido verde con proteína para recuperación post-entreno',
    ingredients: [
      { product: 'BiPro Classic - Nutramerican 2lb', amount: '1 scoop (25g)', calories: 95 },
      { product: 'Espinacas', amount: '100g', calories: 23 },
      { product: 'Manzana verde', amount: '1 mediana', calories: 80 },
      { product: 'Agua de coco', amount: '200ml', calories: 45 },
      { product: 'Jengibre fresco', amount: '1cm', calories: 5 },
    ],
    total_calories: 248,
    protein_g: 25,
    carbs_g: 28,
    fat_g: 2,
    benefits: ['Desintoxicante', 'Antinflamatorio', 'Recuperación'],
  },
  {
    id: 'receta-7',
    name: 'BROWNIES PROTEICOS',
    category: 'brownie',
    servings: 8,
    prep_time: 25,
    difficulty: 'Medio',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80',
    description: 'Brownies de chocolate rico en proteína y bajo en azúcar',
    ingredients: [
      { product: 'Best Protein - Proscience 2lb', amount: '2 scoops (50g)', calories: 180 },
      { product: 'Cacao en polvo', amount: '40g', calories: 120 },
      { product: 'Huevos', amount: '3 grandes', calories: 210 },
      { product: 'Harina de almendras', amount: '100g', calories: 580 },
      { product: 'Miel', amount: '50ml', calories: 135 },
    ],
    total_calories: 1225,
    protein_g: 50,
    carbs_g: 80,
    fat_g: 60,
    benefits: ['Chocolate indulgente', 'Bajo en azúcar', 'Alto en proteína'],
  },
  {
    id: 'receta-8',
    name: 'BATIDO CAFEÍNA PRE-ENTRENO',
    category: 'batidos',
    servings: 1,
    prep_time: 5,
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1590080876000-cd94c3bcad6e?w=500&q=80',
    description: 'Batido con cafeína natural y creatina para máximo rendimiento',
    ingredients: [
      { product: 'BiPro Classic - Nutramerican 2lb', amount: '1 scoop (25g)', calories: 95 },
      { product: 'Café espresso frío', amount: '100ml', calories: 5 },
      { product: 'Plátano', amount: '1 mediano', calories: 105 },
      { product: 'Miel', amount: '1 cucharada', calories: 60 },
      { product: 'Leche descremada', amount: '150ml', calories: 50 },
    ],
    total_calories: 315,
    protein_g: 25,
    carbs_g: 42,
    fat_g: 1,
    benefits: ['Pre-entreno potente', 'Energía natural', 'Velocidad'],
  },
  {
    id: 'receta-9',
    name: 'BATIDO FRÍO VERANO PROTEÍNA',
    category: 'batidos',
    servings: 1,
    prep_time: 5,
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1590080876000-cd94c3bcad6e?w=500&q=80',
    description: 'Refrescante batido perfecto para días calurosos',
    ingredients: [
      { product: 'BiPro Classic - Nutramerican 2lb', amount: '1 scoop (25g)', calories: 95 },
      { product: 'Yogurt griego', amount: '150g', calories: 130 },
      { product: 'Arándanos congelados', amount: '100g', calories: 57 },
      { product: 'Miel', amount: '1 cucharada', calories: 30 },
      { product: 'Hielo', amount: '1 taza', calories: 0 },
    ],
    total_calories: 312,
    protein_g: 25,
    carbs_g: 35,
    fat_g: 7,
    benefits: ['Refrescante', 'Probióticos', 'Antioxidantes'],
  },
  {
    id: 'receta-10',
    name: 'PUDÍN PROTEICO NOCTURNO',
    category: 'pudin',
    servings: 2,
    prep_time: 10,
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291840?w=500&q=80',
    description: 'Pudín proteico ideal para cena ligera o snack nocturno',
    ingredients: [
      { product: 'BiPro Classic - Nutramerican 2lb', amount: '1 scoop (30g)', calories: 115 },
      { product: 'Leche de almendras', amount: '200 ml', calories: 80 },
      { product: 'Semillas de chía', amount: '2 cucharadas', calories: 160 },
      { product: 'Canela', amount: '1 cucharadita', calories: 6 },
      { product: 'Vainilla', amount: '1 cucharadita', calories: 12 },
    ],
    total_calories: 373,
    protein_g: 25,
    carbs_g: 28,
    fat_g: 16,
    benefits: ['Cena ligera', 'Probióticos', 'Recuperación nocturna'],
  },
];

const categoryEmojis: Record<string, string> = {
  batidos: '🥤',
  tortas: '🍰',
  snacks: '🍫',
  pancakes: '🥞',
  brownie: '🍫',
  pudin: '🍮',
};

const categoryLabels: Record<string, string> = {
  batidos: 'Batidos',
  tortas: 'Tortas',
  snacks: 'Snacks',
  pancakes: 'Pancakes',
  brownie: 'Brownies',
  pudin: 'Pudines',
};

export default function RecetasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('batidos');
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const categories = Array.from(
    new Set(fitnessRecipes.map((recipe) => recipe.category))
  ).sort();

  const filteredRecipes =
    selectedCategory === 'all'
      ? fitnessRecipes
      : fitnessRecipes.filter((recipe) => recipe.category === selectedCategory);

  const difficultyColor: Record<string, string> = {
    Fácil: 'bg-green-500/20 text-green-400 border-green-500/50',
    Medio: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    Difícil: 'bg-red-500/20 text-red-400 border-red-500/50',
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-3">
              <ChefHat className="w-12 h-12" />
              RECETAS FITNESS IRONPRO
            </h1>
            <p className="text-xl text-purple-100">
              ✨ 10 recetas deliciosas con los productos que vendemos
            </p>
            <p className="text-lg text-purple-200 mt-2">
              🥗 Batidos • 🍰 Tortas • 🍫 Snacks • 🥞 Pancakes • 🍮 Pudines
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Filtra por categoría:</h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
              >
                📦 Todas ({fitnessRecipes.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  }`}
                >
                  {categoryEmojis[cat]} {categoryLabels[cat]} ({fitnessRecipes.filter(r => r.category === cat).length})
                </button>
              ))}
            </div>
          </div>

          {/* Modal de Receta Seleccionada */}
          {selectedRecipe && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-gray-900 border border-purple-500/50 rounded-2xl max-w-3xl w-full my-8">
                {/* Cerrar modal */}
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg z-60"
                >
                  ✕ Cerrar
                </button>

                {/* Imagen */}
                <div className="relative h-80 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedRecipe.image}
                    alt={selectedRecipe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedRecipe.name}</h2>
                      <p className="text-gray-300">{selectedRecipe.description}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-lg border ${difficultyColor[selectedRecipe.difficulty]}`}>
                      {selectedRecipe.difficulty}
                    </div>
                  </div>

                  {/* Info rápida */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Tiempo</span>
                      </div>
                      <p className="text-xl font-bold text-white">{selectedRecipe.prep_time} min</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Porciones</span>
                      </div>
                      <p className="text-xl font-bold text-white">{selectedRecipe.servings}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm">Calorías</span>
                      </div>
                      <p className="text-xl font-bold text-green-400">{selectedRecipe.total_calories}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <span className="text-sm">Proteína</span>
                      </div>
                      <p className="text-xl font-bold text-orange-400">{selectedRecipe.protein_g}g</p>
                    </div>
                  </div>

                  {/* Macros */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Información Nutricional:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm">Proteína</p>
                        <p className="text-2xl font-bold text-orange-400">{selectedRecipe.protein_g}g</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm">Carbohidratos</p>
                        <p className="text-2xl font-bold text-blue-400">{selectedRecipe.carbs_g}g</p>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm">Grasas</p>
                        <p className="text-2xl font-bold text-yellow-400">{selectedRecipe.fat_g}g</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm">Total Calorías</p>
                        <p className="text-2xl font-bold text-green-400">{selectedRecipe.total_calories}</p>
                      </div>
                    </div>
                  </div>

                  {/* Ingredientes */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">🛒 Ingredientes:</h3>
                    <div className="space-y-2">
                      {selectedRecipe.ingredients.map((ing: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                          <span className="text-gray-300">{ing.product}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-gray-400 text-sm">{ing.amount}</span>
                            <span className="text-orange-400 font-semibold">{ing.calories} cal</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Beneficios */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">✨ Beneficios:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRecipe.benefits.map((benefit: string, idx: number) => (
                        <span key={idx} className="px-4 py-2 bg-purple-600/30 border border-purple-500/50 text-purple-300 rounded-full text-sm font-semibold">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedRecipe(null)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
                    >
                      Comprar Ingredientes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recipes Grid */}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition cursor-pointer group"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${difficultyColor[recipe.difficulty]}`}>
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{recipe.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{recipe.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-700/50 rounded-lg p-2">
                        <p className="text-gray-400 text-xs mb-1">⏱️ Tiempo</p>
                        <p className="text-white font-bold">{recipe.prep_time} min</p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-2">
                        <p className="text-gray-400 text-xs mb-1">👥 Porciones</p>
                        <p className="text-white font-bold">{recipe.servings}</p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-2">
                        <p className="text-gray-400 text-xs mb-1">🔥 Calorías</p>
                        <p className="text-green-400 font-bold">{recipe.total_calories}</p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-2">
                        <p className="text-gray-400 text-xs mb-1">💪 Proteína</p>
                        <p className="text-orange-400 font-bold">{recipe.protein_g}g</p>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition">
                      Ver Receta Completa →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-400">No hay recetas en esta categoría</p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">💡 Consejos de Nutrición</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✓</span>
                  <span><strong>Consistencia</strong> - Toma proteína después de cada entreno</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✓</span>
                  <span><strong>Variedad</strong> - Alterna entre nuestras diferentes recetas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✓</span>
                  <span><strong>Hidratación</strong> - Bebe 2-3 litros de agua diaria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✓</span>
                  <span><strong>Macros</strong> - Ajusta proteína, carbos y grasas a tu objetivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✓</span>
                  <span><strong>Timing</strong> - Pre-entreno 30min antes, post 30min después</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Recetas por Objetivo</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="font-bold text-blue-400 mb-2">💪 GANANCIA DE MASA</p>
                  <p className="text-sm text-gray-300">
                    Batido Ganador de Masa, Pancakes Proteicos - Alto en calorías y proteína
                  </p>
                </div>
                <div className="bg-gray-800/50 border-l-4 border-red-500 p-4 rounded">
                  <p className="font-bold text-red-400 mb-2">🔥 DEFINICIÓN</p>
                  <p className="text-sm text-gray-300">
                    Batido Definición Extrema, Batido Verde - Bajo en calorías, alto en proteína
                  </p>
                </div>
                <div className="bg-gray-800/50 border-l-4 border-green-500 p-4 rounded">
                  <p className="font-bold text-green-400 mb-2">⚡ PRE-ENTRENO</p>
                  <p className="text-sm text-gray-300">
                    Batido Cafeína, Barras Energéticas - Energía y enfoque para el gym
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Back to Combos */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/50 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">🔗 Combos con Ingredientes para Recetas</h4>
            <p className="text-gray-300 mb-6">
              Todos nuestros combos incluyen los productos necesarios para preparar deliciosas recetas
            </p>
            <Link
              href="/combos"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition inline-block"
            >
              Ver Combos Disponibles →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
