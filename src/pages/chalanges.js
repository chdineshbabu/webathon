// ChallengeCard.js
import React from 'react';

const ChallengeCard = ({ title, description, imageUrl }) => (
  <div className="max-w-xs w-full sm:max-w-sm lg:max-w-full lg:w-1/4 md:w-1/2 px-3 mb-6">
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Challenge" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <a href="#" className="mt-4 block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md text-center">Start Challenge</a>
      </div>
    </div>
  </div>
);

export default ChallengeCard;
