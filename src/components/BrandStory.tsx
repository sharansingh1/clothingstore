'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandStory() {
  return (
    <section className="py-16 bg-pink-gradient cool-lines relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-4 drop-shadow-lg"
              >
                Our{' '}
                <span className="text-pink-200">
                  Story
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/90 leading-relaxed mb-4 font-playfair"
              >
                Born from a deep love for South Asian culture, DesiThreads celebrates 
                the rich heritage, vibrant traditions, and iconic personalities that define our community.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-white/90 leading-relaxed font-playfair"
              >
                From Bollywood legends to Punjabi pride, every design tells a story. 
                Fashion is more than clothing—it's expressing your identity and celebrating your roots.
              </motion.p>
            </div>

            {/* Compact Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-cinzel font-semibold text-white mb-1">Authenticity</h3>
                <p className="text-white/80 text-sm font-playfair">Respectful designs for South Asian culture</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-cinzel font-semibold text-white mb-1">Quality</h3>
                <p className="text-white/80 text-sm font-playfair">Premium materials that last</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-cinzel font-semibold text-white mb-1">Community</h3>
                <p className="text-white/80 text-sm font-playfair">Building connections together</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-cinzel font-semibold text-white mb-1">Innovation</h3>
                <p className="text-white/80 text-sm font-playfair">Tradition meets modern style</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="col-span-2 relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=300&fit=crop"
                  alt="South Asian culture celebration"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </motion.div>

              {/* Secondary Images */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=250&h=150&fit=crop"
                  alt="Bollywood celebration"
                  width={250}
                  height={150}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=250&h=150&fit=crop"
                  alt="Punjabi culture"
                  width={250}
                  height={150}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>

            {/* Compact Floating Stats */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-3 border border-white/20"
            >
              <div className="text-xl font-cinzel font-bold text-white">10K+</div>
              <div className="text-xs text-white/80 font-playfair">Happy Customers</div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg text-white rounded-lg shadow-lg p-3 border border-white/20"
            >
              <div className="text-xl font-cinzel font-bold">50+</div>
              <div className="text-xs opacity-90 font-playfair">Unique Designs</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
