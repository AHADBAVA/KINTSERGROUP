import React, { useState } from 'react';

const HomeBusiness = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  const openZoom = (imageUrl) => {
    setZoomedImg(imageUrl);
  };

  const closeZoom = () => {
    setZoomedImg(null);
  };

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className="business-section bg-black text-white p-10">
      <h2 className="text-3xl font-bold text-center mb-4">Our Businesses</h2>
      <h3 className="text-xl text-center mb-4">INNOVATING THINGS THAT YOU NEED!</h3>
      <h4 className="text-lg text-center mb-8">A Glimpse To Kinster Group's Business.</h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 4 Images for the Business */}
        <div className="business-image">
          <img
            src="Business/busineessfour.png"
            alt="Business 1"
            className={`mx-auto max-h-64 cursor-pointer ${isMobile ? 'zoomable' : ''}`}
            onClick={() => isMobile && openZoom("Business/busineessfour.png")}
          />
        </div>
        <div className="business-image">
          <img
            src="Business/businessone.png"
            alt="Business 2"
            className={`mx-auto max-h-64 cursor-pointer ${isMobile ? 'zoomable' : ''}`}
            onClick={() => isMobile && openZoom("Business/businessone.png")}
          />
        </div>
        <div className="business-image">
          <img
            src="Business/businessthree.png"
            alt="Business 3"
            className={`mx-auto max-h-64 cursor-pointer ${isMobile ? 'zoomable' : ''}`}
            onClick={() => isMobile && openZoom("Business/businessthree.png")}
          />
        </div>
        <div className="business-image">
          <img
            src="Business/businesstwo.png"
            alt ="Business 4"
            className={`mx-auto max-h-64 cursor-pointer ${isMobile ? 'zoomable' : ''}`}
            onClick={() => isMobile && openZoom("Business/businesstwo.png")}
          />
        </div>
      </div>

      {zoomedImg && (
        <div className="zoomed-image-overlay">
          <span className="close-button" onClick={closeZoom}>Close</span>
          <img src={zoomedImg} alt="Zoomed Image" className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default HomeBusiness;
