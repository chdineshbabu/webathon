// ChallengeCardContainer.js
import React from 'react';
import ChallengeCard from './chalanges'; // Import the ChallengeCard component

const ChallengeCardContainer = () => {
  // Sample challenges data
  const demoChallenges = [
    {
      id: 1,
      title: '30-Day Cardio Challenge',
      description: 'Improve your cardiovascular health with daily cardio exercises.',
      imageUrl: 'cardio-image.jpg',
    },
    {
      id: 2,
      title: 'Strength Training Bootcamp',
      description: 'Build muscle and strength through a 4-week intensive training program.',
      imageUrl: 'strength-image.jpg',
    },
    {
      id: 3,
      title: 'Flexibility Fusion',
      description: 'Enhance your flexibility with a blend of yoga and stretching routines.',
      imageUrl: 'flexibility-image.jpg',
    },
    {
      id: 4,
      title: 'High-Intensity Interval Training (HIIT)',
      description: 'Burn calories and boost your metabolism with intense interval workouts.',
      imageUrl: 'hiit-image.jpg',
    },
    // Add more demo challenges as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-900">
      {demoChallenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          title={challenge.title}
          description={challenge.description}
          imageUrl={challenge.imageUrl}
        />
      ))}
    </div>
  );
};

export default ChallengeCardContainer;
