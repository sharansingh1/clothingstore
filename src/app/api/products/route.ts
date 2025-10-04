import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { parseJsonField } from '@/lib/utils'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const limit = searchParams.get('limit')

    const where: any = {}
    
    if (category && category !== 'All') {
      where.category = category
    }
    
    if (featured === 'true') {
      where.featured = true
    }

    const products = await prisma.product.findMany({
      where,
      take: limit ? parseInt(limit) : undefined,
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    })

    // Parse JSON fields
    const parsedProducts = products.map(product => ({
      ...product,
      images: parseJsonField<string>(product.images),
      sizes: parseJsonField<string>(product.sizes),
      colors: parseJsonField<string>(product.colors)
    }))

    return NextResponse.json(parsedProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
