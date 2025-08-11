import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import DevendraSingh from "../assets/DevendraSingh.jpg";
// import heroBg from "../assets/webdev.svg";
// import Typical from "react-typical";
// import { contactLinks } from "../constants";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div 
    id="about" 
    className= {darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12 ">
        <h2 
          className={ 
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center "
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
            <p 
              class="about section"
              className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline" >
                About
            </p>
          
        </h2>
        <div> 
            {/* user-detail-name 
            user-detail-intro" */}
          <motion.div
              // class="about.section about section"
              >
            {/* <h4 id="about"
              class="about.section about section"
            className="about.section mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4> */}
          <div
              style={{ 
                  // width:"40%", 
                  margin: "auto",
                  marginTop: "40px",
                  // height:"40%",
                  // border:"2px solid black",
                  borderRadius:"25px" 
                }}> 
            <motion.img class="home-img"
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
                src={DevendraSingh} 
                alt="ProfilePhoto" 
                style={{ 
                  width:"280px", 
                  // height:"100px",
                  // marginLeft: "30%",
                  margin: "auto",
                  border:"2px solid black",
                  borderRadius:"22px" 
                }}
                className=" hidden sm:block"
            />
          </div> 

            
            {/* user-detail-name  */}
            <p id="user-detail-intro"
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              {/* I am a QA Engineer and currently working at from Quicktouch Technologies. */}
              Software Development Engineer in Test (SDET) with over a year of proven expertise in quality assurance, testing, and automation. Currently serving as a QA Engineer at Quicktouch Technologies Limited, I successfully implement testing strategies for enterprise ERP systems serving 4000+ users. 
                
              My technical skills and specialize in manual and automation testing, API testing, and bug tracking using Jira. I have demonstrated success in enhancing testing efficiency, preventing critical bugs, and ensuring seamless user experiences across web applications and mobile platforms. Passionate about continuous learning and agile methodologies, I collaborate effectively with cross-functional teams to deliver high-quality software solutions.
            </p>
            
          </motion.div>
        
        </div>
      </div>
    </div>
  );
};

export default About;
