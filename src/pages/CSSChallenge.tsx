import React from 'react';
import { Link } from 'react-router-dom';

export function CSSChallenge() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Implementation</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Instructions</h2>
            <p className="text-gray-600">
              Implement the layout shown in the image below using HTML and SCSS.
              Focus on creating flexible, fluid layouts that adapt to their container.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <img 
              src="https://lh5.googleusercontent.com/proxy/8CfhZwpLbdd3TZo44tSAT_1n1ntIv3bYz_5Z7gOaaXEfsy85TK_JwUxq9diB6I0pRLpp3UDwxf7Tq3MGv8EapYKXT19ro2_biV__aFSqze0oZvVIgNHtiyOJveVvRj6TxDBBii2XGUXqR3Vi0QvXRvZlOckuJZgw_gQImdg" 
              alt="Wireframe Design"
              className="w-full rounded-lg shadow-sm"
            />
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Use semantic HTML5 elements</li>
              <li>Implement using SCSS (nested rules, variables, mixins)</li>
              <li>Create flexible layouts using CSS Flexbox/Grid</li>
              <li>Ensure proper spacing and alignment</li>
              <li>Add hover states for interactive elements</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link 
              to="/css-implementation"
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