import React from "react";
import { Link } from "react-router-dom";
import { FaCompass, FaRoad, FaInfoCircle, FaEnvelope, FaBook } from "react-icons/fa";

const routes = [
  { name: "Explore", path: "/Explore", description: "Discover different domains and features of Career Lift.", icon: <FaCompass size={30} className="text-white" /> },
  { name: "Roadmap", path: "/Roadmap", description: "Check step-by-step learning paths for various skills.", icon: <FaRoad size={30} className="text-white" /> },
  { name: "Tips", path: "/About", description: "Quick hacks, smart strategies, and essential tricks to ace your interviews effortlessly", icon: <FaInfoCircle size={30} className="text-white" /> },
  { name: "Cheats", path: "/Contact", description: "Handy cheat sheets and shortcuts to quickly revise key concepts before your interview.", icon: <FaEnvelope size={30} className="text-white" /> },
  { name: "Practice", path: "/Practice", description: "Start practicing questions and improve your skills.", icon: <FaBook size={30} className="text-white" /> },
];

const Start = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-6 flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4 animate-bounce">
          🚀 Explore Career Lift
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Navigate through all the features of Career Lift! Explore roadmaps, practice questions, learn about us, or get in touch.
        </p>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            <div className="relative group bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl shadow-2xl p-8 cursor-pointer overflow-hidden transform transition-transform hover:-translate-y-3 hover:shadow-3xl">
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
                {route.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{route.name}</h2>
              <p className="text-blue-100 text-sm">{route.description}</p>

              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-10 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Boost Your Skills?</h2>
        <p className="text-gray-700 mb-6">Start practicing and exploring now!</p>
        <Link to="/Practice">
          <button className="px-10 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Start;
