import Image from 'next/image';

export default function MeetingsAndEvents() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title and Intro */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Inspiring Meetings</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">Empyrean Lake Resort | Balod</h3>
          <p className="text-gray-700 text-base md:text-lg">
            Today's meetings go beyond the ordinary. They focus on meaningful, fulfilling, and inspiring collaboration in a sophisticated setting. At Empyrean Lake Resort, Balod, we offer the perfect blend of breathtaking landscapes and state-of-the-art spaces. Anchored by our team's heartfelt hospitality, your gathering will be as invigorating as it is productive.
          </p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/media/Balod/meetings-hero.jpg"
            alt="Empyrean Conference & Event Center"
            width={600}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Conference Center Section */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Empyrean Conference & Event Center</h4>
          <p className="text-gray-700 mb-4">
            From high-powered strategy meetings to intimate team retreats, our center offers a seamless blend of technology and modern aesthetics. Why settle for bland boardrooms when vibrant, open venues, business lounges, and outdoor spaces await?
          </p>
          <p className="text-gray-700">
            Whether you host a boardroom lunch, product breakout session, all-hands meeting, or an energizing cocktail under the stars, every event at Empyrean will be inspiring and memorable.
          </p>
        </div>

        {/* What Sets Us Apart & Image */}
        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          <div className="md:w-1/2 w-full">
            <Image
              src="/media/Balod/meetings-room.jpg"
              alt="Meeting Room"
              width={400}
              height={250}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">What Sets Us Apart</h5>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
              <li>20,000+ sq. ft. of flexible indoor/outdoor spaces</li>
              <li>High-capacity AV equipment and Board & Suites</li>
              <li>Customizable Catering by Empyrean's Chefs</li>
              <li>Dedicated on-site events & tech support</li>
              <li>Team-building programs and lakeside activities</li>
              <li>Outdoor terraces, inspiring breakout zones</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition-colors duration-200">
              Start Planning
            </button>
          </div>
        </div>

        {/* Refreshing Escape Section */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">A Refreshing Escape Close to Home</h4>
          <p className="text-gray-700 mb-2">
            Located in Balod, Chhattisgarh, Empyrean Lake Resort is effortlessly accessible and just a short distance away from key regional and national business hubs. Let us host your next offsite, retreat, or conference in an environment of lasting inspiration and comfort.
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>1 hr drive from Bhilai</li>
            <li>90 mins from Raipur Airport</li>
          </ul>
        </div>

        {/* Meeting & Events at Empyrean Hotel and Resort */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 w-full">
            <Image
              src="/media/Balod/meetings-people.jpg"
              alt="Meeting & Events at The Empyrean Hotel and Resort"
              width={400}
              height={250}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">Meeting & Events at The Empyrean Hotel and Resort</h5>
            <p className="text-gray-700 mb-4">
              Exquisite chandeliers, refined interiors, and a private patio with soft lighting make for impactful corporate gatherings. Designed for complete satisfaction, Empyrean inspires collaboration, innovation, and success.
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
