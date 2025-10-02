import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaChevronDown } from "react-icons/fa";

const questionBank = {
  "Frontend Developer": [
    { question: "What is the difference between React and Angular?", answer: "React is a library focusing on UI, Angular is a full framework." },
    { question: "Explain the Virtual DOM.", answer: "Virtual DOM is a lightweight copy of the real DOM used by React for efficient updates." },
    { question: "What are React hooks?", answer: "Hooks are functions that let you use state and lifecycle features in functional components." },
    { question: "What is the purpose of JSX in React?", answer: "JSX allows writing HTML-like syntax in JavaScript, which React transforms into DOM elements." },
    { question: "How does state management work in React?", answer: "State is stored in components and can be updated using setState or useState, causing re-rendering." },
  ],
  "Backend Developer": [
    { question: "Explain the difference between SQL and NoSQL.", answer: "SQL databases are relational, NoSQL databases are non-relational and more flexible." },
    { question: "What is REST API?", answer: "REST API is an interface for communication between client and server using HTTP methods." },
    { question: "How does authentication work in Node.js?", answer: "Authentication verifies user identity, often using tokens, sessions, or OAuth." },
  ],
};

const Explore = () => {
  const roles = Object.keys(questionBank);
  const [role, setRole] = useState(roles[0]);
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const questions = questionBank[role] || [];
  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  // Text highlight function
  const highlightText = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 dark:bg-yellow-600">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'} min-h-screen flex mt-40`}>
        
        {/* Dark/Light Toggle */}
        <button
          className="fixed top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-lg z-50"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Sidebar */}
        <aside className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} w-64 shadow-lg p-6 sticky top-24 h-fit`}>
          <h2 className="text-xl font-bold mb-4 text-blue-600">Categories</h2>
          <ul className="space-y-3">
            {roles.map((roleName) => (
              <li
                key={roleName}
                className={`cursor-pointer p-2 rounded-lg font-medium transition-colors ${
                  role === roleName
                    ? "bg-blue-500 text-white"
                    : darkMode
                      ? "hover:bg-gray-700"
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
          <h1 className="text-3xl font-bold mb-6">{role} Questions & Answers</h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${darkMode ? 'bg-gray-700 text-gray-100 placeholder-gray-300' : 'bg-white text-gray-800 placeholder-gray-500'} w-full p-3 border rounded-xl mb-6 focus:ring-2 focus:ring-blue-400`}
          />

          {/* Questions List */}
          <div className="space-y-6">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-gray-800 border-gray-600 hover:shadow-xl' : 'bg-white border-blue-500 hover:shadow-lg'} shadow-md p-5 rounded-xl border-l-4 transition cursor-pointer`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-2">
                    {role}
                  </span>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">
                      {index + 1}. {highlightText(q.question, search)}
                    </h3>
                    <span
                      className={`text-blue-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    >
                      <FaChevronDown />
                    </span>
                  </div>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-blue-50 border-blue-500 text-gray-600'} p-4 rounded-lg border-l-2 flex justify-between items-start`}>
                      <p className="flex-1">{highlightText(q.answer, search)}</p>
                      <button
                        className="ml-3 text-sm bg-blue-500 text-white px-3 py-1 rounded-lg"
                        onClick={() => navigator.clipboard.writeText(q.answer)}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-4">No matching questions found.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Explore;
