"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      location: "Bhilai",
      title: "Empyrean Resort, Bhilai",
      address: "NH-6, Durg Bypass, Pushpak Nagar, Near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020",
      phone: "9109104001",
      email: "bhilai@empyreanresort.com",
      hours: "24/7",
    },
    {
      location: "Balod",
      title: "Empyrean Lake Resort, Balod",
      address: "Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh 491226",
      phone: "9109104001",
      email: "balod@empyreanresort.com",
      hours: "24/7",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                {info.title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">{info.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <a 
                      href={`tel:${info.phone}`} 
                      className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center"
                    >
                      {info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href={`mailto:${info.email}`} 
                      className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center"
                    >
                      {info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Hours</h4>
                    <p className="text-gray-600">{info.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
            <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}