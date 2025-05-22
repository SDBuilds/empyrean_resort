"use client";
import Image from "next/image";
import { useState } from "react";
import BalodNavbar from "@/components/navbars/BalodNavbar";
import BalodFooter from "@/components/footers/BalodFooter";

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

export default function BalodStayPage() {
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
      <BalodNavbar />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            In-Room Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              {amenitiesLeft.map((amenity, index) => (
                <p key={index} className="text-lg text-gray-700">
                  {amenity}
                </p>
              ))}
            </div>
            <div>
              {amenitiesRight.map((amenity, index) => (
                <p key={index} className="text-lg text-gray-700">
                  {amenity}
                </p>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-8">
            *Charges May Apply
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <Image
              src="/assets/rooms/room1.jpg" // Replace with your image path
              alt="Room 1"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/rooms/room2.jpg" // Replace with your image path
              alt="Room 2"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/rooms/room3.jpg" // Replace with your image path
              alt="Room 3"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/rooms/room4.jpg" // Replace with your image path
              alt="Room 4"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/rooms/room5.jpg" // Replace with your image path
              alt="Room 5"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/rooms/room6.jpg" // Replace with your image path
              alt="Room 6"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
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
      <BalodFooter />
    </main>
  );
}