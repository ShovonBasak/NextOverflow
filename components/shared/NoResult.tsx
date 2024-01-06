import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface NoResultProps {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: NoResultProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No Result"
        width={400}
        height={400}
        className="dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No Result"
        width={400}
        height={400}
        className="hidden dark:block"
      />
      <h1 className="h1-bold text-dark100_light900 mt-8">{title}</h1>
      <p className="text-dark500_light700 body-regular my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link
        href={link}
        className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-2 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900"
      >
        <Button>{linkTitle}</Button>
      </Link>
    </div>
  );
};

export default NoResult;
