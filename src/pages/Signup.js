import React from 'react';

const Signup = () => {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-md shadow-xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Create a New Account</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="text-gray-400">Full Name:</label>
            <input type="text" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Email:</label>
            <input type="email" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Password:</label>
            <input type="password" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Confirm Password:</label>
            <input type="password" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Date of Birth:</label>
            <input type="date" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Weight:</label>
            <input type="number" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Height:</label>
            <input type="number" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 py-1 px-3 rounded-md focus:outline-none">Sign Up</button>
        </form>
        <p className="text-gray-400 text-center mt-4">Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
