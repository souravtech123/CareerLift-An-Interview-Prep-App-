import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

// Question Bank with multiple domains
const questionBank = {
   "Frontend Developer" : [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
    { question: "Which tag is used for a paragraph?", options: ["<p>", "<h1>", "<div>"], answer: 0 },
    { question: "Which CSS property changes text color?", options: ["color", "font-size", "background-color"], answer: 0 },
    { question: "What is the purpose of React's useState?", options: ["State management", "Routing", "Styling"], answer: 0 },
    { question: "Which HTML tag is used to include JavaScript?", options: ["<script>", "<js>", "<javascript>"], answer: 0 },
    { question: "Which CSS property is used to change font size?", options: ["font-size", "text-style", "font-style"], answer: 0 },
    { question: "What is the difference between == and === in JavaScript?", options: ["== compares value, === compares value and type", "Both are the same", "=== compares value only"], answer: 0 },
    { question: "Which method is used to add an element at the end of an array in JavaScript?", options: ["push()", "pop()", "shift()"], answer: 0 },
    { question: "What is the difference between inline, block, and inline-block elements in CSS?", options: ["Layout behavior of elements", "Text styling", "Animation type"], answer: 0 },
    { question: "Which hook is used for side effects in React?", options: ["useEffect", "useState", "useRef"], answer: 0 },
    { question: "Which attribute is used to specify inline styles in React?", options: ["style", "className", "css"], answer: 0 },
    { question: "What does the map() method do in JavaScript?", options: ["Creates a new array by applying a function to each element", "Removes duplicates", "Sorts an array"], answer: 0 },
    { question: "What is the purpose of React Router?", options: ["Routing between pages", "State management", "Fetching data"], answer: 0 },
    { question: "Which HTML tag is used to create a link?", options: ["<a>", "<link>", "<href>"], answer: 0 },
    { question: "Which property controls the space between lines of text in CSS?", options: ["line-height", "letter-spacing", "text-indent"], answer: 0 },
    { question: "What is the difference between localStorage and sessionStorage?", options: ["localStorage persists, sessionStorage clears on tab close", "Both are same", "sessionStorage persists, localStorage clears on tab close"], answer: 0 },
    { question: "Which method is used to convert a JSON string to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()"], answer: 0 },
    { question: "In React, what is a prop?", options: ["Data passed from parent to child", "Internal state", "Component style"], answer: 0 },
    { question: "Which CSS property is used to make text bold?", options: ["font-weight", "text-style", "font-style"], answer: 0 },
    { question: "Which HTML element is used to create a table row?", options: ["<tr>", "<td>", "<th>"], answer: 0 }
  ],
  
  "Backend Developer": [
    { question: "Which framework is commonly used with Node.js?", options: ["Express.js", "React.js", "Django"], answer: 0 },
    { question: "Which HTTP method is used to create data?", options: ["POST", "GET", "DELETE"], answer: 0 },
    { question: "Which database is a NoSQL database?", options: ["MongoDB", "MySQL", "PostgreSQL"], answer: 0 },
    { question: "Which HTTP method is used to fetch data?", options: ["GET", "POST", "PUT"], answer: 0 },
    { question: "Which HTTP method is used to update existing data?", options: ["PUT", "GET", "POST"], answer: 0 },
    { question: "Which HTTP status code represents 'Not Found'?", options: ["404", "200", "500"], answer: 0 },
    { question: "What does CRUD stand for?", options: ["Create, Read, Update, Delete", "Copy, Run, Update, Delete", "Create, Render, Upload, Delete"], answer: 0 },
    { question: "Which module is used in Node.js to handle file paths?", options: ["path", "fs", "http"], answer: 0 },
    { question: "Which middleware is used in Express to parse JSON body?", options: ["express.json()", "body-parser", "cors"], answer: 0 },
    { question: "Which database uses tables with rows and columns?", options: ["SQL", "MongoDB", "Redis"], answer: 0 },
    { question: "What is the purpose of middleware in Express.js?", options: ["Process requests before reaching the route handler", "Styling the frontend", "Managing state"], answer: 0 },
    { question: "Which Node.js module is used to create a server?", options: ["http", "fs", "express"], answer: 0 },
    { question: "Which command is used to install a package in Node.js?", options: ["npm install package_name", "node install package_name", "node add package_name"], answer: 0 },
    { question: "What does REST stand for?", options: ["Representational State Transfer", "Remote Server Technology", "Rapid Software Testing"], answer: 0 },
    { question: "Which status code represents a successful request?", options: ["200", "404", "500"], answer: 0 }
  ],
  "Data Scientist": [
    { question: "Which library is used for data manipulation in Python?", options: ["Pandas", "NumPy", "Matplotlib"], answer: 0 },
  { question: "Which method fills missing values in Pandas?", options: ["fillna()", "dropna()", "replace()"], answer: 0 },
  { question: "Which library is used for numerical computations in Python?", options: ["NumPy", "Pandas", "Seaborn"], answer: 0 },
  { question: "Which library is commonly used for data visualization in Python?", options: ["Matplotlib", "Scikit-learn", "TensorFlow"], answer: 0 },
  { question: "What does CSV stand for?", options: ["Comma Separated Values", "Column Separated Values", "Character Separated Values"], answer: 0 },
  { question: "Which method removes missing values in Pandas?", options: ["dropna()", "fillna()", "isnull()"], answer: 0 },
  { question: "Which Python library is used for machine learning?", options: ["Scikit-learn", "Pandas", "Matplotlib"], answer: 0 },
  { question: "Which method in Pandas is used to read CSV files?", options: ["read_csv()", "read_file()", "load_csv()"], answer: 0 },
  { question: "What is the purpose of train_test_split in machine learning?", options: ["Split dataset into training and testing sets", "Train the model", "Scale the data"], answer: 0 },
  { question: "Which library is used for deep learning in Python?", options: ["TensorFlow", "Pandas", "NumPy"], answer: 0 },
  { question: "What does correlation measure?", options: ["Relationship between two variables", "Sum of values", "Average of values"], answer: 0 },
  { question: "Which visualization shows distribution of data?", options: ["Histogram", "Line chart", "Scatter plot"], answer: 0 },
  { question: "Which method checks for null values in a DataFrame?", options: ["isnull()", "notnull()", "fillna()"], answer: 0 },
  { question: "Which algorithm is used for regression problems?", options: ["Linear Regression", "K-Means", "Decision Tree Classifier"], answer: 0 },
  { question: "Which metric is used to evaluate classification models?", options: ["Accuracy", "Mean Squared Error", "R-squared"], answer: 0 }
  ],
  "AI/ML Engineer": [
    { question: "What does AI stand for?", options: ["Artificial Intelligence", "Automated Input", "Advanced Integration"], answer: 0 },
  { question: "Which type of AI is designed to perform specific tasks?", options: ["Narrow AI", "General AI", "Super AI"], answer: 0 },
  { question: "Which algorithm is used for supervised learning?", options: ["Linear Regression", "K-Means", "Principal Component Analysis"], answer: 0 },
  { question: "Which type of learning does reinforcement learning belong to?", options: ["Trial-and-error based learning", "Supervised learning", "Unsupervised learning"], answer: 0 },
  { question: "Which library is commonly used for AI and deep learning in Python?", options: ["TensorFlow", "Pandas", "Matplotlib"], answer: 0 },
  { question: "What is the purpose of an activation function in neural networks?", options: ["Introduce non-linearity", "Normalize data", "Reduce overfitting"], answer: 0 },
  { question: "Which algorithm is used for clustering in AI?", options: ["K-Means", "Linear Regression", "Logistic Regression"], answer: 0 },
  { question: "What is a perceptron?", options: ["A basic unit of a neural network", "A type of dataset", "A loss function"], answer: 0 },
  { question: "Which technique is used to reduce overfitting in AI models?", options: ["Dropout", "Normalization", "Standardization"], answer: 0 },
  { question: "Which AI field focuses on enabling machines to understand human language?", options: ["Natural Language Processing (NLP)", "Computer Vision", "Reinforcement Learning"], answer: 0 },
  { question: "What is supervised learning?", options: ["Learning from labeled data", "Learning from unlabeled data", "Learning without data"], answer: 0 },
  { question: "Which metric is used for regression model evaluation?", options: ["Mean Squared Error (MSE)", "Accuracy", "F1 Score"], answer: 0 },
  { question: "Which type of neural network is used for image recognition?", options: ["Convolutional Neural Network (CNN)", "Recurrent Neural Network (RNN)", "Feedforward Neural Network"], answer: 0 },
  { question: "Which type of neural network is used for sequence data?", options: ["Recurrent Neural Network (RNN)", "Convolutional Neural Network (CNN)", "Perceptron"], answer: 0 },
  { question: "Which method is used to split data into training and testing sets in AI?", options: ["train_test_split", "cross_val_score", "fit_transform"], answer: 0 }
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
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 mt-25">
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
