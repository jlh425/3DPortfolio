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
  carrent,
  jobit,
  tripguide,
  threejs,
  TechHunterLLC,
  TechHunterLLC2,
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
      title: "Web Developier",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Technology Hunter",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Technology Hunter",
      company_name: "Tech Hunter LLC",
      icon: TechHunterLLC,
      iconBg: "#383E56",
      date: "Janurary 2020 - Today",
      points: [
        "Built amazing workstations at the best possible price.",
        "Built crypto mining infrastructures.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Tech Hunter LLC",
      icon: TechHunterLLC2,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Developing and maintaining web applications using React  and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        " ",
      name: "Sam",
      designation: "Civil Engineer",
      company: "",
      image: "src\\assets\\civilEngineerIcon.png",
    },
    {
      testimonial:
        "",
      name: "Mark",
      designation: "Client",
      company: "",
      image: "src\\assets\\consumerIcon.svg",
    },
    
  ];
  
  const projects = [
    {
      name: "GPT AI Website",
      description:
        "Using OpenAI's GPT model I designed a Article Summarizer Application. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GPT model",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Music-ify",
      description:
        "Creating a Spotify like product. It has the following features, music player, search function, display lyrics, song exploration, worldwide top charts, and popular music around you",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "ECommerce Store",
      description:
        "A Ecommerce store that provides one of the best user experience that the web has to offer.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };