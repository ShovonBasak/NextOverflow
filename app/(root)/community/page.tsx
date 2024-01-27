import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import UserList from "@/components/shared/user/UserList";
import { UserFilters } from "@/constants/filters";

const page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
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
