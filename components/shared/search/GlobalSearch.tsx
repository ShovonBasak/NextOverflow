"use client";

import Search from "./Search";

const GlobalSearch = () => {
  return (
    <Search
      className="w-full max-lg:hidden"
      placeholder="Search globally"
      onChange={() => {}}
    />
  );
};

export default GlobalSearch;
