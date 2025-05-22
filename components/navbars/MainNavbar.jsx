"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  let dropdownTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-black/40 via-black/10 to-transparent backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 focus:outline-none" aria-label="Home">
            <Image
              src="/media/Bhilai/ChouhanG.png"
              alt="Empyrean Hotels"
              width={70}
              height={20}
              className={`transition-all duration-300 hover:scale-105 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            <li>
              <Link
                href="/"
                className={`transition-colors duration-300 ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                HOME
              </Link>
            </li>

            {/* Resorts Dropdown */}
            <li className="relative group" tabIndex={0} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className={`flex items-center gap-1 transition-colors duration-300 focus:outline-none ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-label="Resorts"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                RESORTS <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <Link
                    href="/bhilai"
                    className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-300 focus:bg-gray-100"
                    onClick={handleDropdownItemClick}
                  >
                    <div className="font-semibold text-gray-800">Empyrean Resort, Bhilai</div>
                    <div className="text-sm text-gray-600">Luxury in the heart of the city</div>
                  </Link>
                  <Link
                    href="/balod"
                    className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-300 focus:bg-gray-100"
                    onClick={handleDropdownItemClick}
                  >
                    <div className="font-semibold text-gray-800">Empyrean Lake Resort, Balod</div>
                    <div className="text-sm text-gray-600">Serene lakeside retreat</div>
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/events"
                className={`transition-colors duration-300 ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`transition-colors duration-300 ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`transition-colors duration-300 ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <a
                href="https://in.indeed.com/cmp/Chouhan-Automobiles-LLP"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                CAREERS
              </a>
            </li>
            <li>
              <a
                href="https://www.makemytrip.com/hotels/empyrean_lake_resort-details-balod.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                BOOK NOW
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors duration-300 focus:outline-none ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <Image src="/media/Balod/EmpyreanLogo.png" alt="Empyrean Hotels" width={120} height={40} />
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col space-y-2 px-4 py-6">
            <li>
              <Link href="/" className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <button
                className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-blue-600 py-2 focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-label="Resorts"
              >
                RESORTS
                <ChevronDown size={20} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="mt-2 ml-2 space-y-2 bg-gray-50 p-3 rounded-md shadow-md">
                  <Link
                    href="/bhilai"
                    className="block py-2 px-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
                    onClick={handleDropdownItemClick}
                  >
                    Empyrean Resort, Bhilai
                  </Link>
                  <Link
                    href="/balod"
                    className="block py-2 px-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
                    onClick={handleDropdownItemClick}
                  >
                    Empyrean Lake Resort, Balod
                  </Link>
                </div>
              )}
            </li>
            {[{ text: "EVENTS", href: "/events" }, { text: "GALLERY", href: "/gallery" }, { text: "CONTACT US", href: "/contact" }, { text: "CAREERS", href: "/careers" }].map((item) => (
              <li key={item.text}>
                <Link
                  href={item.href}
                  className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="https://www.makemytrip.com/hotels/empyrean_lake_resort-details-balod.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                BOOK NOW
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
