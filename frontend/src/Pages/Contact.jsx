import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const cheatSheetData = {
  "HTML": [
    { title: "Basic Structure", content: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <!-- content -->\n</body>\n</html>" },
    { title: "Links", content: '<a href="https://example.com">Link Text</a>' },
    { title: "Images", content: '<img src="image.jpg" alt="description">' },
  ],
  "CSS": [
    { title: "Selectors", content: "div { color: red; }" },
    { title: "Flexbox", content: "display: flex;\njustify-content: center;\nalign-items: center;" },
    { title: "Grid", content: "display: grid;\ngrid-template-columns: repeat(3, 1fr);" },
  ],
  "JavaScript": [
    { title: "Variables", content: "let name = 'John';\nconst age = 25;" },
    { title: "Functions", content: "function greet() { console.log('Hello'); }" },
    { title: "Arrow Function", content: "const greet = () => console.log('Hello');" },
  ],
  "React": [
    { title: "Component", content: "function MyComponent() { return <h1>Hello</h1>; }" },
    { title: "useState Hook", content: "const [state, setState] = useState(initialValue);" },
    { title: "useEffect Hook", content: "useEffect(() => { /* effect */ }, [dependencies]);" },
  ],
  "Tailwind CSS": [
    { title: "Text Color", content: "className='text-red-500'" },
    { title: "Background Color", content: "className='bg-blue-200'" },
    { title: "Flex Layout", content: "className='flex justify-center items-center'" },
  ],
};

const FrontendNotes = () => {
  const [activeTopic, setActiveTopic] = useState("HTML");

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gradient-to-r from-blue-50 to-purple-50 mt-45">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Frontend Notes & Cheatsheet
        </h1>

        {/* Topic Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(cheatSheetData).map((topic) => (
            <button
              key={topic}
              className={`px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105 ${
                activeTopic === topic
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => setActiveTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Notes Section */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {cheatSheetData[activeTopic].map((note, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2 text-purple-600">{note.title}</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                {note.content}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FrontendNotes;
