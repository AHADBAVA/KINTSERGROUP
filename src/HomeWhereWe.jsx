import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const HomeWhereWeNow = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openFullScreenImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeFullScreenImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="where-we-now text-white bg-black p-10">
      <div className="bg-black py-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Where We Are Now</h2>
        <p className="text-lg text-white mb-8">Click a Country Flag to Explore</p>
      </div>

      <div className="bg-black py-8 text-white px-4 sm:px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {/* India */}
          <div className="country-card group animate-slide-in relative" onClick={() => openFullScreenImage("imgaes/india.jpg")}>
            <div className="country-image-container relative">
              <img
                src="imgaes/india.jpg"
                alt="India"
                className="rounded-lg shadow-lg country-image mx-auto w-400 transition-transform duration-200 group-hover:transform group-hover:blur-md"
                style={{ cursor: 'pointer' }}
              />
              <div
                className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{ cursor: 'pointer' }}
              >
                <p className="text-white text-xl font-semibold mb-2">Explore</p>
                <p className="text-white text-xl font-semibold">India</p>
              </div>
            </div>
            <p className="text-center text-xl mt-2 country-name">India</p>
          </div>

          {/* Dubai */}
          <div className="country-card group animate-slide-in relative rounded-lg" onClick={() => openFullScreenImage("imgaes/dubai.jpg")}>
            <div className="country-image-container relative">
              <img
                src="imgaes/dubai.jpg"
                alt="Dubai"
                className="rounded-lg shadow-lg country-image mx-auto w-400 transition-transform duration-200 group-hover:transform group-hover:blur-md"
                style={{ cursor: 'pointer' }}
              />
              <div
                className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{ cursor: 'pointer' }}
              >
                <p className="text-white text-xl font-semibold mb-2">Explore</p>
                <p className="text-white text-xl font-semibold">Dubai</p>
              </div>
            </div>
            <p className="text-center text-xl mt-2 country-name">Dubai</p>
          </div>

          {/* UK */}
          <div className="country-card group animate-slide-in relative" onClick={() => openFullScreenImage("imgaes/UK.jpg")}>
            <div className="country-image-container relative">
              <img
                src="imgaes/UK.jpg"
                alt="UK"
                className="rounded-lg shadow-lg country-image mx-auto w-400 transition-transform duration-200 group-hover:transform group-hover:blur-md"
                style={{ cursor: 'pointer' }}
              />
              <div
                className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{ cursor: 'pointer' }}
              >
                <p className="text-white text-xl font-semibold mb-2">Explore</p>
                <p className="text-white text-xl font-semibold">UK</p>
              </div>
            </div>
            <p className="text-center text-xl mt-2 country-name">UK</p>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="full-screen-image-overlay" style={{ cursor: 'pointer' }} onClick={closeFullScreenImage}>
          <button className="close-full-screen-button bg-white p-2 text-black rounded-lg font-bold text-lg" onClick={closeFullScreenImage}>
            Close x
          </button>
          <img src={selectedImage} alt="Full-Screen" className="full-screen-image" />
        </div>
      )}

      <div className="bg-black py-8 px-4 sm:px-8 text-center">
      <NavLink to="/about"><button className="bg-purple-500 text-white px-6 mb-5 py-3 rounded-lg mx-4 learn-more-button">Learn More</button></NavLink>
        <NavLink to="/contact"><button className="bg-gray-200 text-black px-4 py-3 rounded-lg">Contact Us</button></NavLink>
      </div>
    </div>
  );
};

export default HomeWhereWeNow;
