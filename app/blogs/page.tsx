import { Metadata } from "next";
import { getAllPosts } from "@/libs/api";
import Link from "next/link";
import PageHeader from "@/components/custom-ui/page-header";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogsPage = () => {
  const posts = getAllPosts().map((post) => ({
    title: post.title,
    date: post.date,
    slug: post.slug,
  }));

  return (
    <div className="container">
      <PageHeader title="my blog" />

      <br />
      {posts.map((post) => (
        <div key={post.title} className="flex justify-between gap-5 py-5">
          <Link href={`/blogs/${post.slug}`}>
            <h2 className="cursor-pointer">{post.title}</h2>
          </Link>
          <p className="font-bold">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
