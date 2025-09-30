import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const careerRoadmaps = {
  "Frontend Developer": [
    "Learn HTML, CSS, JavaScript basics",
    "Learn React.js and component-based architecture",
    "Learn state management (Redux or Context API)",
    "Learn Tailwind CSS and responsive design",
    "Build and deploy real projects",
  ],
  "Backend Developer": [
    "Learn Node.js and Express.js basics",
    "Understand REST APIs and CRUD operations",
    "Learn databases (MongoDB, SQL)",
    "Learn authentication & security",
    "Build and deploy backend projects",
  ],
  "Data Scientist": [
    "Learn Python and basic statistics",
    "Learn NumPy, Pandas, Matplotlib, Seaborn",
    "Learn Machine Learning algorithms",
    "Work on datasets and build projects",
    "Deploy models and create portfolio",
  ],
  "Full Stack Developer": [
    "Learn HTML, CSS, JavaScript for frontend",
    "Learn React.js for frontend projects",
    "Learn Node.js and Express.js for backend",
    "Learn databases (MongoDB, SQL)",
    "Build full-stack projects and deploy",
  ],
  "Mobile App Developer": [
    "Learn JavaScript or Dart basics",
    "Learn React Native or Flutter",
    "Understand app navigation and state management",
    "Work with APIs and device features",
    "Build and publish mobile apps",
  ],
  "AI/ML Engineer": [
    "Learn Python and basic math (linear algebra, statistics)",
    "Learn libraries: NumPy, Pandas, TensorFlow, PyTorch",
    "Understand ML algorithms and deep learning basics",
    "Work on AI/ML projects",
    "Deploy models and optimize performance",
  ],
  "Cybersecurity Specialist": [
    "Learn networking and protocols basics",
    "Understand operating systems and security fundamentals",
    "Learn penetration testing and ethical hacking",
    "Practice with security tools (Wireshark, Metasploit)",
    "Work on security projects and certifications",
  ],
  "Cloud Engineer": [
    "Learn cloud basics (AWS, Azure, or GCP)",
    "Understand cloud services and architecture",
    "Learn deployment, monitoring, and scaling",
    "Practice with serverless and containerization",
    "Build cloud-based projects",
  ],
  "DevOps Engineer": [
    "Learn Linux and command-line basics",
    "Understand CI/CD pipelines",
    "Learn Docker, Kubernetes, and automation tools",
    "Implement monitoring and logging",
    "Build DevOps pipelines for real projects",
  ],
  "UI/UX Designer": [
    "Learn design principles and color theory",
    "Learn wireframing and prototyping tools (Figma, Adobe XD)",
    "Understand user research and personas",
    "Design responsive and interactive interfaces",
    "Build a portfolio of UI/UX projects",
  ],
  "Game Developer": [
    "Learn programming basics (C#, C++, or JavaScript)",
    "Learn game engine (Unity or Unreal Engine)",
    "Understand physics, animation, and graphics",
    "Develop small games and practice coding logic",
    "Build and publish games online",
  ],
};


const Roadmap = () => {
  const careers = Object.keys(careerRoadmaps);
  const [selectedCareer, setSelectedCareer] = useState(careers[0]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p- mt-45">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Career Roadmaps
      </h1>

      {/* Career Selection Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          className="p-3 border rounded-lg shadow focus:ring-2 focus:ring-green-400"
          value={selectedCareer}
          onChange={(e) => setSelectedCareer(e.target.value)}
        >
          {careers.map((career) => (
            <option key={career} value={career}>
              {career}
            </option>
          ))}
        </select>
      </div>

      {/* Roadmap Steps */}
      <div className="max-w-3xl mx-auto space-y-4">
        {careerRoadmaps[selectedCareer].map((step, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow border-l-4 border-green-500 hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-gray-700">
              Step {index + 1}: {step}
            </h2>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Roadmap;
