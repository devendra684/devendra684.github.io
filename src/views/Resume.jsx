import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import PDF from "../assets/Devendra_Singh_Resume.pdf";

const Resume = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                {/* <Link  */}
                  <a id="resume-link-2"
                // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10" 
                  href={"https://drive.google.com/file/d/1y8DE1uBgH0cHbH6rK5PmRtD1N9qjWqNf/view?usp=share_link"}
                  // download={"PDF"}
                  target = "_blank"
                  rel="noopener noreferrer"
                  onClick={()=>{
                    window.open("https://drive.google.com/file/d/1y8DE1uBgH0cHbH6rK5PmRtD1N9qjWqNf/view?usp=share_link");
                  }}
                  >
                  {/* <p >Resume  */}
                    {/* <img src="../assets/download.png" alt="download_logo" />  */}
                    {/* </p> */}
                  </a>
              </div>
    </div>
  );
};

export default Resume;
