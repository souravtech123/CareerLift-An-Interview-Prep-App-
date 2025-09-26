import React from 'react'
import img1 from '../assets/9963615.jpg'
import img2 from '../assets/networked-cityscape-with-connected-icons.jpg'
import img3 from '../assets/vecteezy_data-analyst-cloud-server-network_5638017.jpg'
import img4 from '../assets/vecteezy_q-and-a-or-faq-concept-with-tiny-people-characters-big_6959758.jpg'

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="py-16 px-6 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Features</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <FeatureCard 
          icon={img4}
          title="Question Bank"
          description="Practice with a huge library of real interview questions."
        />
        <FeatureCard 
          icon={img1}
          title="Personalized Prep"
          description="Get tailored guidance based on your skills and goals."
        />
        <FeatureCard 
          icon={img2}
          title="Community"
          description="Connect, share experiences, and grow with peers."
        />
        <FeatureCard 
          icon={img3}
          title="Growth Dashboard"
          description="Track your progress and improve continuously."
        />
      </div>
    </section>
  );
}
