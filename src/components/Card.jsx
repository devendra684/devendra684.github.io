import React from "react";
import { motion } from "framer-motion";
import ImageWithLoader from "./ImageWithLoader";

export const Card = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/devendra684/GitHub-API-Testing">
        <ImageWithLoader
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src="https://user-images.githubusercontent.com/100137935/239755990-f5f0fa0f-6a07-4085-ade3-215d068f3c6c.png"
          alt="GitHub API Testing project screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/devendra684/GitHub-API-Testing">
          <h5 
          className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            GitHub API Testing
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        Tested GitHub's Rest API Requests using Cypress, RestAssured, and PostMan.
        </p>
        {/* ---------------- */}
        <div className="project-tech-stack mb-4"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              display: "flex",
              flexWrap: "wrap",
              gap: "8px"
            }}
        >
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg?updated=1667565306852"
            alt="Cypress"
          />
          Cypress
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://rest-assured.io/img/logo-transparent.png"
            alt="Rest Assured"
          />
          RestAssured
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png"
            alt="Postman"
          />
          Postman
        </span>

        </div>
        {/* ---------------- */}
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/devendra684/GitHub-API-Testing"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300"
          >
            Github
          </a>
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://devendra684.github.io/GitHub-API-Testing/"
            className="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors duration-300"
          >
            Report
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Card2 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/devendra684/MX-Player">
        <ImageWithLoader
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src="https://user-images.githubusercontent.com/100137935/239757217-b5a13d4c-37bf-47e7-bafd-cdc3dad8ffa7.png"
          alt="MX Player Testing project screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/devendra684/MX-Player">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          MX Player Testing
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        Tested the MX Player website manually and with automation using Jira and Selenium.
        </p>
        {/* ---------------- */}
        <div className="project-tech-stack mb-4"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              display: "flex",
              flexWrap: "wrap",
              gap: "8px"
            }}
        >
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png"
            alt="Jira"
          />
          Jira
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://user-images.githubusercontent.com/25181517/184103699-d1b83c07-2d83-4d99-9a1e-83bd89e08117.png"
            alt="Selenium"
          />
          Selenium
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbsqme0rpZtDu7iRTGAbJnuynClFtlfGaMQ&usqp=CAU"
            alt="Google Docs"
          />
          Google Docs
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://e7.pngegg.com/pngimages/660/350/png-clipart-green-and-white-sheet-icon-google-docs-google-sheets-spreadsheet-g-suite-google-angle-rectangle-thumbnail.png"
            alt="Google Sheet"
          />
          Google Sheets
        </span>

        </div>
        {/* ---------------- */}
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/devendra684/MX-Player"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300"
          >
            Github
          </a>
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://drive.google.com/drive/folders/1dMAPAI3u6OwxcGcHOgxPuOD49e_Gq96K?usp=share_link"
            className="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors duration-300"
          >
            Documentations & Report
          </a>
        </div>
      </div>
    </motion.div>
  );
};
          
export const Card3 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/devendra684/TheSouledStore-Cypress_Testing_Project">
        <ImageWithLoader
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src="https://user-images.githubusercontent.com/100137935/239754934-99b643e7-e215-4a70-837b-28dc8c4661b1.png"
          alt="The Souled Store Testing project screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/devendra684/TheSouledStore-Cypress_Testing_Project">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          The Souled Store Testing
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        A Cypress_Automation_Testing_Project for The Souled Store Fashion Website Through BDD Framework with Cucumber.
        </p>
        {/* ---------------- */}
        <div className="project-tech-stack mb-4"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              display: "flex",
              flexWrap: "wrap",
              gap: "8px"
            }}
        >
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="Javascript"
          />
          JavaScript
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg?updated=1667565306852"
            alt="Cypress"
          />
          Cypress
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://user-images.githubusercontent.com/25181517/184117353-4b437677-c4bb-4f4c-b448-af4920576732.png"
            alt="Cucumber"
          />
          Cucumber
        </span>

        </div>
        {/* ---------------- */}
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/devendra684/TheSouledStore-Cypress_Testing_Project"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300"
          >
            Github
          </a>
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://cypress-project-the-souled-store.vercel.app/"
            className="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors duration-300"
          >
            Report
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Card4 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/devendra684/MobileApp_Testing_Project/">
        <ImageWithLoader
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src="https://github.com/devendra684/MobileApp_Testing_Project/assets/100137935/2f405943-cac8-4119-a207-ac310d64aa82"
          alt="MobileApp Testing project screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/devendra684/MobileApp_Testing_Project">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          MobileApp Testing
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        MobileApp Testing of BanjaraRide & KhanAcademy Apps with Appium or WebDriver IO.
        </p>
        {/* ---------------- */}
        <div className="project-tech-stack mb-4"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              display: "flex",
              flexWrap: "wrap",
              gap: "8px"
            }}
        >
        {/* <img
          style={{
              height: "30px", 
              width: "10%" ,
              marginRight: "2%"
            }}
            className="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
        /> */}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://media.licdn.com/dms/image/C4D12AQEZtRC0Fmthug/article-cover_image-shrink_720_1280/0/1622547563757?e=2147483647&v=beta&t=x4JzboPDaE3hsCoWH-IEWemEhi85w3ZQzD73Us2JBk0"
            alt="WebDriverIO"
          />
          WebDriverIO
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <img
            style={{
                height: "16px", 
                width: "16px",
                marginRight: "4px"
              }}
            className="rounded-sm"
            src="https://w7.pngwing.com/pngs/782/363/png-transparent-appium-hd-logo-thumbnail.png"
            alt="Appium"
          />
          Appium
        </span>

        </div>
        {/* ---------------- */}
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/devendra684/MobileApp_Testing_Project"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300"
          >
            Github
          </a>
          <a style={{ marginLeft: "0px", paddingLeft: "20px", paddingRight: "20px" }}
            href="https://devendra684.github.io/MobileApp_Testing_Project/"
            className="project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors duration-300"
          >
            Report
          </a>
        </div>
      </div>
    </motion.div>
  );
};
