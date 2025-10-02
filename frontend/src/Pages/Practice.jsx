import React, { useState, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../Components/Navbar";

const questionBank = { 
  "Frontend Developer": [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
    { question: "Which CSS property changes text color?", options: ["color", "font-size", "background-color"], answer: 0 },
    { question: "Which hook is used for state in React?", options: ["useEffect", "useState", "useRef"], answer: 1 },
    { question: "Which attribute is used to link a CSS file in HTML?", options: ["src", "href", "link"], answer: 1 },
    { question: "What is the default display of a div element?", options: ["inline", "block", "flex"], answer: 1 },
    { question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>"], answer: 0 },
    { question: "Which CSS property controls spacing between lines?", options: ["line-height", "letter-spacing", "word-spacing"], answer: 0 },
    { question: "Which method is used to render a component in React?", options: ["ReactDOM.render()", "React.render()", "ReactDOM.create()"], answer: 0 },
    { question: "What is the purpose of JSX in React?", options: ["To write HTML inside JavaScript", "To create variables", "To style components"], answer: 0 },
    { question: "Which CSS property is used for rounded corners?", options: ["border-radius", "border-style", "border-width"], answer: 0 },
    { question: "Which event is triggered when a user clicks an element in React?", options: ["onClick", "onChange", "onSubmit"], answer: 0 },
    { question: "Which tag is used to insert a line break in HTML?", options: ["<break>", "<br>", "<lb>"], answer: 1 },
    { question: "Which CSS unit is relative to the font size of the element?", options: ["px", "em", "%"], answer: 1 },
    { question: "Which method prevents the default behavior of an event in React?", options: ["stopPropagation()", "preventDefault()", "blockEvent()"], answer: 1 },
    { question: "What is the correct way to write comments in JSX?", options: ["{/* comment */}", "<!-- comment -->", "// comment"], answer: 0 }
  ],

  "Backend Developer": [
    { question: "Which framework is commonly used with Node.js?", options: ["Express.js", "React.js", "Django"], answer: 0 },
    { question: "Which HTTP method is used to fetch data?", options: ["GET", "POST", "PUT"], answer: 0 },
    { question: "Which database is NoSQL?", options: ["MySQL", "MongoDB", "PostgreSQL"], answer: 1 },
    { question: "Which module is used to handle file paths in Node.js?", options: ["path", "fs", "http"], answer: 0 },
    { question: "Which method is used to send JSON response in Express.js?", options: ["res.send()", "res.json()", "res.data()"], answer: 1 },
    { question: "Which middleware parses incoming JSON requests in Express.js?", options: ["body-parser", "cookie-parser", "express-session"], answer: 0 },
    { question: "Which method is used to create a server in Node.js?", options: ["http.createServer()", "server.create()", "express.createServer()"], answer: 0 },
    { question: "Which database uses collections and documents?", options: ["MongoDB", "MySQL", "SQLite"], answer: 0 },
    { question: "Which HTTP status code means 'Not Found'?", options: ["404", "200", "500"], answer: 0 },
    { question: "Which command initializes a new Node.js project?", options: ["npm init", "npm start", "node init"], answer: 0 },
    { question: "Which method handles GET requests in Express.js?", options: ["app.get()", "app.post()", "app.put()"], answer: 0 },
    { question: "Which object contains query parameters in Express.js?", options: ["req.query", "req.body", "req.params"], answer: 0 },
    { question: "Which Node.js module allows working with the file system?", options: ["fs", "path", "http"], answer: 0 },
    { question: "Which database is relational?", options: ["MySQL", "MongoDB", "Firebase"], answer: 0 },
    { question: "Which method is used to redirect a response in Express?", options: ["res.redirect()", "res.send()", "res.json()"], answer: 0 }
  ],

  "Data Scientist": [
    { question: "Which library is used for data manipulation in Python?", options: ["Pandas", "NumPy", "Matplotlib"], answer: 0 },
    { question: "Which library is commonly used for data visualization?", options: ["Matplotlib", "Scikit-learn", "TensorFlow"], answer: 0 },
    { question: "Which method fills missing values in Pandas?", options: ["fillna()", "dropna()", "replace()"], answer: 0 },
    { question: "Which function returns the shape of a DataFrame?", options: ["shape()", "df.shape", "len(df)"], answer: 1 },
    { question: "Which library is used for numerical computations in Python?", options: ["NumPy", "Pandas", "Seaborn"], answer: 0 },
    { question: "Which function plots a histogram in Matplotlib?", options: ["plt.hist()", "plt.plot()", "plt.bar()"], answer: 0 },
    { question: "Which method removes duplicates in a DataFrame?", options: ["drop_duplicates()", "remove_duplicates()", "unique()"], answer: 0 },
    { question: "Which method selects a column in Pandas?", options: ["df['column']", "df.column()", "df.column"], answer: 0 },
    { question: "Which function normalizes data in scikit-learn?", options: ["MinMaxScaler", "StandardScaler", "Normalizer"], answer: 0 },
    { question: "Which method merges two DataFrames?", options: ["merge()", "join()", "concat()"], answer: 0 },
    { question: "Which library is used for machine learning in Python?", options: ["Scikit-learn", "NumPy", "Pandas"], answer: 0 },
    { question: "Which method is used to split dataset in scikit-learn?", options: ["train_test_split()", "split()", "divide()"], answer: 0 },
    { question: "Which function plots a line chart in Matplotlib?", options: ["plt.plot()", "plt.line()", "plt.show()"], answer: 0 },
    { question: "Which function returns the mean of a Pandas Series?", options: ["mean()", "average()", "median()"], answer: 0 },
    { question: "Which method converts categorical variables to dummy/indicator variables?", options: ["get_dummies()", "to_numeric()", "factorize()"], answer: 0 }
  ],

  "AI/ML Engineer": [
    { question: "What does AI stand for?", options: ["Artificial Intelligence", "Automated Input", "Advanced Integration"], answer: 0 },
    { question: "Which type of AI is designed to perform specific tasks?", options: ["Narrow AI", "General AI", "Super AI"], answer: 0 },
    { question: "Which algorithm is used for supervised learning?", options: ["Linear Regression", "K-Means", "Principal Component Analysis"], answer: 0 },
    { question: "Which algorithm is used for classification?", options: ["Decision Tree", "K-Means", "PCA"], answer: 0 },
    { question: "Which library is used for machine learning in Python?", options: ["Scikit-learn", "Matplotlib", "NumPy"], answer: 0 },
    { question: "Which neural network type is used for sequence data?", options: ["RNN", "CNN", "GAN"], answer: 0 },
    { question: "Which activation function outputs values between 0 and 1?", options: ["Sigmoid", "ReLU", "Tanh"], answer: 0 },
    { question: "Which method reduces overfitting in ML models?", options: ["Regularization", "Normalization", "Standardization"], answer: 0 },
    { question: "Which algorithm is unsupervised learning?", options: ["K-Means", "Linear Regression", "Logistic Regression"], answer: 0 },
    { question: "Which loss function is used for regression?", options: ["Mean Squared Error", "Cross Entropy", "Hinge Loss"], answer: 0 },
    { question: "Which optimizer is commonly used in neural networks?", options: ["Adam", "SGD", "RMSProp"], answer: 0 },
    { question: "Which method scales features to a range?", options: ["MinMaxScaler", "StandardScaler", "Normalizer"], answer: 0 },
    { question: "Which algorithm reduces dimensionality?", options: ["PCA", "KNN", "Naive Bayes"], answer: 0 },
    { question: "Which deep learning library is by Google?", options: ["TensorFlow", "PyTorch", "Keras"], answer: 0 },
    { question: "Which technique generates new data samples?", options: ["GANs", "RNNs", "CNNs"], answer: 0 }
  ]
};



const domainColors = {
  "Frontend Developer": "from-purple-500 to-pink-500",
  "Backend Developer": "from-green-400 to-blue-500",
  "Data Scientist": "from-yellow-400 to-orange-500",
  "AI/ML Engineer": "from-indigo-500 to-purple-700",
};

export default function ProfessionalTest() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [domain, setDomain] = useState("");
  const [step, setStep] = useState("register");
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins
  const resultRef = useRef();

  // Timer logic
  useEffect(() => {
    if (step === "test" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setStep("result");
    }
  }, [step, timeLeft]);

  const handleAnswer = (index) => {
    if (index === questionBank[domain][currentQ].answer) setScore(score + 1);
    if (currentQ + 1 < questionBank[domain].length) setCurrentQ(currentQ + 1);
    else setStep("result");
  };

  const formatTime = (sec) => `${Math.floor(sec/60)}:${sec%60<10?'0':''}${sec%60}`;

  const downloadCertificate = () => {
    html2canvas(resultRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`${user.name}_Certificate.pdf`);
    });
  };

  // Registration Form
  if (step === "register") {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100 p-6 mt-20">
          <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🎓 Candidate Registration</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg mb-4 w-full"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg mb-4 w-full"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <select
              className="border p-3 rounded-lg mb-6 w-full"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            >
              <option value="">Select Domain</option>
              {Object.keys(questionBank).map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full font-semibold"
              onClick={() => user.name && user.email && domain && (setStep("test"), setTimeLeft(600))}
            >
              Start Test
            </button>
          </div>
        </div>
      </>
    );
  }

  // Test Screen
  if (step === "test") {
    const questions = questionBank[domain];
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 mt-20">
          <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl  border border-gray-300 w-150">
            
            {/* Header: Question Progress + Timer */}
            <div className="flex justify-between items-center mb-6">
              <p className="font-medium text-gray-700 text-lg">
                Question {currentQ + 1} / {questions.length}
              </p>
              <p className="font-bold text-red-600 text-lg">⏳ {formatTime(timeLeft)}</p>
            </div>
  
            {/* Progress Bar */}
            {/* Progress Bar */}
            <div className="flex flex-col items-center mb-8">
  <svg className="w-16 h-16">
    <circle
      cx="32"
      cy="32"
      r="30"
      stroke="#e5e7eb"
      strokeWidth="4"
      fill="none"
    />
    <circle
      cx="32"
      cy="32"
      r="30"
      stroke="#3b82f6"
      strokeWidth="4"
      fill="none"
      strokeDasharray={2 * Math.PI * 30}
      strokeDashoffset={2 * Math.PI * 30 * (1 - (currentQ + 1)/questions.length)}
      strokeLinecap="round"
      className="transition-all duration-500"
    />
    <text x="50%" y="50%" textAnchor="middle" dy="6" className="text-lg font-semibold fill-blue-600">
      {Math.round(((currentQ+1)/questions.length)*100)}%
    </text>
  </svg>
</div>

  
            {/* Question Card */}
            <div className="mb-8 p-6 rounded-xl bg-gray-50 border border-gray-300 shadow-sm">
              <p className="text-xl font-semibold text-gray-800">{questions[currentQ].question}</p>
            </div>
  
            {/* Options */}
            <div className="flex flex-col gap-4">
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  className="px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 font-medium text-left not-visited:hover:bg-blue-50 hover:border-blue-400 transition"
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </button>
              ))}
            </div>
  
            {/* Footer: Optional branding or instructions */}
            <p className="mt-6 text-sm text-gray-500 text-center">
              Please answer all questions carefully. Once submitted, answers cannot be changed.
            </p>
  
          </div>
        </div>
      </>
    );
  }
  

  // Result Screen
  if (step === "result") {
    const questions = questionBank[domain];
    return (
      <>
        <Navbar />
        <div
  className="min-h-screen flex flex-col items-center justify-center p-6"
  style={{ background: "linear-gradient(to right, #bfdbfe, #f3f4f6)" }} // blue-50 to gray-100 in hex
>
  <div
    ref={resultRef}
    className="bg-white shadow-2xl rounded-3xl p-8 max-w-3xl w-full text-center"
  >
    <h2 className="text-3xl font-bold mb-4 text-gray-800">📜 {domain} Test Result</h2>
    <p className="text-xl mb-2"><b>Name:</b> {user.name}</p>
    <p className="text-xl mb-2"><b>Email:</b> {user.email}</p>
    <p className="text-xl mb-2"><b>Score:</b> {score} / {questions.length}</p>
    <p className={`text-2xl font-bold mt-4 ${score >= Math.ceil(questions.length/2) ? 'text-green-600':'text-red-600'}`}>
      {score >= Math.ceil(questions.length/2) ? "✅ Passed" : "❌ Failed"}
    </p>
    <div className="mt-6 flex gap-4 justify-center">
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        onClick={downloadCertificate}
      >
        📥 Download Certificate
      </button>
    </div>


              <button
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold mt-5"
                onClick={()=>{setStep("register"); setScore(0); setCurrentQ(0); setDomain("");}}
              >
                Restart Test
              </button>
            </div>
          <div/>
        </div>
      </>
    );
  }
}
