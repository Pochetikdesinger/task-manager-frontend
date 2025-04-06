import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Tasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;