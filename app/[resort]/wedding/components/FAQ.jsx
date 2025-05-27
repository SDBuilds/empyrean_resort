'use client';

export default function FAQ() {
  return (
    <section className="py-16 bg-white animate-fade-in">
      <div className="container mx-auto px-4 text-left max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Q: Do you offer wedding packages?</h3>
          <p className="text-gray-600">Yes! We have customizable packages for every budget and wedding size.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Q: Can we have an outdoor wedding?</h3>
          <p className="text-gray-600">Absolutely. We offer beautiful lawn and rooftop setups perfect for open-air ceremonies.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Q: Is accommodation available for guests?</h3>
          <p className="text-gray-600">Yes, with 160+ luxurious rooms, we can accommodate most wedding parties onsite.</p>
        </div>
      </div>
    </section>
  );
}
