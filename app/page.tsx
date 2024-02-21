import TechStacks from "@/containers/home/tech-stacks";
import Headline from "@/containers/home/headline";
import ArtWork from "@/containers/home/art-work";
import Certificates from "@/containers/home/certificates";

export default function Home() {
  return (
    <section className="container prose mx-auto max-w-7xl px-3 xl:prose-xl">
      <Headline />
      <ArtWork />
      <TechStacks />
      <Certificates />
    </section>
  );
}
