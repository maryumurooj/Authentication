import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard'; 
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
          
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
