import React from "react";
import './navbar.css'

const indiaDetails = [
  {
    title: 'Kollam',
    address: 'Sain Plaza, 2nd floor, Near Sankar s Hospital, Sankar s Junction, Kollam, Kerala - 691001',
  },
  {
    title: 'Trivandrum',
    address: 'No. 5, Basement Floor, Park Centre, Technopark, Thiruvananthapuram, Kerala - 695581',
  },
  {
    title: 'Kollam 2',
    address: 'Darshan Tower, 2nd Floor, QS road, Kadapakkada, Kollam, Kerala',
  },
];

const englandDetails = [
  {
    title: 'UK',
    address: 'Kinster Global Ltd, 58 Park Road, East Wolverhampton, UK',
    phone: 'Phone: +44 7976 370 231',
  },
];

const ContactUsPage = () => {
  // Define the paths to the four different images
  const images = [
    'imgaes/kollamimage.jpg',
    'imgaes/tvmimage.jpeg',
    'imgaes/kollamimagetwo.jpeg',
    'imgaes/ukimagetwo.jpeg',
  ];
  const boxStyle = {
    margin:'10px',
    border:'1px solid gray'
  };
  return (
    <div>
      <section className="bg-black text-white p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center pb-5">Get In Touch</h2>
          <p className="text-lg text-center">
            We are glad that you preferred to contact us. Please fill out our short form, and one of our friendly team members will contact you back.
          </p>
      <section className="text-white body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input placeholder="Ex : Jhon"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input placeholder="Ex : Jhon321@gmail.com"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea placeholder="Ex : Hey I am Jhon..."
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
          </div>
          <div>
    </div>


          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Locations:</p>
            <div className="flex flex-wrap justify-center items-center space-x-4">
              <div className="mb-4">
                <img src="imgaes/dubai.jpg" alt="Dubai" className="shadow-lg w-36 h-36 rounded-full" />
                <p className="text-center font-semibold">DUBAI</p>
              </div>
              <div className="mb-4">
                <img src="imgaes/UK.jpg" alt="UK" className="w-36 shadow-lg h-36 rounded-full" />
                <p className="text-center font-semibold">UK</p>
              </div>
            </div>
          </div>

      
          <div className="flex flex-wrap justify-center items-center text-black space-x-1 mt-8">
            {indiaDetails.map((detail, index) => (
              <div style={boxStyle} key={index} className="bg-black contcat-us-place-box text-white  p-4 rounded-lg shadow-lg w-64 h-64 md:w-64 md:h-64 mb-4">
                <img src={images[index]} alt={`Image ${index + 1}`} className="w-full h-1/2 mb-2" />
                <h3 className="text-xl font-semibold">{detail.title}</h3>
                <p className="text-sm mt-2">{detail.address}</p>
              </div>
            ))}
            {englandDetails.map((detail, index) => (
              <div style={boxStyle} key={index} className="bg-black contcat-us-place-box text-white p-4 rounded-lg shadow-lg w-64 h-64 md:w-64 md:h-64 mb-4">
                <img src={images[index + indiaDetails.length]} alt={`Image ${index + indiaDetails.length + 1}`} className="w-full h-1/2 mb-2" />
                <h3 className="text-xl font-semibold">{detail.title}</h3>
                <p className="text-sm mt-2">{detail.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
