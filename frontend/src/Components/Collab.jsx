
import img1 from '../assets/Screenshot 2025-09-26 183436.png'
export default function Collab() {
    return (
      <section className="bg-white py-20 px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Collaboration
        </h2>
  
        {/* Subheading / Description */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
        Gain a competitive edge in your interview preparation through expert-curated resources, structured guidance, and a collaborative support network. Our approach combines real-world insights, role-specific strategies, and practical exercises to ensure you enter every interview with confidence, competence, and clarity.
        </p>
  
        {/* Collaborator Logos */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-10">
          <div className="hover:scale-105 transition-transform">
            <img src={img1} alt="XTS" className="w-32 h-auto rounded-4xl" />
          </div>
        </div>
      </section>
    );
  }
  