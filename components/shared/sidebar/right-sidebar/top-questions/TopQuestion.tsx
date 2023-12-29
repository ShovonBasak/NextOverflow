import { topQuestions } from "@/constants";
import Image from "next/image";

const TopQuestion = () => {
  return (
    <div>
      <h1 className="h3-bold text-dark200_light900">Top Questions</h1>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {topQuestions.map((question, index) => (
          <a
            key={question.id}
            href={question.path}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              {question.title}
            </p>
            <Image
              src="assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="chevron right icon"
              className="invert-colors"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopQuestion;
