import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const GitStats = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div  className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"} >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
        {/* GitStats */}
        {/* GitHub */}
            <p 
              className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline" >
                GitHub
            </p>
      
        </h2>
      <div 
          className="flex justify-center mt-10">
          <p className="react-activity-calendar text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline" data-aos="fade-right">
              GitHub Calendar
            </p>
          </div> 
      <div 
          className="flex justify-center mt-10" width="70%" border="1px solid grey">

          <img className="w-full" 
            src="https://ghchart.rshah.org/devendra684"  alt="devendra684-calendar" data-aos="fade-right" />
      </div>
      <div className="flex justify-center mt-10">
            <p 
              className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline" data-aos="fade-right" >
                GitHub Streak Stats
              </p>
            </div>
      <div className="flex justify-center mt-10">
            <img  id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=devendra684"
            alt="devendra684-states" data-aos="fade-right" />
      </div> 
      <div 
          className="flex justify-center mt-10">
            <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline" data-aos="fade-right">
                GitHub Stats Card</p>
        </div> 
      <div className="flex justify-center mt-10">

        <img paddingLeft="30px" 
        id="github-stats-card" 
        src="https://github-readme-stats.vercel.app/api?username=devendra684" alt='devendra684-streak' data-aos="fade-right"/>
      
      </div>
      {/* <div className="flex justify-center mt-10">
            <p 
              className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline" data-aos="fade-right" >
                Top Languages
              </p>
            </div>
      <div className="flex justify-center mt-10">
            
            <img  id="github-top-langs" 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=devendra684"
            alt="github-top-langs" data-aos="fade-right" />
      </div>  */}
      
    </div>
      </div>
  );
};

export default GitStats;
