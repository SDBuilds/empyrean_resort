"use client";

import { useState } from 'react';
import { balodGallery, bhilaiGallery } from '@/data/galleryData';
import Gallery from '@/components/ui/Gallery';
import { sectionAnimations } from '@/animations/animations';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Resorts' },
    { id: 'balod', label: 'Empyrean Lake Resort, Balod' },
    { id: 'bhilai', label: 'Empyrean Hotel and Resort, Bhilai' },
  ];

  const getGalleryImages = () => {
    switch (activeTab) {
      case 'balod':
        return balodGallery;
      case 'bhilai':
        return bhilaiGallery;
      default:
        return [...balodGallery, ...bhilaiGallery];
    }
  };

  return (
    <>
      <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
        <section className="container mx-auto px-4 py-24" {...sectionAnimations.gallery}>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Gallery
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-snug">
              Experience Our Luxury
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our stunning properties and world-class amenities.
            </p>
          </div>

          {/* Gallery Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <Gallery 
            images={getGalleryImages()} 
            title={activeTab === 'all' ? 'All Resorts' : tabs.find(tab => tab.id === activeTab)?.label} 
          />
        </section>
      </main>
    </>
  );
};

export default GalleryPage;