import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import Link from "next/link";
import Metric from "../Metric";
import Tag from "../Tag";

interface QuestionListProps {
  id: number;
  title: string;
  tags: {
    id: number;
    name: string;
  }[];
  author: {
    id: number;
    name: string;
    image: string;
  };
  upVotes: number;
  views: number;
  answers: number;
  createdAt: Date;
}

const QuestionCard = ({
  id,
  title,
  tags,
  author,
  createdAt,
  upVotes,
  answers,
  views,
}: QuestionListProps) => {
  return (
    <div className="background-light900_dark200 mt-10 flex flex-col rounded-xl px-10 py-8 shadow-light-300 dark:shadow-none">
      <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
        {getTimestamp(createdAt)}
      </span>
      <Link href={`questions/${id}`}>
        <h3 className="text-dark100_light900 h3-bold line-clamp-2">{title}</h3>
      </Link>
      <div className="mt-4 flex items-center justify-start gap-1">
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            _id={tag.id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.image}
          alt="user"
          value={author.name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author.id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Votes"
            value={formatAndDivideNumber(upVotes)}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatAndDivideNumber(answers)}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatAndDivideNumber(views)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
