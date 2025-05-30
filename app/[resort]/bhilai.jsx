"use client";
import { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import components with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const ClientOnlyBhilai = dynamic(() => import("@/components/shared/ClientOnlyBhilai"), { ssr: false });


const amenityCards = [
  {
    title: "Charming Guest Rooms",
    image: "/media/Bhilai/bhilai-small-3.jpg",
    description: "Our resort features 100 newly-Constructed guest rooms with a patio or balcony. If you need more space, choose one of our suites or villas.",
    route: "/properties/bhilai/stay",
  },
  {
    title: "Splashtastic fun for everyone",
    image: "/media/Bhilai/bhilai-small-2.jpg",
    description: "Make a splash at our water park, where fun meets adventure! From thrilling slides to relaxing pools, there's excitement for all ages.",
    route: "/properties/bhilai/dining",
  },
  {
    title: "Savor the Flavor, Experience the Moments!",
    image: "/media/Bhilai/bhilai9.jpg",
    description: "Indulge in a culinary journey with flavors for every taste. Whether it's a quick bite or a leisurely meal, enjoy great food in a relaxed atmosphere",
    route: "/properties/bhilai/dining",
  },
];

const weddingImages = [
  "/media/Bhilai/bhilai1.jpg",
  "/media/Bhilai/bhilai8.jpg",
  "/media/Bhilai/bhilai9.jpg",
  "/media/Bhilai/bhilai11.jpg",
];

// Memoized components for better performance
const AmenityCard = memo(({ card }) => (
  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
    <Image 
      src={card.image} 
      alt={card.title} 
      fill 
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      loading="lazy"
      className="object-cover transition-transform duration-700 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
      <h3 className="text-2xl font-bold text-white mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
        {card.title}
      </h3>
      <p className="text-gray-200 text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
        {card.description}
      </p>
      <Link
        href={card.route}
        className="mt-4 inline-flex items-center text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"
      >
        <span className="relative">
          Explore
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </span>
        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </div>
  </div>
));

AmenityCard.displayName = 'AmenityCard';

const GalleryImage = memo(({ image, index }) => (
  <div className="px-4">
    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
      <Image
        src={image}
        alt={`Gallery Image ${index + 1}`}
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>
  </div>
));

GalleryImage.displayName = 'GalleryImage';

const SectionTitle = memo(({ subtitle, title, description }) => (
  <div className="text-center mb-20">
    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      {title}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      {description}
    </p>
  </div>
));

SectionTitle.displayName = 'SectionTitle';

const PropertyImage = memo(({ src, alt, className = "" }) => (
  <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority
    />
  </div>
));

PropertyImage.displayName = 'PropertyImage';

export default function BhilaiPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <main className="min-h-screen">
      {/* Video Hero Section */}
      <section className="relative h-screen">
        <ClientOnlyBhilai />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-start text-left p-8 md:p-16">
          <div className="max-w-3xl space-y-6" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              The Empyrean Hotel & Resort
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Where Luxury Meets Comfort in the Heart of Bhilai
            </p>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <PropertyImage
              src="/media/Bhilai/bhilai-small-1.jpg"
              alt="Empyrean Resort Bhilai"
            />
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  The Empyrean Hotel & Resort, Bhilai
                </h2>
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                NH-6, Durg Bypass, Pushpak Nagar, Near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold">Phone:</span> 7566660048
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Chouhan Empyrean Hotel and Resorts, nestled in Bhilai, redefines hospitality with elegance and opulence. Perfect for weddings, concerts, parties, and corporate functions, our venue features 160+ luxurious rooms and extensive amenities. Experience unparalleled comfort and exceptional service, where every moment is curated to exceed expectations in the heart of Chhattisgarh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenity Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">    
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Facilities"
            title="Experience Luxury"
            description="Discover our world-class amenities designed to make your stay unforgettable"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {amenityCards.map((card) => (
              <AmenityCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <PropertyImage
              src="/media/Bhilai/bhilai10.jpg"
              alt="Weddings at Empyrean Resort"
            />
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Weddings at The Empyrean
                </h2>
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                NH-6, Durg Bypass, Pushpak Nagar, Near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold">Phone:</span> 7566660048
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empyrean Hotel and Resorts, nestled in Bhilai, redefines hospitality with elegance and opulence. Perfect for weddings, concerts, parties, and corporate functions, our venue features 160+ luxurious rooms and extensive amenities.
              </p>
              <Link
                href="bhilai/wedding"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Explore Weddings</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Visual Journey"
            title="Photo Gallery"
            description="Explore the beauty and elegance of The Empyrean Hotel and Resort through our curated gallery"
          />
          <div className="max-w-7xl mx-auto">
            <Slider {...sliderSettings}>
              {weddingImages.map((image, index) => (
                <GalleryImage key={index} image={image} index={index} />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Event Section with Background Image */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0">
          <Image
            src="/media/Bhilai/bhilai-resort-full.JPG"
            alt="Set Up the Perfect Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="hidden lg:block"></div>
            <div className="max-w-lg bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Set Up the Perfect Event</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Make your special occasions unforgettable at our resort! From birthdays and kitty parties to weddings and family functions, our versatile event spaces offer the perfect setting. With modern amenities, personalized service, and a stunning location, we ensure your event is a memorable success, whether it's a small gathering or a grand celebration.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Events & Meetings</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}