import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MenuSection from '@/components/menu/MenuSection'
import { menuData } from '@/data/menu'

export const metadata = {
  title: 'Menu | Public Modular Kitchen',
  description: 'Explore our full menu with appetizers, salads, mains, desserts, and beverages',
}

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Our Culinary Offerings
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From appetizers to desserts, every dish is prepared with passion and premium ingredients
            </p>
          </div>
        </div>
        <MenuSection categories={menuData} />
      </main>
      <Footer />
    </div>
  )
}
