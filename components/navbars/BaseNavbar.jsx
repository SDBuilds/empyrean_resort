"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function BaseNavbar({
  logo,
  menuItems,
  bookNowUrl,
  shouldRender,
  logoWidth = 70,
  logoHeight = 20,
  logoAlt,
  hasDropdown = false,
  dropdownItems = [],
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  let dropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 500);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  if (shouldRender && !shouldRender(pathname)) {
    return null;
  }

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
                src={logo}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="transition-all duration-300 brightness-0 invert"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            {hasDropdown ? (
              <li className="relative group" tabIndex={0} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button
                  className="flex items-center gap-1 text-white hover:text-blue-200 transition-colors duration-300 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  aria-label="Resorts"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  RESORTS <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-300 focus:bg-gray-100"
                        onClick={handleDropdownItemClick}
                      >
                        <div className="font-semibold text-gray-800">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : null}

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
            {bookNowUrl && (
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (menuItems.length + 1) * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={bookNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  BOOK NOW
                </a>
              </motion.li>
            )}
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
              className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-black shadow-xl z-50"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800 relative z-50">
                <Image src={logo} alt={logoAlt} width={120} height={40} className="brightness-0 invert" />
                <button
                  className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none relative z-50"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col space-y-6 px-4 py-6">
                {hasDropdown && (
                  <li>
                    <button
                      className="flex items-center justify-between w-full text-lg font-medium text-white hover:text-blue-200 py-2 focus:outline-none"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                      aria-label="Resorts"
                    >
                      RESORTS
                      <ChevronDown size={20} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="mt-2 ml-2 space-y-2 bg-gray-900 p-3 rounded-md">
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 px-2 text-white hover:text-blue-200 transition-colors duration-300"
                            onClick={handleDropdownItemClick}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                )}

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
                      className="block text-lg font-medium text-white hover:text-blue-200 transition-colors duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}

                {/* Mobile Book Now Button */}
                {bookNowUrl && (
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
                      href={bookNowUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      BOOK NOW
                    </a>
                  </motion.li>
                )}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 