'use client';

import { useState } from 'react';
import Image from 'next/image';
import WeddingVenues from './components/WeddingVenues';
import DestinationWedding from './components/DestinationWedding';
import PreferredPartners from './components/PreferredPartners';
import FAQ from './components/FAQ';

const tabMap = {
  'Wedding Venues': <WeddingVenues />,
  'Destination Wedding': <DestinationWedding />,
  'Preferred Partners': <PreferredPartners />,
  'FAQ': <FAQ />,
};

export default function BalodWeddingPage() {
  const [activeTab, setActiveTab] = useState('Wedding Venues');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <section className="relative h-[70vh]">
        <Image
          src="/assets/wedding-hero.jpg"
          alt="Wedding Venues at The Empyrean Hotel and Resort, Bhilai"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              Ideal Settings for Weddings of All Sizes
            </h1>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(tabMap).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div key={activeTab} className="transition-opacity duration-500 animate-fade-in">
        {tabMap[activeTab]}
      </div>
    </main>
  );
}
