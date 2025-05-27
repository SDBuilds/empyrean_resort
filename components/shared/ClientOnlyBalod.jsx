"use client";
import { useEffect, useState } from "react";

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
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <p className="text-white">Failed to load video</p>
        </div>
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedData={() => setIsLoading(false)}
        onError={(e) => {
          setError(e);
          setIsLoading(false);
        }}
      >
        <source 
          src="/media/Balod/promotion.mp4" 
          type="video/mp4"
          onError={(e) => {
            setError(e);
            setIsLoading(false);
          }}
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
