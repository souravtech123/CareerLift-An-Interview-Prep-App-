import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const quickTips = [
  { title: "Research Company", detail: "Understand the company's mission, products, and culture before your interview." },
  { title: "Practice Coding", detail: "Solve daily problems and revise core concepts for technical rounds." },
  { title: "STAR Method", detail: "Use Situation, Task, Action, Result for behavioral questions." },
  { title: "Stay Calm", detail: "Breathe and approach each question methodically." },
  { title: "Ask Questions", detail: "Prepare a few insightful questions to ask the interviewer." },
  { title: "Dress Professionally", detail: "Choose attire that fits the company's culture." },
  { title: "Time Management", detail: "Read instructions carefully and allocate time wisely." },
  { title: "Portfolio Ready", detail: "Have your projects and achievements prepared to discuss." },
  { title: "Confidence", detail: "Believe in your skills and communicate clearly." },
  { title: "Follow Up", detail: "Send a polite thank-you email after your interview." }
];

const QuickTips = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleTip = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto px-5 py-16 text-center mt-45">
      <h2 className="text-3xl font-bold mb-10 text-blue-900">💡 Quick Tips for Interviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickTips.map((tip, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 
                        hover:scale-105 ${expandedIndex === index ? "bg-gradient-to-br from-pink-100 to-pink-300" : ""}`}
            onClick={() => toggleTip(index)}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{tip.title}</h3>
            {expandedIndex === index && (
              <p className="text-blue-700 mt-2 text-sm">{tip.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default QuickTips;
