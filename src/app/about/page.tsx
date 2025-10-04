'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Heart, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gold-50 via-cream-50 to-burgundy-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffcc33' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-charcoal-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-gold-600 via-burgundy-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
                Story
              </span>
            </h1>
            <p className="text-2xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed">
              Born from a deep passion for South Asian culture, DesiThreads celebrates the rich heritage, 
              vibrant traditions, and iconic personalities that define our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl font-serif font-bold text-charcoal-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-charcoal-700 leading-relaxed mb-6">
                  We believe that fashion is more than just clothing—it's a powerful way to express your identity, 
                  celebrate your roots, and connect with your community. Every design tells a story of heritage, 
                  pride, and cultural richness.
                </p>
                <p className="text-xl text-charcoal-700 leading-relaxed">
                  From Bollywood legends to Punjabi traditions, we create premium graphic tees that honor the 
                  beautiful diversity of South Asian culture while maintaining the highest standards of quality and authenticity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-luxury">
                  <Award className="h-8 w-8 text-gold-600 mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Premium Quality</h3>
                  <p className="text-charcoal-600">100% cotton, authentic designs, crafted with love</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-luxury">
                  <Heart className="h-8 w-8 text-burgundy-600 mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Cultural Pride</h3>
                  <p className="text-charcoal-600">Celebrating heritage with respect and authenticity</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop"
                  alt="South Asian culture celebration"
                  width={600}
                  height={800}
                  className="rounded-3xl shadow-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-gold-gradient text-white rounded-2xl shadow-premium p-6"
              >
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-6 -right-6 bg-burgundy-gradient text-white rounded-2xl shadow-premium p-6"
              >
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Unique Designs</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-burgundy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif font-bold text-charcoal-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto">
              These core principles guide everything we do, from design to delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: "Authenticity",
                description: "Every design is created with deep respect and understanding of South Asian culture",
                color: "gold"
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Quality",
                description: "Premium materials and craftsmanship ensure your clothes last for years",
                color: "burgundy"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Community",
                description: "Building connections and celebrating our shared heritage together",
                color: "emerald"
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Innovation",
                description: "Constantly evolving designs that blend tradition with modern style",
                color: "gold"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-luxury hover:shadow-premium transition-all duration-300 group"
              >
                <div className={`text-${value.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-charcoal-900 mb-4">{value.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif font-bold text-charcoal-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto">
              Passionate individuals dedicated to celebrating South Asian culture through fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop",
                description: "Born in Mumbai, Priya brings 15 years of fashion design experience and a deep love for Bollywood culture."
              },
              {
                name: "Raj Singh",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
                description: "A Punjabi designer who specializes in creating authentic cultural designs that resonate with the community."
              },
              {
                name: "Anita Patel",
                role: "Community Manager",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
                description: "Anita ensures every customer feels connected to their heritage through our products and community."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-charcoal-900 mb-2">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-4">{member.role}</p>
                  <p className="text-charcoal-600 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 via-burgundy-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
              Be part of a movement that celebrates South Asian culture through premium fashion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-luxury transition-all duration-300"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-charcoal-900 transition-all duration-300"
              >
                Follow Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
