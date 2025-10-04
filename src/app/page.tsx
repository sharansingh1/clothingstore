'use client'

import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

    </div>
  )
}
