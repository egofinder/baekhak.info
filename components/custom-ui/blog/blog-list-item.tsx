import { Post } from "@/types/Post";
import { FaHashtag } from "react-icons/fa6";
import DateFormatter from "../date-formatter";

type BlogListItemProps = Pick<Post, "title" | "category" | "summary" | "date">;

const BlogListItem = ({
  title,
  category,
  summary,
  date,
}: BlogListItemProps) => {
  return (
    <div className="prose flex flex-col">
      <div className="flex gap-2">
        {category.map((item) => {
          return (
            <div
              key={item}
              className="flex items-center gap-1 rounded-md bg-gray-200 px-2 py-1"
            >
              <FaHashtag /> {item}
            </div>
          );
        })}
      </div>
      <h2 className="mt-2">{title}</h2>
      <p className="">{summary}</p>
      <p className="m-0 text-end">
        <DateFormatter dateString={date} />
      </p>
    </div>
  );
};

export default BlogListItem;
