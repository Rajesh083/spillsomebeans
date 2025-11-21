'use client'

import { MenuItem, dietaryTagColors } from '@/data/menu'

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full border border-gray-100 hover:border-primary-200">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">{item.name}</h3>
          <span className="text-primary-600 font-bold text-lg ml-2 whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

        {item.dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.dietaryTags.map((tag) => (
              <span
                key={tag}
                className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                  dietaryTagColors[tag]
                }`}
              >
                {tag === 'gluten-free' ? 'GF' : tag.charAt(0).toUpperCase() + tag.slice(1)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
