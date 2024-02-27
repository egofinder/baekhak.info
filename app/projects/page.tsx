import { Metadata } from "next";
import Content from "@/containers/project/content";
import Headline from "@/containers/project/headline";
import { Project } from "@/types/Project";

export const metadata: Metadata = {
  title: "Project",
};

const projectData: Project[] = [
  {
    title: "Ciel Clair",
    description:
      "I've created a website for selling clothes. While looking at design elements from other sites and implementing them, I practiced using Tailwind CSS and Next.js 14.",
    siteUrl: "https://cielclair-com.vercel.app/",
    githubUrl: "",
    imageUrl: "/images/projects/cielclair.png",
    date: "2024-02-26",
  },
  {
    title: "Project 5",
    description:
      "The fifth project is an Airbnb clone project. Through implementing the search functionality to search for listings, I learned how the filters selected by the customer are transformed and passed to the database. While the structure was more complex compared to previous projects, the fundamental approach was similar, allowing me to understand how the basics evolved into more advanced forms of implementation.",
    siteUrl: "https://next14-project-5.vercel.app",
    githubUrl: "https://github.com/egofinder/next14-project-5",
    imageUrl: "/images/projects/project-5.png",
    date: "test5",
  },
  {
    title: "Project 4",
    description:
      "The fourth project is a real-time chat and video conferencing website using websockets. I experimented with websocket functionalities while implementing features similar to those provided by Discord. Through creating custom hooks, I gained a deeper understanding of hooks. Additionally, I learned that using external design libraries can facilitate design development. Moreover, I learned how to use Prisma for database management, gaining experience in database usage.",
    siteUrl: "https://next14-project-4-production.up.railway.app",
    githubUrl: "https://github.com/egofinder/next14-project-4",
    imageUrl: "/images/projects/project-4.png",
    date: "test4",
  },
  {
    title: "Project 3",
    description:
      "The third project I created serves as an intermediary using APIs provided by AI websites. It acts as a bridge for customers who may find it difficult to directly interact with the APIs, providing them with an easy-to-use UI. Through this project, I learned about various companies offering AI services, and realized that incorporating useful features already developed by other companies into a website can significantly accelerate development speed, rather than developing everything from scratch.",
    siteUrl: "https://next14-project-3.vercel.app",
    githubUrl: "https://github.com/egofinder/next14-project-3",
    imageUrl: "/images/projects/project-3.png",
    date: "test3",
  },
  {
    title: "Project 2",
    description:
      "The second project I created is a customer dashboard. To draw charts, I imported and used external libraries, and practiced fetching data from MongoDB to display customer and product information. It allowed me to learn how to apply CSS using CSS modules and understand the scope of CSS application.",
    siteUrl: "https://next14-project-2.vercel.app",
    githubUrl: "https://github.com/egofinder/next14-project-2",
    imageUrl: "/images/projects/project-2.png",
    date: "test2",
  },

  {
    title: "Project 1",
    description:
      "This is my first project using the Next.js framework. I experimented with the newly introduced server action in Next.js 14 and also tried implementing user authentication using Auth.js. It was a project aimed at learning the file structure and basic functionalities used in website development with Next.js.",
    siteUrl: "https://next14-project-1.vercel.app",
    githubUrl: "https://github.com/egofinder/next14-project-1",
    imageUrl: "/images/projects/project-1.png",
    date: "test1",
  },
];

const ProjectPage = () => {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 px-3">
      <Headline />
      <Content projects={projectData} />
    </div>
  );
};

export default ProjectPage;
