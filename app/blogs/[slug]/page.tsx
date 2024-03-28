import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostWithSlug } from "@/libs/api";
import markdownToHtml from "@/libs/markdownToHtml";
import { BlogBody } from "@/components/custom-ui/blog-body";
import { BlogHeader } from "@/components/custom-ui/blog-header";
import "github-markdown-css";

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostWithSlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
  };
}

export default async function Post({ params }: Params) {
  const post = getPostWithSlug(params.slug);

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

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
