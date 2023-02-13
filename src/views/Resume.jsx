import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Resume = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
    </div>
  );
};

export default Resume;
