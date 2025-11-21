'use client'

import { useState } from 'react'
import { MenuCategory } from '@/data/menu'
import MenuCard from './MenuCard'

interface MenuSectionProps {
  categories: MenuCategory[]
}

export default function MenuSection({ categories }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories.length > 0 ? categories[0].id : ''
  )

  const currentCategory = categories.find((cat) => cat.id === activeCategory)

  return (
    <section id="menu" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, crafted with the finest ingredients
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {currentCategory && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {currentCategory.name}
              </h3>
              <p className="text-gray-600">{currentCategory.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
