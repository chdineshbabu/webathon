import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebaseconfig';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const history = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const userData = {
        fullName,
        email,
        password,
        dateOfBirth,
        weight: parseInt(weight),
        height: parseInt(height),
      };
      const usersCollection = collection(firestore, 'users');
      const docRef = await addDoc(usersCollection, userData);
      console.log('User added with ID: ', docRef.id);
      history('/login');
    } catch (error) {
      console.error('Error adding user: ', error.message);
      alert('Error adding user. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-md shadow-xl">
        <h2 className="text-3xl font-semibold text-center mb-6">💪 Create a New Account</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="text-gray-400">Full Name:</label>
            <input type="text" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Email:</label>
            <input type="email" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Password:</label>
            <input type="password" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Confirm Password:</label>
            <input type="password" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Date of Birth:</label>
            <input type="date" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Weight:</label>
            <input type="number" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Height:</label>
            <input type="number" className="w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-green-500" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 py-1 px-3 rounded-md focus:outline-none">Sign Up</button>
        </form>
        <p className="text-gray-400 text-center mt-4">Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
