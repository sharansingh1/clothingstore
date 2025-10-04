import { prisma } from '@/lib/prisma'
import { stringifyJsonField } from '@/lib/utils'

const sampleProducts = [
  {
    title: "Shah Rukh Khan Classic",
    description: "Celebrate the King of Bollywood with this premium graphic tee featuring SRK's iconic pose. Made from 100% cotton for ultimate comfort.",
    price: 29.99,
    category: "Bollywood",
    images: stringifyJsonField([
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop"
    ]),
    sizes: stringifyJsonField(["S", "M", "L", "XL", "XXL"]),
    colors: stringifyJsonField(["Black", "White", "Navy"]),
    featured: true
  },
  {
    title: "Punjabi Power",
    description: "Show your Punjabi pride with this vibrant design celebrating Punjabi culture and music. Perfect for festivals and casual wear.",
    price: 27.99,
    category: "Punjabi",
    images: stringifyJsonField([
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    ]),
    sizes: stringifyJsonField(["S", "M", "L", "XL", "XXL"]),
    colors: stringifyJsonField(["Orange", "Yellow", "Red"]),
    featured: true
  },
  {
    title: "Amitabh Bachchan Legend",
    description: "Pay homage to the Big B with this classic design. Timeless style meets modern comfort in this premium cotton tee.",
    price: 31.99,
    category: "Bollywood",
    images: stringifyJsonField([
      "https://images.unsplash.com/photo-1583743814966-8936f37f4c0a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    ]),
    sizes: stringifyJsonField(["S", "M", "L", "XL", "XXL"]),
    colors: stringifyJsonField(["Black", "White", "Gray"]),
    featured: true
  },
  {
    title: "Bhangra Beats",
    description: "Dance to the rhythm of Punjab with this energetic design. Perfect for bhangra performances and cultural celebrations.",
    price: 25.99,
    category: "Punjabi",
    images: stringifyJsonField([
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop"
    ]),
    sizes: stringifyJsonField(["S", "M", "L", "XL", "XXL"]),
    colors: stringifyJsonField(["Green", "Blue", "Purple"]),
    featured: false
  },
  {
    title: "Deepika Padukone Elegance",
    description: "Channel the grace and style of Deepika Padukone with this sophisticated design. Elegant and comfortable for any occasion.",
    price: 28.99,
    category: "Bollywood",
    images: stringifyJsonField([
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4c0a?w=500&h=600&fit=crop"
    ]),
    sizes: stringifyJsonField(["S", "M", "L", "XL", "XXL"]),
    colors: stringifyJsonField(["Pink", "White", "Black"]),
    featured: true
  },
  {
    title: "Sardar Pride",
    description: "Honor the Sikh heritage with this respectful and stylish design. Made with love for the community.",
    price: 26.99,
    category: "Punjabi",
    images: stringifyJsonField([
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop"
    ]),
    sizes: stringifyJsonField(["S", "M", "L", "XL", "XXL"]),
    colors: stringifyJsonField(["Blue", "White", "Orange"]),
    featured: false
  }
]

export async function seedDatabase() {
  try {
    // Clear existing products
    await prisma.product.deleteMany()
    
    // Create sample products
    for (const product of sampleProducts) {
      await prisma.product.create({
        data: product
      })
    }
    
    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
