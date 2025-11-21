import OrderReservationForm from '@/components/OrderReservationForm'

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Order Food & Make Reservations
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form below to place an order or reserve a table
          </p>
          <OrderReservationForm />
        </div>
      </div>
    </div>
  )
}