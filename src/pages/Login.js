import React from 'react';

const Login = () => {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-md shadow-xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Fitness App Login</h2>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="text-gray-400">Email:</label>
            <input type="email" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div>
            <label className="text-gray-400">Password:</label>
            <input type="password" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-400">Remember me</label>
            </div>
            <a href="#" className="text-green-500 hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md focus:outline-none">Login</button>
        </form>
        <p className="text-gray-400 text-center mt-4">Don't have an account? <a href="#" className="text-green-500 hover:underline">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
