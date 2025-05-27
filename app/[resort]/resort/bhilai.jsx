"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
        <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up">
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block group">
            {title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300">
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Amenity Card Component
const AmenityCard = ({ title, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl transform transition-transform duration-300 group-hover:scale-105"></div>
    <div className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </div>
  </div>
);

// Gallery Image Component
const GalleryImage = ({ src, index, onClick }) => (
  <div
    className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    onClick={() => onClick(index)}
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

export default function BhilaiResortPage() {
  const amenities = [
    { title: "3 Lawns", description: "Perfect for outdoor events and gatherings" },
    { title: "160 Luxurious Rooms", description: "Spacious accommodations with modern amenities" },
    { title: "Onsite Dining", description: "Multiple dining options with diverse cuisines" },
    { title: "Swimming Pool", description: "Temperature-controlled pool with separate kids section" },
    { title: "Free Parking", description: "Secure parking facility for all guests" },
    { title: "Mini-Refrigerator", description: "In-room refrigerators for your convenience" },
    { title: "Front Desk", description: "24/7 concierge service" },
    { title: "5 Banquet Halls", description: "Versatile spaces for any event" },
    { title: "GYM", description: "State-of-the-art fitness center" },
    { title: "Rooftop Wedding", description: "Breathtaking venue for special occasions" },
    { title: "Elevators", description: "Easy access to all floors" },
    { title: "ARC Restaurant & Bar", description: "Fine dining with premium beverages" },
  ];

  const galleryImages = [
    "/media/Bhilai/bhilai1.jpg",
    "/media/Bhilai/bhilai2.jpg",
    "/media/Bhilai/bhilai3.jpg",
    "/media/Bhilai/bhilai4.jpg",
    "/media/Bhilai/bhilai5.jpg",
    "/media/Bhilai/bhilai6.jpg",
    "/media/Bhilai/bhilai7.jpg",
    "/media/Bhilai/bhilai8.jpg",
    "/media/Bhilai/bhilai9.jpg",
    "/media/Bhilai/bhilai10.jpg",
    "/media/Bhilai/bhilai11.jpg",
    "/media/Bhilai/bhilai12.jpg",
    "/media/Bhilai/bhilai13.jpg",
    "/media/Bhilai/bhilai14.jpg",
    "/media/Bhilai/bhilai15.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection
        image="/media/Bhilai/chouhan2.jpg"
        title="The Empyrean Hotel and Resort"
        subtitle="Where Luxury Meets Comfort in the Heart of Bhilai"
      />

      <IntroductionSection
        title="Welcome to Excellence"
        description="Nestled in the heart of Bhilai, The Empyrean Hotel and Resort redefines the essence of hospitality with its blend of elegance, luxury, and sophistication. Whether you're planning an intimate wedding, a grand concert, a lively party, or a professional corporate function, our versatile venue offers the perfect setting for every occasion. With over 160 luxurious rooms and a host of extensive amenities, we provide the highest level of comfort and service. Every moment at The Empyrean is meticulously curated to exceed expectations, ensuring your event is nothing short of extraordinary. Experience a seamless blend of exceptional service and opulence, all in the heart of Chhattisgarh."
      />

      {/* Amenities Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Facilities
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Luxury Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience unparalleled comfort with our premium facilities designed for your ultimate satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <AmenityCard key={index} {...amenity} />
            ))}
          </div>

          <div className="text-center mt-12">
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
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the beauty and elegance of The Empyrean Hotel and Resort through our curated gallery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image}
                index={index}
                onClick={(idx) => {
                  setPhotoIndex(idx);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>

          <div className="text-center mt-16">
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
          slides={galleryImages.map(image => ({ src: image }))}
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