import React, { useContext } from "react";
import {Card, Card2, Card3, Card4} from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects" 
      className={ darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div 
          // className="project-card"
          className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-16 pb-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          {/* Projects */}
          <p 
              className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline" >
                Projects
            </p>
        </h2>
        <h4 className="mt-8 text-3xl font-semibold text-blue-600">
          {/* What I Built */}
        </h4>
        <div 
          className="project-card mt-6 flex justify-between items-stretch flex-wrap">
          <Card />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>

      </div>
      {/* <div className="project-card">
        </div>
        <div className="project-card">
        </div>
        <div className="project-card">
        </div> */}
    </div>
  );
};

export default Projects;
