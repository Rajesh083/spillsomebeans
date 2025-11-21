# Culinary Gallery - Photo Showcase

A modern, responsive photo gallery built with Next.js 16, TypeScript, and Tailwind CSS showcasing high-quality imagery of food, kitchen, and facilities with optimized performance and accessibility features.

## Features

### 📸 Gallery Functionality
- **Responsive Grid Layout**: Adapts seamlessly from mobile to desktop screens
- **Category Filtering**: Filter images by kitchen, food, or facility categories
- **Lightbox Modal**: Click any image to view an enlarged version with detailed information
- **Smooth Animations**: Hover effects and transitions for enhanced user experience

### 🎨 Design & Performance
- **Next.js Image Optimization**: Automatic image optimization with Next/Image
- **Core Web Vitals**: Optimized for performance with proper image loading
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Modern UI**: Clean, professional design with gradient hero section

### ♿ Accessibility & SEO
- **Semantic HTML5**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Descriptive Alt Text**: SEO-friendly image descriptions
- **Focus Management**: Proper focus handling in modals

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Icons**: Inline SVG icons
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Main gallery component
└── globals.css         # Global styles

public/
└── gallery/            # Image assets
    ├── kitchen-*.svg   # Kitchen images
    ├── food-*.svg      # Food images
    └── facility-*.svg  # Facility images
```

## Gallery Images

The gallery includes 6 placeholder images organized into categories:

- **Kitchen** (2 images): Modern and professional kitchen spaces
- **Food** (2 images): Gourmet dishes and fresh ingredients  
- **Facility** (2 images): Dining areas and event spaces

Each image includes:
- Descriptive alt text for accessibility
- Category classification
- Title and detailed descriptions
- Optimized loading with Next.js Image

## Key Components

### Navigation
- Sticky header with smooth scroll links
- Responsive mobile menu
- Gallery quick access

### Hero Section
- Gradient background
- Call-to-action button
- Compelling description

### Gallery Grid
- Responsive 1-3 column layout
- Hover effects with image previews
- Category filtering system

### Lightbox Modal
- Full-screen image viewing
- Detailed image information
- Keyboard and click-to-close functionality
- Focus management for accessibility

## Performance Optimizations

- **Image Optimization**: Next.js automatic optimization
- **Lazy Loading**: Images load as needed
- **Static Generation**: Fast initial page loads
- **Minimal Bundle Size**: Optimized dependencies
- **Core Web Vitals**: Optimized for LCP, FID, CLS

## Accessibility Features

- **Screen Reader Support**: ARIA labels and descriptions
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling
- **Color Contrast**: WCAG compliant color schemes
- **Semantic HTML**: Proper landmark elements

## Deployment

The application is optimized for deployment on Vercel:

```bash
npm run build
```

The build creates a fully static application that can be deployed to any platform supporting Node.js.

## Contributing

1. Follow the existing code style and patterns
2. Ensure all accessibility features are maintained
3. Test on multiple screen sizes
4. Run linting and build before submitting

## License

This project is open source and available under the MIT License.