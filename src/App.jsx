import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="flex gap-6 my-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="w-20 hover:scale-110 transition"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-20 hover:scale-110 transition"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        Vite + React + Tailwind
      </h1>

      <div className="bg-white text-black px-6 py-4 rounded shadow">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-2 text-sm text-gray-700">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-400 mt-8 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
export default App;
