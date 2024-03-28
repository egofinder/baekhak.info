import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  author: string;
};

export function BlogHeader({ title, date, author }: Props) {
  return (
    <div>
      <div className="flex flex-col items-end">
        <h1 className="mb-4 text-pretty text-end text-3xl md:text-4xl xl:text-5xl">
          {title}
        </h1>
        <DateFormatter dateString={date} />
        <p>{author}</p>
      </div>
    </div>
  );
}
