import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/criarlogin" element={<CreateAccountPage />} />
        <Route path="/telainicio" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
