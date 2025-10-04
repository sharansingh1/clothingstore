'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Upload, 
  Search, 
  Filter, 
  Download,
  BarChart3,
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  Package,
  AlertCircle,
  CheckCircle,
  XCircle,
  Calendar,
  Tag,
  Image as ImageIcon,
  Save,
  X
} from 'lucide-react'

interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  images: string[]
  sizes: string[]
  colors: string[]
  stock: number
  featured: boolean
  createdAt: string
  updatedAt: string
}

interface Stats {
  totalProducts: number
  totalOrders: number
  totalRevenue: number
  totalCustomers: number
  lowStockItems: number
  featuredProducts: number
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'customers' | 'analytics'>('overview')
  const [products, setProducts] = useState<Product[]>([])
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [stats, setStats] = useState<Stats>({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    lowStockItems: 0,
    featuredProducts: 0
  })

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        title: 'Shah Rukh Khan Classic',
        price: 29.99,
        description: 'Premium graphic tee featuring the King of Bollywood',
        category: 'Bollywood',
        images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Navy'],
        stock: 45,
        featured: true,
        createdAt: '2024-01-15',
        updatedAt: '2024-01-20'
      },
      {
        id: '2',
        title: 'Punjabi Power',
        price: 27.99,
        description: 'Celebrate Punjabi culture with this vibrant design',
        category: 'Punjabi',
        images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Orange', 'Yellow', 'Red'],
        stock: 3,
        featured: false,
        createdAt: '2024-01-10',
        updatedAt: '2024-01-18'
      }
    ]
    
    setProducts(mockProducts)
    setStats({
      totalProducts: mockProducts.length,
      totalOrders: 156,
      totalRevenue: 12450.50,
      totalCustomers: 89,
      lowStockItems: mockProducts.filter(p => p.stock < 10).length,
      featuredProducts: mockProducts.filter(p => p.featured).length
    })
  }, [])

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const handleAddProduct = () => {
    setIsAddingProduct(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
  }

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  const handleSaveProduct = (productData: Partial<Product>) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...productData } : p))
      setEditingProduct(null)
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        title: productData.title || '',
        price: productData.price || 0,
        description: productData.description || '',
        category: productData.category || '',
        images: productData.images || [],
        sizes: productData.sizes || [],
        colors: productData.colors || [],
        stock: productData.stock || 0,
        featured: productData.featured || false,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      }
      setProducts([...products, newProduct])
      setIsAddingProduct(false)
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-white shadow-luxury border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-charcoal-900">Admin Dashboard</h1>
              <p className="text-charcoal-600 mt-2">Manage your DesiThreads store</p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-gold transition-all duration-300 flex items-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Export Data
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-luxury p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-luxury-gradient text-white shadow-premium'
                          : 'text-charcoal-700 hover:bg-gold-50 hover:text-gold-600'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-luxury p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-charcoal-600 text-sm font-medium">Total Products</p>
                        <p className="text-3xl font-bold text-charcoal-900">{stats.totalProducts}</p>
                      </div>
                      <div className="bg-gold-100 rounded-full p-3">
                        <Package className="h-6 w-6 text-gold-600" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl shadow-luxury p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-charcoal-600 text-sm font-medium">Total Revenue</p>
                        <p className="text-3xl font-bold text-charcoal-900">${stats.totalRevenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-emerald-100 rounded-full p-3">
                        <DollarSign className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-luxury p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-charcoal-600 text-sm font-medium">Low Stock Items</p>
                        <p className="text-3xl font-bold text-burgundy-600">{stats.lowStockItems}</p>
                      </div>
                      <div className="bg-burgundy-100 rounded-full p-3">
                        <AlertCircle className="h-6 w-6 text-burgundy-600" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-3xl shadow-luxury p-8">
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddProduct}
                      className="bg-luxury-gradient text-white p-6 rounded-2xl text-left hover:shadow-premium transition-all duration-300"
                    >
                      <Plus className="h-8 w-8 mb-4" />
                      <h4 className="text-xl font-semibold mb-2">Add New Product</h4>
                      <p className="text-white/90">Create a new product listing</p>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gold-gradient text-white p-6 rounded-2xl text-left hover:shadow-gold transition-all duration-300"
                    >
                      <Upload className="h-8 w-8 mb-4" />
                      <h4 className="text-xl font-semibold mb-2">Bulk Upload</h4>
                      <p className="text-white/90">Upload multiple products at once</p>
                    </motion.button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="space-y-6">
                {/* Products Header */}
                <div className="bg-white rounded-3xl shadow-luxury p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-charcoal-900">Products</h2>
                      <p className="text-charcoal-600 mt-2">Manage your product catalog</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
                        <input
                          type="text"
                          placeholder="Search products..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900"
                        />
                      </div>
                      <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="px-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900"
                      >
                        <option value="all">All Categories</option>
                        <option value="Bollywood">Bollywood</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Cultural">Cultural</option>
                      </select>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddProduct}
                        className="bg-luxury-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-premium transition-all duration-300 flex items-center"
                      >
                        <Plus className="h-5 w-5 mr-2" />
                        Add Product
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-3xl shadow-luxury overflow-hidden hover:shadow-premium transition-all duration-300"
                    >
                      <div className="relative aspect-[4/5]">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 flex space-x-2">
                          {product.featured && (
                            <span className="bg-burgundy-gradient text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          )}
                          {product.stock < 10 && (
                            <span className="bg-burgundy-100 text-burgundy-700 px-3 py-1 rounded-full text-sm font-medium">
                              Low Stock
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-charcoal-900 mb-2">{product.title}</h3>
                        <p className="text-charcoal-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-gold-600">${product.price}</span>
                          <span className="text-sm text-charcoal-600">Stock: {product.stock}</span>
                        </div>

                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleEditProduct(product)}
                            className="flex-1 bg-gold-gradient text-white py-2 px-4 rounded-xl font-medium hover:shadow-gold transition-all duration-300 flex items-center justify-center"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDeleteProduct(product.id)}
                            className="bg-burgundy-gradient text-white py-2 px-4 rounded-xl font-medium hover:shadow-burgundy transition-all duration-300 flex items-center justify-center"
                          >
                            <Trash2 className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs would be implemented similarly */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-3xl shadow-luxury p-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Orders</h2>
                <p className="text-charcoal-600">Order management coming soon...</p>
              </div>
            )}

            {activeTab === 'customers' && (
              <div className="bg-white rounded-3xl shadow-luxury p-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Customers</h2>
                <p className="text-charcoal-600">Customer management coming soon...</p>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="bg-white rounded-3xl shadow-luxury p-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Analytics</h2>
                <p className="text-charcoal-600">Analytics dashboard coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {(isAddingProduct || editingProduct) && (
        <ProductModal
          product={editingProduct}
          onSave={handleSaveProduct}
          onClose={() => {
            setIsAddingProduct(false)
            setEditingProduct(null)
          }}
        />
      )}
    </div>
  )
}

