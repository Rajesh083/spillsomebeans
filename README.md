# Public Modular Kitchen

A modern, responsive website showcasing modular kitchen solutions built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository and navigate to the project directory:
```bash
cd public-modular-kitchen
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check for code issues

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── Contact.tsx    # Contact form and info
│   │   └── Location.tsx   # Location and map section
│   └── ui/                # Reusable UI components (future)
├── data/                  # Static data and constants (future)
├── hooks/                 # Custom React hooks (future)
└── lib/                   # Utility functions (future)
```

## 🎨 Design System

The site uses a modern color palette with Tailwind CSS:

- **Primary Colors**: Red shades (50-900) for brand consistency
- **Secondary Colors**: Gray shades for text and backgrounds
- **Typography**: Inter font family for clean, modern readability
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

## 📱 Features

- **Responsive Navigation**: Mobile hamburger menu with smooth transitions
- **Hero Section**: Eye-catching headline with call-to-action buttons
- **Contact Form**: Functional contact form with validation
- **Location Section**: Embedded Google Maps with business information
- **Accessibility**: Semantic HTML5, ARIA labels, and keyboard navigation
- **Performance**: Optimized images and Next.js built-in optimizations

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js configuration
- **Icons**: Heroicons (inline SVG)

## 📐 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Development Guidelines

1. **Component Structure**: Follow the established folder structure
2. **Type Safety**: Use TypeScript for all new components
3. **Styling**: Utilize Tailwind utility classes
4. **Accessibility**: Include proper ARIA labels and semantic HTML
5. **Performance**: Optimize images and use Next.js Image component when needed

## 🚀 Deployment

The application is ready for deployment on platforms like:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Railway

Simply connect your repository and the platform will automatically build and deploy the application.

## 📞 Business Information

- **Business Name**: Public Modular Kitchen
- **Focus**: Modern, affordable modular kitchen solutions
- **Services**: Design consultation, 3D visualization, installation
- **Contact**: Available in the Contact section
- **Location**: Showroom details in the Location section

## 🔄 Future Enhancements

- Image gallery of completed projects
- Customer testimonials
- Online quote calculator
- Blog section for kitchen design tips
- E-commerce functionality for accessories
- Appointment booking system

## 📄 License

This project is private and proprietary to Public Modular Kitchen.