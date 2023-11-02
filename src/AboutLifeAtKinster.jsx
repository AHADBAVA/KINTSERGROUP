import React from 'react';

const AboutLifeAtKinster = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black p-10">
      {/* Right side with stylish text for desktop view */}
      <div className="md:w-1/2 text-center md:text-center mt-4 md:mt-0 flex justify-center items-center">
        <p className="text-4xl md:text-6xl pb-10 font-bold text-white">#LIFE AT KINSTER</p>
      </div>

      <div className="md:w-1/2">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative group">
            <img src="HrProfile/HrPhoto.jpeg" alt="Image 1" className="w-full rounded-lg" />
            <div className="overlay absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Explore Image 1</p>
            </div>
          </div>
          <div className="relative group">
            <img src="Career/CrareerSeven.png" alt="Image 2" className="w-full rounded-lg" />
            <div className="overlay absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Explore Image 2</p>
            </div>
          </div>
          <div className="relative group">
            <img src="Career/careerFive.png" alt="Image 3" className="w-full rounded-lg" />
            <div className="overlay absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Explore Image 3</p>
            </div>
          </div>
          <div className="relative group">
            <img src="Career/carreerKinster.png" alt="Image 4" className="w-full rounded-lg" />
            <div className="overlay absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Explore Image 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLifeAtKinster;
