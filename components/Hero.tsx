import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Delicious Food & Memorable Dining
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Order online or reserve your table today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/order" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            Order Food
          </Link>
          <Link 
            href="/order" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            Make Reservation
          </Link>
        </div>
      </div>
    </section>
  )
}