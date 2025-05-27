'use client';
import Image from "next/image";

const venues = [
  {
    name: "A-Block Banquet",
    image: "/assets/venues/a-block-banquet.jpg",
  },
  {
    name: "A-Block Lawn",
    image: "/assets/venues/a-block-lawn.jpg",
  },
  {
    name: "C-Block Banquet",
    image: "/assets/venues/c-block-banquet.jpg",
  },
  {
    name: "C-Block Lawn",
    image: "/assets/venues/c-block-lawn.jpg",
  },
  {
    name: "Rooftop Wedding",
    image: "/assets/venues/rooftop-wedding.jpg",
  },
];

export default function WeddingVenues() {
  return (
    <>
      {/* Description Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Wedding Venues at The Empyrean Hotel and Resort, Bhilai
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Celebrate your dream wedding at The Empyrean Hotel and Resort, where elegance meets personalized charm...
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            START PLANNING
          </button>
        </div>
      </section>

      {/* Available Venues Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Available Banquets & Lawns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{venue.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/assets/venues/affordable-wedding.jpg"
                alt="Affordable Dream Wedding"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Your Affordable Dream Wedding at The Empyrean Resort
              </h2>
              <p className="text-lg text-gray-600">
                Whether it's an intimate gathering or a grand celebration...
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                START PLANNING
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
