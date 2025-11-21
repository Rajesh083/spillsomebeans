import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the submission for debugging/mock purposes
    console.log('Order/Reservation submission received:', {
      timestamp: new Date().toISOString(),
      data: body
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Validate that we have the required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'orderType']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Validate conditional fields based on order type
    if (body.orderType === 'order' || body.orderType === 'both') {
      if (!body.preferredDishes || body.preferredDishes.length === 0) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Please select at least one dish for your order' 
          },
          { status: 400 }
        )
      }
    }

    if (body.orderType === 'reservation' || body.orderType === 'both') {
      const reservationFields = ['partySize', 'date', 'time']
      const missingReservationFields = reservationFields.filter(field => !body[field])
      
      if (missingReservationFields.length > 0) {
        return NextResponse.json(
          { 
            success: false, 
            message: `Missing reservation details: ${missingReservationFields.join(', ')}` 
          },
          { status: 400 }
        )
      }
    }

    // Simulate successful processing
    const confirmationNumber = `ORD-${Date.now().toString().slice(-6)}`
    
    return NextResponse.json({
      success: true,
      message: 'Order/Reservation processed successfully!',
      confirmationNumber,
      orderDetails: {
        customerName: `${body.firstName} ${body.lastName}`,
        email: body.email,
        phone: body.phone,
        orderType: body.orderType,
        preferredDishes: body.preferredDishes,
        reservationDetails: (body.orderType === 'reservation' || body.orderType === 'both') ? {
          partySize: body.partySize,
          date: body.date,
          time: body.time
        } : null,
        specialRequests: body.specialRequests
      }
    })

  } catch (error) {
    console.error('Error processing order/reservation:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}