// From default installation
import './App.css';
import React from 'react';

// Manual imports
import { BrowserRouter as Router, Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import PowerShellPage from "./pages/PowerShell/PowerShellPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bytebank" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/powershell" element={<PowerShellPage />} />
      </Routes>
    </Router>
  );
}

export default App;
