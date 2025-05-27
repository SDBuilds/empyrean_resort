"use client";
import Image from "next/image";
import { useState } from "react";

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

const amenities = [
  {
    name: "Mineral Water",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "Air Conditioning",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: "Bathroom",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Hot & Cold Water",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "Mini-Refrigerator",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "Balcony",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Family Room",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "Personal Care Kit",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Coffee Kit",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    name: "Wide Windows",
    icon: (
      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function BalodStayPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const roomBlocks = [
    {
      title: "A-BLOCK",
      image: "/media/Bhilai/bhilai-small-3.jpg", 
      description:
        "These bright, lakehouse-inspired lakeside rooms are newly built at 160 sq.ft (15 sq.mt). Enjoy breathtaking views of the lake from your private patio or balcony.",
      buttonText: "BOOK NOW",
    },
    {
      title: "C-BLOCK",
      image: "/media/Bhilai/bhilai5.jpg", 
      description:
        "4 Share Luxurious room these bright rooms are newly built and outfitted with 2 King beds, luggage rack and wardrobe.",
      buttonText: "BOOK NOW",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <section className="relative h-[70vh]">
        <Image
          src="/media/Bhilai/chouhan2.jpg" 
          alt="The Empyrean Hotel and Resort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Semi-transparent overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              The Empyrean Hotel and Resort
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience luxury, elegance, and sophistication in the heart of Bhilai.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Rooms & Suites at The Empyrean Hotel & Resort
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Located in the heart of Bhilai, The Empyrean Hotel and Resort offers spacious rooms and
            suites designed for ultimate comfort. With modern, nature-inspired decor, each room is
            equipped with plush king or queen-sized beds and a variety of amenities, ensuring a
            relaxing and enjoyable stay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {roomBlocks.map((block, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-6">{block.title}</h3>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline mt-2 inline-block"
                >
                  Photos
                </a>
                <p className="text-lg text-gray-600 mt-4">{block.description}</p>
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  {block.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Room Amenities Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              In-Room Amenities
            </h2>
            <p className="text-lg text-gray-600">
              Experience comfort and luxury with our thoughtfully curated amenities designed to enhance your stay
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-12 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3 text-blue-600 group-hover:scale-110 transition-transform duration-200">
                    {amenity.icon}
                  </div>
                  <p className="text-base text-gray-700 font-medium">{amenity.name}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mb-12">
            *Additional charges may apply for certain amenities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={`/assets/rooms/room${num}.jpg`}
                  alt={`Room ${num}`}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold">Room View {num}</h4>
                    <p className="text-sm text-gray-200">Click to enlarge</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collapsible Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Additional Information
          </h2>
          <div className="space-y-4">
            {collapsibleItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-gray-500">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-600">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}