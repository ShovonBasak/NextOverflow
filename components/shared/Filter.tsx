import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HomePageFilters } from "@/constants/filters";

const Filter = ({className}: {className: string}) => {
  return (
    <div className={`relative ${className}`}>
      <Select>
        <SelectTrigger className="body-regular light-border background-light800_dark300 text-dark500_light700 min-h-[56px] border px-5 py-2.5 sm:min-w-[170px]">
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent className="text-dark500_light700 small-regular border-none bg-light-900 dark:bg-dark-300">
          {HomePageFilters.map((filter) => {
            return (
              <SelectItem
                key={filter.value}
                value={filter.value}
                className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
              >
                {filter.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
