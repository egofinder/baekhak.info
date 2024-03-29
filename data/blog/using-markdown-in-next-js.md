---
title: "Using markdown in Next.js"
category: ["code", "next.js"]
summary: "The blog post discusses an alternative approach to styling Markdown content in a Next.js blog. It explores using the github-markdown-css library for styling and the rehype-pretty plugin for code highlighting. The post explains the limitations of the remark library and introduces an alternative using unified and related libraries. It also demonstrates how to apply the github-markdown-css styles to a React component rendering Markdown."
date: "2024-03-28"
author: "Baekhak Jeon"
---

# Introduction

When it comes to building a blog with Next.js, the [Blog Starter Kit](https://vercel.com/templates/next.js/blog-starter-kit) provides an excellent foundation. It offers comprehensive coverage on converting Markdown files to HTML and manually styling them. However, in this post, I'll explore an alternative approach to styling Markdown content using the popular [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) library. Additionally, I'll integrate a code highlight plugin like [rehype-pretty](https://rehype-pretty.pages.dev/) to enhance the readability and aesthetics of code snippets within our blog.

In this tutorial, I'll walk you through the steps to seamlessly integrate Markdown into your Next.js project, harnessing the power of existing libraries and plugins to streamline the process. By the end of this post, you'll have a beautifully styled blog powered by Next.js and Markdown, ready to captivate your audience with compelling content.

Let's dive in!

### Understand Next.js Blog Start kit

```javascript
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
```

- `getPostSlugs()`: This function reads the directory `postsDirectory` using `fs.readdirSync` and returns an array of filenames (without the `.md` extension) representing the slugs for each blog post.
- `getPostBySlug(slug: string)`: This function takes a `slug` parameter (the filename without the `.md` extension) and does the following:
  - Constructs the full file path by joining `postsDirectory` with `${slug}.md`.
  - Reads the file contents using `fs.readFileSync`.
  - Uses the `matter` library to parse the file contents and extract the front matter (metadata) and content body.
  - Returns an object containing the parsed data (front matter), the `slug`, and the content body.
- `getAllPosts()`: This function does the following:
  - Calls `getPostSlugs()` to get an array of post slugs.
  - Maps over the slugs and calls `getPostBySlug` for each one, creating an array of `Post` objects.
  - Sorts the array of `Post` objects in descending order based on the `date` property using the `sort` method.
  - Returns the sorted array of `Post` objects.

Above part are remain same.

```javascript
import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
```

Blog Start kilt using remark and remark-html library to convert markdown to html. However, when you try to use more library such as [remark-prism](https://github.com/sergioramos/remark-prism) is throw the error. So instead using remark and remark-html, using below code.

```javascript
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";



export default async function markdownToHtml(markdown: string) {

const htmlResult = await unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(rehypePrettyCode)
	.use(rehypeStringify)
	.process(markdown);

return htmlResult.toString();
}
```

This do the same functionality but you can use other library such as `rehype-pretty-code`.
It will highlight markdown coding block.

```javascript
import "github-markdown-css";

type Props = {
	content: string;
};


export const BlogBody = ({ content }: Props) => {

return (
	<div className="markdown-body mx-auto p-2">
		<div dangerouslySetInnerHTML={{ __html: content }} />
	</div>
	);
};

export default BlogBody;
```

You can use `github-markdown-css` library using `className="markdown-body"`

# Conclusion

In this tutorial, we explored an alternative approach to styling Markdown content in Next.js using the `github-markdown-css` library and the `rehype-pretty` plugin for code highlighting. By leveraging these powerful tools, we can create a beautifully styled blog with minimal effort, allowing us to focus on delivering compelling content to our audience.
