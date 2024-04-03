import { getAllPosts } from "@/libs/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = getAllPosts();
  const blogPostUrls = blogPosts.map((post) => ({
    url: `https://baekhak.info/blogs/${post.slug}`,
  }));

  return [
    { url: "https://www.baekhak.info/work" },
    { url: "https://www.baekhak.info/projects" },
    { url: "https://www.baekhak.info/blogs" },
    ...blogPostUrls,
  ];
}
