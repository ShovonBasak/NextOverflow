"use client";

import Search from "./Search";

const GlobalSearch = () => {
  return (
    <Search
      className="w-full max-w-[600px] grow max-lg:hidden"
      placeholder="Search globally"
      iconPosition="left"
      onChange={() => {}}
    />
  );
};

export default GlobalSearch;
