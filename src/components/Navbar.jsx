import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import PDF from "../assets/Devendra_Singh_Resume.pdf";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const links = [
    {
      name: "Home",
      route: "/",
      class: "home"
    },
    {
      name: "About",
      route: "about",
      class: "about"
    },
    {
      name: "Skills",
      route: "skills",
      class: "skills"
    },
    {
      name: "Projects",
      route: "projects",
      class: "projects"
    },
    {
      name: "Contact",
      route: "contact",
      class: "contact"
    }
  ];

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav id="nav-menu"
        className={
          darkMode
            ? "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
            : "bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div  className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              id="user-detail-name"
              className={
                darkMode
                  ? "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
                  : "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
              }
            >
              {`<Devendra Singh/>`}
              
            </a>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              class={
                "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
              {links.map((el) => (
                <li className="cursor-pointer">
                  <Link
                    to={el.route}
                    class={el.class}
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
              <li className="cursor-pointer">
                    <a id="resume-button-1"
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                        href={PDF}
                        download={"/Devendra_Singh_Resume"}
                        target = "_blank"
                        rel="noopener noreferrer"
                        onClick={()=>{
                          window.open("https://drive.google.com/file/d/1feeFeZZ5UZhCp0lsoRfrPLF3l1XfL-Tw/view");
                        }}
                        >
                          Resume
                    </a>
                </li>
            </ul>

            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              )}
            </div>
          </div>

                {/* ------------ */}
                {/* <div class="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              class={"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"}>
                <li className="cursor-pointer">
                    <a 
                      target = "_blank"
                      rel="noopener noreferrer"
                      href="https://drive.google.com/file/d/1feeFeZZ5UZhCp0lsoRfrPLF3l1XfL-Tw/view">
                    Resume
                    </a>
                </li>
            </ul>
          </div> */}
                {/* ------------ */}
          <div className="flex md:hidden items-center">
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  alt=""
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                />
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
        {/* Mobile view nav bar */}
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                : "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    darkMode
                      ? "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                      : "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
              <li className="cursor-pointer">
                    <a 
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                      target = "_blank"
                      rel="noopener noreferrer"
                      href="https://drive.google.com/file/d/1feeFeZZ5UZhCp0lsoRfrPLF3l1XfL-Tw/view">
                    Resume
                    </a>
                </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;





// "@testing-library/jest-dom": "^5.16.5",
// "@testing-library/react": "^13.4.0",
// "@testing-library/user-event": "^13.5.0",
// "framer-motion": "^8.0.2",
// "hamburger-react": "^2.5.0",
// "react": "^18.2.0",
// "react-dom": "^18.2.0",
// "react-native-typical": "^1.1.2",
// "react-scripts": "5.0.1",
// "react-scroll": "^1.8.9",
// "react-tsparticles": "^2.7.1",
// "react-typical": "^0.1.3",
// "web-vitals": "^2.1.4"


// "@testing-library/jest-dom": "^5.16.5",
// "@testing-library/react": "^14.0.0",
// "@testing-library/user-event": "^14.4.3",
// "framer-motion": "^4.1.17",
// "gh-pages": "^5.0.0",
// "hamburger-react": "^2.5.0",
// "pkg": "^5.8.1",
// "react": "^18.2.0",
// "react-dom": "^18.2.0",
// "react-native-typical": "^1.1.2",
// "react-router-dom": "^6.8.2",
// "react-scripts": "^2.1.3",
// "react-scroll": "^1.8.9",
// "react-tsparticles": "^2.9.3",
// "react-typical": "^0.1.3",
// "web-vitals": "^3.1.1"