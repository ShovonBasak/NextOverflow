import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type SearchProps = {
  className?: string;
  placeholder: string;
  iconPosition?: "left" | "right";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ className, placeholder, iconPosition, onChange, ...props }: SearchProps) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${className}`}
    >
      {iconPosition === "left" && (
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        defaultValue=""
        onChange={onChange}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        {...props}
      />
      {iconPosition === "right" && (
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default Search;
