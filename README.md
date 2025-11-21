# Restaurant Ordering & Reservation System

A Next.js application for ordering food and making restaurant reservations with form validation and accessibility features.

## Features

- **Combined Ordering/Reservation Form**: Single form for both food orders and table reservations
- **Client-side Validation**: Real-time form validation with inline error messages
- **Success/Error States**: Toast notifications for user feedback
- **API Integration**: Next.js API route that processes submissions
- **Responsive Design**: Mobile-friendly layout with large touch targets
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Loading States**: Visual feedback during form submission

## Tech Stack

- **Next.js 14**: React framework with App Router
- **React Hook Form**: Form management and validation
- **Zod**: Schema validation
- **Tailwind CSS**: Styling
- **React Hot Toast**: Notification system

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Form Features

### Validation
- Required field validation
- Email format validation
- Phone number length validation
- Conditional field validation (based on order type)
- Real-time validation feedback

### Order Types
- **Order Food**: Select dishes from the menu
- **Make Reservation**: Choose party size, date, and time
- **Both**: Combine ordering and reservation

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly

### Mobile Features
- Responsive design
- Large touch targets (minimum 44px)
- Multi-step stacking on small screens
- Touch-friendly form elements

## API Endpoint

The `/api/order-reservation` endpoint handles form submissions:

- Validates required and conditional fields
- Logs submissions for debugging
- Returns confirmation numbers
- Handles errors gracefully

## File Structure

```
app/
├── api/
│   └── order-reservation/
│       └── route.ts          # API endpoint
├── globals.css               # Global styles
├── layout.tsx               # Root layout
├── order/
│   └── page.tsx             # Order/reservation page
└── page.tsx                 # Home page

components/
├── Hero.tsx                 # Hero section with CTAs
├── Menu.tsx                 # Menu display
├── Navigation.tsx           # Navigation bar
└── OrderReservationForm.tsx # Main form component
```

## Acceptance Criteria Met

✅ Submissions hit an API route and return visible success/failure toast notifications
✅ Form prevents invalid submissions and preserves user data when validation fails
✅ Mobile layout remains usable with large touch targets and responsive design
✅ Clear CTAs from hero/menu to the form
✅ Accessibility features including labels and keyboard navigation