import { Metadata } from "next";
import { getAllPosts } from "@/libs/api";
import Link from "next/link";
import PageHeader from "@/components/custom-ui/page-header";
import BlogListItem from "@/components/custom-ui/blog/blog-list-item";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogsPage = () => {
  const posts = getAllPosts().map((post) => ({
    title: post.title,
    category: post.category,
    summary: post.summary,
    date: post.date,
    slug: post.slug,
  }));

  return (
    <div className="container">
      <PageHeader title="my blog" />

      <br />
      {posts.map((post) => (
        <div
          key={post.title}
          className="flex w-full justify-between gap-5 py-5"
        >
          <Link href={`/blogs/${post.slug}`} className="w-full cursor-pointer">
            <BlogListItem
              title={post.title}
              category={post.category}
              summary={post.summary}
              date={post.date}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
