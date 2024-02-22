import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

const experiences = [
  {
    title: "Backend Developer",
    company: "Neozips",
    site: "https://neozips.com",
    description: [
      "Designed and developed RESTful APIs for Property Management and Auction Management Portals, enhancing operational efficiency and user experience.",
      "Engineered and normalized SQL databases to optimize system performance.",
      "Developed MongoDB database schemas to accelerate listing search and filtering capabilities.",
      "Automated the processing and storage of property listing data across 9 states using AWS Lambda.",
      "Integrated a secure Payment Gateway (Paddle), managing subscriptions, and enhancing financial transactions.",
      "Implemented an image processing service using AWS CloudFront and Lambda, significantly reducing website image load times.",
      "Deployed and maintained a website on AWS EC2, configuring VPC for improved site reliability and access.",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "Pacific Bay Lending Group",
    site: "https://pacbaylending.com",
    description: [
      "Developed custom document templates for loan processors using Encompass Restful API.",
      "Created an employee time tracking application using .NET.",
      "Developed the website to process appraisal orders using Stripe API.",
      "Assisted with network configuration for web hosting services.",
      "Administered Office 365 and Exchange server using PowerShell.",
    ],
  },
  {
    title: "Project Manager",
    company: "Ace Casino & Games, Inc.",
    description: [
      "Analyzed billions of horse racing results to optimize 'Return to Player'.",
      "Developed a random number generator using a Trusted Platform Module.",
      "Created API instructions to integrate hardware with software.",
      "Optimized project schedule and budget allocation.",
      "Communicated with multiple vendors to ensure project completion on time.",
    ],
  },
];

const WorkPage = () => {
  return (
    <section className="container prose mx-auto max-w-7xl px-3 xl:prose-xl">
      <h1>my work</h1>
      <p>
        Reflecting on past experiences and looking ahead, I am committed to
        establishing myself as a software developer and forging my career path
        in this field.
      </p>
      {experiences.map((experience, index) => (
        <article key={index}>
          <h2>{experience.title}</h2>
          <h3>
            {experience.site ? (
              <a
                href={experience.site}
                target="_blank"
                rel="noreferrer noopener"
                className="no-underline"
              >
                {experience.company} 🔗
              </a>
            ) : (
              experience.company
            )}
          </h3>
          <ul>
            {experience.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default WorkPage;
