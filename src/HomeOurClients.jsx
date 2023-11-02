import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeOurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const logoImages = [
    'brand/brand.png',
    'brand/brandfour.png',
    'brand/brandfow.png',
    'brand/brandsix.png',
    'brand/brandthree.png',
    'brand/brandtow.png'
  ];

  return (
    <div className="bg-black text-center p-10 py-8 lg:py-16">
      <h2 className="text-2xl text-white font-bold mb-4 lg:text-3xl lg:mb-6">Our Clients</h2>
      <Slider {...settings}>
        {logoImages.map((logo, index) => (
          <div key={index} className="cursor-pointer">
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeOurClients;
