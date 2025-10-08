import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'    
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap your App component */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
