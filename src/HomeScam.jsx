import React from 'react';
import { NavLink } from 'react-router-dom';
const HomeScam = () => {
  return (
    <div className="scam-section bg-black text-white p-10">
      <h2 className="text-3xl font-bold text-center mb-4">Beware Of Scams!</h2>
      <h3 className="text-lg text-center mb-4">
        We do not charge/accept any amount or security deposit from job seekers during the selection process or while inviting candidates for an interview.
      </h3>
      <div className="text-center mt-8">
      <NavLink to="/scam"><button className="bg-red-500 text-white px-6 py-3 rounded-lg mx-4">Report</button></NavLink>
      </div>
      <a href="/#"><button className='bg-gray-700 font-bold pr-2 pl-2 pt-2 pb-2 rounded-lg text-white'>/\ <br /> T <br />O <br />P</button></a>
    </div>
  );
};

export default HomeScam;
