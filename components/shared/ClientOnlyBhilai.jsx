"use client";
import { useEffect, useState } from "react";

export default function ClientOnlyBhilai() {
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
      <source src="/media/Bhilai/Empyrean-Bhilai.mp4" type="video/mp4" />
    </video>
  );
}
