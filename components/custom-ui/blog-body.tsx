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
