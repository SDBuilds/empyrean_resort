"use client";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { RESORT_DATA } from '@/constants/resortData';
import { HeroSection, IntroductionSection, AmenityCard, GalleryImage } from '@/components/shared/ResortComponents';
import { initAnimations, sectionAnimations, contentAnimations, getStaggeredDelay } from "@/animations/animations";

export default function BhilaiResort() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const resortData = RESORT_DATA.bhilai;

  useEffect(() => {
    setIsMounted(true);
    initAnimations();
  }, []);

  const slides = useMemo(() => 
    resortData.galleryImages.map((src) => ({
      src,
      alt: "Resort Image"
    })), [resortData.galleryImages]
  );

  return (
    <main className="min-h-screen bg-white">
      <HeroSection 
        image={resortData.heroImage}
        title={resortData.title}
        subtitle={resortData.subtitle}
        {...sectionAnimations.hero}
      />

      <IntroductionSection 
        title={resortData.introduction.title}
        description={resortData.introduction.description}
        {...sectionAnimations.propertyOverview}
      />

      <section className="py-16 bg-gray-50" {...sectionAnimations.amenities}>
        <div className="container mx-auto px-4">
          <div {...contentAnimations.text}>
            <h2 className="text-3xl font-bold text-center mb-12">Our Amenities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resortData.amenities.map((amenity, index) => (
              <div key={index} {...getStaggeredDelay(index)}>
                <AmenityCard
                  title={amenity.title}
                  description={amenity.description}
                  icon={amenity.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" {...sectionAnimations.gallery}>
        <div className="container mx-auto px-4">
          <div {...contentAnimations.text}>
            <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resortData.galleryImages.map((image, index) => (
              <div key={index} {...getStaggeredDelay(index)}>
                <GalleryImage
                  src={image}
                  alt={`Resort Image ${index + 1}`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setLightboxOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentImageIndex}
        plugins={[Zoom, Fullscreen, Slideshow, Thumbnails]}
      />
    </main>
  );
}