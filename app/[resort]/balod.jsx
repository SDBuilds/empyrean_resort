"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientOnlyBalod from "@/components/shared/ClientOnlyBalod";
import BalodNavbar from "@/components/navbars/BalodNavbar";
import BalodFooter from "@/components/footers/BalodFooter"; 

// Dynamically import Slider with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

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

export default function BalodPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

    <main className="min-h-screen">
      <BalodNavbar />
      {/* Video Hero Section */}
      <section className="relative h-screen">
        <ClientOnlyBalod />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end justify-start text-left p-8">
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/media/Balod/ELR_Balod 25.jpg"
                alt="Empyrean Lake Resort Balod"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                The Empyrean Lake Resort, Balod
              </h2>
              <p className="text-lg text-gray-600">
                Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh - 491226 || <b>Phone</b>: +91-9109104001
              </p>
              <p className="text-lg text-gray-600">
                Escape to serenity at Empyrean Lake Resort, nestled by the beautiful Tandula Lake in Balod. Enjoy breathtaking lake views, exciting water activities, ATV rides, and comfortable lakeside cottages. Ideal for families, groups, and events with spacious rooms and a large event hall.
              </p>
              <div className="text-lg text-gray-600 space-y-2">
                <h3 className="text-2xl font-semibold text-gray-800">Highlights:</h3>
                <ul className="list-disc list-inside">
                  <li>Air-conditioned rooms with modern amenities</li>
                  <li>Water rides, splash zones, and peaceful boat rides</li>
                  <li>ATV rides and camping sites for adventure lovers</li>
                  <li>Event hall for weddings and corporate gatherings</li>
                  <li>Close to local attractions: Sri Ganga Maiya Mandir, Padwan Dev Temple, and more</li>
                  <li>115 km from Raipur Airport, 4.4 km from Balod Railway Station</li>
                  <li>Perfect for relaxation or adventure – book your getaway today!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Amenity Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Experience Luxury</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {amenityCards.map((card) => (
              <div
                key={card.title}
                className="group relative h-[450px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-200 mb-6 line-clamp-3 text-lg">{card.description}</p>
                  <Link
                    href={card.route}
                    className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors duration-300"
                  >
                    Explore <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/media/Balod/ELR_Balod 23.jpg"
                alt="Weddings at Empyrean Resort"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Weddings at The Empyrean Hotel and Resort</h2>
              <p className="text-lg text-gray-600">
                NH-6, Durg Bypass, Pushpak Nagar, Near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020 <br />
                <b>Phone:</b> 7566660048
              </p>
              <p className="text-lg text-gray-600">
                Empyrean Hotel and Resorts, nestled in Bhilai, redefines hospitality with elegance and opulence. Perfect for weddings, concerts, parties, and corporate functions, our venue features 160+ luxurious rooms and extensive amenities.
              </p>
              <Link
                href="/properties/bhilai/wedding"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Explore Weddings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Slider {...sliderSettings}>
            {weddingImages.map((image, index) => (
              <div key={index} className="relative h-[500px]">
                <Image
                  src={image}
                  alt={`Wedding Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

            {/* Event Section with Background Image */}
            <section className="relative py-20 bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/media/Balod/ELR_Balod 24.jpg" // Replace with your event image path
            alt="Set Up the Perfect Event"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Semi-transparent overlay */}
        </div>

        {/* Foreground Content */}
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Empty Space for Alignment */}
            <div className="hidden lg:block"></div>

            {/* Foreground Content */}
            <div className="max-w-lg bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg ml-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Set Up the Perfect Event</h2>
              <p className="text-lg text-gray-600 mb-6">
                Make your special occasions unforgettable at our resort! From birthdays and kitty parties to weddings and family functions, our versatile event spaces offer the perfect setting. With modern amenities, personalized service, and a stunning location, we ensure your event is a memorable success, whether it's a small gathering or a grand celebration.
              </p>
              <Link
                href="/events"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Events & Meetings
              </Link>
            </div>
          </div>
        </div>
      </section>
      <BalodFooter />
    </main>
  );
}