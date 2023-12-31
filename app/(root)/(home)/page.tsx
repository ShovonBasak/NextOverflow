import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col px-6">
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          className="flex items-center justify-end gap-4 max-sm:w-full"
          href="ask-question/"
        >
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-5 max-sm:flex-col">
        <LocalSearch
          route="/"
          iconPosition="left"
          placeholder="Search in Questions"
          className="max-w-[400px] grow"
        />

        <div>Filter</div>
      </div>
    </div>
  );
}
