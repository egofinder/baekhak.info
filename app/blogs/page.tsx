import { Metadata } from "next";
import { getAllPosts } from "@/libs/api";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogsPage = () => {
  const posts = getAllPosts();
  const postList = posts.map((post) => ({
    title: post.title,
    date: post.date,
    slug: post.slug,
  }));
  //   console.log(postList);

  return (
    <div className="container">
      {/* TODO:: Component로 만들어야 함. */}
      <div className="prose max-w-7xl xl:prose-xl">
        <h1>my blogs</h1>
      </div>
      <br />

      {postList.map((post) => (
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
