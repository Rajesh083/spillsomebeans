import Link from 'next/link'

const menuItems = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs",
    price: "$24",
    category: "main"
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Crisp romaine with parmesan and croutons",
    price: "$12",
    category: "starter"
  },
  {
    id: 3,
    name: "Beef Tenderloin",
    description: "Premium cut with roasted vegetables",
    price: "$32",
    category: "main"
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Rich dark chocolate with vanilla cream",
    price: "$10",
    category: "dessert"
  }
]

export default function Menu() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Menu
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <div key={item.id} className="border-b pb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <span className="text-lg font-bold text-blue-600">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <Link 
                href="/order" 
                className="inline-block text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:underline"
              >
                Order this dish →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/order" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
          >
            View Full Menu & Order
          </Link>
        </div>
      </div>
    </section>
  )
}