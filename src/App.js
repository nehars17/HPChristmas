import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Pages/Home";
import EnrollPage from "./components/Pages/EnrollPage";
// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBN0Gc2DJCPuvWABnoGBlYCI9BzVZwG-o",
  authDomain: "hpkk-3ecdc.firebaseapp.com",
  projectId: "hpkk-3ecdc",
  storageBucket: "hpkk-3ecdc.appspot.com", // Fixed typo: was "firebasestorage.app"
  messagingSenderId: "417856234233",
  appId: "1:417856234233:web:847592f9e7ab4123977828"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<EnrollPage />} />
      </Routes>
    </Router>
  );
}

export default App;
