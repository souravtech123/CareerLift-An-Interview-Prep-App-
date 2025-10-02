import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCompass, FaRoad, FaInfoCircle, FaEnvelope, FaBook } from "react-icons/fa";

const routes = [
  { name: "Explore", path: "/Explore", description: "Discover different domains and features of Career Lift.", icon: <FaCompass size={30} className="text-white" />, tip: "Start with exploring all features to know what’s available." },
  { name: "Roadmap", path: "/Roadmap", description: "Check step-by-step learning paths for various skills.", icon: <FaRoad size={30} className="text-white" />, tip: "Follow the roadmap to systematically learn new skills." },
  { name: "Tips", path: "/About", description: "Quick hacks, smart strategies, and essential tricks to ace your interviews effortlessly", icon: <FaInfoCircle size={30} className="text-white" />, tip: "Use these tips before interviews for maximum impact." },
  { name: "Cheats", path: "/Contact", description: "Handy cheat sheets and shortcuts to quickly revise key concepts before your interview.", icon: <FaEnvelope size={30} className="text-white" />, tip: "Keep cheat sheets handy for last-minute revisions." },
  { name: "Practice", path: "/Practice", description: "Start practicing questions and improve your skills.", icon: <FaBook size={30} className="text-white" />, tip: "Practice consistently to improve speed and accuracy." },
];

const Start = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-6 flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-700 animate-bounce mb-4">
          🚀 Explore Career Lift
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Navigate through all the features of Career Lift! Explore roadmaps, practice questions, learn about us, or get in touch.
        </p>
      </div>

      {/* Routes Grid with Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            <div
              className={`relative w-full h-64 perspective cursor-pointer`}
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <div className={`relative w-full h-full duration-700 transform-style preserve-3d ${flippedIndex === index ? "rotate-y-180" : ""}`}>
                
                {/* Front Side */}
                <div className="absolute w-full h-full bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 backface-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                    {route.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{route.name}</h2>
                  <p className="text-blue-100 text-sm">{route.description}</p>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-gradient-to-tr from-blue-700 to-indigo-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180 text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">💡 Quick Tip</h3>
                  <p className="text-sm">{route.tip}</p>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-700">
          Ready to Boost Your Skills?
        </h2>
        <p className="text-gray-700 mb-6">Start practicing and exploring now!</p>
        <Link to="/Practice">
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl animate-pulse">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Start;
