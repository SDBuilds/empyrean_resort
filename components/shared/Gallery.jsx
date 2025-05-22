"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images, title = "Gallery" }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{title}</h2>
        
        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer break-inside-avoid"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-lg font-medium">View Image</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative max-w-4xl mx-auto px-4">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto rounded-lg"
              />
              {selectedImage.caption && (
                <div className="text-white text-center mt-4">
                  {selectedImage.caption}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 