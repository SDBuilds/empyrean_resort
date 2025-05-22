"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function BalodNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only render on Balod routes
  if (!pathname.startsWith('/balod')) {
    return null;
  }

  const menuItems = [
    { text: "HOME", href: "/balod" },
    { text: "RESORT", href: "/balod/resort" },
    { text: "STAY", href: "/balod/stay" },
    { text: "DINING", href: "/balod/dining" },
    { text: "WEDDINGS", href: "/balod/wedding" },
    { text: "EVENTS", href: "/balod/events" },
    { text: "ACTIVITIES", href: "/balod/activities" },
    { text: "GALLERY", href: "/gallery" },
    { text: "CONTACT", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="relative z-10">
              <Image
                src="/media/Balod/EmpyreanLogo.png" 
                alt="Empyrean Lake Resort"
                width={150}
                height={50}
                className={`transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert" 
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.2 + (index * 0.05),
                  ease: "easeOut"
                }}
              >
                <Link
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
                  }`}
                >
                  {item.text}
                </Link>
              </motion.li>
            ))}

            {/* Careers Link */}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: 0.2 + (menuItems.length * 0.05),
                ease: "easeOut"
              }}
            >
              <a
                href="https://in.indeed.com/cmp/Chouhan-Automobiles-LLP"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
                }`}
              >
                CAREERS
              </a>
            </motion.li>

            {/* Book Now Button */}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: 0.2 + (menuItems.length + 1) * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://www.makemytrip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                BOOK NOW
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.3
            }}
            className="lg:hidden fixed inset-0 bg-white z-40"
          >
            <div className="container mx-auto px-4 pt-24 pb-8">
              <ul className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.2 + (index * 0.05),
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}

                {/* Mobile Careers Link */}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.2 + (menuItems.length * 0.05),
                    ease: "easeOut"
                  }}
                  className="pt-4"
                >
                  <a
                    href="https://in.indeed.com/cmp/Chouhan-Automobiles-LLP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    CAREERS
                  </a>
                </motion.li>

                {/* Mobile Book Now Button */}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.2 + (menuItems.length + 1) * 0.05,
                    ease: "easeOut"
                  }}
                  className="pt-4"
                >
                  <a
                    href="https://www.makemytrip.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    BOOK NOW
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}