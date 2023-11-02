import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu when a nav NavLink is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleBusinessDropdown = () => {
    setShowBusinessDropdown(!showBusinessDropdown);
  };

  return (
    <nav className="bg-black p-8 flex justify-between items-center relative z-10">
      <div className="flex items-center space-x-4">
          <img src="lOGO/site-logo-white-2.png" width={'100px'} alt="" />

        <div className="hidden pl-96 md:flex space-x-7">
          <NavLink to="/" className="text-white" onClick={closeMenu}>
            HOME
          </NavLink>
          <NavLink to="/about" className="text-white" onClick={closeMenu}>
            ABOUT
          </NavLink>
          <span
            className="text-white cursor-pointer relative"
            onClick={toggleBusinessDropdown}
          >
            BUSINESS
            {showBusinessDropdown && (
              <div className="absolute top-12 left-0 mt-4 w-48 bg-black rounded-lg">
                <a href="https://kinsterglobalcareers.in/" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">Education & Career</a>
                <a href="/#" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">Builders & Developers</a>
                <a href="http://www.buynamasya.com/" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">Personal Care</a>
                <a href="https://kinsterglobal.com/" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">IT & Marketing</a>
              </div>
            )}
          </span>
          <a href="https://kinsterglobalcareers.in/"  target="_blank" rel="noopener noreferrer" className='text-white' onClick={closeMenu}>CAREERS</a>
          <NavLink to="/Contact" className="text-white" onClick={closeMenu}>
            CONTACT US
          </NavLink>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } absolute top-20 left-0 w-full bg-black`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink to="/" className="text-white" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="text-white" onClick={closeMenu}>
            About
          </NavLink>
          <span
            className="text-white cursor-pointer relative"
            onClick={toggleBusinessDropdown}
          >
            Business
            {showBusinessDropdown && (
              <div className="absolute top-12 left-0 w-48 bg-black">
                 <a href="https://kinsterglobalcareers.in/" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">Education & Career</a>
                <a href="/#" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">Builders & Developers</a>
                <a href="http://www.buynamasya.com/" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">Personal Care</a>
                <a href="https://kinsterglobal.com/" className="text-white px-4 py-2 block" target="_blank" rel="noopener noreferrer">IT & Marketing</a>
              </div>
            )}
          </span>
          <a href="https://kinsterglobalcareers.in/"  target="_blank" rel="noopener noreferrer" className='text-white' onClick={closeMenu}>Careers</a>
          <NavLink to="/contact" className="text-white" onClick={closeMenu}>
            Contact Us
          </NavLink>
          <button className='bg-white text-black rounded-lg px-2 py-1' onClick={closeMenu}>Chat With Bot</button>  
          <button className='bg-white text-black rounded-lg px-2 py-1' onClick={closeMenu}>Chat With Us</button>
        </div>
      </div>

      <div className="hidden md:flex space-x-4">
        <button className='bg-black text-white rounded-lg px-2 py-1 border border-solid border-white'>Chat With Bot</button>
        <button className='bg-white text-black rounded-lg px-2 py-1'>Chat With Us</button>
      </div>
    </nav>
  );
}

export default Navbar;