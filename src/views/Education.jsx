import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const educationData = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Mangalayatan University",
      year: "2023 - Pursuing",
      location: "Aligarh, Uttar Pradesh",
      highlights: [
        "Currently pursuing undergraduate degree in Computer Applications",
        "Focus on software development and computer science fundamentals",
        "Building strong foundation in programming and technology"
      ]
    },
    {
      degree: "Software Development Engineer in Test (SDET)",
      institution: "Masai School",
      year: "Mar 2023 – Aug 2023",
      location: "Bengaluru, Karnataka",
      highlights: [
        "Comprehensive training in software testing methodologies",
        "Hands-on experience with automation testing tools and frameworks",
        "Practical projects involving manual and automated testing scenarios"
      ]
    }
  ];

  return (
    <div
      id="education"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-16 pb-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          <p className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline">
            Education
          </p>
        </h2>
        
        <h4 className="mt-8 text-3xl font-semibold text-blue-600">
          Academic Background
        </h4>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    delay: index * 0.2,
                  },
                },
                hidden: { opacity: 0, y: 50 },
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-semibold mb-1">
                  {edu.institution}
                </h4>
                <div className="flex flex-col mb-3">
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.year}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {edu.location}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: 0.4,
                },
              },
              hidden: { opacity: 0, y: 30 },
            }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
          >
            <h5 className="text-lg font-semibold text-blue-600 mb-2">
              Continuous Learning
            </h5>
            <p className="text-gray-700 dark:text-gray-300">
              Committed to staying updated with the latest testing methodologies, 
              automation tools, and industry best practices through continuous 
              learning and professional development.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;