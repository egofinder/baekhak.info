import PageHeader from "@/components/custom-ui/page-header";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Headline = () => {
  return (
    <>
      <article>
        <PageHeader title="I'm Baekhak" />

        <p className="flex flex-row gap-4">
          <a
            href="https://github.com/egofinder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/egofinder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin size={30} className="bg-blue-800 text-white" />
          </a>
          <a href="mailto:baekhakjeon@gmail.com" className="no-underline">
            baekhakjeon@gmail.com
          </a>
        </p>
      </article>
      <article>
        <h2 className="sr-only">Who am I?</h2>
        <p>
          I am a{" "}
          <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 leading-4">
            👨‍💻 software developer
          </span>{" "}
          with a versatile background. I am expanding my expertise into frontend
          development, enriching my capabilities and ensuring a comprehensive
          skill set across the entire spectrum of software development.
          Additionally, I am exploring{" "}
          <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 leading-4">
            🤖 AI
          </span>{" "}
          further enhancing my knowledge and proficiency in cutting-edge
          technologies.
        </p>
      </article>
    </>
  );
};
export default Headline;
