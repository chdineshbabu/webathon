// ChallengeCardContainer.js
import React, { useState, useEffect } from 'react';
import ChallengeCard from './chalanges';
import ChallengeCreationForm from './ChallengeCreationForm';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { firestore } from './firebaseconfig';

const ChallengeCardContainer = () => {
  const [showCreationForm, setShowCreationForm] = useState(false);
  const [challenges, setChallenges] = useState([]);

  // Fetch challenges from Firestore
  const fetchChallenges = async () => {
    const challengesCollection = collection(firestore, 'challenges');
    const challengesSnapshot = await getDocs(challengesCollection);
    const challengesData = challengesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setChallenges(challengesData);
  };

  useEffect(() => {
    fetchChallenges();
  }, []); // Run the fetchChallenges function once when the component mounts

  const handleStartChallenge = async (challenge) => {
    // Add the selected challenge to Firestore
    const challengesCollection = collection(firestore, 'userChallenges');
    await addDoc(challengesCollection, challenge);

    // Show the creation form
    setShowCreationForm(true);
  };

  // Custom demo challenges
  const customDemoChallenges = [
    {
      id: 5,
      title: 'Yoga Bliss',
      description: 'Experience tranquility with a 30-day yoga challenge.',
      imageUrl: 'https://cdn.dribbble.com/users/3414434/screenshots/14616859/media/4b6a3e74dc937c365b278f85a200e73b.gif?resize=400x0',
    },
    {
      id: 6,
      title: 'Mindful Meditation',
      description: 'Calm your mind and reduce stress with daily meditation sessions.',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/34/52/51/1000_F_234525184_icSSY0HuSzT53cm1TP5LbesR2gxv0suY.jpg',
    },
    {
      id: 7,
      title: 'Abs Sculpt',
      description: 'Carve out your core with this intense 4-week ab workout.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6Oo6eFIC0iEpxFv3f47gYcT78xcNGHEUGsCj3wQBVWhFtldhJvGOyrKFTWGD-VawxK4&usqp=CAU',
    },
    {
      id: 8,
      title: 'Pilates Power',
      description: 'Strengthen and tone your body with a 21-day Pilates challenge.',
      imageUrl: 'https://www.realsimple.com/thmb/_8CzlhvKnREIbAYSNivKszibUcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5PilatesExercises_RS_PilatesExercises_3_GraceCanaan-9c84ffe2a76e41ba93ab003a3c2161ec.jpg',
    },
    // Add more demo challenges as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-900">
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          title={challenge.title}
          description={challenge.description}
          imageUrl={challenge.imageUrl}
          onStartChallenge={() => handleStartChallenge(challenge)}
        />
      ))}
      {customDemoChallenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          title={challenge.title}
          description={challenge.description}
          imageUrl={challenge.imageUrl}
          onStartChallenge={() => handleStartChallenge(challenge)}
        />
      ))}
      {showCreationForm && <ChallengeCreationForm onClose={() => setShowCreationForm(false)} />}
    </div>
  );
};

export default ChallengeCardContainer;