// Product Modal Component
function ProductModal({ 
  product, 
  onSave, 
  onClose 
}: { 
  product: Product | null
  onSave: (data: Partial<Product>) => void
  onClose: () => void 
}) {
  const [formData, setFormData] = useState({
    title: product?.title || '',
    price: product?.price || 0,
    description: product?.description || '',
    category: product?.category || '',
    stock: product?.stock || 0,
    featured: product?.featured || false,
    sizes: product?.sizes || [],
    colors: product?.colors || [],
    images: product?.images || []
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl shadow-luxury max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gold-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">
              {product ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gold-50 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-charcoal-600" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">Product Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">Price ($)</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900 resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900"
                required
              >
                <option value="">Select Category</option>
                <option value="Bollywood">Bollywood</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Cultural">Cultural</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-charcoal-900"
                required
              />
            </div>
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="mr-2 h-4 w-4 text-gold-600 focus:ring-gold-500 border-gold-300 rounded"
                />
                <span className="text-sm font-medium text-charcoal-700">Featured Product</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gold-200 text-charcoal-700 rounded-xl font-medium hover:bg-gold-50 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-luxury-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-premium transition-all duration-300 flex items-center"
            >
              <Save className="h-5 w-5 mr-2" />
              {product ? 'Update Product' : 'Add Product'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}