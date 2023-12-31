"use client";

import Search from "./Search";

type SearchProps = {
  route: string;
  placeholder: string;
  iconPosition?: "left" | "right";
  className?: string;
};

const LocalSearch = ({ route, placeholder, iconPosition, className }: SearchProps) => {
  return (
    <Search
      placeholder={placeholder}
      iconPosition={iconPosition}
      className={className}
      onChange={() => {}}
    />
  );
};

export default LocalSearch;
