'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, User, Menu, X, Heart, Search, Sparkles } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'SHOP', href: '/shop' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { state, dispatch } = useCart()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
    }
  }

  const handleHeartClick = () => {
    console.log('Wishlist clicked')
  }

  const handleUserClick = () => {
    console.log('User profile clicked')
  }

  return (
    <>
      {/* Desktop Navigation - Pink Theme */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 relative">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-kugile font-bold text-white tracking-wide">
                  DESITHREADS
                </div>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8 z-50 relative">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-wasted-vindey font-medium tracking-wide z-50 relative ${
                    pathname === item.href 
                      ? 'text-white border-b-2 border-white pb-1' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6 z-50 relative">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white/80 hover:text-white transition-colors z-50 relative"
              >
                <Search className="h-5 w-5" />
              </motion.button>

              {/* Wishlist */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleHeartClick}
                className="text-white/80 hover:text-white transition-colors relative z-50"
              >
                <Heart className="h-5 w-5" />
              </motion.button>

              {/* User */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleUserClick}
                className="text-white/80 hover:text-white transition-colors z-50 relative"
              >
                <User className="h-5 w-5" />
              </motion.button>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => dispatch({ type: 'OPEN_CART' })}
                className="text-white/80 hover:text-white transition-colors relative z-50"
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-pink-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {state.itemCount}
                  </span>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 relative">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="text-lg font-kugile font-bold text-white tracking-wide">
                  DESITHREADS
                </div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 z-50 relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => dispatch({ type: 'OPEN_CART' })}
                className="text-white/80 hover:text-white transition-colors relative z-50"
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-pink-500 text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                    {state.itemCount}
                  </span>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/80 hover:text-white transition-colors z-50 relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 relative"
            >
                        <div className="px-4 py-6 space-y-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-700 hover:text-pink-600 transition-colors font-wasted-vindey font-medium tracking-wide"
                            >
                              {item.name}
                            </Link>
                          ))}
                          <div className="pt-4 border-t border-pink-200 space-y-4">
                            <button
                              onClick={handleHeartClick}
                              className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
                            >
                              <Heart className="h-5 w-5 mr-3" />
                              Wishlist
                            </button>
                            <button
                              onClick={handleUserClick}
                              className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
                            >
                              <User className="h-5 w-5 mr-3" />
                              Account
                            </button>
                          </div>
                        </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
                    autoFocus
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}