interface PageHeaderProps {
  title: string;
  subTitle?: string;
}

const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <div className="prose max-w-7xl xl:prose-xl">
      <h1>{title}</h1>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default PageHeader;
