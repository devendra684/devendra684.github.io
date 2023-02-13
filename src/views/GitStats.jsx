import React, { useContext } from "react";
// import {Card, Card2, Card3, Card4} from "../components/Card";
import { ThemeContext } from "../themeProvider";

const GitStats = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="projects" className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"} >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
        {/* GitStats */}
        GitHub
        </h2>
      
      <div className="flex justify-center mt-10">
          <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline" data-aos="fade-right">
              GitHub Calendar
            </p>
          </div> 
      <div className="flex justify-center mt-10" width="70%" border="1px solid grey">
          <img className="w-full" 
            src="https://ghchart.rshah.org/devendra684"  alt="devendra684-calendar" data-aos="fade-right" />
      </div>
      <div className="flex justify-center mt-10">
            <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline" data-aos="fade-right" >
                My GitHub Statistics
              </p>
            </div>
      <div className="flex justify-center mt-10">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=devendra684&show_icons=true&locale=en"  alt="devendra684-states" data-aos="fade-right" />
      </div> 
      <div className="flex justify-center mt-10">
            <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline" data-aos="fade-right">
                GitHub Streak </p>
        </div> 
      <div className="flex justify-center mt-10">
      {/* <img width="60%" height="200" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=devendra684&" alt="devendra684" /> */}
      <img paddingLeft="30px"
      src="https://github-readme-streak-stats.herokuapp.com/?user=devendra684&" alt='devendra684-streak' data-aos="fade-right"/>
      </div>
    </div>
      </div>
  );
};

export default GitStats;
