# DesiThreads - Premium South Asian Graphic Tees

A modern, premium clothing store built with Next.js 14, React, Tailwind CSS, and Framer Motion. This e-commerce platform specializes in South Asian graphic t-shirts featuring Bollywood legends and Punjabi culture.

## Features

### 🎨 Design & UI/UX
- **Premium Design**: White-based background with beautiful accent colors
- **Smooth Animations**: Framer Motion animations throughout the site
- **Modern Typography**: Inter and Poppins fonts for a clean, modern look
- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **Hover Effects**: Subtle hover animations and transitions

### 🛍️ Core Pages
- **Landing Page**: Hero section, featured designs, brand story, newsletter signup
- **Shop Page**: Product grid with filters, sorting, and hover animations
- **Product Details**: Image gallery, description, sizes, colors, add-to-cart
- **Cart & Checkout**: Slide-out cart with smooth animations
- **Admin Dashboard**: Product management and inventory control

### 🚀 Features
- **Shopping Cart**: Context-based cart management with slide-out panel
- **Product Management**: Admin panel for adding/editing products
- **Database Integration**: Prisma ORM with SQLite database
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance**: Optimized images and fast loading times

## Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Database**: Prisma ORM with SQLite
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clothingstore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Seed the database with sample products**
   ```bash
   npm run seed
   ```

5. **Start the development server**
```bash
npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── product/           # Product detail pages
│   ├── shop/              # Shop page
│   └── layout.tsx         # Root layout
├── components/             # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Landing page hero
│   ├── FeaturedProducts.tsx
│   ├── BrandStory.tsx
│   ├── NewsletterSignup.tsx
│   └── CartSlideOut.tsx   # Shopping cart
├── contexts/              # React contexts
│   └── CartContext.tsx    # Shopping cart state
├── lib/                   # Utility functions
│   ├── prisma.ts         # Database client
│   ├── utils.ts          # Helper functions
│   └── seed.ts           # Database seeding
└── prisma/               # Database schema
    └── schema.prisma
```

## Key Components

### 🛒 Shopping Cart
- Context-based state management
- Slide-out panel with smooth animations
- Add/remove items with quantity controls
- Real-time total calculation

### 🎨 Design System
- Custom color palette with primary, secondary, and accent colors
- Consistent spacing and typography
- Reusable component patterns
- Responsive breakpoints

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Optimized images for different screen sizes

## Database Schema

The application uses Prisma with SQLite and includes the following models:

- **User**: Customer accounts and authentication
- **Product**: Product information, images, pricing
- **CartItem**: Shopping cart items
- **Order**: Order management and history
- **WishlistItem**: Customer wishlists

## API Routes

- `GET /api/products` - Fetch all products with optional filtering
- `GET /api/products/[id]` - Fetch single product details
- Additional routes for cart, orders, and user management

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Environment Variables
Create a `.env.local` file with:
```env
DATABASE_URL="file:./dev.db"
# Add other environment variables as needed
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ for the South Asian community