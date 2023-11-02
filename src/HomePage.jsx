import React from 'react';
function HomeMain() {
  return (
    <section>
      {/* Home Section Start  */}
    <div className="min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="imgaes/global network background animation.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="stars"
        style={{
          zIndex: -1, // Ensure stars are behind the content
        }}
      ></div>
      <div
        className="bg-gradient-to-b from-black to-transparent min-h-screen flex flex-col items-center justify-center text-white"
        style={{
          position: 'relative',
          zIndex: 1, // Bring content to the front
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center">
          TRANSFORMING EMOTIONS
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center">
          THROUGH INNOVATION!
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-8">
          Unlocking the potential of the human experience through technology.
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:items-center text-center sm:text-left">
          <p className="text-base sm:text-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
            Know more about Kinster's values and purposes!
          </p>
        </div>
        <a href="/about" className="bg-white mt-10 text-black rounded-md px-4 py-2 hover:scale-105 hover:shadow-md transform transition-all duration-300">Read More</a>
      </div>
    </div>

    {/* Home Section End  */}
    
    {/* Innovation Section Start  */}
    <div className="bg-black p-8">
    <h1 className="text-3xl font-bold text-white pb-2 text-center mb-4">Innovation Section</h1>
    <div className="flex flex-wrap -mx-4">
      {/* Card 1 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
       <div className="bg-black text-center rounded-lg p-7 border border-purple-500">
          <h1 className="text-xl text-white font-semibold mb-2">Digital Design & Development</h1>
          <p className="text-white mb-4">
          Kinster Global offers comprehensive IT solutions for your digital needs of your business.
          </p>
          <a href="https://kinsterglobal.com/">
          <button className="bg-purple-500 text-white px-5 py-2 rounded-lg text-center flex items-center justify-center w-full">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.293 8.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 12.586l4.293-4.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
       <div className="bg-black text-center rounded-lg p-7 border border-purple-500">
          <h1 className="text-xl text-white font-semibold mb-2">Building Construction</h1>
          <p className="text-white mb-4">
          Kinster Builders blends form and function, bringing innovation and precision to each building.
          </p>
          <a href='https://kinsterglobalcareers.in/'>
          <button className="bg-purple-500 text-white px-5 py-2 rounded-lg text-center flex items-center justify-center w-full">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.293 8.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 12.586l4.293-4.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
      <div className="bg-black text-center rounded-lg p-7 border border-purple-500">
          <h1 className="text-xl text-white font-semibold mb-2">Personal Care</h1>
          <p className="text-white mb-4">
          Namasya Organics is a personal care brand with
          products that are natural and safe for your body.
          </p>
          <a herf="https://kinsterglobalcareers.in/">
          <button className="bg-purple-500 text-white px-5 py-2 rounded-lg text-center flex items-center justify-center w-full">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.293 8.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 12.586l4.293-4.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          </a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <div className="bg-black text-center rounded-lg p-7 border border-purple-500">
          <h1 className="text-xl text-white font-semibold mb-2">Careers & Education</h1>
          <p className="text-white mb-4">
          Kinster Global Careers provides guidance and support to students for abroad studies.
          </p>
         
          <button className="bg-purple-500 text-white px-5 py-2 rounded-lg text-center flex items-center justify-center w-full">
          <a herf="https://kinsterglobalcareers.in/">
            Read More
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.293 8.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 12.586l4.293-4.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
    {/* Innovation Section end  */}
    {/* Our Milestone Section Start  */}
</section>
    
  );
}

export default HomeMain;
