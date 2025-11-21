import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Restaurant Ordering & Reservations',
  description: 'Order food and make reservations online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}