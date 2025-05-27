import Gallery from "@/components/shared/Gallery";

// Example images array, replace with your actual images
const images = [
  { src: "/media/Bhilai/gallery1.jpg", alt: "Gallery Image 1" },
  { src: "/media/Bhilai/gallery2.jpg", alt: "Gallery Image 2" },
  // Add more images as needed
];

export default function GalleryPage() {
  return <Gallery images={images} title="Gallery" />;
}