'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Instagram, Facebook, Send, ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'

const products = [
  {
    id: 1,
    name: "Casual Jacket",
    price: 125,
    originalPrice: 225,
    image: "/landing.jpeg",
    description: "Light blue denim jacket with white hoodie"
  },
  {
    id: 2,
    name: "Black Fur Jacket",
    price: 150,
    originalPrice: 200,
    image: "/landing.jpeg",
    description: "Black jacket with white fur lining"
  },
  {
    id: 3,
    name: "Pink Fur Jacket",
    price: 140,
    originalPrice: 190,
    image: "/landing.jpeg",
    description: "Light pink jacket with white fur lining"
  }
]

export default function HeroSection() {
  const [currentProduct, setCurrentProduct] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-pink-gradient cool-lines">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-px h-20 bg-white/20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-px h-16 bg-white/15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-px h-12 bg-white/25 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Main Content Card */}
      <div className="relative z-10 w-full px-2 lg:px-4 pt-20 pb-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20 h-[calc(100vh-6rem)] geometric-pattern">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-4"
            >
              {/* Small Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 text-sm font-wasted-vindey font-semibold tracking-widest uppercase"
              >
                OUTFIT OF THE DAY
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-1"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kugile font-bold leading-tight">
                  <span className="block text-white drop-shadow-lg">ALL YOUR</span>
                  <span className="block text-white font-black drop-shadow-xl">STYLES ARE HERE</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/95 text-sm leading-relaxed max-w-sm font-wasted-vindey"
              >
                Discover our premium collection of trendy jackets and clothing. 
                From casual denim to luxurious fur-lined pieces.
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/shop'}
                  className="btn-pink text-white px-8 py-4 rounded-xl font-kugile font-bold text-lg tracking-wide hover:shadow-2xl transition-all duration-300 flex items-center group relative overflow-hidden"
                >
                  BUY NOW
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex space-x-3 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all duration-300"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all duration-300"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all duration-300"
                >
                  <Send className="h-4 w-4 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Product Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Product Image */}
              <div className="relative">
                <motion.div
                  key={currentProduct}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden"
                >
                  <Image
                    src={products[currentProduct].image}
                    alt={products[currentProduct].description}
                    fill
                    className="object-cover product-slide"
                  />
                </motion.div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -right-2 lg:-right-4 transform -translate-y-1/2 flex flex-col space-y-1 lg:space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)}
                    className="w-6 h-6 lg:w-8 lg:h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4 text-white rotate-90" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentProduct((prev) => (prev + 1) % products.length)}
                    className="w-6 h-6 lg:w-8 lg:h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4 text-white -rotate-90" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Carousel Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center space-x-2 mt-6"
          >
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProduct(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProduct ? 'bg-pink-400 w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}