// NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-6xl text-gray-600 font-semibold">404 - Kinster Group</h1>
      <p className="text-2xl text-gray-600 font-medium mb-4">Page Not Found</p>
      <p className="text-lg text-gray-500">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
