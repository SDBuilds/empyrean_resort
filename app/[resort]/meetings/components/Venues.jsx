import Image from 'next/image';

const venues = [
  {
    name: 'A-Block Banquet Hall',
    img: '/media/Bhilai/venues/a-block.jpg',
    virtualTour: '#',
    desc: 'Elegant Banquet Hall with Chic Decor and multiple access.',
    area: '6,000 sq. ft.',
  },
  {
    name: 'B-Block Banquet Hall',
    img: '/media/Bhilai/venues/b-block.jpg',
    virtualTour: '#',
    desc: 'Multipurpose Hall for Conferences, Boardrooms, and Celebrations.',
    area: '6,000 sq. ft.',
  },
  {
    name: 'Dholak-Ban Room',
    img: '/media/Bhilai/venues/dholak-ban.jpg',
    virtualTour: '#',
    desc: 'Where elegance meets experience. The finest Ball Room at Empyrean.',
    area: '12,000 sq. ft.',
  },
  {
    name: 'E-Block Hall',
    img: '/media/Bhilai/venues/e-block.jpg',
    virtualTour: '#',
    desc: 'Luxurious Banquet Hall featuring Classic Decor and Stylish Design.',
    area: '8,000 sq. ft.',
  },
  {
    name: 'C-Block Banquet',
    img: '/media/Bhilai/venues/c-block.jpg',
    virtualTour: '#',
    desc: 'Elegant Banquet Hall with Climate Control and Floor-to-Ceiling Windows.',
    area: '8,000 sq. ft.',
  },
];

export default function Venues() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title and Intro */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Conference & Event Center at Empyrean Hotel and Resort, Bhilai</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Discover our versatile venues designed for meetings, conferences, and grand celebrations. Each space is equipped with modern amenities and elegant interiors to ensure your event is both memorable and seamless.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {venues.map((venue, idx) => (
            <div key={venue.name} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 w-full h-44 md:h-auto relative">
                <Image
                  src={venue.img}
                  alt={venue.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{venue.name}</h3>
                <a href={venue.virtualTour} className="text-blue-600 text-sm hover:underline mb-1" target="_blank" rel="noopener noreferrer">Virtual Tour</a>
                <p className="text-gray-600 mb-2 text-sm">{venue.desc}</p>
                <div className="text-gray-800 font-medium text-sm">{venue.area}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 rounded-xl p-6 shadow-inner">
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <Image
              src="/media/Bhilai/venues/meetings-people.jpg"
              alt="Meetings & Event at The Empyrean Hotel and Resort"
              width={400}
              height={250}
              className="rounded-lg object-cover shadow"
            />
          </div>
          <div className="md:w-1/2 w-full text-left">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Meetings & Event at The Empyrean Hotel and Resort</h4>
            <p className="text-gray-700 mb-4 text-sm">
              Exquisite chandeliers, refined interiors, and a private patio with soft lighting for impactful corporate gatherings. Contact us today to set up a tour!
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
