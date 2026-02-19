import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './page/login';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;