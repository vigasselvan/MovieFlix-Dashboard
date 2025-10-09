import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm.jsx'
import MainPage from './pages/MainPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import Dashboard from './pages/Dashboard.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Main-Page" element={<MainPage />} />
        <Route path="/Movie-Page" element={<MoviePage />} />  
        <Route path="/Dashboard" element={<Dashboard />} />      
      </Routes>
    </>
  );
}

export default App
