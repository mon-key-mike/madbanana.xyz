import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a React root
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component inside the root
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Make sure you have an element with id='root' in your index.html.");
}