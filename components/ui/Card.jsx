import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({
  image,
  title,
  description,
  link,
  index,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
      {...props}
    >
      <div className="relative h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide leading-tight">
              {title}
            </h3>
            <p className="text-gray-200 text-xs leading-relaxed mb-2">
              {description}
            </p>
            {link && (
              <Link href={link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card; 