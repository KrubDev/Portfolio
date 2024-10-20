import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  /*
  {
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "It Manager",
    company_name: "Kegeberw Tv",
    icon: starbucks,
    iconBg: "#383E56",
    date: "16-12-2015 E.C - Present",
    points: [
      "Manage Kegeberw tv Websites and Social Media Platforms.",
      "Manage and maintain servers and network infrastructure to support TV station operations.",
      "Identify technology needs and create a technology roadmap that aligns with the station’s goals.",
      "Supervise IT staff, assign tasks, set priorities, and ensure team members have the necessary tools and resources.",
      "Ensure the security of data, network access, and backup systems.",
    ],
  },
  {
    title: "Trainer",
    company_name: "H2 (MH) COMPUTER& LANGUAGE CENTER ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "1-05-2014 E.C - 16-12-2015 E.C",
    points: [
      "Teaching students how to use computer systems, software applications, and programming languages",
      "Provide Technical Support for Exam",
      "Create and Review Exam Papers",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Eagle Pictures",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2024 Project Based ",
    points: [
      "Building the user-facing part of websites and applications using HTML, CSS, JavaScript.",
      "Developing server-side logic, managing databases, and ensuring application performance.",
      "Implementing security best practices to protect data.",
      " Writing tests to ensure code quality and using debugging tools to fix issues.",
    ],
  },
  /*
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Production Company",
    description:
      "This website project aims to promote and showcase our cutting-edge technology, while effectively highlighting the company’s services.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.eaglepicturesethiopia.com/",
  },
  {
    name: "Temprature Converter",
    description:
      "This converter website allows users to easily convert temperatures between Celsius, Fahrenheit, and Kelvin. With a clean and intuitive interface.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "First Portfolio",
    description:
      "This is my first portfolio, created as a learning project. It's been an exciting and enjoyable experience I utilized the latest technologies to develop this project.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://krubdev.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
