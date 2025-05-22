import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <img 
              src="/media/Bhilai/ChouhanG.png" 
              alt="Empyrean Lake Resort" 
              className="w-25 brightness-0 invert" 
            />
            <p className="text-gray-400 leading-relaxed">
              Experience luxury and tranquility at Empyrean Lake Resort, where every moment becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'linkedin', 'facebook-f', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "About Us",
                "Rooms",
                "Dining",
                "Spa",
                "Events",
                "Gallery",
                "Contact",
                "Careers"
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-blue-500"></i>
                <p className="text-gray-400">
                  Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh 491226
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-blue-500"></i>
                <a href="tel:9109104001" className="text-gray-400 hover:text-white transition-colors duration-300">
                  9109104001
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-blue-500"></i>
                <a href="mailto:empyreanresort@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  empyreanresort@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-400">
                  I agree to receive marketing communications
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Empyrean Lake Resort. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
