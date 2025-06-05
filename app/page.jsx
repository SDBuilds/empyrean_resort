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
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { heroSlides, resorts, projects } from "@/constants/resortData";

const HeroSection = ({ onExploreClick }) => (
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
              <div className="absolute top-8 left-8 bg-black/60 px-6 py-3 rounded-xl shadow text-white text-xl md:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-fadeIn">
                {slide.label}
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
      <Button onClick={onExploreClick} size="lg">
        Explore Our Resorts
      </Button>
    </div>
  </section>
);

const ResortSection = ({ resortCardsRef }) => (
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
        <Card
          key={resort.name}
          image={resort.image}
          title={resort.name}
          description={resort.description}
          link={resort.link}
          index={idx}
          {...getStaggeredDelay(idx)}
        />
      ))}
    </div>
  </section>
);

const ProjectsSection = () => (
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
        <Card
          key={project.caption}
          image={project.image}
          title={project.caption}
          description={project.description}
          index={idx}
          {...getStaggeredDelay(idx)}
        />
      ))}
    </div>
  </section>
);

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
      <HeroSection onExploreClick={handleScrollToResorts} />
      <ResortSection resortCardsRef={resortCardsRef} />
      <ProjectsSection />
    </main>
  );
}
