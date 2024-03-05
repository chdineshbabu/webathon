// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7nyPzlLIIQFU0AOBSG2bP4w-IeCuACtk",
  authDomain: "fitness-2eda8.firebaseapp.com",
  projectId: "fitness-2eda8",
  storageBucket: "fitness-2eda8.appspot.com",
  messagingSenderId: "600838621857",
  appId: "1:600838621857:web:8f858bc50e4c1f2a0abee0",
  measurementId: "G-C1Y63Y21RR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };