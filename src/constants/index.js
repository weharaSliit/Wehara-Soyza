import project1 from "../assets/projects/pro1.svg";
import project2 from "../assets/projects/pro2.svg";
import project3 from "../assets/projects/pro3.svg";
import project4 from "../assets/projects/pro4.svg";
import project5 from "../assets/projects/pro5.svg";
export const ABOUT_TEXT = `Hello! I am an aspiring Data Scientist with a strong passion for uncovering insights and solving complex problems through data. Currently pursuing a Bachelor's degree in Information Technology with a specialization in Data Science at SLIIT, I have developed a solid foundation in data analysis, machine learning, and statistical modeling.My journey so far includes hands-on experience with tools like Python and R.I am enthusiastic about leveraging data science to make a meaningful impact on businesses and society, and I continuously seek opportunities to grow and challenge myself in this ever-evolving field.`;

export const EDUCATION = [
  {
    year: "2019 - 2021",
    degree: "A/L's in Commerce Stream(Accounting,Statistics,Economics)",
    university: "De Mazenod College.",
  },
  {
    year: "2022 - 2023",
    degree: "Assured Diploma in Information Technology",
    university: "Esoft Metro Campus.",
  },
  {
    year: "2022 - Present (3 year 1 semester)",
    degree:
      "Reading: BSC(Hons) in Information Technology specializing in Data Science",
    university: "Sri Lanka Institute of Information Technology.",
  },
];

export const PROJECTS = [
  {
    title: "Art Gallery Management System",
    image: project1,
    description:
      "A fully functional Art gallery management system with features like User Management, Artwork Management, Bidding Management, Inquiry Management, Financial Management, Event Management, Ticketing Management and Inventory Management. This was done for the Awarna Art gallery as per the requirement of the client for 2 year 2 semester project. I have contributed by developing Bidding Management part of the project which was the innovative part in our Art gallery Management system.",
    technologies: ["MERN Stack", "Git"],
    link: "https://github.com/Savidya9800/Art-Gallery-Management-System",
  },
  {
    title: "Wedding Management System",
    image: project2,
    description:
      "The Wedding Management System is a fully functional website developed as part of a 2nd-year 1st-semester project. User involvement in this project was focused on the package management aspect, where we developed and integrated the module responsible for managing wedding packages, pricing, and service customization. This project was done using Object-Oriented Programming (OOP) concepts to ensure modular, maintainable, and scalable code for managing the complexities of wedding planning.",
    technologies: ["Java", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/weharaSliit",
  },
  {
    title: "Portfolio Website ",
    image: project3,
    description:
      "The Portfolio Website is a personal website designed to showcase the my skills, projects, education, and contact information. The website was developed using React for dynamic content, Tailwind CSS for modern and responsive styling, and Framer Motion for smooth animations. It was deployed on Vercel for fast and reliable hosting. The website serves as a comprehensive online representation of the my expertise and achievements.It also provides easy navigation to learn more about me and my work and connect with me.",
    technologies: ["React", "TailwindCss", "FramerMotion", "Vercel"],
    link: "https://github.com/weharaSliit/Wehara-Soyza",
  },

  {
    title: "Retail Sales Data Warehouse & BI Solution",
    image: project4,
    description:
      "This project demonstrates a complete end-to-end Business Intelligence (BI) workflow using a Snowflake Schema for a retail sales scenario. It includes:\n\n⚙️ Data Warehouse design and implementation (via SSMS)\n📊 OLAP Cube creation (via Visual Studio/SSAS)\n📝 SSRS Reports\n📈 Power BI dashboards\n📁 Excel-based OLAP operations",
    technologies: ["SSMS", "SSAS", "SSRS", "PowerBI", "Excel"],
    link: "https://github.com/weharaSliit/RetailAnalytics-DWBI", 
  },


  {
    title: "GrowSphere: Gardening & Sustainable Agriculture Platform",
    image: project5,
    description:
      "GrowSphere is a Spring-based web application designed to promote eco-friendly gardening and sustainable agriculture practices. The platform helps users plan, manage, and optimize gardens while fostering community engagement. Key features include User Profiles & Garden Logs, Gardening Tutorials, Community Discussions, and Growth Challenges with a leaderboard system to motivate participation. As the contributor for the Challenges & Leaderboard module, I implemented challenge tracking, badge earning, and ranking features.",
    technologies: ["SpringBoot", "React", "MongoDB", "Postman"],
    link: "https://github.com/weharaSliit/-Gardening-Sustainable-Agriculture-", 
  },
];

export const CONTACT = {
  address: "75/15/1, ClassicViewTerrace Pahalakaragahamuna Kadawatha ",
  phoneNo: "+94 76 924 3227 ",
  email: "soyzawehara@gmail.com",
};

export const INTERESTS = [
  {
    title: "Machine Learning",
    description:
      "Exploring algorithms and models that enable computers to learn and make predictions from data. Special focus on supervised and unsupervised learning techniques.",
  },
  {
    title: "Data Analysis",
    description:
      "Uncovering trends and insights by interpreting complex datasets using statistical and computational techniques.",
  },
  {
    title: "Data Visualization",
    description:
      "Transforming data into visually appealing and meaningful charts, graphs, and dashboards for better decision-making.",
  },
  {
    title: "Data Mining",
    description:
      "Extracting valuable information and patterns from large datasets to support business strategies and research.",
  },

  {
    title: "Big Data",
    description:
      "Handling and analyzing massive amounts of data to uncover actionable insights using distributed computing techniques.",
  },
  {
    title: "Cloud Computing",
    description:
      "Leveraging cloud platforms to store, process, and analyze data, ensuring scalability and efficiency.",
  },
];
