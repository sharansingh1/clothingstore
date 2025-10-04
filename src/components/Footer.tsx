'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-pink-gradient cool-lines relative">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-kugile font-bold text-white mb-3 tracking-wider drop-shadow-lg">
                DESITHREADS
              </h2>
              <p className="text-white/90 leading-relaxed mb-4 font-wasted-vindey text-sm">
                Celebrating South Asian culture through premium graphic t-shirts. 
                Wear your heritage with pride and style.
              </p>
              <div className="flex space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <Youtube className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-kugile font-bold text-white mb-4 tracking-wide drop-shadow-lg">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors duration-300 font-wasted-vindey font-medium text-sm">
                  SHOP ALL
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Bollywood" className="text-white/80 hover:text-white transition-colors duration-300 font-wasted-vindey font-medium text-sm">
                  BOLLYWOOD COLLECTION
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Punjabi" className="text-white/80 hover:text-white transition-colors duration-300 font-wasted-vindey font-medium text-sm">
                  PUNJABI COLLECTION
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300 font-wasted-vindey font-medium text-sm">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-300 font-wasted-vindey font-medium text-sm">
                  CONTACT
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-kugile font-bold text-white mb-4 tracking-wide drop-shadow-lg">GET IN TOUCH</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-wasted-vindey text-sm">hello@desithreads.com</p>
                  <p className="text-white/70 text-xs">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-wasted-vindey text-sm">+1 (555) 123-4567</p>
                  <p className="text-white/70 text-xs">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-base font-kugile font-semibold text-white mb-3">STAY UPDATED</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-l-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/30 backdrop-blur-sm text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-pink px-4 py-2 rounded-r-lg font-kugile font-semibold text-sm"
                >
                  SUBSCRIBE
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-4 text-white/70 text-xs">
              <p className="font-wasted-vindey">&copy; 2025 DESITHREADS. ALL RIGHTS RESERVED.</p>
              <Link href="/terms" className="hover:text-white transition-colors font-wasted-vindey font-medium">
                TERMS
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors font-wasted-vindey font-medium">
                PRIVACY
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-white/70 text-xs">
              <span className="font-wasted-vindey">MADE WITH</span>
              <Heart className="h-3 w-3 text-pink-200 fill-current" />
              <span className="font-wasted-vindey">FOR THE SOUTH ASIAN COMMUNITY</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}