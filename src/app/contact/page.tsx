'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 via-cream-50 to-burgundy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-charcoal-900 mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-gold-600 via-burgundy-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
                Touch
              </span>
            </h1>
            <p className="text-2xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-luxury p-8"
          >
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-8">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900 placeholder-charcoal-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900 placeholder-charcoal-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900 placeholder-charcoal-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900 placeholder-charcoal-500 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-luxury-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-premium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-8">
                Contact Information
              </h2>
              <p className="text-xl text-charcoal-700 leading-relaxed mb-8">
                We're here to help! Reach out to us through any of these channels and we'll get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-luxury">
                <div className="bg-gold-100 rounded-full p-3">
                  <Mail className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Email Us</h3>
                  <p className="text-charcoal-600 mb-2">hello@desithreads.com</p>
                  <p className="text-sm text-charcoal-500">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-luxury">
                <div className="bg-burgundy-100 rounded-full p-3">
                  <Phone className="h-6 w-6 text-burgundy-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Call Us</h3>
                  <p className="text-charcoal-600 mb-2">+1 (555) 123-4567</p>
                  <p className="text-sm text-charcoal-500">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-luxury">
                <div className="bg-emerald-100 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Visit Us</h3>
                  <p className="text-charcoal-600 mb-2">
                    123 Fashion Street<br />
                    New York, NY 10001
                  </p>
                  <p className="text-sm text-charcoal-500">By appointment only</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-luxury">
                <div className="bg-gold-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Business Hours</h3>
                  <div className="text-charcoal-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-r from-gold-50 to-burgundy-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-charcoal-900 mb-2">How long does shipping take?</h4>
                  <p className="text-charcoal-600">We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-900 mb-2">What's your return policy?</h4>
                  <p className="text-charcoal-600">We offer a 30-day return policy for unworn items in original condition.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-900 mb-2">Do you offer custom designs?</h4>
                  <p className="text-charcoal-600">Yes! We love creating custom designs. Contact us to discuss your vision.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
