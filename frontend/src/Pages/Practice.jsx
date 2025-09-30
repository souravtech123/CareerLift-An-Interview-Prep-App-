import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

// Sample questions for different domains
const questionBank = {
  "Frontend Developer": [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
    { question: "Which tag is used for a paragraph?", options: ["<p>", "<h1>", "<div>"], answer: 0 },
    { question: "Which CSS property changes text color?", options: ["color", "font-size", "background-color"], answer: 0 },
    { question: "What is the purpose of React's useState?", options: ["State management", "Routing", "Styling"], answer: 0 },
    { question: "Which method is used to select elements in JavaScript?", options: ["querySelector", "getElementByName", "selectElement"], answer: 0 },
    { question: "Which attribute is used for linking CSS?", options: ["rel", "href", "src"], answer: 0 },
    { question: "What does JSX stand for?", options: ["JavaScript XML", "JavaScript Extended", "JavaScript XHTML"], answer: 0 },
    { question: "Which CSS framework uses utility classes?", options: ["Tailwind CSS", "Bootstrap", "Materialize"], answer: 0 },
    { question: "How do you create a function in JavaScript?", options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}"], answer: 0 },
    { question: "Which hook is used to handle side effects in React?", options: ["useEffect", "useState", "useContext"], answer: 0 },
  ],

  "Backend Developer": [
    { question: "Which framework is commonly used with Node.js?", options: ["Express.js", "React.js", "Django"], answer: 0 },
    { question: "Which HTTP method is used to create data?", options: ["POST", "GET", "DELETE"], answer: 0 },
    { question: "What does CRUD stand for?", options: ["Create, Read, Update, Delete", "Create, Run, Upload, Delete", "Code, Read, Update, Delete"], answer: 0 },
    { question: "Which database is NoSQL?", options: ["MongoDB", "MySQL", "PostgreSQL"], answer: 0 },
    { question: "What is middleware in Express?", options: ["Functions between request and response", "Database handler", "Frontend tool"], answer: 0 },
    { question: "Which command installs Node.js packages?", options: ["npm install", "node install", "install node"], answer: 0 },
    { question: "Which status code means success?", options: ["200", "404", "500"], answer: 0 },
    { question: "Which module is used to handle environment variables?", options: ["dotenv", "express", "fs"], answer: 0 },
    { question: "Which HTTP method is idempotent?", options: ["PUT", "POST", "PATCH"], answer: 0 },
    { question: "What does REST stand for?", options: ["Representational State Transfer", "Remote State Transfer", "Real-time State Tool"], answer: 0 },
  ],

  "Data Scientist": [
    { question: "Which library is used for data manipulation in Python?", options: ["Pandas", "NumPy", "Matplotlib"], answer: 0 },
    { question: "Which method fills missing values in Pandas?", options: ["fillna()", "dropna()", "replace()"], answer: 0 },
    { question: "Which library is used for data visualization?", options: ["Matplotlib", "NumPy", "SciPy"], answer: 0 },
    { question: "What is supervised learning?", options: ["Learning with labeled data", "Learning without data", "Learning with unlabeled data"], answer: 0 },
    { question: "Which algorithm is used for regression?", options: ["Linear Regression", "K-Means", "DBSCAN"], answer: 0 },
    { question: "Which Python library is used for scientific computing?", options: ["NumPy", "Pandas", "Seaborn"], answer: 0 },
    { question: "What is overfitting in ML?", options: ["Model performs well on training data but poorly on test data", "Model performs well on all data", "Model never learns"], answer: 0 },
    { question: "Which method is used to split dataset in scikit-learn?", options: ["train_test_split", "split_data()", "divide_dataset()"], answer: 0 },
    { question: "Which chart is used for categorical data?", options: ["Bar chart", "Line chart", "Scatter plot"], answer: 0 },
    { question: "Which metric is used for classification accuracy?", options: ["Accuracy Score", "Mean Squared Error", "R2 Score"], answer: 0 },
  ],

  "AI/ML Engineer": [
    { question: "What does ML stand for?", options: ["Machine Learning", "Mega Logic", "Model Learning"], answer: 0 },
    { question: "Which is a supervised learning algorithm?", options: ["Linear Regression", "K-Means", "DBSCAN"], answer: 0 },
    { question: "Which library is commonly used for deep learning in Python?", options: ["TensorFlow", "Pandas", "Matplotlib"], answer: 0 },
    { question: "What is a neural network?", options: ["A model inspired by the human brain", "A network of computers", "A type of database"], answer: 0 },
    { question: "Which activation function outputs values between 0 and 1?", options: ["Sigmoid", "ReLU", "Tanh"], answer: 0 },
    { question: "What is overfitting?", options: ["Model performs well on training data but poorly on test data", "Model performs well on all data", "Model never learns"], answer: 0 },
    { question: "Which technique is used to reduce overfitting?", options: ["Regularization", "Scaling", "Normalization"], answer: 0 },
    { question: "Which algorithm is unsupervised?", options: ["K-Means", "Linear Regression", "Logistic Regression"], answer: 0 },
    { question: "Which metric measures regression model error?", options: ["Mean Squared Error", "Accuracy", "Precision"], answer: 0 },
    { question: "Which library is used for ML in Python?", options: ["scikit-learn", "Django", "Flask"], answer: 0 },
  ],
};



const domainColors = {
  "Web Development": "bg-green-200 text-green-900",
  "Data Science": "bg-yellow-200 text-yellow-900",
  "AI / ML": "bg-purple-200 text-purple-900",
};

const Practice = () => {
  const [domain, setDomain] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!domain) {
    return (
      <>
      <Navbar/>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
        <h2 className="text-3xl font-bold">Select a Domain to Practice</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.keys(questionBank).map((d) => (
            <button
              key={d}
              className={`px-6 py-3 rounded-lg font-medium hover:scale-105 transition ${domainColors[d] || 'bg-gray-200 text-gray-900'}`}
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

  const handleAnswer = (index) => {
    if (index === questions[currentQ].answer) {
      setScore(score + 1);
    }

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 mt-45">
        <div className={`p-6 rounded-lg ${domainColors[domain]}`}>
          <h2 className="text-2xl font-bold mb-4">Result: {domain}</h2>
          <p className="text-lg">Your Score: {score} / {questions.length}</p>
          <button
            className="mt-4 px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
            onClick={() => {
              setDomain('');
              setCurrentQ(0);
              setScore(0);
              setShowResult(false);
            }}
          >
            Try Another Domain
          </button>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center p-6 mt-45">
      <div className={`w-full max-w-lg p-6 rounded-xl shadow-lg ${domainColors[domain]}`}>
        <h2 className="text-2xl font-bold mb-4">{domain} Quiz</h2>
        <p className="mb-6 text-lg">{questions[currentQ].question}</p>
        <div className="flex flex-col gap-3">
          {questions[currentQ].options.map((option, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
              onClick={() => handleAnswer(i)}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-4 text-white text-right">
          Question {currentQ + 1} / {questions.length}
        </p>
      </div>
    </div>
    </>
  );
};

export default Practice;
