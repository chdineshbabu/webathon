// ChallengeCreationForm.js
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './firebaseconfig';

const ChallengeCreationForm = ({ onClose }) => {
  const [challengeTitle, setChallengeTitle] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const challengesCollection = collection(firestore, 'challenges');
    await addDoc(challengesCollection, {
      title: challengeTitle,
      description: challengeDescription,
    });

    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Create a New Challenge</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="text-gray-400">Challenge Title:</label>
            <input
              type="text"
              value={challengeTitle}
              onChange={(e) => setChallengeTitle(e.target.value)}
              className="w-full py-2 px-3 mt-2 rounded-md bg-gray-200 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Challenge Description:</label>
            <textarea
              value={challengeDescription}
              onChange={(e) => setChallengeDescription(e.target.value)}
              className="w-full py-2 px-3 mt-2 rounded-md bg-gray-200 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md">
            Create Challenge
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChallengeCreationForm;
