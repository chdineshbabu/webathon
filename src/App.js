import './App.css';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import Dashboard from './pages/Dashboard.js';
import Signup from './pages/Signup.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChallengeCreationForm from './pages/ChallengeCreationForm.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/creation" element={<ChallengeCreationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
