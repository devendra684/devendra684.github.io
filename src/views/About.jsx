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
        id="about" 
          className={ 
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center "
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
            <p 
              className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline" >
                About Me
            </p>
          
        </h2>
        <div> 
            {/* user-detail-name 
            user-detail-intro" */}
          <motion.div
              class="about.section about section">
            {/* <h4 id="about"
              class="about.section about section"
            className="about.section mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4> */}
          <div class="home-img"
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
              {/* I am a Full Stack Web Developer and currently learning from Masai School. */}
              Hi, I am Devendra Singh from Mathura, Uttar Pradesh. Currently I am learning Full Stack Web Developer from Masai School. 
              A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools such as
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "Express", & more to help me build the best possible product.
            </p>
          </motion.div>
        
        </div>
      </div>
    </div>
  );
};

export default About;
