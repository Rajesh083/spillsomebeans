import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Order/Reservation Confirmed!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your order/reservation. We&apos;ve received your request and will send a confirmation to your email shortly.
        </p>
        
        <div className="space-y-3">
          <Link 
            href="/order" 
            className="block w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Make Another Order/Reservation
          </Link>
          
          <Link 
            href="/" 
            className="block w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-md font-semibold hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}