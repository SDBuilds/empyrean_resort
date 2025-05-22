"use client";
import { useEffect, useState } from "react";

export default function ClientOnlyBalod() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/media/Balod/promotion.mp4" type="video/mp4" />
    </video>
  );
}
