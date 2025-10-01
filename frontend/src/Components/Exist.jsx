import React from 'react'
import { motion } from "motion/react";
import img1 from '../assets/apple_731985.png'
import img2 from '../assets/icons8-google-logo-48.png'
import img3 from '../assets/icons8-meta-48.png'
import img4 from '../assets/icons8-netflix-logo-94.png'
import img5 from '../assets/Microsoft_Logo_512px.png'
import { NavLink } from 'react-router';

const Exist = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-blue-50 to-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      {/* Tagline */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-900"
      >
        Ace Your Interviews, Effortlessly
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-gray-600 text-lg md:text-xl max-w-xl"
      >
        Personalized prep, curated question bank, and a supportive community to help you land your dream job.
      </motion.p>

      {/* Get Started Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        <NavLink to="/Start" end>
           Get Started
        </NavLink>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 flex space-x-10 justify-center flex-wrap"
      >
        {/* Replace src with your PNG images */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src={img1} alt="Question Bank" className="w-16 h-16" />
          <span className="text-sm mt-2"></span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src={img2} alt="Personalized Prep" className="w-16 h-16" />
          <span className="text-sm mt-2"></span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src={img3} alt="Community" className="w-16 h-16" />
          <span className="text-sm mt-2"></span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src={img4} alt="Growth Dashboard" className="w-16 h-16" />
          <span className="text-sm mt-2"></span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src={img5} alt="Team" className="w-16 h-16" />
          <span className="text-sm mt-2"></span>
        </div>
      </motion.div>

     
    </section>


    </div>
  )
}

export default Exist