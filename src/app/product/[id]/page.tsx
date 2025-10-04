'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, Share2, Minus, Plus } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

// Mock product data - this will be replaced with actual data from the database
const mockProduct = {
  id: '1',
  title: 'Shah Rukh Khan Classic',
  description: 'Celebrate the King of Bollywood with this premium graphic tee featuring SRK\'s iconic pose. Made from 100% cotton for ultimate comfort and style. This design captures the essence of Bollywood\'s biggest superstar and his legendary status in Indian cinema.',
  price: 29.99,
  originalPrice: 39.99,
  images: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1583743814966-8936f37f4c0a?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop'
  ],
  category: 'Bollywood',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'White', 'Navy'],
  rating: 4.9,
  reviews: 127,
  inStock: true,
  featured: true,
  tags: ['Bollywood', 'SRK', 'Classic', 'Premium']
}

const relatedProducts = [
  {
    id: '2',
    title: 'Amitabh Bachchan Legend',
    price: 31.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4c0a?w=300&h=400&fit=crop',
    category: 'Bollywood'
  },
  {
    id: '3',
    title: 'Deepika Padukone Elegance',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=400&fit=crop',
    category: 'Bollywood'
  },
  {
    id: '4',
    title: 'Punjabi Power',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop',
    category: 'Punjabi'
  }
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsAddingToCart(false)
    // Show success message or update cart
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
        >
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary-600">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${mockProduct.category}`} className="hover:text-primary-600">
            {mockProduct.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{mockProduct.title}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.title}
                fill
                className="object-cover"
                priority
              />
              
              {/* Image Navigation */}
              <button
                onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                disabled={selectedImage === 0}
              >
                <Minus className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelectedImage(Math.min(mockProduct.images.length - 1, selectedImage + 1))}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                disabled={selectedImage === mockProduct.images.length - 1}
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${mockProduct.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title and Category */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {mockProduct.category}
                </span>
                {mockProduct.featured && (
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                {mockProduct.title}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(mockProduct.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {mockProduct.rating} ({mockProduct.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(mockProduct.price)}
              </span>
              {mockProduct.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(mockProduct.originalPrice)}
                </span>
              )}
              {mockProduct.originalPrice && (
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                  Save {formatPrice(mockProduct.originalPrice - mockProduct.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{mockProduct.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {mockProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex gap-2">
                {mockProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                      selectedColor === color
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor || isAddingToCart}
                  className="flex-1 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isAddingToCart ? (
                    'Adding...'
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 border-2 border-gray-300 rounded-full hover:border-primary-600 hover:text-primary-600 transition-colors"
                >
                  <Heart className="h-6 w-6" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 border-2 border-gray-300 rounded-full hover:border-primary-600 hover:text-primary-600 transition-colors"
                >
                  <Share2 className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-600">On orders over $50</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Premium Quality</div>
                    <div className="text-sm text-gray-600">100% Cotton</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Easy Returns</div>
                    <div className="text-sm text-gray-600">30-day policy</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {product.title}
                      </h3>
                      <div className="text-xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
