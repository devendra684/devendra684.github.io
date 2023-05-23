import React from "react";
import { motion } from "framer-motion";

export const Card = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://github.com/devendra684/GitHub-API-Testing">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/100137935/239755990-f5f0fa0f-6a07-4085-ade3-215d068f3c6c.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="https://github.com/devendra684/GitHub-API-Testing">
          <h5 
          class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            GitHub API Testing
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        Tested GitHub's Rest API Requests using Cypress, RestAssured, and PostMan.
        </p>
        {/* ---------------- */}
        <div class="project-tech-stack"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              marginBottom: "1.5%",
              display: "flex",
            }}
        >
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg?updated=1667565306852"
            alt="Cypress"
        />
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://rest-assured.io/img/logo-transparent.png"
            alt="Rest Assured"
        />
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png"
            alt="Postman"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/devendra684/GitHub-API-Testing"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="https://devendra684.github.io/GitHub-API-Testing/"
          class="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Report
        </a>
      </div>
    </motion.div>
  );
};

export const Card2 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://github.com/devendra684/MX-Player">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/100137935/239757217-b5a13d4c-37bf-47e7-bafd-cdc3dad8ffa7.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="https://github.com/devendra684/MX-Player">
          <h5 class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          MX Player Testing
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        Tested the MX Player website manually and with automation using Jira and Selenium.
        </p>
        {/* ---------------- */}
        <div class="project-tech-stack"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              marginBottom: "1.5%",
              display: "flex",
            }}
        >
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png"
            alt="Jira"
        />
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://user-images.githubusercontent.com/25181517/184103699-d1b83c07-2d83-4d99-9a1e-83bd89e08117.png"
            alt="Selenium"
        />
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%" 
            }}
            class="rounded-t-lg w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbsqme0rpZtDu7iRTGAbJnuynClFtlfGaMQ&usqp=CAU"
            alt="Google Docs"
        />
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://e7.pngegg.com/pngimages/660/350/png-clipart-green-and-white-sheet-icon-google-docs-google-sheets-spreadsheet-g-suite-google-angle-rectangle-thumbnail.png"
            alt="Google Sheet"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2Qv1U0pmC5MatU99tlBWfe3vpjQToR_Ptw&usqp=CAU"
            alt="MindMap"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/devendra684/MX-Player"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="https://drive.google.com/drive/folders/1dMAPAI3u6OwxcGcHOgxPuOD49e_Gq96K?usp=share_link"
          class="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Documentations & Report
        </a>
      </div>
    </motion.div>
  );
};
          
export const Card3 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://github.com/devendra684/TheSouledStore-Cypress_Testing_Project">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/100137935/239754934-99b643e7-e215-4a70-837b-28dc8c4661b1.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="https://github.com/devendra684/TheSouledStore-Cypress_Testing_Project">
          <h5 class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          The Souled Store Testing
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        A Cypress_Automation_Testing_Project for The Souled Store Fashion Website Through BDD Framework with Cucumber.
        </p>
        {/* ---------------- */}
        <div class="project-tech-stack"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              marginBottom: "1.5%",
              display: "flex",
            }}
        >
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="Javascript"
        />
        <img
          style={{
              height: "30px", 
              width: "10%",
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg?updated=1667565306852"
            alt="Cypress"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" ,
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://user-images.githubusercontent.com/25181517/184117353-4b437677-c4bb-4f4c-b448-af4920576732.png"
            alt="Cucumber"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/devendra684/TheSouledStore-Cypress_Testing_Project"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="hhttps://cypress-project-the-souled-store.vercel.app/"
          class="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Report
        </a>
      </div>
    </motion.div>
  );
};

export const Card4 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://github.com/devendra684/AppiumProject">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://w7.pngwing.com/pngs/782/363/png-transparent-appium-hd-logo-thumbnail.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="https://github.com/devendra684/AppiumProject">
          <h5 class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Kimaye
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        Appium Project for Mobile App Testing. Mobile App Tested for both Emulator and Real Device.
        </p>
        {/* ---------------- */}
        <div class="project-tech-stack"
          style={{ 
              // border: "1px solid red", 
              // height: "30px", 
              // width: "10%" 
              marginBottom: "1.5%",
              display: "flex",
            }}
        >
        <img
          style={{
              height: "30px", 
              width: "10%" ,
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" ,
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg?updated=1667565306852"
            alt="Cypress"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" ,
              marginRight: "2%"
            }}
            class="rounded-t-lg w-full"
            src="https://w7.pngwing.com/pngs/782/363/png-transparent-appium-hd-logo-thumbnail.png"
            alt="Appium"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/devendra684/AppiumProject"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/devendra684/AppiumProject"
          class="project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Report
        </a>
      </div>
    </motion.div>
  );
};