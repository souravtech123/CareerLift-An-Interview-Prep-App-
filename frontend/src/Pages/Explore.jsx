import React, { useState } from "react";
import Navbar from "../Components/Navbar";


const questionBank = {
  "Frontend Developer": [
    "What is the difference between React and Angular?",
    "Explain the Virtual DOM.",
    "What are React hooks?",
    "What is the purpose of JSX in React?",
    "How does state management work in React?",
    "What are props in React?",
    "Explain the difference between class and functional components.",
    "What is the use of useEffect hook?",
    "How do you handle events in React?",
    "Explain the concept of component lifecycle in React."
  ],

  "Backend Developer": [
    "Explain the difference between SQL and NoSQL.",
    "What is REST API?",
    "How does authentication work in Node.js?",
    "What is middleware in Express.js?",
    "Explain CRUD operations.",
    "What is the purpose of environment variables?",
    "How do you handle errors in Node.js?",
    "What is the difference between PUT and POST?",
    "Explain asynchronous programming in Node.js.",
    "How do you connect Node.js to a database?"
  ],

  "Data Scientist": [
    "What is supervised vs unsupervised learning?",
    "Explain overfitting and underfitting.",
    "What is a confusion matrix?",
    "What is the difference between regression and classification?",
    "Explain precision, recall, and F1-score.",
    "What is feature engineering?",
    "What is cross-validation?",
    "Explain bias vs variance trade-off.",
    "What are outliers and how do you handle them?",
    "What is the difference between Pandas and NumPy?"
  ],

  "AI/ML Engineer": [
    "What is machine learning?",
    "Explain the difference between supervised and unsupervised learning.",
    "What is a neural network?",
    "What is deep learning?",
    "What are activation functions?",
    "What is backpropagation?",
    "Explain overfitting and regularization.",
    "What is the purpose of a loss function?",
    "What is reinforcement learning?",
    "What is the difference between classification and regression models?"
  ],
};


const Explore = () => {
  const roles = Object.keys(questionBank); // ✅ get role list safely
  const [role, setRole] = useState(roles[0]); // ✅ default to first role
  const [search, setSearch] = useState("");

  
  const questions = questionBank[role] || [];
  const filteredQuestions = questions.filter((q) =>
    q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="mt-45">
      
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Categories</h2>
          <ul className="space-y-3">
            {roles.map((roleName, idx) => (
              <li
                key={idx}
                className={`cursor-pointer p-2 rounded-lg font-medium ${
                  role === roleName
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100"
                }`}
                onClick={() => setRole(roleName)}
              >
                {roleName}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {role} Questions
          </h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded-xl mb-6 focus:ring-2 focus:ring-blue-400"
          />

          {/* Questions List */}
          <div className="space-y-6">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-5 rounded-xl border-l-4 border-blue-500"
                >
                  <h3 className="font-semibold text-lg text-gray-700">
                    {index + 1}. {question}
                  </h3>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No matching questions found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default Explore;
