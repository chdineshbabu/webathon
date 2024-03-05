import React, { useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from './firebaseconfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const usersCollection = collection(firestore, 'users');
    try {
      const usersSnapshot = await getDocs(usersCollection);
      const usersData = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('Users data:', usersData);
  
      const foundUser = usersData.find((user) => user.email === email && user.password === password);
      if (foundUser) {
        history('/dash');
      } else {
        console.log('Login failed: Invalid email or password');
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
      alert('Error fetching users. Please try again later.');
    }
  };
  

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-md shadow-xl">
        <h2 className="text-3xl font-semibold text-center mb-6">💪 Fitness App Login 💪</h2>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleLogin}>
          <div>
            <label className="text-gray-400">Email:</label>
            <input
              type="email"
              className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-400">Password:</label>
            <input
              type="password"
              className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-400">
                Remember me
              </label>
            </div>
            <a href="#" className="text-green-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md focus:outline-none">
            Login
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Don't have an account? <a href="/signup" className="text-green-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
