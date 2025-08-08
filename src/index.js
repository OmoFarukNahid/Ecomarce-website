import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Set mounted attribute before render
document.documentElement.setAttribute('data-mounted', 'false');

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Signal when app is mounted
window.addEventListener('load', () => {
  document.documentElement.setAttribute('data-mounted', 'true');
});