import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Skills = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div id="skills" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
        <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2 
        // id="about" 
          className={ 
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center "
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
            <p 
              className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline" >
                Skills 
            </p>
          
        </h2>

              <h4 className="mt-12 text-3xl font-semibold text-blue-500">
                {/* Technologies and Tools */}
              </h4>
              <p
                className={
                  darkMode
                    ? "mt-4 text-xl text-justify text-gray-500"
                    : "mt-4 text-xl text-justify text-white"
                }
              >
                As an experienced Software Development Engineer in Test (SDET), I have developed comprehensive technical skills essential for quality assurance, testing, and automation. Here are some of the key skills I possess that enable me to contribute effectively to the testing process and ensure the delivery of high-quality software.
              </p>
            <motion.div class="skills-card"
            className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
              {techStack.map((el, index) => (
                <motion.div
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
                  className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                >
                  <img alt="" src={el.link} className="w-12 skills-card-img" />
                  <h4 className="text-md ml-4 pl-1" class="skills-card-name">{el.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      
    );
  };

export default Skills;
