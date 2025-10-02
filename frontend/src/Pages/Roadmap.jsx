import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaCheckCircle, FaBook, FaArrowRight } from "react-icons/fa";

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
};

const Roadmap = () => {
  const careers = Object.keys(careerRoadmaps);
  const [selectedCareer, setSelectedCareer] = useState(careers[0]);
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = careerRoadmaps[selectedCareer].length;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8 pt-20 mt-20">
        <h1 className="text-4xl font-bold text-center text-blue-600 mt-7">
          Career Roadmap
        </h1>

        {/* Career Dropdown */}
        <div className="flex justify-center mb-10">
          <select
            className="p-3 border text-xl bg-gray-800 text-white rounded-md shadow focus:ring-2 focus:ring-blue-400"
            value={selectedCareer}
            onChange={(e) => {
              setSelectedCareer(e.target.value);
              setCurrentStep(0);
            }}
          >
            {careers.map((career) => (
              <option key={career} value={career}>
                {career}
              </option>
            ))}
          </select>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
          <p className="text-right text-sm mt-1 text-gray-600">
            Step {currentStep + 1} / {totalSteps}
          </p>
        </div>

        {/* Current Step Card */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl bg-white relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg text-white text-3xl">
              {currentStep + 1}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            {careerRoadmaps[selectedCareer][currentStep]}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Step {currentStep + 1} of {totalSteps}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold text-white shadow-lg transition transform ${
                currentStep === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              ⬅ Previous
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === totalSteps - 1}
              className={`px-6 py-3 rounded-lg font-semibold text-white shadow-lg transition transform ${
                currentStep === totalSteps - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-500 hover:bg-purple-600"
              }`}
            >
              Next ➡
            </button>
          </div>

          {/* Optional Icon */}
          <div className="absolute bottom-4 right-4 text-gray-400 animate-bounce">
            <FaArrowRight size={24} />
          </div>
        </div>

        {/* Step Indicator Timeline */}
        <div className="max-w-3xl mx-auto mt-12 flex justify-between">
          {careerRoadmaps[selectedCareer].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full shadow-lg mb-2 transition-all ${
                  index <= currentStep
                    ? "bg-green-500 text-white flex items-center justify-center"
                    : "bg-gray-300"
                }`}
              >
                {index <= currentStep && <FaCheckCircle />}
              </div>
              <div className="w-1 h-8 bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
