import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import UserList from "@/components/shared/user/UserList";
import { UserFilters } from "@/constants/filters";

const page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-7 flex w-full justify-between max-sm:flex-col max-sm:gap-5 sm:gap-10">
        <LocalSearch
          route="/community"
          placeholder="Search amazing minds here..."
          iconPosition="left"
          className="w-full grow"
        />
        <Filter
          items={UserFilters}
          className="max-sm:flex"
        />
      </div>
      <UserList />
    </div>
  );
};

export default page;
