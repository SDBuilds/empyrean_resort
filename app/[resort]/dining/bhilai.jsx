"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const diningOptions = [
  {
    title: "Garden",
    image: "/media/Bhilai/OutDoor.png",
    description:
      "Garden restaurant, featuring open-air seating, and fresh, handcrafted dishes.",
    link: "/menu/garden",
  },
  {
    title: "Roof top",
    image: "/media/Bhilai/Rooftop.png",
    description:
      "Rooftop restaurant offering cozy ambiance, views, open-air dining, and fresh seasonal cuisine.",
    link: "/menu/rooftop",
  },
  {
    title: "Bar",
    image: "/media/Bhilai/BAR1.webp",
    description:
      "ARC bar and Restaurant brings a relaxed yet stylish bar and multi star experience.",
    link: "/menu/bar",
  },
  {
    title: "In-Room Dining",
    image: "/media/Bhilai/bhilai5.jpg",
    description:
      "Enjoy our delicious dining options from the comfort of your own guest room. Breakfast, lunch and dinner options are available.",
    link: "/menu/inroom",
  },
];

export default function BhilaiDiningPage() {
  // Parallax state
  const [heroOffset, setHeroOffset] = useState(0);
  const [arcOffset, setArcOffset] = useState(0);
  const arcRef = useRef(null);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureOrientation: "vertical",
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.3);
      if (arcRef.current) {
        const rect = arcRef.current.getBoundingClientRect();
        setArcOffset((rect.top - window.innerHeight / 2) * 0.15);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
      {/* Hero Dining Image with Parallax */}
      <section className="w-full overflow-hidden">
        <div
          className="relative w-full h-[350px] md:h-[420px]"
          style={{
            transform: `translateY(${heroOffset}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          <Image
            src="/media/Bhilai/ARC1.webp"
            alt="Dining Hall at Empyrean"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* Dining Description */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Dining at Empyrean Hotel And Resort
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Take a bite, a deep breath, and savor the elevated flavors of Arc—restaurant and bar. At Arc, we don’t just serve food—we craft memorable dining experiences that bring people together.
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          Whether you’re starting your morning with a freshly brewed coffee, enjoying a relaxed lunch, or unwinding in the evening with a handcrafted cocktail or mocktail, Arc offers the perfect setting. With indoor seating, poolside service, and the ambiance of live music after dark, Arc delivers a dynamic culinary escape right in the heart of Bhilai.
        </p>
      </section>

      {/* ARC Bar Image with Parallax */}
      <section className="flex justify-center">
        <div
          ref={arcRef}
          className="relative w-full max-w-2xl h-[250px] md:h-[320px] border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg"
          style={{
            transform: `translateY(${arcOffset}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          <Image
            src="/media/Bhilai/ARC.png"
            alt="ARC Bar at Empyrean"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* Dining Options Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {diningOptions.map((option) => (
            <div
              key={option.title}
              className="bg-white border border-gray-100 rounded-2xl shadow-md flex flex-col items-center p-7 transition hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden shadow">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{option.title}</h3>
              <p className="text-gray-700 text-center mb-5">{option.description}</p>
              <a
                href={option.link}
                className="mt-auto inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors"
              >
                View Menu
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}