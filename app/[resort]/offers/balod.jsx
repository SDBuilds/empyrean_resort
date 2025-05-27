"use client";
import { useEffect, useRef } from "react";
import BhilaiNavbar from "@/components/navbars/BhilaiNavbar";
import BhilaiFooter from "@/components/footers/BhilaiFooter";
import Image from "next/image";

const offers = [
  {
    title: "Exclusive offers",
    desc: "Don’t miss these Empyrean exclusives.",
    img: "/media/Bhilai/offers/exclusive.jpg",
  },
  {
    title: "Meeting Packages",
    desc: "High-value and hassle-free meeting room access.",
    img: "/media/Bhilai/offers/meeting.jpg",
  },
  {
    title: "Seasonal Experiences",
    desc: "Soak in the spirit of the season, exclusively at Bhilai.",
    img: "/media/Bhilai/offers/seasonal.jpg",
  },
  {
    title: "Special Occasion Packages",
    desc: "Photograph your memory in style.",
    img: "/media/Bhilai/offers/special.jpg",
  },
  {
    title: "Romance Package",
    desc: "Make those perfect getaways just for two.",
    img: "/media/Bhilai/offers/romance.jpg",
  },
  {
    title: "Budget-Friendly",
    desc: "Big on experiences, small on price.",
    img: "/media/Bhilai/offers/budget.jpg",
  },
];

export default function BhilaiOffersPage() {
  // Parallax effect for hero image
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Parallax Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[320px] md:h-[420px] w-full flex items-end justify-center"
        style={{
          backgroundImage: "url('/media/Bhilai/offers/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 pb-8 text-center w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Seasonal Experiences & Values
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Empyrean Hotel and Resort Offers
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Whether you’re looking for a romantic escape, a family adventure, or a productive business retreat, Empyrean Hotel & Resort’s exclusive offers are designed to make your stay unforgettable. Explore our curated packages and seasonal promotions to find the perfect experience for you. Book directly with us for the best rates and added benefits. For group bookings or custom packages, please <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="flex-1 bg-gray-50 pb-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={offer.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 w-full h-48 md:h-auto relative">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.desc}</p>
                <button className="self-start bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}