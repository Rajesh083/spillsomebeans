import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Restaurant
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:text-blue-600"
            >
              Home
            </Link>
            <Link 
              href="/order" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:text-blue-600"
            >
              Order & Reserve
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link 
              href="/order" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}