"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Dream</p>
      <p className="text-base font-normal text-white">Chasing a dream</p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Stabel diffusion v1.5 artwork by Baekhak
      </p>
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Portrait</p>
      <p className="text-base font-normal text-white">Mindmap</p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Stable diffusion v1.5 artwork by Baekhak
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Winter</p>
      <p className="text-base font-normal text-white">Winter Lake</p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        JuggernautXL artwork by Baekhak
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonThree />,
    className: "col-span-2",
    thumbnail: "/images/winter.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portrait.png",
  },
  {
    id: 3,
    content: <SkeletonOne />,
    className: "col-span-2",
    thumbnail: "/images/chasing-dream.png",
  },
];

const ArtWork = () => {
  return (
    <article>
      <h2 className="sr-only">Baekhak&apos;s AI generated Arts.</h2>
      <div className="relative h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
    </article>
  );
};
export default ArtWork;
