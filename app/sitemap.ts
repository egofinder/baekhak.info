import { getAllPosts } from "@/libs/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = getAllPosts();
  const blogPostUrls = blogPosts.map((post) => ({
    url: `https://baekhak.info/blogs/${post.slug}`,
  }));

  return [
    { url: "https://baekhak.info/work" },
    { url: "https://baekhak.info/projects" },
    { url: "https://baekhak.info/blogs" },
    ...blogPostUrls,
  ];
}
