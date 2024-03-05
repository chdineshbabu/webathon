import React from 'react';
import Cycle from '../asserts/swim.png';

function Swim() {
  // Sample data for distance traveled (in kilometers) and progress (in percentage)
  const distanceTraveled = 35;
  const progress = (distanceTraveled / 50) * 100; // Assuming the total distance is 50km

  return (
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img src={Cycle} alt="Cycle Logo" className="object-contain w-24 h-24 ml-8 mr-10 md:w-32 md:h-auto md:rounded-l-lg" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Swimming</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{distanceTraveled} Min/day</p>
        <div className="progress-bar bg-gray-300 w-full h-3 mb-2 rounded-full">
          <div className="progress bg-lime-600 h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </a>
  );
}

export default Swim;
