import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import TagList from "@/components/shared/tag/TagList";
import { TagFilters } from "@/constants/filters";

const Page = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/tags"
          iconPosition="left"
          placeholder="Search for tags"
          className="flex-1"
        />

        <Filter
          items={TagFilters}
          className="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <TagList />
    </>
  );
};

export default Page;
