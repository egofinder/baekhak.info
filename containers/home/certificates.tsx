import Image from "next/image";

import azureCertificate from "@/public/logos/certificates/microsoft-certified-associate-badge.svg";
import amazonCertificate from "@/public/logos/certificates/aws-certified-solutions-architect-associate.png";
import ciscoCertificate from "@/public/logos/certificates/cisco-ccna.png";
import googleCertificate from "@/public/logos/certificates/google-data-analytics.png";
import { cn } from "@/libs/utils";
const certificates = [
  {
    name: "Azure Administrator Associate",
    image: azureCertificate,
    link: "https://www.credly.com/badges/b1081efe-1e41-4c86-8d8e-7938b018a865/public_url",
    // bgColor: "bg-gradient-to-t from-blue-400 to-blue-100",
  },
  {
    name: "Solutions Architect Associate",
    image: amazonCertificate,
    link: "https://www.credly.com/badges/dbc22696-85c7-41cc-9660-98d87254bd52/public_url",
    // bgColor: "bg-gradient-to-t from-amber-400 to-amber-100",
  },
  {
    name: "Google Data Analytics",
    image: googleCertificate,
    link: "https://www.credly.com/badges/d7d562d6-a30b-47b8-8da4-abfd13091772/public_url",
    // bgColor: "bg-gradient-to-t from-rose-400 to-blue-300",
  },
  {
    name: "Network Associate",
    image: ciscoCertificate,
    link: "https://www.credly.com/badges/1a8fa5e4-9bec-4655-b0b7-cafdb47d6054/public_url",
    // bgColor: "bg-gradient-to-t from-cyan-300 to-cyan-100",
  },
];

const Certificates = () => {
  return (
    <article>
      <h2 className="sr-only">What certificates do I have?</h2>
      <p>
        I have earned several certifications in the course of my career. I
        leverage the skills and insights acquired during the certification
        process in my current endeavors, ensuring that the time and effort
        invested in learning are continually put to good use.
      </p>
      <p className="mx-auto flex flex-1 flex-row flex-wrap justify-center gap-4">
        {certificates.map((certificate, index) => (
          <span
            key={index}
            className={cn(
              "flex w-80 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 lg:w-96",
            )}
          >
            <a
              href={certificate.link}
              target="_blank"
              className="flex h-full w-full flex-col items-center justify-between text-center font-medium no-underline"
            >
              {certificate.name}
              <Image
                src={certificate.image}
                height={100}
                alt={certificate.name}
                style={{
                  margin: "1rem",
                }}
              />
            </a>
          </span>
        ))}
      </p>
    </article>
  );
};

export default Certificates;
