import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const AboutUsSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation happens only once
    threshold: 0.5, // Adjust this threshold as needed
  });

  const sectionStyles = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1s ease, transform 1s ease',
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row', // Change this as needed
    alignItems: 'center',
  };

  const imageStyles = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-20px)', // Adjust for the direction you want
    transition: 'opacity 1s ease, transform 1s ease',
  };

  const textStyles = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(20px)', // Adjust for the direction you want
    transition: 'opacity 1s ease, transform 1s ease',
  };

  return (
    <section
      className="bg-gray-700 py-8 px-4 md:px-0"
      style={sectionStyles}
      ref={ref}
    >
      <div className="container mx-auto" style={containerStyles}>
        <div className="p-10 md:p-20 md:w-1/2" style={textStyles}>
          <h2 className="text-3xl font-semibold mb-4 text-white">About Us</h2>
          <p className="text-white leading-8">
            Welcome to Kinster Global, a leading company based in Kerala. We offer comprehensive services in construction, study abroad, and IT solutions. With our expertise and commitment to excellence, we provide high-quality construction projects, facilitate life-changing study abroad experiences, and deliver innovative IT solutions. Discover the possibilities with Kinster Global as we build, explore, and innovate for a better tomorrow.
          </p>
          <div className="mt-4">
            <NavLink to="/about">
              <button className="bg-purple-500 mb-5 text-white px-4 py-2 rounded-lg mr-2">Learn More</button>
            </NavLink>
            <NavLink to="/contact">
              <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Contact Us</button>
            </NavLink>
          </div>
        </div>
        <div className="md:w-1/2 p-4" style={imageStyles}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="HrProfile/HrPhoto.jpeg"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Archana</h3>
                <p>Human Resource</p>
              </div>
            </div>
            <hr className="mb-4" />
            <div
              className={`message-box ${showMessage ? 'expanded' : ''}`}
            >
              <p className="leading-8">
                Hi everyone, We are excited to announce the launch of the new HR message box on the company intranet! This is a central location where you can find all of the latest news and announcements from the HR department.
              </p>
            </div>
            <div className="mt-4">
              <button
                className="bg-white text-black px-4 py-2 rounded-lg mr-2 border border-black"
                onClick={toggleMessage}
              >
                {showMessage ? 'Show Less' : 'Show More'}
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-lg border border-black">Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
