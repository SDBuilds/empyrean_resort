"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { BedDouble, Thermometer, Coffee, Droplets, Refrigerator, Users, Sun, Gift, Home, Square } from "lucide-react";
import BhilaiNavbar from "@/components/navbars/BhilaiNavbar";
import BhilaiFooter from "@/components/footers/BhilaiFooter";

const collapsibleItems = [
  {
    title: "Reservation Policies",
    content: "Our reservation policies ensure a seamless booking experience. Please review our cancellation and modification policies before confirming your stay.",
  },
  {
    title: "Resort Fee",
    content: "A nominal resort fee is charged to cover amenities such as Wi-Fi, parking, and access to recreational facilities.",
  },
  {
    title: "Smoke Free Guestrooms",
    content: "All our guestrooms are smoke-free to ensure a clean and healthy environment for all our guests.",
  },
  {
    title: "Pet Free Resort",
    content: "For the comfort of all our guests, pets are not allowed in the resort premises.",
  },
  {
    title: "Rate Discounts",
    content: "We offer exclusive discounts for early bookings, extended stays, and group reservations. Contact us for more details.",
  },
];

export default function BhilaiStayPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const amenitiesLeft = [
    "Mineral Water",
    "Air Conditioning",
    "Bathroom",
    "Hot & Cold Water",
    "Mini-Refrigerator",
  ];

  const amenitiesRight = [
    "Balcony",
    "Family Room",
    "Personal Care Kit",
    "Coffee Kit",
    "Wide Windows",
  ];

  const roomBlocks = [
    {
      title: "A-BLOCK",
      image: "/assets/bhilai-small-3.jpg", 
      description:
        "These bright, lakehouse-inspired lakeside rooms are newly built at 160 sq.ft (15 sq.mt). Enjoy breathtaking views of the lake from your private patio or balcony.",
      buttonText: "BOOK NOW",
    },
    {
      title: "B-BLOCK",
      image: "/assets/bhilai2.jpg", 
      description:
        "These bright, lakehouse-inspired lakeside rooms are newly built at 160 sq.ft (15 sq.mt). Enjoy breathtaking views of the lake from your private patio or balcony.",
      buttonText: "BOOK NOW",
    },
    {
      title: "C-BLOCK",
      image: "/assets/bhilai5.jpg", 
      description:
        "4 Share Luxurious room these bright rooms are newly built and outfitted with 2 King beds, luggage rack and wardrobe.",
      buttonText: "BOOK NOW",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <BhilaiNavbar />
      {/* Hero Image Section */}
      <section className="relative h-[80vh]">
        <Image
          src="/assets/chouhan2.jpg"
          alt="The Empyrean Hotel and Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              The Empyrean Hotel and Resort
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-delay">
              Experience luxury, elegance, and sophistication in the heart of Bhilai
            </p>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Luxury Accommodations
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rooms & Suites
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Bhilai, The Empyrean Hotel and Resort offers spacious rooms and
              suites designed for ultimate comfort. With modern, nature-inspired decor, each room is
              equipped with plush king or queen-sized beds and a variety of amenities, ensuring a
              relaxing and enjoyable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {roomBlocks.map((block, index) => (
              <div key={index} className="group">
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{block.title}</h3>
                  <p className="text-gray-600 mb-6">{block.description}</p>
                  <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-1">
                    <span>{block.buttonText}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Room Amenities Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Room Features
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              In-Room Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every detail has been carefully considered to ensure your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Droplets className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Mineral Water</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Thermometer className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Air Conditioning</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Home className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Bathroom</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Sun className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Hot & Cold Water</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Refrigerator className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Mini-Refrigerator</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Square className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Balcony</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Users className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Family Room</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Gift className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Personal Care Kit</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Coffee className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Coffee Kit</span>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <BedDouble className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <span className="text-gray-800 font-medium">Wide Windows</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gray-50 px-6 py-3 rounded-full">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-sm text-gray-500">*Charges May Apply</p>
            </div>
          </div>

          {/* Room Images Gallery */}
          <div className="mt-20">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* Collapsible Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Important Information
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about your stay with us
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {collapsibleItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <BhilaiFooter />
    </main>
  );
}

function GalleryGrid() {
  const images = [
    "/assets/bhilai1.jpg",
    "/assets/bhilai2.jpg",
    "/assets/bhilai3.jpg",
    "/assets/bhilai4.jpg",
    "/assets/bhilai5.jpg",
    "/assets/bhilai6.jpg",
    "/assets/bhilai7.jpg",
    "/assets/bhilai8.jpg",
    "/assets/bhilai9.jpg",
    "/assets/bhilai10.jpg",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={src}
            className="relative cursor-pointer rounded-lg overflow-hidden group"
            onClick={() => {
              setPhotoIndex(idx);
              setIsOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`Room ${idx + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium"></span>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}