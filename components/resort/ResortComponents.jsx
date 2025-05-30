"use client";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";

// Memoized Hero Section Component
export const HeroSection = memo(({ image, title, subtitle }) => (
  <section className="relative h-[85vh]">
    <Image
      src={image}
      alt={title}
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

// Memoized Introduction Section Component
export const IntroductionSection = memo(({ title, description }) => (
  <section className="py-24 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block group">
            {title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  </section>
));
IntroductionSection.displayName = 'IntroductionSection';

// Memoized Amenity Card Component
export const AmenityCard = memo(({ title, description, icon }) => (
  <motion.div 
    className="group relative bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
        {icon || (
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
          {title}
        </h3>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
));
AmenityCard.displayName = 'AmenityCard';

// Memoized Gallery Image Component
export const GalleryImage = memo(({ src, index, onClick }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    onClick={() => onClick(index)}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    <Image
      src={src}
      alt={`Gallery Image ${index + 1}`}
      width={400}
      height={300}
      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <motion.div 
        className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
          <span className="text-gray-900 font-medium">View Image</span>
        </div>
      </motion.div>
    </div>
  </motion.div>
));
GalleryImage.displayName = 'GalleryImage';

// Memoized Section Title Component
export const SectionTitle = memo(({ subtitle, title, description }) => (
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      {title}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      {description}
    </p>
  </motion.div>
));
SectionTitle.displayName = 'SectionTitle'; 