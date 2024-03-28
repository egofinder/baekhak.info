import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/libs/api";
import markdownToHtml from "@/libs/markdownToHtml";
import { BlogBody } from "@/components/custom-ui/blog-body";
import { BlogHeader } from "@/components/custom-ui/blog-header";
import "github-markdown-css";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <article className="container">
        <BlogHeader title={post.title} date={post.date} author={post.author} />
        <BlogBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
