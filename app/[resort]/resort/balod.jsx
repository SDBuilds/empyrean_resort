"use client";
import Image from "next/image";
import { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import BalodNavbar from "@/components/navbars/BalodNavbar";
import BalodFooter from "@/components/footers/BalodFooter";

export default function BaldResortPage() {
  const amenities = [
    "Lush green lawns",
    "100+ lake view rooms",
    "Onsite Dining",
    "Pure Veg Restaurant",
    "Water Park",
    "Free Parking",
    "Free Wi-Fi",
    "5 Banquet Halls",
    "Conference Rooms",
    "Banquet Hall",
    "Onsite Boat Rentals",
    "Jet Skiing",
    "Speed Boat Rides",
    "Bonfire",
    "ATV Rides",
    "Bowling Machine(Cricket)"
  ];

  const galleryImages = [
    "/assets/ELR_Balod 1.jpg",
    "/assets/ELR_Balod 2.jpg",
    "/assets/ELR_Balod 3.jpg",  
    "/assets/ELR_Balod 4.jpg",
    "/assets/ELR_Balod 5.jpg",
    "/assets/ELR_Balod 6.jpg",
    "/assets/ELR_Balod 7.jpg",
    "/assets/ELR_Balod 8.jpg",
    "/assets/ELR_Balod 9.jpg",
    "/assets/ELR_Balod 10.jpg",
    "/assets/ELR_Balod 11.jpg",
    "/assets/ELR_Balod 12.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <main className="min-h-screen bg-gray-50">
      <BalodNavbar />
      {/* Hero Image Section */}
      <section className="relative h-[70vh]">
        <Image
          src="/assets/ELR_Balod 2.jpg"
          alt="The Empyrean Hotel and Resort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            
          </div>
        </div>
      </section>

      {/* Property Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Empyrean Lake Resort
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empyrean Lake Resort, located on the serene shores of Crystal Waters Lake, offers an unmatched full-service experience with a variety of activities ranging from lakeside dining to exhilarating outdoor adventures. Enjoy resort amenities such as indoor and outdoor pools, family-friendly activities, live entertainment, and our luxurious Empyrean Spa.
            Take a peaceful stroll along the lakefront trail, or unwind and watch a film in our cozy lakeside cinema. For personalized recommendations, our expert staff is here to assist you in curating the perfect itinerary. You can also check out our Weekly Activities guide to see the full lineup of exciting events and activities for your stay.
          </p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Hotel & Resort Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 text-center">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <span className="block text-lg font-medium">{amenity}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-8">
            *Charges May Apply
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Explore the beauty and elegance of The Empyrean Hotel and Resort through our curated gallery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={galleryImages[photoIndex]}
            nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
            prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % galleryImages.length)
            }
          />
        )}
      </section>
      <BalodFooter />
    </main>
  );
}