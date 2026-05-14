'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden flex items-center py-12 sm:py-0">
      
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [50, 0, 50] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/50 rounded-full mb-6"
            >
              <p className="text-sm font-semibold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                🔥 Suplementos Premium Comprobados
              </p>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Transforma
              </span>
              <br />
              <span className="text-white">Tu Físico</span>
              <br />
              <span className="text-gray-400">Hoy</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
              Los mejores suplementos deportivos con envío rápido a toda Colombia. Proteínas premium, creatinas puras, pre-entrenos potentes y todo lo que necesitas para tu transformación.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none"
              >
                <Link
                  href="/products"
                  className="block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl shadow-lg shadow-red-600/50 transition text-center"
                >
                  🛒 Comprar Ahora
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none"
              >
                <Link
                  href="/combos"
                  className="block px-8 py-4 border-2 border-red-500/50 hover:border-red-400 text-white font-bold rounded-xl bg-white/5 hover:bg-white/10 transition text-center"
                >
                  🎁 Ver Combos
                </Link>
              </motion.div>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-2xl">✅</span> 
                <div>
                  <p className="font-semibold text-white">Originales</p>
                  <p className="text-xs text-gray-500">Garantizados</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-2xl">🚚</span> 
                <div>
                  <p className="font-semibold text-white">Envío Rápido</p>
                  <p className="text-xs text-gray-500">2-3 días</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-2xl">💬</span> 
                <div>
                  <p className="font-semibold text-white">Soporte 24/7</p>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: IMAGE/VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex relative justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Floating card effect */}
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <div className="w-full h-full bg-gradient-to-br from-red-500/30 via-orange-500/20 to-red-600/30 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden shadow-2xl shadow-red-600/50">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-8xl mb-4"
                    >
                      💪
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                    <p className="text-gray-300 mb-6">Suplementos de Élite</p>
                    <div className="grid grid-cols-3 gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-2 bg-white/10 rounded-lg backdrop-blur border border-white/20"
                      >
                        <p className="text-xs text-gray-400">Proteína</p>
                        <p className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">5★</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-2 bg-white/10 rounded-lg backdrop-blur border border-white/20"
                      >
                        <p className="text-xs text-gray-400">Creatina</p>
                        <p className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">5★</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-2 bg-white/10 rounded-lg backdrop-blur border border-white/20"
                      >
                        <p className="text-xs text-gray-400">Pre</p>
                        <p className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">5★</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="text-gray-400 text-center">
          <p className="text-xs mb-2">Scroll para ver más</p>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-gradient-to-b from-red-500 to-orange-500 rounded-full mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
