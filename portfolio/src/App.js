// From default installation
import './App.css';
import React from 'react';

// Manual imports
import { BrowserRouter as Router, Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bytebank" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
