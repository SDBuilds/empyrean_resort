"use client";
import { useEffect } from "react";
import Image from "next/image";
import {
  HeroSection,
  IntroductionSection,
} from "@/components/shared/ResortComponents";
import {
  initAnimations,
  sectionAnimations,
  getStaggeredDelay,
} from "@/animations/animations";

const HighlightCard = ({ image, caption, description, index }) => (
  <div
    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
    {...getStaggeredDelay(index)}
  >
    <div className="relative h-96">
      <Image
        src={image}
        alt={caption}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide leading-tight">
            {caption}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

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

export default function WhatsNewPage() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        image="/media/Common/whats-new.png"
        title="What's New at the Empyrean Hotels and Resorts"
        subtitle=""
        hideText
        {...sectionAnimations.hero}
      />

      {/* Events Section */}
      <IntroductionSection
        title="Upcoming Events"
        description="There's always something happening at The Empyrean Lake Resort! Keep an eye on this page to learn about the latest updates, our upcoming projects and events."
        {...sectionAnimations.events}
      />

      {/* Projects Section */}
      <IntroductionSection
        title="Our Upcoming Projects"
        description="Discover the exciting developments taking shape at The Empyrean Hotel and Resort. Here's a glimpse of what's coming soon!"
        {...sectionAnimations.gallery}
      />

      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <HighlightCard key={project.caption} {...project} index={idx} />
          ))}
        </div>
      </div>
    </main>
  );
}
