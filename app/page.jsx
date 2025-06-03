"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import Image from "next/image";
import Link from "next/link";
import { initAnimations, sectionAnimations, getStaggeredDelay } from "@/animations/animations";

// HighlightCard reused from whats-new page
const HighlightCard = ({ image, caption, description, link, index }) => (
  <div
    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
    {...getStaggeredDelay(index)}
  >
    <div className="relative h-80">
      <Image
        src={image}
        alt={caption}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white mb-2 tracking-wide leading-tight">
            {caption}
          </h3>
          <p className="text-gray-200 text-xs leading-relaxed mb-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const heroSlides = [
  {
    image: "/media/Balod/ELR_Balod 22.jpg",
    link: "/balod",
    alt: "Empyrean Lake Resort, Balod",
    label: "Empyrean Lake Resort, Balod",
  },
  {
    image: "/media/Bhilai/bhilai-resort-full.JPG",
    link: "/bhilai",
    alt: "Empyrean Hotel and Resort, Bhilai",
    label: "Empyrean Hotel and Resort, Bhilai",
  },
];

const resorts = [
  {
    name: "Empyrean Lake Resort, Balod",
    image: "/media/Balod/ELR_Balod 22.jpg",
    description: "A lakeside paradise offering luxury, adventure, and tranquility in Balod.",
    link: "/balod",
  },
  {
    name: "Empyrean Hotel and Resort, Bhilai",
    image: "/media/Bhilai/bhilai-resort-full.JPG",
    description: "Premium hospitality and world-class amenities in the heart of Bhilai.",
    link: "/bhilai",
  },
];

const projects = [
  {
    caption: "Hotel Empyrean, Tatibandh (Opening Shortly)",
    image: "/media/Common/tatibandh.png",
    description: "A new luxury destination opening soon in Tatibandh.",
  },
  {
    caption: "Hotel Empyrean, Tumbidod",
    image: "/media/Common/tumdibod.png",
    description: "Experience comfort and elegance at our upcoming Tumbidod property.",
  },
  {
    caption: "Hotel Palladio, Bhilai",
    image: "/media/Common/paladio.png",
    description: "A new landmark of hospitality in Bhilai.",
  },
  {
    caption: "Sky Park",
    image: "/media/Common/skypark.png",
    description: "An innovative project redefining leisure and recreation.",
  },
];

export default function HomePage() {
  const resortCardsRef = useRef(null);

  useEffect(() => {
    initAnimations();
  }, []);

  const handleScrollToResorts = () => {
    resortCardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Slideshow */}
      <section className="relative w-full h-[70vh] md:h-[90vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade, EffectCreative]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={slide.image}>
              <Link href={slide.link} className="block w-full h-full">
                <div className="relative w-full h-[70vh] md:h-[90vh] group">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  {/* Resort label at top left with fade-in */}
                  <div className="absolute top-8 left-8 bg-black/60 px-6 py-3 rounded-xl shadow text-white text-xl md:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-fadeIn">
                    {slide.label}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Explore Button below slider */}
      <div className="flex justify-center mt-[-2.5rem] md:mt-[-3.5rem] mb-12 z-10 relative">
        <button
          onClick={handleScrollToResorts}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 border-4 border-white"
        >
          Explore Our Resorts
        </button>
      </div>

      {/* Resort Cards */}
      <section ref={resortCardsRef} className="container mx-auto px-4 py-24" {...sectionAnimations.amenities}>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Resorts
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-snug">
            Discover Your Perfect Stay
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our exceptional properties, each offering a unique blend of luxury, comfort, and unforgettable experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {resorts.map((resort, idx) => (
            <div
              key={resort.name}
              className="rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 group relative aspect-[16/9]"
              {...getStaggeredDelay(idx)}
            >
              <Link href={resort.link} className="block w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={resort.image}
                    alt={resort.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500" />
                  {/* Resort info overlay, hidden by default, appears on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end items-start p-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{resort.name}</h3>
                    <p className="text-gray-200 text-base mb-4 drop-shadow-lg">{resort.description}</p>
                    <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* What's New / Projects Section */}
      <section className="max-w-5xl mx-auto px-4 pb-24" {...sectionAnimations.gallery}>
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            What's New
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-snug">
            Our Upcoming Projects
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with our latest developments and upcoming destinations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <HighlightCard key={project.caption} {...project} index={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}
