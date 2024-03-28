import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
}

const postsDirectory = join(process.cwd(), "data/blog");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostWithSlug(file: string) {
  const slug = file.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: slug, content } as Post;
}

export function getAllPosts(): Post[] {
  const files = getPostFiles();
  const posts = files
    .map((file) => getPostWithSlug(file))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
