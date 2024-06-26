import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostWithSlug } from "@/libs/api";
import markdownToHtml from "@/libs/markdownToHtml";
import { BlogBody } from "@/components/custom-ui/blog/blog-body";
import { BlogHeader } from "@/components/custom-ui/blog/blog-header";
import { cache } from "react";

type Params = {
  params: {
    slug: string;
  };
};

// Mannually deduplicate requests if not using fetch
const getPost = cache((slug: string) => getPostWithSlug(slug));

export function generateMetadata({ params }: Params): Metadata {
  // const post = getPostWithSlug(params.slug);
  const post = getPost(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;
  const description = post.summary;

  return {
    title,
    description,
  };
}

export default async function Post({ params }: Params) {
  // const post = getPostWithSlug(params.slug);
  const post = getPost(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <article className="container px-3">
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
