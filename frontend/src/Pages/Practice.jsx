import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

// Question Bank with multiple domains
const questionBank = {
  "Frontend Developer": [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
    { question: "Which tag is used for a paragraph?", options: ["<p>", "<h1>", "<div>"], answer: 0 },
    { question: "Which CSS property changes text color?", options: ["color", "font-size", "background-color"], answer: 0 },
    { question: "What is the purpose of React's useState?", options: ["State management", "Routing", "Styling"], answer: 0 },
  ],
  "Backend Developer": [
    { question: "Which framework is commonly used with Node.js?", options: ["Express.js", "React.js", "Django"], answer: 0 },
    { question: "Which HTTP method is used to create data?", options: ["POST", "GET", "DELETE"], answer: 0 },
  ],
  "Data Scientist": [
    { question: "Which library is used for data manipulation in Python?", options: ["Pandas", "NumPy", "Matplotlib"], answer: 0 },
    { question: "Which method fills missing values in Pandas?", options: ["fillna()", "dropna()", "replace()"], answer: 0 },
  ],
  "AI/ML Engineer": [
    { question: "What does ML stand for?", options: ["Machine Learning", "Mega Logic", "Model Learning"], answer: 0 },
    { question: "Which is a supervised learning algorithm?", options: ["Linear Regression", "K-Means", "DBSCAN"], answer: 0 },
  ],
};

// Domain button gradient colors
const domainColors = {
  "Frontend Developer": "from-purple-500 to-pink-500",
  "Backend Developer": "from-green-400 to-blue-500",
  "Data Scientist": "from-yellow-400 to-orange-500",
  "AI/ML Engineer": "from-indigo-500 to-purple-700",
};

const Practice = () => {
  const [domain, setDomain] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // If domain not selected, show domain selection screen
  if (!domain) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Select a Domain to Practice</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {Object.keys(questionBank).map((d) => (
              <button
                key={d}
                className={`px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r ${domainColors[d]} shadow-lg transform hover:scale-105 transition`}
                onClick={() => setDomain(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }

  const questions = questionBank[domain];

  // Handle answer click
  const handleAnswer = (index) => {
    if (index === questions[currentQ].answer) setScore(score + 1);
    if (currentQ + 1 < questions.length) setCurrentQ(currentQ + 1);
    else setShowResult(true);
  };

  // Show result screen
  if (showResult) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{domain} Quiz Result</h2>
            <p className="text-xl mb-6 text-gray-700">Your Score: <span className="font-bold text-purple-600">{score} / {questions.length}</span></p>

            {score === questions.length && (
              <div className="mb-4 py-2 px-4 bg-yellow-200 text-yellow-800 font-bold rounded-xl animate-bounce shadow-md">
                🎉 Perfect Score! You are a Genius!
              </div>
            )}

            <button
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition"
              onClick={() => { setDomain(''); setCurrentQ(0); setScore(0); setShowResult(false); }}
            >
              Try Another Domain
            </button>
          </div>
        </div>
      </>
    );
  }

  // Quiz screen
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-white">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{domain} Quiz</h2>

          {/* Question Box */}
          <div className="mb-6 p-6 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-2xl text-white shadow-inner animate-pulse">
            <p className="text-xl">{questions[currentQ].question}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-purple-500 h-4 rounded-full transition-all"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-4">
            {questions[currentQ].options.map((option, i) => (
              <button
                key={i}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition transform"
                onClick={() => handleAnswer(i)}
              >
                {option}
              </button>
            ))}
          </div>

          <p className="mt-4 text-gray-600 text-right text-sm">
            Question {currentQ + 1} / {questions.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default Practice;
