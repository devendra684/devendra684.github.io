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
      <a href="http://steady-mousse-f8c619.netlify.app/">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/100137935/212492862-2528d69e-7655-4655-8d8c-c508869490e2.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="http://steady-mousse-f8c619.netlify.app/">
          <h5 
          class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bewakoof.com
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          Online Shopping Site for Men, Women & Accessories. Choose from the best Trendiest designs & customised stylist products from Bewakoof.com
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
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html5"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt="css3"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/devendra684/Bewakoof.com_Clone"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="http://steady-mousse-f8c619.netlify.app/"
          class="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Preview
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
      <a href="https://fantastic-piroshki-8229c8.netlify.app/">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/100137935/212491546-7a00737a-8812-40df-adcc-0ac3cc34846e.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="https://fantastic-piroshki-8229c8.netlify.app/">
          <h5 class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          BePretty (MyGlamm)
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          Buy international beauty products & cosmetic makeup items on BePretty, the online beauty shopping store.
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
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html5"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt="css3"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/hariom722581343/glamorous-snails-6242"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="https://fantastic-piroshki-8229c8.netlify.app/"
          class="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Preview
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
      <a href="https://zeeplay.vercel.app/">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/100137935/212492860-212906a3-eb1c-40ca-a879-9ccbff795367.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="https://zeeplay.vercel.app/">
          <h5 class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Zee Play
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        Zee Play (Clone of Zee5 Website) is a Subscription-based OTT platform to access Entertainment content.
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
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html5"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt="css3"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://img.icons8.com/color/256/chakra-ui.png"
            alt="chakra UI"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/devendra684/ZeePlay"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="https://zeeplay.vercel.app/"
          class="project-tech-stack project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Preview
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
      <a href="https://jazzy-twilight-d591ed.netlify.app/">
        <img
          style={{ 
            // border: "1px solid red", 
            height: "300px", width: "100%" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/100137935/212492709-1381d3b9-1aad-430e-87fe-72c9f129aee7.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="https://jazzy-twilight-d591ed.netlify.app/">
          <h5 class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Kimaye
          </h5>
        </a>
        <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
        Get your fresh Vegetable's and Fruit's at your door step. Kimaye in Mumbai is known to satisfactorily cater to the demands of its customer base.
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
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html5"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt="css3"
        />
        <img
          style={{
              height: "30px", 
              width: "10%" 
            }}
            class="rounded-t-lg w-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
        />

        </div>
        {/* ---------------- */}
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href="https://github.com/UmerAhmad9126/overconfident-unit-8852"
          class="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Github
        </a>
        <a style={{ marginLeft: "40px", paddingLeft: "20px", paddingRight: "20px" }}
          href="https://jazzy-twilight-d591ed.netlify.app/"
          class="project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Preview
        </a>
      </div>
    </motion.div>
  );
};