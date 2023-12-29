import Tag from "@/components/shared/Tag";
import { topTags } from "@/constants";

const PopularTag = () => {
  return (
    <div className="mt-16">
      <h1 className="h3-bold text-dark200_light900">Tags</h1>
      <div className="mt-7 flex flex-col gap-4">
        {topTags.map((tag, index) => (
          <Tag
            key={tag.id}
            _id={tag.id}
            name={tag.name}
            totalQuestions={tag.questionCount}
            showCount={true}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularTag;
