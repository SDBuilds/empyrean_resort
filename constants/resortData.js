export const RESORT_DATA = {
  balod: {
    title: "The Empyrean Lake Resort",
    subtitle: "Where Nature Meets Luxury in Balod",
    heroImage: "/assets/ELR_Balod 2.jpg",
    introduction: {
      title: "Welcome to Paradise",
      description: "Empyrean Lake Resort, located on the serene shores of Tandula Lake, offers an unmatched full-service experience with a variety of activities ranging from lakeside dining to exhilarating outdoor adventures. Enjoy resort amenities such as indoor and outdoor pools, family-friendly activities, live entertainment, and our luxurious spa facilities. Take a peaceful stroll along the lakefront trail, or unwind and watch a film in our cozy lakeside cinema. For personalized recommendations, our expert staff is here to assist you in curating the perfect itinerary. You can also check out our Weekly Activities guide to see the full lineup of exciting events and activities for your stay."
    },
    amenities: [
      { 
        title: "Lush Green Lawns", 
        description: "Perfect for outdoor events",
        icon: "lawn"
      },
      { 
        title: "Lake View Rooms", 
        description: "Breathtaking views of Tandula Lake",
        icon: "room"
      },
      { 
        title: "Onsite Dining", 
        description: "Multiple dining options",
        icon: "dining"
      },
      { 
        title: "Water Park", 
        description: "Exciting water activities",
        icon: "water"
      },
      { 
        title: "Banquet Halls", 
        description: "Versatile event spaces",
        icon: "banquet"
      },
      { 
        title: "Boat Rentals", 
        description: "Explore the lake",
        icon: "boat"
      }
    ],
    galleryImages: [
      "/media/Balod/ELR_Balod 1.jpg",
      "/media/Balod/ELR_Balod 2.jpg",
      "/media/Balod/ELR_Balod 3.jpg",  
      "/media/Balod/ELR_Balod 4.jpg",
      "/media/Balod/ELR_Balod 5.jpg",
      "/media/Balod/ELR_Balod 6.jpg",
      "/media/Balod/ELR_Balod 7.jpg",
      "/media/Balod/ELR_Balod 8.jpg",
      "/media/Balod/ELR_Balod 9.jpg",
      "/media/Balod/ELR_Balod 10.jpg",
      "/media/Balod/ELR_Balod 11.jpg",
      "/media/Balod/ELR_Balod 12.jpg",
    ]
  },
  bhilai: {
    title: "The Empyrean Hotel and Resort",
    subtitle: "Where Luxury Meets Comfort in the Heart of Bhilai",
    heroImage: "/media/Bhilai/chouhan2.jpg",
    introduction: {
      title: "Welcome to Excellence",
      description: "Nestled in the heart of Bhilai, The Empyrean Hotel and Resort redefines the essence of hospitality with its blend of elegance, luxury, and sophistication. Whether you're planning an intimate wedding, a grand concert, a lively party, or a professional corporate function, our versatile venue offers the perfect setting for every occasion. With over 160 luxurious rooms and a host of extensive amenities, we provide the highest level of comfort and service. Every moment at The Empyrean is meticulously curated to exceed expectations, ensuring your event is nothing short of extraordinary. Experience a seamless blend of exceptional service and opulence, all in the heart of Chhattisgarh."
    },
    amenities: [
      { 
        title: "3 Lawns", 
        description: "Perfect for outdoor events",
        icon: "lawn"
      },
      { 
        title: "160 Luxurious Rooms", 
        description: "Spacious accommodations",
        icon: "room"
      },
      { 
        title: "Swimming Pool", 
        description: "Temperature-controlled pool",
        icon: "pool"
      },
      { 
        title: "Banquet Halls", 
        description: "Versatile event spaces",
        icon: "banquet"
      },
      { 
        title: "GYM", 
        description: "State-of-the-art fitness center",
        icon: "gym"
      },
      { 
        title: "ARC Restaurant", 
        description: "Fine dining experience",
        icon: "restaurant"
      }
    ],
    galleryImages: [
      "/media/Bhilai/bhilai1.jpg",
      "/media/Bhilai/bhilai2.jpg",
      "/media/Bhilai/bhilai3.jpg",
      "/media/Bhilai/bhilai4.jpg",
      "/media/Bhilai/bhilai5.jpg",
      "/media/Bhilai/bhilai6.jpg",
      "/media/Bhilai/bhilai7.jpg",
      "/media/Bhilai/bhilai8.jpg",
      "/media/Bhilai/bhilai9.jpg",
      "/media/Bhilai/bhilai10.jpg",
      "/media/Bhilai/bhilai11.jpg",
      "/media/Bhilai/bhilai1.jpg",
    ]
  }
};

export const getIconComponent = (icon) => {
  const icons = {
    lawn: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    room: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    dining: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    water: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    banquet: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    boat: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    pool: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gym: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    restaurant: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  };
  return icons[icon] || null;
};

export const heroSlides = [
  {
    image: "/media/Balod/ELR_Balod 22.jpg",
    link: "/balod",
    alt: "Empyrean Lake Resort, Balod",
    label: "Empyrean Lake Resort, Balod",
  },
  {
    image: "/media/Bhilai/bhilai-resort-full.JPG",
    link: "/bhilai",
    alt: "Empyrean Hotel and Resort, Bhilai",
    label: "Empyrean Hotel and Resort, Bhilai",
  },
];

export const resorts = [
  {
    name: "Empyrean Lake Resort, Balod",
    image: "/media/Balod/ELR_Balod 22.jpg",
    description: "A lakeside paradise offering luxury, adventure, and tranquility in Balod.",
    link: "/balod",
  },
  {
    name: "Empyrean Hotel and Resort, Bhilai",
    image: "/media/Bhilai/bhilai-resort-full.JPG",
    description: "Premium hospitality and world-class amenities in the heart of Bhilai.",
    link: "/bhilai",
  },
];

export const projects = [
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