'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, Star, ArrowRight, Truck, Shield, Mail, Send, CheckCircle } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/contexts/CartContext'

// Mock data - this will be replaced with actual data from the database
const featuredProducts = [
  {
    id: '1',
    title: 'Shah Rukh Khan Classic',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'Bollywood',
    rating: 4.9,
    reviews: 127,
    featured: true
  },
  {
    id: '2',
    title: 'Punjabi Power',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    category: 'Punjabi',
    rating: 4.8,
    reviews: 89,
    featured: true
  },
  {
    id: '3',
    title: 'Amitabh Bachchan Legend',
    price: 31.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4c0a?w=400&h=500&fit=crop',
    category: 'Bollywood',
    rating: 4.9,
    reviews: 156,
    featured: true
  },
  {
    id: '4',
    title: 'Deepika Padukone Elegance',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop',
    category: 'Bollywood',
    rating: 4.7,
    reviews: 98,
    featured: true
  }
]

export default function FeaturedProducts() {
  const { dispatch } = useCart()

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    })
  }

  const handleAddToWishlist = (product: typeof featuredProducts[0]) => {
    console.log('Added to wishlist:', product.title)
  }

  return (
    <section className="py-24 bg-pink-gradient cool-lines relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-kugile font-bold text-white mb-6 tracking-tight drop-shadow-lg relative z-10">
              FEATURED{' '}
              <span className="text-pink-200 relative">
                DESIGNS
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 rounded-full opacity-80"></div>
              </span>
            </h2>
            {/* Decorative Elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-pink-300/20 rounded-full animate-pulse"></div>
            <div className="absolute -top-2 -right-4 w-4 h-4 bg-pink-400/25 rounded-full animate-pulse delay-300"></div>
            <div className="absolute -bottom-3 -left-1 w-3 h-3 bg-pink-200/30 rounded-full animate-pulse delay-700"></div>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-wasted-vindey mt-6">
            Discover our most popular designs celebrating South Asian culture and heritage
          </p>
          {/* Decorative Line */}
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:border-white/30 transition-all duration-500 rounded-3xl relative">
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleAddToWishlist(product)}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                      >
                        <Heart className="h-5 w-5 text-pink-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleAddToCart(product)}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                      >
                        <ShoppingCart className="h-5 w-5 text-pink-600" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-pink-600 px-3 py-1 text-xs font-kugile font-semibold tracking-wide rounded-md shadow-sm">
                      {product.category}
                    </span>
                  </div>

                </div>

                {/* Product Info */}
                <div className="p-6 bg-transparent">
                  <h3 className="text-xl font-kugile font-bold text-white mb-3 group-hover:text-pink-200 transition-colors leading-tight">
                    {product.title}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-white/40'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-white/80 font-wasted-vindey font-medium">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-kugile font-bold text-white">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <Link href={`/product/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-2 text-xs font-wasted-vindey font-semibold rounded-lg flex items-center group shadow-md border border-white/20 transition-all duration-300"
                      >
                        VIEW DETAILS
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 opacity-60"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-4 font-kugile font-semibold text-lg flex items-center mx-auto group rounded-2xl shadow-xl border border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">VIEW ALL PRODUCTS</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </Link>
            {/* Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-300/40 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400/50 rounded-full animate-pulse delay-500"></div>
          </div>
        </motion.div>

        {/* Features Section - Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-white/10 rounded-full">
                <Truck className="h-7 w-7 text-white/90" />
              </div>
              <h3 className="text-xl font-kugile font-semibold mb-4 text-white">Free Shipping</h3>
              <p className="text-white/80 font-wasted-vindey text-base leading-relaxed">Free shipping on orders over $50. Fast and reliable delivery worldwide.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-white/10 rounded-full">
                <Shield className="h-7 w-7 text-white/90" />
              </div>
              <h3 className="text-xl font-kugile font-semibold mb-4 text-white">Premium Quality</h3>
              <p className="text-white/80 font-wasted-vindey text-base leading-relaxed">100% cotton, premium materials, and authentic designs that last.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-white/10 rounded-full">
                <Heart className="h-7 w-7 text-white/90" />
              </div>
              <h3 className="text-xl font-kugile font-semibold mb-4 text-white">Made with Love</h3>
              <p className="text-white/80 font-wasted-vindey text-base leading-relaxed">Every design celebrates South Asian culture with authenticity and pride.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section - Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-kugile font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                      STAY{' '}
                      <span className="text-pink-200">CONNECTED</span>
                    </h2>
                    <p className="text-base text-white/90 max-w-xl mx-auto leading-relaxed font-wasted-vindey">
                      Be the first to know about new collections, exclusive offers, and cultural celebrations.
                    </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-2xl mx-auto border border-white/20">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 text-white placeholder-white/60 text-lg backdrop-blur-sm"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                        className="btn-pink px-6 py-3 rounded-xl font-wasted-vindey font-semibold flex items-center justify-center min-w-[140px] group"
                >
                  SUBSCRIBE
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
              </div>
              
                        <p className="text-sm text-white/70 font-wasted-vindey">
                          We respect your privacy. Unsubscribe at any time.
                        </p>
            </form>
          </div>

          {/* Compact Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
                      <h4 className="text-base font-kugile font-semibold text-white mb-1">EXCLUSIVE UPDATES</h4>
                      <p className="text-white/80 text-sm font-wasted-vindey">First to know about new collections</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Send className="h-6 w-6 text-white" />
              </div>
                      <h4 className="text-base font-kugile font-semibold text-white mb-1">SPECIAL OFFERS</h4>
                      <p className="text-white/80 text-sm font-wasted-vindey">Subscriber-only discounts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
                      <h4 className="text-base font-kugile font-semibold text-white mb-1">CULTURAL EVENTS</h4>
                      <p className="text-white/80 text-sm font-wasted-vindey">South Asian celebrations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}