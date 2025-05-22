"use client";
import Image from "next/image";
import { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import BhilaiNavbar from "@/components/navbars/BhilaiNavbar";
import BhilaiFooter from "@/components/footers/BhilaiFooter";


export default function BhilaiResortPage() {
  const amenities = [
    "3 Lawns",
    "160 Luxurious Rooms",
    "Onsite Dining",
    "Swimming Pool",
    "Free Parking",
    "Mini-Refrigerator in Guest Rooms",
    "Front Desk",
    "5 Banquet Halls",
    "GYM",
    "Rooftop Wedding",
    "Elevators",
    "ARC Restaurant & Bar",
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
      <BhilaiNavbar />
      {/* Hero Image Section */}
      <section className="relative h-[70vh]">
        <Image
          src="/media/Bhilai/chouhan2.jpg"
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 relative inline-block">
                The Empyrean Hotel and Resort
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-lg text-gray-600 leading-relaxed">
                Nestled in the heart of Bhilai, redefines the essence of hospitality with its blend of elegance, luxury, and sophistication. Whether you're planning an intimate wedding, a grand concert, a lively party, or a professional corporate function, our versatile venue offers the perfect setting for every occasion. With over 160 luxurious rooms and a host of extensive amenities, we provide the highest level of comfort and service. Every moment at Chouhan Empyrean is meticulously curated to exceed expectations, ensuring your event is nothing short of extraordinary. Experience a seamless blend of exceptional service and opulence, all in the heart of Chhattisgarh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
        Our Facilities
      </span>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Luxury Amenities
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Experience unparalleled comfort with our premium facilities
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {amenities.map((amenity, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform transition-transform duration-300 group-hover:scale-105"></div>
          <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {amenity}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Available for all guests
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-16">
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the beauty and elegance of The Empyrean Hotel and Resort through our curated gallery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => {
                setPhotoIndex(0);
                setIsOpen(true);
              }}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>View All Photos</span>
            </button>
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
            reactModalStyle={{ overlay: { zIndex: 1000 } }}
          />
        )}
      </section>
      <BhilaiFooter />
    </main>
  );
}