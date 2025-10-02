import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { FaLightbulb, FaCopy, FaChevronDown, FaChevronUp, FaHeart, FaRegHeart } from "react-icons/fa";

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

const feedbackEmojis = ["👍", "😎", "🤔"];

const QuickTips = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [tipOfDay, setTipOfDay] = useState(null);

  useEffect(() => {
    // Pick a random Tip of the Day
    const randomTip = quickTips[Math.floor(Math.random() * quickTips.length)];
    setTipOfDay(randomTip);
  }, []);

  const toggleTip = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const copyTip = (detail) => {
    navigator.clipboard.writeText(detail);
    alert("Tip copied to clipboard!");
  };

  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleFeedback = (index, emoji) => {
    setFeedback((prev) => ({ ...prev, [index]: emoji }));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-5 py-16 text-center mt-45">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center justify-center gap-2">
          <FaLightbulb className="animate-pulse text-yellow-400" /> Quick Tips for Interviews
        </h2>

        {tipOfDay && (
          <div className="mb-10 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-left rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">💡 Tip of the Day: {tipOfDay.title}</h3>
            <p className="text-sm text-yellow-800 mt-1">{tipOfDay.detail}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickTips.map((tip, index) => (
            <div
              key={index}
              className={`relative bg-gray-100 rounded-xl p-6 shadow-lg cursor-pointer transform transition-all duration-300
                          hover:scale-105 hover:shadow-2xl ${expandedIndex === index ? "from-pink-100 to-pink-300 shadow-xl" : ""}`}
              onClick={() => toggleTip(index)}
              title="Click to Expand"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
                  {tip.title} {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </h3>

                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(index);
                  }}
                  title="Favorite Tip"
                >
                  {favorites.includes(index) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              {/* Smooth Expand Animation */}
              <div className={`overflow-hidden transition-all duration-500 ${expandedIndex === index ? "max-h-60 mt-2" : "max-h-0"}`}>
                <p className="text-blue-700 text-sm mb-2">{tip.detail}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-2">
                    {feedbackEmojis.map((emoji) => (
                      <button
                        key={emoji}
                        className={`text-lg ${feedback[index] === emoji ? "scale-125" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFeedback(index, emoji);
                        }}
                        title="Give Feedback"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>

                  <button
                    className="text-sm bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-blue-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyTip(tip.detail);
                    }}
                    title="Copy Tip"
                  >
                    <FaCopy /> Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickTips;
