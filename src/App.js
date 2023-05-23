import { useState, useEffect } from "react";
import React, { Component }  from 'react';
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home';
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import GitStats from "./views/GitStats";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>

        {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <GitStats />
            <Contact />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;
