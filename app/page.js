"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import MainNavbar from "@/components/navbars/MainNavbar";
import MainFooter from "@/components/footers/MainFooter";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* Full-Screen Resort Sections */}
      <MainNavbar />
      <section className="bg-gradient-to-b from-gray-50 to-white">
        {/* Balod Resort */}
        <div
          className="relative group overflow-hidden"
          data-aos="fade-up"
        >
          <Link href="/properties/balod" className="block">
            <Image
              src="/media/Balod/ELR_Balod 22.jpg"
              alt="Full view of Empyrean Lake Resort in Balod"
              width={1920}
              height={1080}
              className="w-full h-[90vh] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* Enhanced Text Container with Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-12 left-12 max-w-2xl">
                <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Empyrean Lake Resort, Balod</h2>
                <p className="text-xl text-gray-200 mb-6">A peaceful escape near Tandula Dam.</p>
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Explore Resort
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Balod Resort - Smaller Images */}
        <div
          className="container mx-auto px-4 py-16"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience Luxury Living</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                caption: "Luxury Rooms",
                description: "Experience the ultimate comfort in our luxurious rooms.",
                image: "/media/Balod/ELR_Balod 103.jpg",
                link: "/properties/balod",
              },
              {
                caption: "Splashtastic fun for everyone",
                description: "Dive into fun with our world-class swimming pools.",
                image: "/media/Balod/ELR_Balod 79.jpg",
                link: "/properties/balod",
              },
              {
                caption: "Savour the flavor, Experience the moments",
                description: "Indulge in exquisite dining experiences.",
                image: "/media/Balod/ELR_Balod 49.jpg",
                link: "/properties/balod",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={`Bhilai Resort - ${item.caption}`}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.caption}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bhilai Resort */}
        <div
          className="relative group overflow-hidden"
          data-aos="fade-up"
        >
          <Link href="/properties/bhilai" className="block">
            <Image
              src="/media/Bhilai/bhilai-resort-full.JPG"
              alt="Full view of Empyrean Resort in Bhilai"
              width={1920}
              height={1080}
              className="w-full h-[90vh] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* Enhanced Text Container with Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-12 left-12 max-w-2xl">
                <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">The Empyrean Hotel and Resort, Bhilai</h2>
                <p className="text-xl text-gray-200 mb-4">NH-6, Durg Bypass, Pushpak Nagar, Near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Chouhan Empyrean Hotel and Resorts, nestled in Bhilai, redefines hospitality with elegance and opulence. Perfect for weddings, concerts, parties, and corporate functions, our venue features 160+ luxurious rooms and extensive amenities.
                </p>
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Discover More
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Bhilai Resort - Smaller Images */}
        <div
          className="container mx-auto px-4 py-16"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unforgettable Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                caption: "Luxury Rooms",
                description: "Experience the ultimate comfort in our luxurious rooms.",
                image: "/media/Bhilai/bhilai-small-1.jpg",
                link: "/properties/bhilai",
              },
              {
                caption: "Splashtastic fun for everyone",
                description: "Dive into fun with our world-class swimming pools.",
                image: "/media/Bhilai/bhilai-small-2.jpg",
                link: "/properties/bhilai",
              },
              {
                caption: "Savour the flavor, Experience the moments",
                description: "Indulge in exquisite dining experiences.",
                image: "/media/Bhilai/bhilai-small-3.jpg",
                link: "/properties/bhilai",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={`Bhilai Resort - ${item.caption}`}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.caption}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
}