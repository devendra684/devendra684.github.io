import { useState, useEffect } from "react";
import React from "react";
// import React, { Component }  from 'react';
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from "./views/Home";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Education from "./views/Education";
import GitStats from "./views/GitStats";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <GitStats />
            <Contact />
            <BackToTop />
          </div>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
