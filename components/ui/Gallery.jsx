"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Gallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [swiper, setSwiper] = useState(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          swiper?.slidePrev();
          break;
        case 'ArrowRight':
          swiper?.slideNext();
          break;
        case 'Escape':
          setSelectedImage(null);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, swiper]);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl aspect-[4/3]">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              keyboard={{ enabled: true }}
              initialSlide={selectedImage}
              onSwiper={setSwiper}
              className="w-full h-full"
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
            >
              {images.map((image) => (
                <SwiperSlide key={image.src}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      priority
                      className="object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                      <p className="text-white text-center text-lg">{image.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 