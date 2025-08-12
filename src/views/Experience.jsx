import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const experienceData = [
    {
      company: "QuickTouch Technologies Limited",
      title: "QA Engineer",
      duration: "Jan 2024 - Present",
      location: "New Delhi",
      description: "QuickCampus is an ERP system for schools and colleges, managing functions like registration, admissions, results, library services, attendance, fee management with online payments, teacher-student communication, and more via mobile apps and web panels. Serving 4000+ users, I applied my testing expertise to ensure the system's functionality, performance, and quality.",
      responsibilities: [
        "Ensured smooth operation and efficient testing: Identified and resolved bugs to ensure a smoother user experience, and utilized Jira for bug tracking and task management",
        "Enhanced testing capabilities: Implemented automation testing using Cypress and conducted API testing, enhancing testing efficiency, preventing critical bugs, and ensuring a user-friendly experience",
        "Promoted collaboration: Worked closely with cross-functional teams to identify and troubleshoot software issues, ensuring QuickCampus reliability and usability"
      ]
    },
    {
      company: "Masai School",
      title: "QA Trainee",
      duration: "Jul 2023 - Oct 2023",
      location: "Bengaluru",
      description: "Performed manual and automated testing on Masai School's website and Student LMS, ensuring seamless functionality critical for student learning and assignment submissions. Leveraged expertise in automation to develop and implement robust test scripts, significantly enhancing testing efficiency and accuracy.",
      responsibilities: [
        "Executed Comprehensive Testing and Documentation: Conducted thorough manual testing on Masai School's website and Student LMS, identifying and documenting defects. Maintained detailed test cases, results, and bug reports using Jira for clear communication",
        "Implemented Automated Test Scripts: Developed and executed automated test scripts using pytest, optimizing test coverage and enhancing the user experience",
        "Engaged in Agile Methodologies: Actively participated in Agile ceremonies, including daily stand-ups and sprint planning, to align priorities and monitor project progress"
      ]
    }
  ];

  return (
    <div
      id="experience"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-16 pb-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          <p className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline">
            Experience
          </p>
        </h2>
        
        <h4 className="mt-8 text-3xl font-semibold text-blue-600">
          Professional Journey
        </h4>
        
        <div className="mt-8 space-y-8">
          {experienceData.map((job, index) => (
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
              className={`relative pl-8 pb-8 ${
                index !== experienceData.length - 1 ? "border-l-2 border-blue-500" : ""
              }`}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">
                      {job.title}
                    </h3>
                    <h4 className="text-xl font-semibold mb-1">
                      {job.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {job.duration} • {job.location}
                    </p>
                  </div>
                </div>
                
                {job.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                )}
                
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;