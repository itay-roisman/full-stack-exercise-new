import React from 'react';
import { Link } from 'react-router-dom';
import { getRandomTimestamps } from './api.js';
import heatmapImage from '../components/heatmap.jpeg';
import './style.css';

export function HeatmapChallenge() {
  const timestamp = getRandomTimestamps();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Heatmap Implementation</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Instructions</h2>
            <p className="text-gray-600">
              Implement a heatmap component based on the design below using the provided timestamp data.
              The heatmap should visualize activity patterns over the last week.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <img 
              src={heatmapImage}
              alt="Heatmap Design Reference"
              className="w-full rounded-lg shadow-sm"
            />
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Create a responsive heatmap component</li>
              <li>Use the provided timestamp data to generate the visualization</li>
              <li>Implement proper color scaling based on activity density</li>
              <li>Add tooltips showing detailed information for each cell</li>
              <li>Ensure accessibility with proper ARIA attributes</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Data</h3>
            <pre className="bg-white p-4 rounded overflow-auto max-h-40 text-sm">
              {JSON.stringify(timestamp, null, 2)}
            </pre>
          </div>

          <div className="mt-8">
            <Link 
              to="/heatmap-implementation"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Start Implementation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}