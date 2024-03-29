import { Post } from "@/types/Post";
import { FaHashtag } from "react-icons/fa6";
import DateFormatter from "../date-formatter";

type BlogListItemProps = Pick<Post, "title" | "category" | "summary" | "date">;

const categoryColors = {
  code: "bg-red-200",
  python: "bg-blue-200",
  LLM: "bg-green-200",
  etc: "bg-yellow-200",
};

const BlogListItem = ({
  title,
  category,
  summary,
  date,
}: BlogListItemProps) => {
  return (
    <div className="prose-xl flex flex-col">
      <div className="flex gap-2">
        {category.map((item) => {
          const colorClass = categoryColors[item] || "bg-gray-200";
          return (
            <div
              key={item}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-base ${colorClass}`}
            >
              <FaHashtag /> {item}
            </div>
          );
        })}
      </div>
      <h2 className="mt-2 text-3xl">{title}</h2>
      <p className="">{summary}</p>
      <p className="m-0 text-end">
        <DateFormatter dateString={date} />
      </p>
    </div>
  );
};

export default BlogListItem;
