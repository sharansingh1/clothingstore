'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star, Filter, SortAsc, Grid, List } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

// Mock data - this will be replaced with actual data from the database
const mockProducts = [
  {
    id: '1',
    title: 'Shah Rukh Khan Classic',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'Bollywood',
    rating: 4.9,
    reviews: 127,
    featured: true,
    inStock: true
  },
  {
    id: '2',
    title: 'Punjabi Power',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    category: 'Punjabi',
    rating: 4.8,
    reviews: 89,
    featured: true,
    inStock: true
  },
  {
    id: '3',
    title: 'Amitabh Bachchan Legend',
    price: 31.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4c0a?w=400&h=500&fit=crop',
    category: 'Bollywood',
    rating: 4.9,
    reviews: 156,
    featured: true,
    inStock: true
  },
  {
    id: '4',
    title: 'Deepika Padukone Elegance',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop',
    category: 'Bollywood',
    rating: 4.7,
    reviews: 98,
    featured: true,
    inStock: true
  },
  {
    id: '5',
    title: 'Bhangra Beats',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    category: 'Punjabi',
    rating: 4.6,
    reviews: 73,
    featured: false,
    inStock: true
  },
  {
    id: '6',
    title: 'Sardar Pride',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
    category: 'Punjabi',
    rating: 4.8,
    reviews: 112,
    featured: false,
    inStock: true
  },
  {
    id: '7',
    title: 'Ranveer Singh Style',
    price: 30.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'Bollywood',
    rating: 4.5,
    reviews: 84,
    featured: false,
    inStock: true
  },
  {
    id: '8',
    title: 'Punjabi Wedding Vibes',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    category: 'Punjabi',
    rating: 4.9,
    reviews: 145,
    featured: false,
    inStock: true
  }
]

const categories = ['All', 'Bollywood', 'Punjabi']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'newest', label: 'Newest First' }
]

export default function ShopPage() {
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered = [...filtered].sort((a, b) => b.id.localeCompare(a.id))
        break
      case 'featured':
      default:
        filtered = [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured))
        break
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Shop{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover our complete range of premium South Asian graphic tees
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 text-gray-600 hover:text-primary-600"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                      Under $25
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                      $25 - $30
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                      $30 - $35
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                      Over $35
                    </button>
                  </div>
                </div>

                {/* Clear Filters */}
                <button className="w-full text-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:border-primary-600 hover:text-primary-600 transition-colors">
                  Clear All Filters
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <SortAsc className="h-4 w-4 text-gray-600" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    {/* Product Image */}
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-[4/5]'
                    }`}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                          >
                            <Heart className="h-5 w-5 text-gray-600" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                          >
                            <ShoppingCart className="h-5 w-5 text-gray-600" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {product.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {product.title}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </span>
                        <Link href={`/product/${product.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
                          >
                            View Details
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Products Message */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-500 text-lg">No products found matching your criteria.</div>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSortBy('featured')
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear filters to see all products
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
