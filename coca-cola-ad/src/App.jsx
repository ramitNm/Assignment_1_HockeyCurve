import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './App.css';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish((prevIsEnglish) => !prevIsEnglish);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="ad-container bg-white text-black p-4 rounded-lg shadow-lg w-[300px] h-[250px] relative overflow-hidden border-2 border-red-300">
        <div className="text-center">
          <img
            src="/images/Coca-Cola_logo.png"
            alt="Coca Cola"
            className="logo mx-auto mb-2"
            style={{ width: '100px' }}
          />
          <h2 className={`text-2xl font-bold mb-2 animate-bomb ${isEnglish ? 'english' : 'hindi'}`}>
            {isEnglish ? 'Wish You a Happy New Year' : 'नव वर्ष की हार्दिक शुभकामनाएँ'}
          </h2>
          <p className="text-sm mb-4">Taste the Feeling</p>
          <a
            href="https://www.coca-colacompany.com/"
            className="action-button inline-block bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300"
          >
            Know More <FaArrowRight className="inline ml-2" />
          </a>
        </div>
        <img
          src="/images/coke.png"
          alt="Balloon"
          className="balloon bottom-4 left-4 absolute"
          style={{ width: '40px' }}
        />
        <img
          src="/images/coke.png"
          alt="Balloon"
          className="balloon bottom-4 right-4 absolute"
          style={{ width: '40px' }}
        />
      </div>
    </div>
  );
}

export default App;
