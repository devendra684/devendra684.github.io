import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
// import PDF from "../assets/Devendra_Singh_Resume.pdf";
// import download from "../assets/download";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        id="home"
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[80vh] py-16"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Devendra Singh
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline ">
                <Typical
                  steps={[
                    "QA Engineer",
                    500,
                    "      QA Engineer",
                    // "   Aspiring SDET",
                    500,
                    // "SDET",
                    // 500,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            {/* <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
                I am an QA Engineer. 
                I am learning about AI and ML. 
            </p> */}
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt={`${el.name} icon`} src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                {/* <Link  */}
                  <a id="resume-button-2"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10" 
                  href="https://drive.google.com/file/d/1feeFeZZ5UZhCp0lsoRfrPLF3l1XfL-Tw/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <p >Resume 
                    {/* <img src="../assets/download.png" alt="download_logo" />  */}
                    </p>
                  </a>
              </div>
            </div>
          </div>
          <motion.img
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
            src={heroBg}
            alt="Hero background illustration"
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
