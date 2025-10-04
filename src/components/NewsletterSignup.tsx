'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, ArrowRight } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubscribed(true)
    setEmail('')
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-16 bg-pink-gradient cool-lines relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            STAY{' '}
            <span className="text-pink-200">CONNECTED</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 font-playfair">
            Be the first to know about new collections, exclusive offers, and cultural celebrations.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-2xl mx-auto border border-white/20"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 text-white placeholder-white/60 text-lg backdrop-blur-sm"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="btn-pink px-6 py-3 rounded-xl font-cinzel font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] group"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        SUBSCRIBING...
                      </div>
                    ) : (
                      <>
                        SUBSCRIBE
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
                
                <p className="text-sm text-white/70 font-playfair">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6"
              >
                <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-white mb-2">
                  WELCOME TO THE FAMILY!
                </h3>
                <p className="text-white/90 font-playfair">
                  Thank you for subscribing! You'll receive our latest updates and exclusive offers.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Compact Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-base font-cinzel font-semibold text-white mb-1">EXCLUSIVE UPDATES</h4>
              <p className="text-white/80 text-sm font-playfair">First to know about new collections</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-base font-cinzel font-semibold text-white mb-1">SPECIAL OFFERS</h4>
              <p className="text-white/80 text-sm font-playfair">Subscriber-only discounts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-base font-cinzel font-semibold text-white mb-1">CULTURAL EVENTS</h4>
              <p className="text-white/80 text-sm font-playfair">South Asian celebrations</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}