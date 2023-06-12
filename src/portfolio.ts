import emoji from "react-easy-emoji";
import {
  SiKubernetes,
  SiPostgresql,
  SiPython,
  SiReact,
  SiJavascript,
  SiAmazonaws,
  SiGooglecloud,
  SiDocker,
  SiPandas,
  SiTensorflow,
  SiJupyter,
  SiFastapi,
  SiMlflow,
  SiHtml5,
  SiGit,
  SiScikitlearn,
  SiLooker,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { DiSpark } from "react-icons/di";

const homeInfo = {
  username: "Stanley Mayore",
  greeting: "Hey You, I'm ",
  prefname: "Stanley",
  prefTitle: "Full Stack Software Developer",
  subtitle: emoji(
    "A passionate Full Stack Software Developer with a diverse skill set in both backend and frontend development. With a strong background in programming, I specialize in developing robust and efficient software solutions that meet the specific needs of clients and end-users. I am dedicated to staying up-to-date with the latest technologies and best practices in the industry, constantly seeking out new challenges to further enhance my skills and experience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NEXn1ttxKkbN3O0Gs-qga0icrhU4ZP2u/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const socialMediaInfo = {
  github: "https://github.com/Leestan360",
  linkedin: "https://www.linkedin.com/in/stanley-mayore/",
  gmail: "stanleymayore2@gmail.com",
  twitter: "https://twitter.com/MayoreStanley",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false, // Set true to display this section, defaults to false
};

const headLine = {
  text: "Fullstack Software Developer | React | Ruby on Rails | FastAPI | DevOps",
};

// Skills Section

const skillsInfo = {
  title: "SKILLS",
  subTitle: "PROFICIENCIES",
  jd: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  languageskills: [
    {
      skillName: "Python",
      fontAwesomeClassname: SiPython,
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: SiJavascript,
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: SiHtml5,
    },
  ],

  frameworkskills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: SiReact,
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: FaNode,
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: SiPandas,
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: SiTensorflow,
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: DiSpark,
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: SiFastapi,
    },
    {
      skillName: "Mlflow",
      fontAwesomeClassname: SiMlflow,
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: SiScikitlearn,
    },
  ],

  cloud: [
    {
      skillName: "GCP",
      fontAwesomeClassname: SiGooglecloud,
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: SiAmazonaws,
    },
  ],

  databaseskills: [
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: SiPostgresql,
    },
    {
      skillName: "BigQuery",
      fontAwesomeClassname: TbBrandGoogleBigQuery,
    },
  ],

  others: [
    {
      skillName: "docker",
      fontAwesomeClassname: SiDocker,
    },
    {
      skillName: "k8s",
      fontAwesomeClassname: SiKubernetes,
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: SiJupyter,
    },
    {
      skillName: "Git",
      fontAwesomeClassname: SiGit,
    },
    {
      skillName: "Looker",
      fontAwesomeClassname: SiLooker,
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Experience Section
const workInfo = {
  title: "EXPERIENCE",
  display: true, //Set it to true to show workExperiences Section
  experiences: [
    {
      role: "Software Engineer",
      company: "Facebook",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stack: ["Python", "JavaScript", "TypeScript", "k8s", "Docker"],
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stack: ["Python", "JavaScript", "TypeScript", "k8s", "Docker"],
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stack: ["Python", "JavaScript", "TypeScript", "k8s", "Docker"],
    },
  ],
};

// Education Section

const educationInfo = {
  title: "EDUCATION",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "M.Sc. in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      schoolName: "Stanford University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.Sc in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      schoolName: "Stanford University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.Sc in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      schoolName: "JKUAT University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.Sc in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
  ],
};

var openSourceProjectsInfo = {
  title: "OTHER PROJECTS",
  display: true,
};

// BigProjects Section

const bigProjectsInfo = {
  title: "FEATURED PROJECTS",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectname: "Saayahealth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JavaScript", "TypeScrip"],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectname: "Nextu",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JaxScript", "TypeScrip"],
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectname: "Saayahealth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JavaScript", "TypeScript"],
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectname: "Saayahealth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JavaScript", "TypeScript"],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievements Section
const achievementsInfo = {
  title: "ACHIEVEMENTS",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievements: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      imagealt: "Google Code-In Logo",
      footerlink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imagealt: "Google Assistant Action Logo",
      footerlink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      // image: require("./assets/images/pwaLogo.webp"),
      imagealt: "PWA Logo",
      footerlink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogInfo = {
  title: "PUBLICATIONS",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/bb-tutorials-and-thoughts/how-to-get-started-with-react-typescript-version-749e7b3b16ab",
      title: "How To Get Started With React — Typescript Version",
      description:
        "React is a javascript library for web applications. You can build features quickly with simple, declarative templates.",
    },
    {
      url: "https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca",
      title:
        "How to Create and Publish React TypeScript npm Package With Demo and Automated Build",
      description: "Learn to create amazing projects from scratch",
    },
    {
      url: "https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca",
      title:
        "How to Create and Publish React TypeScript npm Package With Demo and Automated Build",
      description: "Learn to create amazing projects from scratch",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

export {
  homeInfo,
  headLine,
  socialMediaInfo,
  skillsInfo,
  educationInfo,
  workInfo,
  bigProjectsInfo,
  openSourceProjectsInfo,
  achievementsInfo,
  blogInfo,
};
