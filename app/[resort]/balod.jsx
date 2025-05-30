"use client";
import { memo, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { initAnimations, sectionAnimations, contentAnimations, getStaggeredDelay } from "@/animations/animations";


// Dynamically import components with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

// Constants
const VIDEO_URL = "https://youtu.be/oC-B7BmCeFc"; 

const amenityCards = [
  {
    title: "Charming Guest Rooms",
    image: "/media/Balod/ELR_Balod 104.jpg",
    description: "Our resort features 100 newly-Constructed guest rooms with a patio or balcony. If you need more space, choose one of our suites or villas.",
    route: "/properties/bhilai/stay",
  },
  {
    title: "Splashtastic fun for everyone",
    image: "/media/Balod/ELR_Balod 79.jpg",
    description: "Make a splash at our water park, where fun meets adventure! From thrilling slides to relaxing pools, there's excitement for all ages.",
    route: "/properties/bhilai/dining",
  },
  {
    title: "Savor the Flavor, Experience the Moments!",
    image: "/media/Balod/ELR_Balod 49.jpg",
    description: "Indulge in a culinary journey with flavors for every taste. Whether it's a quick bite or a leisurely meal, enjoy great food in a relaxed atmosphere",
    route: "/properties/bhilai/dining",
  },
];

const weddingImages = [
  "/media/Balod/ELR_Balod 2.jpg",
  "/media/Balod/ELR_Balod 3.jpg",
  "/media/Balod/ELR_Balod 92.jpg",
  "/media/Balod/ELR_Balod 94.jpg",
  "/media/Balod/ELR_Balod 96.jpg",
  "/media/Balod/ELR_Balod 95.jpg",
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

export default function BalodPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    initAnimations();
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
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {isMounted && (
            <ReactPlayer
              url={VIDEO_URL}
              width="100%"
              height="100%"
              playing
              loop
              muted
              playsinline
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 0,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    iv_load_policy: 3,
                    fs: 0,
                    disablekb: 1,
                    origin: typeof window !== 'undefined' ? window.location.origin : ''
                  }
                }
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>
        {/* Overlay to hide any remaining YouTube elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
        <div className="absolute top-0 left-0 right-0 h-12 bg-black z-20"></div>
        <div className="absolute inset-0 flex items-end justify-start text-left p-8 md:p-16 z-30">
          <div className="max-w-3xl space-y-6" {...sectionAnimations.hero}>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              The Empyrean Lake Resort
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Where Nature Meets Luxury in Balod
            </p>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" {...sectionAnimations.propertyOverview}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500" {...contentAnimations.image}>
              <Image
                src="/media/Balod/ELR_Balod 25.jpg"
                alt="Empyrean Lake Resort Balod"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-8" {...contentAnimations.text}>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  The Empyrean Lake Resort, Balod
                </h2>
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh - 491226
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold">Phone:</span> +91-9109104001
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Escape to serenity at Empyrean Lake Resort, nestled by the beautiful Tandula Lake in Balod. Enjoy breathtaking lake views, exciting water activities, ATV rides, and comfortable lakeside cottages. Ideal for families, groups, and events with spacious rooms and a large event hall.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Highlights:</h3>
                <ul className="space-y-2 text-lg text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Air-conditioned rooms with modern amenities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Water rides, splash zones, and peaceful boat rides</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>ATV rides and camping sites for adventure lovers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Event hall for weddings and corporate gatherings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Close to local attractions: Sri Ganga Maiya Mandir, Padwan Dev Temple, and more</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>115 km from Raipur Airport, 4.4 km from Balod Railway Station</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Perfect for relaxation or adventure – book your getaway today!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenity Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" {...sectionAnimations.amenities}>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Facilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Luxury
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our world-class amenities designed to make your stay unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {amenityCards.map((card, index) => (
              <div key={card.title} {...getStaggeredDelay(index)}>
                <AmenityCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" {...sectionAnimations.wedding}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500" {...contentAnimations.image}>
              <Image
                src="/media/Balod/ELR_Balod 23.jpg"
                alt="Weddings at Empyrean Resort"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-8" {...contentAnimations.text}>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Weddings at The Empyrean
                </h2>
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh - 491226
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold">Phone:</span> +91-9109104001
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empyrean Lake Resort, nestled by the beautiful Tandula Lake, offers a perfect blend of natural beauty and luxury for your special day. Our versatile event spaces and stunning lake views create an unforgettable backdrop for your wedding celebration.
              </p>
              <Link
                href="/balod/wedding"
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
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" {...sectionAnimations.gallery}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" {...sectionAnimations.gallery}>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the beauty and elegance of The Empyrean Lake Resort through our curated gallery
            </p>
          </div>
          <div className="max-w-7xl mx-auto" {...getStaggeredDelay(2)}>
            <Slider {...sliderSettings}>
              {weddingImages.map((image, index) => (
                <GalleryImage key={index} image={image} index={index} />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Event Section with Background Image */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50" {...sectionAnimations.events}>
        <div className="absolute inset-0">
          <Image
            src="/media/Balod/ELR_Balod 24.jpg"
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
            <div className="max-w-lg bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500" {...contentAnimations.text}>
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