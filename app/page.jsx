"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

// Hero Section Component
const HeroSection = ({ resort, image, title, address, phone, description, buttonText }) => (
  <div className="relative group overflow-hidden" data-aos="fade-up">
    <Link href={`/${resort}`} className="block">
      <div className="relative h-[70vh] md:h-screen">
        <Image
          src={image}
          alt={`Empyrean ${resort === 'balod' ? 'Lake Resort' : 'Hotel and Resort'} in ${resort.charAt(0).toUpperCase() + resort.slice(1)}`}
          fill
          priority
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-16 max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6 bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {title}
              </h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">{address}</p>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">Phone: {phone}</p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-none">
                {description}
              </p>
              <div className="pt-2 md:pt-4">
                <span className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base md:text-lg font-medium group">
                  {buttonText}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

// Highlight Card Component
const HighlightCard = ({ image, caption, description, link, index }) => (
  <Link
    href={link}
    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div className="relative h-96">
      <Image
        src={image}
        alt={caption}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide leading-tight">
            {caption}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="inline-flex items-center text-white text-sm font-medium">
            Learn More
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </Link>
);

// Resort Highlights Section Component
const ResortHighlights = ({ resortName, items }) => (
  <div className="container mx-auto px-4 py-24" data-aos="fade-up">
    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
        {resortName === "balod" ? "Luxury Experience" : "Premium Hospitality"}
      </span>
      <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-snug">
        {resortName === "balod" ? "Experience Luxury Living" : "Unforgettable Experiences"}
      </h3>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {resortName === "balod" 
          ? "Discover the perfect blend of comfort and adventure at our lakeside paradise."
          : "Experience world-class hospitality in the heart of Chhattisgarh."}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <HighlightCard key={index} {...item} index={index} />
      ))}
    </div>
  </div>
);

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 50,
    });
  }, []);

  const balodData = {
    resort: "balod",
    image: "/media/Balod/ELR_Balod 22.jpg",
    title: "Empyrean Lake Resort, Balod",
    address: "Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh - 491226",
    phone: "+91-9109104001",
    description: "Escape to serenity at Empyrean Lake Resort, nestled by the beautiful Tandula Lake in Balod. Enjoy breathtaking lake views, exciting water activities, ATV rides, and comfortable lakeside cottages. Ideal for families, groups, and events with spacious rooms and a large event hall. Perfect for relaxation or adventure – book your getaway today!",
    buttonText: "Explore Resort",
    highlights: [
      {
        caption: "Luxury Rooms",
        description: "Experience the ultimate comfort in our luxurious rooms with stunning lake views and modern amenities.",
        image: "/media/Balod/ELR_Balod 103.jpg",
        link: "/balod",
      },
      {
        caption: "Splashtastic Fun",
        description: "Dive into excitement with our world-class swimming pools and water activities for all ages.",
        image: "/media/Balod/ELR_Balod 79.jpg",
        link: "/balod",
      },
      {
        caption: "Culinary Delights",
        description: "Savor exquisite flavors at our restaurants, offering a perfect blend of local and international cuisine.",
        image: "/media/Balod/ELR_Balod 49.jpg",
        link: "/balod",
      },
    ],
  };

  const bhilaiData = {
    resort: "bhilai",
    image: "/media/Bhilai/bhilai-resort-full.JPG",
    title: "The Empyrean Hotel and Resort, Bhilai",
    address: "NH-6, Durg Bypass, Pushpak Nagar, Near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020",
    phone: "+91-7566660048",
    description: "Chouhan Empyrean Hotel and Resorts, nestled in Bhilai, redefines hospitality with elegance and opulence. Perfect for weddings, concerts, parties, and corporate functions, our venue features 160+ of luxurious rooms and extensive amenities. Experience unparalleled comfort and exceptional service, where every moment is curated to exceed expectations in the heart of Chhattisgarh.",
    buttonText: "Discover More",
    highlights: [
      {
        caption: "Luxury Accommodations",
        description: "Indulge in the comfort of our premium rooms and suites, designed for the perfect stay.",
        image: "/media/Bhilai/bhilai-small-1.jpg",
        link: "/bhilai",
      },
      {
        caption: "Aquatic Paradise",
        description: "Experience our state-of-the-art swimming pools and water features for endless fun.",
        image: "/media/Bhilai/bhilai-small-2.jpg",
        link: "/bhilai",
      },
      {
        caption: "Gastronomic Excellence",
        description: "Delight in our diverse culinary offerings, from local specialties to international cuisine.",
        image: "/media/Bhilai/bhilai-small-3.jpg",
        link: "/bhilai",
      },
    ],
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <HeroSection {...balodData} />
      <ResortHighlights resortName="balod" items={balodData.highlights} />
      <HeroSection {...bhilaiData} />
      <ResortHighlights resortName="bhilai" items={bhilaiData.highlights} />
    </main>
  );
}
