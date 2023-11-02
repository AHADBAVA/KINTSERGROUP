import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';
const testimonialImages = [
  { url: 'Testmonial/testmonailone.png' },
  { url: 'Testmonial/testmonailone.png' },
  { url: 'Testmonial/testmonailthree.png' },
  { url: 'Testmonial/testmonailfour.png' },
  { url: 'Testmonial/testmonailfive.png' },
  // Add more testimonial images as needed
];

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white py-6 md:py-10 p-10">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2">
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <Carousel autoPlay showThumbs={false}>
                {testimonialImages.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`Testimonial ${index}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-left md:text-left">
              <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
              <p className="text-lg font-semibold mb-6">What Our Clients Say</p>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius mauris quis neque bibendum.
                Sed congue eget justo in varius. Nullam non convallis ligula. Nulla facilisi.
              </p>
            </div>
            <div className="bg-black py-4 px-4 sm:px-8">
              <button className="bg-purple-500 text-white px-6 mb-2 py-3 rounded-lg mx-4">Learn More</button>
              <NavLink to="/contact"><button className="bg-gray-200 text-black px-4 py-3 rounded-lg">Contact Us</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
