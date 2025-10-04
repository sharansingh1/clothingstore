'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-pink-gradient-light">
      {/* Hero Section */}
      <section className="py-24 bg-pink-gradient-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-kugile font-bold text-gray-800 mb-6">
              OUR STORY
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-wasted-vindey">
              Born from a deep passion for South Asian culture, DESITHREADS celebrates the rich heritage, 
              vibrant traditions, and iconic personalities that define our community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-pink-gradient-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-kugile font-bold text-gray-800 mb-4">
                OUR MISSION
              </h2>
              <p className="text-gray-700 leading-relaxed font-wasted-vindey mb-4">
                We believe that fashion is more than just clothing—it's a powerful way to express your identity, 
                celebrate your roots, and connect with your community. Every design tells a story of heritage, 
                pride, and cultural richness.
              </p>
              <p className="text-gray-700 leading-relaxed font-wasted-vindey">
                From Bollywood legends to Punjabi traditions, we create premium graphic tees that honor the 
                beautiful diversity of South Asian culture while maintaining the highest standards of quality and authenticity.
              </p>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop"
                alt="South Asian culture celebration"
                width={600}
                height={800}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-pink-gradient-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-kugile font-bold text-gray-800 mb-4">
              OUR VALUES
            </h2>
            <p className="text-gray-700 font-wasted-vindey">
              These core principles guide everything we do, from design to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-kugile font-semibold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600 font-wasted-vindey">Every design is created with deep respect and understanding of South Asian culture</p>
            </div>
            
            <div className="bg-white/50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-kugile font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600 font-wasted-vindey">Premium materials and craftsmanship ensure your clothes last for years</p>
            </div>
            
            <div className="bg-white/50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-kugile font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600 font-wasted-vindey">Building connections and celebrating our shared heritage together</p>
            </div>
            
            <div className="bg-white/50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-kugile font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600 font-wasted-vindey">Constantly evolving designs that blend tradition with modern style</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-gradient">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-kugile font-bold text-white mb-4">
            SHOP OUR COLLECTION
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto font-wasted-vindey">
            Discover authentic South Asian designs that celebrate your heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-kugile font-semibold hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-kugile font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}