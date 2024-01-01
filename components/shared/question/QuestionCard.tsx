import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Tag from "../Tag";

type QuestionProps = {
  id: number;
  question: string;
  tags: {
    id: number;
    name: string;
  }[];
  likes: number;
  answers: number;
  views: number;
  author: {
    name: string;
    image: string;
  };
  date: string;
};

const QuestionCard = ({ question }: { question: QuestionProps }) => {
  return (
    <div className="background-light900_dark200 mt-10 flex flex-col rounded-xl px-10 py-8 shadow-light-300 dark:shadow-none">
      <h3 className="text-dark100_light900 h3-bold line-clamp-2">{question.question}</h3>
      <div className="mt-4 flex items-center justify-start gap-1">
        {question.tags.map((tag) => (
          <Tag
            key={tag.id}
            _id={tag.id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={question.author.image}
            alt={question.author.name}
            width={16}
            height={16}
            className="invert-colors rounded-full"
          />
          <span className="small-regular text-dark500_light700">{question.author.name}</span>
          <span className="small-regular text-dark500_light700"> • asked on {question.date}</span>
        </div>
        <div className="flex items-center gap-2">
          {[
            {
              icon: "/assets/icons/like.svg",
              text: "Likes",
              count: question.likes,
            },
            {
              icon: "/assets/icons/message.svg",
              text: "Answers",
              count: question.answers,
            },
            {
              icon: "/assets/icons/eye.svg",
              text: "Views",
              count: question.views,
            },
          ].map((metadata) => {
            return (
              <div
                key={metadata.text}
                className="flex gap-1"
              >
                <Image
                  src={metadata.icon}
                  alt={metadata.text}
                  width={16}
                  height={16}
                />
                <span className="small-regular text-dark500_light700">
                  {metadata.count} {metadata.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
