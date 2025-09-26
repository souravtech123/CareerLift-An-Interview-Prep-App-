import React from 'react'
import img1 from '../assets/vecteezy_industry-4-0-concept-business-control-or-logo-world-factory_7905928.jpg'
import img2 from '../assets/—Pngtree—career_3634495.png'
import img3 from '../assets/SL-012322-48100-35.jpg'

export default function Why() {
    return (
      <section className="bg-gray-50 py-20 px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why We Exist
        </h2>
  
        {/* Subheading / Description */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Our mission is to empower job seekers and students to prepare confidently for interviews. 
          We provide personalized preparation, a curated question bank, and a supportive community 
          to ensure growth and success in every step of your career journey.
        </p>
  
        {/* Values / Icons */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <img src={img1} alt="Innovation" className="w-50 h-30 mb-4" />
            <h3 className="font-bold text-lg text-blue-950">Innovation</h3>
            <p className="text-gray-500 mt-2 text-sm">We bring smart solutions for efficient interview prep.</p>
          </div>
  
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <img src={img2} alt="Support" className="w-50 h-30 mb-4" />
            <h3 className="font-bold text-lg text-blue-950">Support</h3>
            <p className="text-gray-500 mt-2 text-sm">A community that guides and motivates you through your journey.</p>
          </div>
  
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <img src={img3} alt="Growth" className="w-30 h-30 mb-4" />
            <h3 className="font-bold text-lg text-blue-950">Growth</h3>
            <p className="text-gray-500 mt-2 text-sm">Track progress, improve skills, and achieve your career goals.</p>
          </div>
        </div>
      </section>
    );
  }
  