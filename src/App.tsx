import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TicTacToe } from './pages/TicTacToe';
import { CSSChallenge } from './pages/CSSChallenge';
import { Implementation } from './components/CSSImplementation/Implementation';
import { HeatmapChallenge } from './pages/HeatmapChallenge';
import { HeatmapImplementation } from './components/HeatmapImplementation/HeatmapImplementation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Technical Interview Exercises
                  </h1>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                      <Link to="/tictactoe" className="block">
                        <h2 className="text-xl font-semibold text-gray-700">
                          1. Tic Tac Toe Debug
                        </h2>
                        <p className="text-gray-600 mt-2">
                          Find and fix the bug in the game logic
                        </p>
                      </Link>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                      <Link to="/css-challenge" className="block">
                        <h2 className="text-xl font-semibold text-gray-700">
                          2. CSS Implementation
                        </h2>
                        <p className="text-gray-600 mt-2">
                          Implement the provided design using HTML and SCSS
                        </p>
                      </Link>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                      <Link to="/heatmap" className="block">
                        <h2 className="text-xl font-semibold text-gray-700">
                          3. Heatmap Challenge
                        </h2>
                        <p className="text-gray-600 mt-2">
                          Implement a heatmap visualization component
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/css-challenge" element={<CSSChallenge />} />
          <Route path="/css-implementation" element={<Implementation />} />
          <Route path="/heatmap" element={<HeatmapChallenge />} />
          <Route
            path="/heatmap-implementation"
            element={<HeatmapImplementation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
