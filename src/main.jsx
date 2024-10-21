import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the path to App.jsx is correct
import './index.css'; // Ensure your CSS is applied

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

