import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    fontSize: '14px',
  };

  const socialIconsStyle = {
    display: 'flex',
  };

  const iconStyle = {
    fontSize: '30px',
    marginLeft: '10px',
  };

  return (
    <div className="footer bg-gray-700 text-white" style={footerStyle}>
      <div className="copyright">
        © Copyright 2020-2023 All Rights Reserved | Designed.
      </div>
      <div className="social-icons" style={socialIconsStyle}>
        <a href="https://www.facebook.com/KinsterGlobal/" className="icon" style={iconStyle}>
          <FontAwesomeIcon icon={faFacebook} /> {/* Font Awesome Facebook icon */}
        </a>
        <a href="https://www.instagram.com/kinster_global" className="icon" style={iconStyle}>
          <FontAwesomeIcon icon={faInstagram} /> {/* Font Awesome Instagram icon */}
        </a>
      </div>
    </div>
  );
  
}

export default Footer;
