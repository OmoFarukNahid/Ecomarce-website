import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';  // Fixed import path (removed extra slash)
import App from './App'; // Fixed import path (removed extra slash)

// Updated basename to match your repo name (lowercase)
const basename = process.env.NODE_ENV === 'production' 
  ? '/ecomarce-website'  // Lowercase to match GitHub Pages URL
  : '/';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </React.StrictMode>
);