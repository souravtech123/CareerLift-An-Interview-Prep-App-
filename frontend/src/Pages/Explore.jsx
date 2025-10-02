import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const questionBank = {
  "Frontend Developer": [
    { question: "What is the difference between React and Angular?", answer: "React is a library focusing on UI, Angular is a full framework." },
    { question: "Explain the Virtual DOM.", answer: "Virtual DOM is a lightweight copy of the real DOM used by React for efficient updates." },
    { question: "What are React hooks?", answer: "Hooks are functions that let you use state and lifecycle features in functional components." },
    { question: "What is the purpose of JSX in React?", answer: "JSX allows writing HTML-like syntax in JavaScript, which React transforms into DOM elements." },
    { question: "How does state management work in React?", answer: "State is stored in components and can be updated using setState or useState, causing re-rendering." },
    { question: "What is the difference between props and state?", answer: "Props are read-only data passed from parent to child, while state is mutable data managed within the component." },
    { question: "What is the use of useEffect in React?", answer: "useEffect is used to perform side effects like data fetching or updating the DOM after rendering." },
    { question: "What is the difference between functional and class components?", answer: "Functional components are simpler and use hooks, while class components use lifecycle methods and state." },
    { question: "What is a key prop in React?", answer: "Key prop helps React identify which items have changed, are added, or removed for efficient rendering." },
    { question: "How do you handle events in React?", answer: "Events are handled using camelCase syntax and passing a function reference, e.g., onClick={handleClick}." }
  ],
  "Backend Developer": [
    { question: "Explain the difference between SQL and NoSQL.", answer: "SQL databases are relational, NoSQL databases are non-relational and more flexible." },
    { question: "What is REST API?", answer: "REST API is an interface for communication between client and server using HTTP methods." },
    { question: "How does authentication work in Node.js?", answer: "Authentication verifies user identity, often using tokens, sessions, or OAuth." },
    { question: "What is middleware in Express.js?", answer: "Middleware functions process requests before reaching the route handler and can modify request/response." },
    { question: "What is the difference between PUT and PATCH?", answer: "PUT replaces the entire resource, PATCH updates only specified fields." },
    { question: "How do you connect Node.js to a database?", answer: "By using drivers or ORMs like mongoose for MongoDB or Sequelize for SQL databases." },
    { question: "What is the purpose of environment variables in backend?", answer: "Environment variables store configuration like API keys or database URLs securely." },
    { question: "How does error handling work in Express?", answer: "Errors are handled using next(err) and error-handling middleware to send responses gracefully." },
    { question: "What is JWT and how is it used?", answer: "JWT is a JSON Web Token used to securely transmit information between client and server, often for authentication." },
    { question: "What is CORS and why is it important?", answer: "CORS (Cross-Origin Resource Sharing) allows servers to control which origins can access resources." }
  ],
  "Data Scientist": [
    { question: "What is the difference between supervised and unsupervised learning?", answer: "Supervised learning uses labeled data, unsupervised learning finds patterns in unlabeled data." },
    { question: "Which Python library is used for data manipulation?", answer: "Pandas is used for manipulating and analyzing data in Python." },
    { question: "What is the purpose of NumPy in data science?", answer: "NumPy provides efficient array operations and mathematical functions for numerical computations." },
    { question: "What is the difference between Series and DataFrame in Pandas?", answer: "Series is a 1-dimensional labeled array, DataFrame is a 2-dimensional table with rows and columns." },
    { question: "How do you handle missing data in Pandas?", answer: "By using methods like fillna() to replace or dropna() to remove missing values." },
    { question: "What is data normalization?", answer: "Normalization scales features to a standard range, often 0-1, to improve model performance." },
    { question: "What is the difference between classification and regression?", answer: "Classification predicts categorical labels, regression predicts continuous numerical values." },
    { question: "What is feature engineering?", answer: "Feature engineering is the process of creating new features from raw data to improve model performance." },
    { question: "What is a confusion matrix?", answer: "A confusion matrix summarizes classification results showing true positives, false positives, etc." },
    { question: "What is cross-validation?", answer: "Cross-validation splits data into folds to train and test models multiple times for robust evaluation." }
  ],
  "AI/ML Engineer": [
    { question: "What does AI stand for?", answer: "AI stands for Artificial Intelligence." },
    { question: "What is supervised learning?", answer: "Supervised learning trains models on labeled data to predict outcomes." },
    { question: "What is unsupervised learning?", answer: "Unsupervised learning finds patterns in unlabeled data, like clustering or dimensionality reduction." },
    { question: "What is reinforcement learning?", answer: "Reinforcement learning trains agents to make decisions based on rewards and penalties." },
    { question: "What is a neural network?", answer: "A neural network is a model inspired by the brain, consisting of layers of interconnected nodes." },
    { question: "What is overfitting in machine learning?", answer: "Overfitting occurs when a model learns training data too well and performs poorly on new data." },
    { question: "What is gradient descent?", answer: "Gradient descent is an optimization algorithm used to minimize the loss function in training models." },
    { question: "What is the difference between classification and regression?", answer: "Classification predicts categories, regression predicts continuous values." },
    { question: "What is a loss function?", answer: "A loss function measures how well a model's predictions match the actual outcomes." },
    { question: "What is the difference between RNN and CNN?", answer: "RNNs are used for sequential data, CNNs are used for spatial data like images." }
  ]
};

const Explore = () => {
  const roles = Object.keys(questionBank);
  const [role, setRole] = useState(roles[0]);
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const questions = questionBank[role] || [];
  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  const highlightText = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 dark:bg-yellow-600">{part}</span>
      ) : part
    );
  };

  return (
    <>
      <Navbar />

      {/* Dark/Light Toggle */}
      <button
        className=" fixed top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-lg z-50 mt-10"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-6 left-6 bg-blue-500 text-white px-4 py-2 rounded-lg z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'} min-h-screen mt-40 flex flex-col md:flex-row`}>
        {/* Sidebar */}
        <aside
          className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} w-64 md:w-64 shadow-lg p-6 sticky top-24 h-fit overflow-y-auto max-h-screen md:static z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-600">Categories</h2>
          <ul className="space-y-3">
            {roles.map((roleName) => (
              <li
                key={roleName}
                className={`cursor-pointer p-2 rounded-lg font-medium transition-colors ${role === roleName ? "bg-blue-500 text-white" : darkMode ? "hover:bg-gray-700" : "hover:bg-blue-100"}`}
                onClick={() => { setRole(roleName); setSidebarOpen(false); }}
              >
                {roleName}
              </li>
            ))}
          </ul>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden mt-45" onClick={() => setSidebarOpen(false)}  />}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{role} Questions & Answers</h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${darkMode ? 'bg-gray-700 text-gray-100 placeholder-gray-300' : 'bg-white text-gray-800 placeholder-gray-500'} w-full p-2 md:p-3 border rounded-xl mb-6 focus:ring-2 focus:ring-blue-400`}
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
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-2">{role}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{index + 1}. {highlightText(q.question, search)}</h3>
                    <span className={`text-blue-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}><FaChevronDown /></span>
                  </div>
                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-blue-50 border-blue-500 text-gray-600'} p-4 rounded-lg border-l-2 flex justify-between items-start`}>
                      <p className="flex-1">{highlightText(q.answer, search)}</p>
                      <button className="ml-3 text-sm bg-blue-500 text-white px-3 py-1 rounded-lg" onClick={() => navigator.clipboard.writeText(q.answer)}>Copy</button>
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
