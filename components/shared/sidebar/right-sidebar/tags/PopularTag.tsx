import { topTags } from "@/constants";

const PopularTag = () => {
  return (
    <div className="mt-16">
      <h1 className="h3-bold text-dark200_light900">Tags</h1>
      <div className="mb-10 mt-6 flex flex-col gap-8">
        {topTags.map((tag, index) => (
          <a
            key={tag.id}
            href={tag.path}
            className="flex justify-between gap-2"
          >
            <div className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300 ">
              {tag.name}
            </div>
            <div className="small-medium text-dark500_light700">{tag.count}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularTag;
