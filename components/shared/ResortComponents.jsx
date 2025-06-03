"use client";
import { memo, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

// Hero Section Component
export const HeroSection = memo(({ image, title, subtitle, hideText, ...animationProps }) => (
  <section className="relative h-[85vh]" {...animationProps}>
    <Image
      src={image}
      alt={title}
      fill
      priority
      sizes="100vw"
      quality={90}
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up">
          <h1 className={hideText ? "sr-only" : "text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"}>
            {title}
          </h1>
          <p className={hideText ? "sr-only" : "text-xl md:text-2xl text-gray-200 leading-relaxed"}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </section>
));

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

HeroSection.displayName = 'HeroSection';

// Introduction Section Component
export const IntroductionSection = memo(({ title, description, ...animationProps }) => (
  <section className="py-24 bg-gradient-to-b from-white to-gray-50" {...animationProps}>
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block group">
            {title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
));

IntroductionSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

IntroductionSection.displayName = 'IntroductionSection';

// Amenity Card Component
export const AmenityCard = memo(({ title, description, icon }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl transform transition-transform duration-300 group-hover:scale-105"></div>
    <div className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
));

AmenityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

AmenityCard.displayName = 'AmenityCard';

// Gallery Image Component
export const GalleryImage = memo(({ src, alt, onClick }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error ? (
        <div className="w-full h-80 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Failed to load image</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-gray-900 font-medium">View Image</span>
          </div>
        </div>
      </div>
    </div>
  );
});

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

GalleryImage.displayName = 'GalleryImage'; 