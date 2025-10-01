import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Counter App</h2>
        <p className="text-4xl font-semibold mb-6 text-gray-700">{count}</p>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-lg transition"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-2 rounded-lg transition"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-lg transition"
          >
            Reset
          </button>
        </div>
        {count === 10 && (
          <p className="mt-4 text-red-600 font-semibold">
            Maximum limit reached!
          </p>
        )}
      </div>
    </div>
  );
}

export default App
