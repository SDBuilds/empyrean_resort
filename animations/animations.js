import AOS from "aos";
import "aos/dist/aos.css";

// Animation configurations
export const initAnimations = () => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 50,
  });
};

// Common animation attributes
export const fadeUp = {
  "data-aos": "fade-up"
};

export const fadeRight = {
  "data-aos": "fade-right"
};

export const fadeLeft = {
  "data-aos": "fade-left"
};

export const scaleIn = {
  "data-aos": "zoom-in"
};

// Staggered animations for lists
export const getStaggeredDelay = (index) => ({
  "data-aos": "fade-up",
  "data-aos-delay": index * 100
});

// Section animations
export const sectionAnimations = {
  hero: fadeUp,
  propertyOverview: fadeUp,
  amenities: fadeUp,
  wedding: fadeUp,
  gallery: fadeUp,
  events: fadeUp
};

// Content animations
export const contentAnimations = {
  image: fadeRight,
  text: fadeLeft,
  card: fadeUp
}; 