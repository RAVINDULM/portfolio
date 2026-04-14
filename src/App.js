import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
