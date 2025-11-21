"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "kitchen-1",
    src: "/gallery/kitchen-1.svg",
    alt: "Modern professional kitchen with stainless steel equipment and clean countertops",
    category: "kitchen",
    title: "Modern Kitchen"
  },
  {
    id: "kitchen-2", 
    src: "/gallery/kitchen-2.svg",
    alt: "Spacious commercial kitchen with cooking stations and preparation areas",
    category: "kitchen",
    title: "Professional Kitchen"
  },
  {
    id: "food-1",
    src: "/gallery/food-1.svg",
    alt: "Artfully plated gourmet dish with fresh ingredients and elegant presentation",
    category: "food",
    title: "Gourmet Dish"
  },
  {
    id: "food-2",
    src: "/gallery/food-2.svg", 
    alt: "Fresh seasonal ingredients arranged for culinary preparation",
    category: "food",
    title: "Fresh Ingredients"
  },
  {
    id: "facility-1",
    src: "/gallery/facility-1.svg",
    alt: "Elegant dining area with comfortable seating and ambient lighting",
    category: "facility",
    title: "Dining Area"
  },
  {
    id: "facility-2",
    src: "/gallery/facility-2.svg",
    alt: "Spacious event facility with flexible seating arrangements",
    category: "facility", 
    title: "Event Space"
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = ["all", "kitchen", "food", "facility"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Culinary Gallery</h1>
            </div>
            <div className="flex space-x-8">
              <a href="#gallery" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Gallery
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Culinary Excellence
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our state-of-the-art facilities, professional kitchen, and exceptional culinary creations
          </p>
          <a 
            href="#gallery"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View Gallery
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our world-class facilities and culinary artistry through these carefully curated images
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 text-sm font-medium border ${
                    filter === category
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } ${category !== categories[0] ? "-ml-px" : ""} first:rounded-l-md last:rounded-r-md focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-white text-sm mt-1">Click to enlarge</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-description"
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain"
                id="lightbox-image"
              />
              <div className="p-6">
                <h3 id="lightbox-title" className="text-xl font-semibold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p id="lightbox-description" className="text-gray-600">
                  {selectedImage.alt}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Category: {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Space</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our facility combines cutting-edge kitchen technology with elegant dining spaces to create the perfect environment for culinary excellence
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">Experience our culinary offerings firsthand</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}