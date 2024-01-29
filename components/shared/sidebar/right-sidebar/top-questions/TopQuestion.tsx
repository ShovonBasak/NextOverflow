import { topQuestions } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const TopQuestion = () => {
  return (
    <div>
      <h1 className="h3-bold text-dark200_light900">Top Questions</h1>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {topQuestions.map((question, index) => (
          <Link
            key={question.id}
            href={`/questions/${question.id}`}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">{question.title}</p>
            <Image
              src="/assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="chevron right icon"
              className="invert-colors h-[20px] w-[20px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopQuestion;
