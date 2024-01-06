import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { HomePageFilters } from "@/constants/filters";
import Filter from "../shared/Filter";

const HomeFilter = () => {
  return (
    <div>
      <ToggleGroup
        type="single"
        className="flex justify-start gap-4 max-sm:hidden"
      >
        {HomePageFilters.map((filter) => (
          <ToggleGroupItem
            key={filter.value}
            className="background-light800_dark300 rounded-md border-none px-6 py-3 text-light-500 data-[state=on]:!bg-primary-100 data-[state=on]:!text-primary-500 data-[state=on]:dark:!bg-dark-400"
            value={filter.value}
          >
            {filter.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Filter className="hidden max-sm:flex" />
    </div>
  );
};

export default HomeFilter;
