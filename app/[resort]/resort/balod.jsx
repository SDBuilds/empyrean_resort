"use client";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { initAnimations, sectionAnimations, contentAnimations, getStaggeredDelay } from "@/animations/animations";

// Hero Section Component
const HeroSection = ({ image, title, subtitle }) => (
  <section className="relative h-[85vh]">
    <Image
      src={image}
      alt={title}
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6" {...contentAnimations.text}>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Introduction Section Component
const IntroductionSection = ({ title, description }) => (
  <section className="py-24 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12" {...contentAnimations.text}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block group">
            {title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300" {...contentAnimations.text}>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Amenity Card Component
const AmenityCard = ({ title, description, icon }) => (
  <div className="relative group" {...contentAnimations.card}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl transform transition-transform duration-300 group-hover:scale-105"></div>
    <div className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Gallery Image Component
const GalleryImage = ({ src, index, onClick }) => (
  <div
    className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    onClick={() => onClick(index)}
    {...contentAnimations.card}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    <Image
      src={src}
      alt={`Gallery Image ${index + 1}`}
      width={400}
      height={300}
      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
          <span className="text-gray-900 font-medium">View Image</span>
        </div>
      </div>
    </div>
  </div>
);

export default function BalodResortPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    initAnimations();
  }, []);

  const amenities = useMemo(() => [
    { 
      title: "Lush Green Lawns", 
      description: "Perfect for outdoor events",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      title: "Lake View Rooms", 
      description: "Breathtaking views of Tandula Lake",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      title: "Onsite Dining", 
      description: "Multiple dining options",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      title: "Water Park", 
      description: "Exciting water activities",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    { 
      title: "Banquet Halls", 
      description: "Versatile event spaces",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      title: "Boat Rentals", 
      description: "Explore the lake",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ], []);

  const galleryImages = useMemo(() => [
    "/media/Balod/ELR_Balod 1.jpg",
    "/media/Balod/ELR_Balod 2.jpg",
    "/media/Balod/ELR_Balod 3.jpg",  
    "/media/Balod/ELR_Balod 4.jpg",
    "/media/Balod/ELR_Balod 5.jpg",
    "/media/Balod/ELR_Balod 6.jpg",
    "/media/Balod/ELR_Balod 7.jpg",
    "/media/Balod/ELR_Balod 8.jpg",
    "/media/Balod/ELR_Balod 9.jpg",
    "/media/Balod/ELR_Balod 10.jpg",
    "/media/Balod/ELR_Balod 11.jpg",
    "/media/Balod/ELR_Balod 12.jpg",
  ], []);

  const slides = useMemo(() => 
    galleryImages.map(image => ({ src: image })), 
    [galleryImages]
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection
        image="/media/Balod/ELR_Balod 2.jpg"
        title="The Empyrean Lake Resort"
        subtitle=""
        hideText
        {...sectionAnimations.hero}
      />

      <IntroductionSection
        title="Welcome to Paradise"
        description="Empyrean Lake Resort, located on the serene shores of Tandula Lake, offers an unmatched full-service experience with a variety of activities ranging from lakeside dining to exhilarating outdoor adventures. Enjoy resort amenities such as indoor and outdoor pools, family-friendly activities, live entertainment, and our luxurious spa facilities. Take a peaceful stroll along the lakefront trail, or unwind and watch a film in our cozy lakeside cinema. For personalized recommendations, our expert staff is here to assist you in curating the perfect itinerary. You can also check out our Weekly Activities guide to see the full lineup of exciting events and activities for your stay."
        {...sectionAnimations.propertyOverview}
      />

      {/* Amenities Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" {...sectionAnimations.amenities}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" {...contentAnimations.text}>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Facilities
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Luxury Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience unparalleled comfort with our premium facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} {...getStaggeredDelay(index)}>
                <AmenityCard {...amenity} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12" {...contentAnimations.text}>
            <div className="inline-flex items-center space-x-2 bg-gray-50 px-6 py-3 rounded-full">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-gray-500">*Charges May Apply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" {...sectionAnimations.gallery}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" {...contentAnimations.text}>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the beauty and elegance of The Empyrean Lake Resort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} {...getStaggeredDelay(index)}>
                <GalleryImage
                  src={image}
                  index={index}
                  onClick={(idx) => {
                    setPhotoIndex(idx);
                    setIsOpen(true);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16" {...contentAnimations.text}>
            <button 
              onClick={() => {
                setPhotoIndex(0);
                setIsOpen(true);
              }}
              className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-medium">View All Photos</span>
            </button>
          </div>
        </div>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
          plugins={[Fullscreen, Zoom, Thumbnails]}
          carousel={{ finite: true }}
          animation={{ fade: 300 }}
          controller={{ closeOnBackdropClick: true }}
          styles={{ 
            container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
            slide: { padding: "16px" }
          }}
        />
      </section>
    </main>
  );
}