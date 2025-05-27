"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ClientOnlyBalod() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error ? (
        // Fallback image when video fails to load
        <div className="absolute inset-0">
          <Image
            src="/media/Balod/ELR_Balod 25.jpg"
            alt="Empyrean Lake Resort Balod"
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/oC-B7BmCeFc?autoplay=1&mute=1&loop=1&playlist=oC-B7BmCeFc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Empyrean Lake Resort Promotional Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            setError(e);
            setIsLoading(false);
          }}
        />
      )}
    </div>
  );
}
