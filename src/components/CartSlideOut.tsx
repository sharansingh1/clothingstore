'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartSlideOut() {
  const { state, dispatch } = useCart()

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id })
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
    }
  }

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const handleCheckout = () => {
    dispatch({ type: 'CLOSE_CART' })
    console.log('Proceeding to checkout...')
  }

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
              <h2 className="text-2xl font-bold text-black flex items-center tracking-wide">
                <ShoppingBag className="h-7 w-7 mr-3" />
                CART ({state.itemCount})
              </h2>
              <button
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-4">YOUR CART IS EMPTY</h3>
                  <p className="text-gray-600 mb-8 text-lg">Add some premium items to get started!</p>
                  <Link href="/shop">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => dispatch({ type: 'CLOSE_CART' })}
                      className="bg-black text-white px-8 py-4 font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                    >
                      CONTINUE SHOPPING
                    </motion.button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200"
                    >
                      {/* Product Image */}
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-black truncate text-lg">
                          {item.title}
                        </h3>
                        <div className="text-sm text-gray-600 space-y-1 mt-2">
                          {item.size && <div>Size: {item.size}</div>}
                          {item.color && <div>Color: {item.color}</div>}
                        </div>
                        <div className="text-xl font-bold text-black mt-3">
                          {formatPrice(item.price)}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end space-y-3">
                        <div className="flex items-center border border-gray-300 rounded-xl bg-white">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-l-xl"
                          >
                            <Minus className="h-4 w-4 text-gray-600" />
                          </button>
                          <span className="px-4 py-2 font-semibold text-black">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-r-xl"
                          >
                            <Plus className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                        >
                          REMOVE
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-gray-200 bg-white p-6 space-y-6">
                {/* Total */}
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-black">TOTAL:</span>
                  <span className="text-black">{formatPrice(state.total)}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Link href="/cart">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => dispatch({ type: 'CLOSE_CART' })}
                      className="w-full bg-gray-100 text-black py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors"
                    >
                      VIEW CART
                    </motion.button>
                  </Link>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
                  >
                    CHECKOUT
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Free Shipping Notice */}
                {state.total < 50 && (
                  <div className="text-center text-sm text-black bg-gray-100 rounded-xl p-4 border border-gray-300">
                    <span className="font-semibold">ADD {formatPrice(50 - state.total)} MORE FOR FREE SHIPPING!</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}