'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  orderType: z.enum(['order', 'reservation', 'both'], {
    required_error: 'Please select an order type'
  }),
  preferredDishes: z.array(z.string()).optional(),
  partySize: z.string().min(1, 'Party size is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  specialRequests: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

const menuItems = [
  'Grilled Salmon',
  'Caesar Salad', 
  'Beef Tenderloin',
  'Chocolate Soufflé',
  'Pasta Carbonara',
  'Greek Salad',
  'Ribeye Steak',
  'Tiramisu'
]

const partySizes = ['1', '2', '3', '4', '5', '6', '7', '8+']

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
]

export default function OrderReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedOrderType, setSelectedOrderType] = useState<'order' | 'reservation' | 'both' | null>(null)

  const { register, handleSubmit, watch, getValues, setValue, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  })

  const watchedOrderType = watch('orderType')
  const watchedDishes = watch('preferredDishes') || []

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/order-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Order/Reservation submitted successfully!')
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleDish = (dish: string) => {
    const currentDishes = getValues('preferredDishes') || []
    const newDishes = currentDishes.includes(dish)
      ? currentDishes.filter(d => d !== dish)
      : [...currentDishes, dish]
    setValue('preferredDishes', newDishes, { shouldValidate: true })
  }

  const orderOptions = [
    { value: 'order', label: 'Order Food', icon: '🍽️' },
    { value: 'reservation', label: 'Make Reservation', icon: '📅' },
    { value: 'both', label: 'Both', icon: '🍽️📅' }
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
      {/* Order Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What would you like to do?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {orderOptions.map((option) => (
            <label
              key={option.value}
              className={`
                relative flex cursor-pointer rounded-lg border p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${watchedOrderType === option.value 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
                }
              `}
            >
              <input
                type="radio"
                {...register('orderType')}
                value={option.value}
                className="sr-only"
                onChange={() => {
                  setSelectedOrderType(option.value as any)
                  setValue('orderType', option.value as any, { shouldValidate: true })
                }}
              />
              <div className="text-center w-full">
                <span className="text-2xl block mb-1">{option.icon}</span>
                <span className="font-medium">{option.label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.orderType && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.orderType.message}
          </p>
        )}
      </div>

      {/* Customer Information */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              className={`
                w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.firstName ? 'border-red-500' : 'border-gray-300'}
              `}
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600" role="alert" id="firstName-error">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              className={`
                w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.lastName ? 'border-red-500' : 'border-gray-300'}
              `}
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600" role="alert" id="lastName-error">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`
                w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.email ? 'border-red-500' : 'border-gray-300'}
              `}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600" role="alert" id="email-error">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className={`
                w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.phone ? 'border-red-500' : 'border-gray-300'}
              `}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600" role="alert" id="phone-error">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Order Details */}
      {(watchedOrderType === 'order' || watchedOrderType === 'both') && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Your Preferred Dishes
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {menuItems.map((dish) => (
                <label key={dish} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watchedDishes.includes(dish)}
                    onChange={() => toggleDish(dish)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{dish}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reservation Details */}
      {(watchedOrderType === 'reservation' || watchedOrderType === 'both') && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Reservation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="partySize" className="block text-sm font-medium text-gray-700 mb-1">
                Party Size *
              </label>
              <select
                {...register('partySize')}
                id="partySize"
                className={`
                  w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.partySize ? 'border-red-500' : 'border-gray-300'}
                `}
                aria-invalid={errors.partySize ? 'true' : 'false'}
              >
                <option value="">Select party size</option>
                {partySizes.map((size) => (
                  <option key={size} value={size}>
                    {size} {size === '1' ? 'person' : 'people'}
                  </option>
                ))}
              </select>
              {errors.partySize && (
                <p className="mt-1 text-sm text-red-600" role="alert" id="partySize-error">
                  {errors.partySize.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date *
              </label>
              <input
                {...register('date')}
                type="date"
                id="date"
                min={new Date().toISOString().split('T')[0]}
                className={`
                  w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.date ? 'border-red-500' : 'border-gray-300'}
                `}
                aria-invalid={errors.date ? 'true' : 'false'}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600" role="alert" id="date-error">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time *
              </label>
              <select
                {...register('time')}
                id="time"
                className={`
                  w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.time ? 'border-red-500' : 'border-gray-300'}
                `}
                aria-invalid={errors.time ? 'true' : 'false'}
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="mt-1 text-sm text-red-600" role="alert" id="time-error">
                  {errors.time.message}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests (Optional)
        </label>
        <textarea
          {...register('specialRequests')}
          id="specialRequests"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any dietary restrictions, allergies, or special occasions..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`
            w-full py-3 px-4 rounded-md text-white font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
            ${!isValid || isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
            }
            transition-colors duration-200
          `}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Submit Order/Reservation'
          )}
        </button>
      </div>
    </form>
  )
}