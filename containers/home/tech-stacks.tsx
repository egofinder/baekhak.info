import phpLogo from "@/public/logos/new-php-logo.svg";
import pythonLogo from "@/public/logos/python-logo-inkscape.svg";
import javascriptLogo from "@/public/logos/javascript-logo.svg";
import laravelLogo from "@/public/logos/laravel-logo.svg";
import nextjsLogo from "@/public/logos/nextjs-logo.svg";
import mysqlLogo from "@/public/logos/mysql-logo.svg";
import mongodbLogo from "@/public/logos/mongodb-logo.svg";
import awsLogo from "@/public/logos/aws-logo.svg";
import azureLogo from "@/public/logos/azure-logo.svg";
import googleCloudLogo from "@/public/logos/google-cloud-logo.svg";
import typeScriptLogo from "@/public/logos/ts-logo.svg";
import Image from "next/image";

const techStacks = [
  {
    name: "PHP",
    image: phpLogo,
  },
  {
    name: "Laravel",
    image: laravelLogo,
  },
  {
    name: "JavaScript",
    image: javascriptLogo,
  },
  {
    name: "TypeScript",
    image: typeScriptLogo,
  },
  {
    name: "Next.js",
    image: nextjsLogo,
  },
  {
    name: "Python",
    image: pythonLogo,
  },
  {
    name: "MySQL",
    image: mysqlLogo,
  },
  {
    name: "MongoDB",
    image: mongodbLogo,
  },
  {
    name: "AWS",
    image: awsLogo,
  },
  {
    name: "Azure",
    image: azureLogo,
  },
  {
    name: "Google Cloud",
    image: googleCloudLogo,
  },
];

const TechStacks = () => {
  return (
    <article>
      <h2 className="sr-only">What is my tech stacks?</h2>
      <p>
        I study various programming languages, frameworks, databases, cloud
        flatforms.
      </p>
      <p className="mx-auto flex w-full max-w-[768px] flex-1 flex-row flex-wrap justify-center gap-4">
        {techStacks.map((techStack, index) => (
          <span
            key={index}
            className="flex h-20 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3"
          >
            <Image
              src={techStack.image}
              width={65}
              height={65}
              alt={techStack.name}
              className="mx-auto"
            />
          </span>
        ))}
      </p>
    </article>
  );
};
export default TechStacks;
