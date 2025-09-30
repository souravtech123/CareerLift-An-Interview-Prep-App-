import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
  <>
  <Navbar/>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8 mt-45">
      
      {/* Header */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          About Our Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          We provide interactive learning tools, quizzes, and resources to help students and professionals enhance their skills efficiently.
        </p>
      </div>

      {/* Features / Highlights */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
          <div className="text-4xl mb-4 text-green-500">📚</div>
          <h2 className="text-xl font-semibold mb-2">Extensive Resources</h2>
          <p className="text-gray-600 text-center">
            Access a wide range of tutorials, practice questions, and study materials.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
          <div className="text-4xl mb-4 text-blue-500">📝</div>
          <h2 className="text-xl font-semibold mb-2">Interactive Quizzes</h2>
          <p className="text-gray-600 text-center">
            Test your knowledge across multiple domains with real-time scoring.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
          <div className="text-4xl mb-4 text-purple-500">🚀</div>
          <h2 className="text-xl font-semibold mb-2">Skill Growth</h2>
          <p className="text-gray-600 text-center">
            Track your progress and level up your skills over time with our platform.
          </p>
        </div>
      </div>

      {/* Mission / Vision Section */}
      <div className="mt-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          To make learning engaging, accessible, and effective for everyone, helping users achieve their career and personal growth goals.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
