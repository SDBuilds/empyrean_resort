"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function BhilaiNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Only render on Bhilai routes
  if (!pathname.startsWith('/bhilai')) {
    return null;
  }

  const menuItems = [
    { text: "HOME", href: "/bhilai" },
    { text: "RESORT", href: "/bhilai/resort" },
    { text: "STAY", href: "/bhilai/stay" },
    { text: "DINING", href: "/bhilai/dining" },
    { text: "OFFERS", href: "/bhilai/offers" },
    { text: "WEDDINGS", href: "/bhilai/wedding" },
    { text: "MEETINGS", href: "/bhilai/meetings" },
    { text: "THINGS TO DO", href: "/bhilai/thingstodo" },
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
      className="sticky top-0 left-0 w-full z-50 bg-black"
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
                src="/media/Bhilai/Empyrean Logo.png"
                alt="Empyrean Resort Bhilai"
                width={150}
                height={50}
                className="transition-all duration-300 brightness-0 invert"
                priority
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
                  className="text-white hover:text-blue-200 transition-colors duration-300"
                >
                  {item.text}
                </Link>
              </motion.li>
            ))}

            {/* Book Now Button */}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (menuItems.length + 1) * 0.1 }}
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
            className="lg:hidden relative z-10 p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/80 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3
              }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 relative z-50">
                <Image src="/media/Bhilai/Empyrean Logo.png" alt="Empyrean Resort Bhilai" width={120} height={40} />
                <button
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none relative z-50"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col space-y-6 px-4 py-6">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}