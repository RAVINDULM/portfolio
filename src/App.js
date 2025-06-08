import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import resumeData from "./data/resumeData";
import Education from "./components/Education";
import Contact from "./components/Contact";
import FeaturedBlogs from "./components/FeaturedBlogs";
import CursorOutline from "./components/CursorOutline";

function App() {
  return (
    <div className="App">
      <CursorOutline />
      <Header name={resumeData.name} role={resumeData.role} />
      <About bio={resumeData.about} />
      <Experience experience={resumeData.experience} />
      <Education education={resumeData.education} />
      <Projects projects={resumeData.projects} />
      <Skills skills={resumeData.skills} />
      <FeaturedBlogs blogs={resumeData.blogsData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
