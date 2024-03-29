import React from 'react';
import User from '../asserts/user.png'
const UserProfile = () => {
  return (
    <div className="bg-primary text-white font-sans min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-12 h-full">
        <div className="max-w-screen-xl mx-auto bg-gray-900 p-12 rounded-lg shadow-xl flex flex-col md:flex-row items-center h-full"> 
          <div className="md:w-1/3 md:pr-8 mb-4 md:mb-0"> 
            <img src={User} alt="Profile Picture" className="w-48 h-48 rounded-full mx-auto border-4 border-white" /> 
          </div>
          <div className="md:w-2/3 pl-0 md:pl-8"> 
            <h2 className="text-3xl font-semibold mb-4">Dinesh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <p className="text-gray-400">Email:</p>
                <p className="text-white">dinesh4128@gmail.com</p>
              </div>
              <div className="mb-4"> 
                <p className="text-gray-400">Date of Birth:</p>
                <p className="text-white">10/06/2004</p>
              </div>
              <div className="mb-4"> 
                <p className="text-gray-400">Age:</p>
                <p className="text-white">19</p>
              </div>
              <div className="relative mb-4">
                <p className="text-gray-400">Weight:</p>
                <p className="text-white">70 kg</p>
                <div className="absolute top-0 right-0 mt-1 mr-2">
                  <span className="text-green-500 text-sm">+5%</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-400">Height:</p>
                <p className="text-white">175 cm</p>
              </div>
              <div className="mb-4"> 
                <p className="text-gray-400">Body Fat Percentage:</p>
                <p className="text-white">15%</p>
              </div>
              <div className="mb-4"> 
                <p className="text-gray-400">Exercise Routine:</p>
                <p className="text-white">3 times a week</p>
              </div>
              <div className="mb-4"> 
                <p className="text-gray-400">Fitness Goal:</p>
                <p className="text-white">Build Muscle</p>
              </div>
              <div className="mb-4"> 
                <p className="text-gray-400">Active Status:</p>
                <p className="text-green-500">Active</p>
              </div>
              <div className="mb-4"> 
                <p className="text-gray-400">Achievements:</p>
                <p className="text-white">Runner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
