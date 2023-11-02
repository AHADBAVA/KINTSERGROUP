import React from 'react';

const AboutMoveWithUs = () => {
  return (
    <div className="bg-black text-white p-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Move forward with us!</h1>
      <h2 className="text-2xl md:text-4xl text-center font-semibold mb-4">
        Catalyzing Your Digital Transformation Journey
      </h2>
      <div className="flex flex-col items-center">
        <p className="text-lg mb-3 text-center">
          Ready to take the next step? Enter your email address and let's discuss how we can
          help you on your digital transformation journey.
        </p>
        <div class="md:flex flex-col md:flex-row items-center md:justify-between p-5 bg-black rounded-lg shadow-lg">
  <input
    type="email"
    placeholder="Your Email Address"
    class="p-3 mb-3 md:mb-0 md:mr-3 border border-white rounded-lg outline-none text-black placeholder-black"
  />
  <input
    type="text"
    placeholder="Subject (e.g., Project Inquiry)"
    class="p-3 mb-3 mr-4 md:mb-0 border border-white rounded-lg outline-none text-black placeholder-black"
  />
  <button class="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300">
    Get Started
  </button>
</div>

        
      </div>
    </div>
  );
};

export default AboutMoveWithUs;
