import { getAllTags } from "@/lib/actions/tags.action";
import NoResult from "../NoResult";
import TagCard from "./TagCard";

const TagList = async () => {
  const tags = await getAllTags();

  return (
    <section className="mt-12 flex flex-wrap gap-4">
      {tags.length > 0 ? (
        tags.map((tag) => (
          <TagCard
            key={tag._id}
            tag={tag}
          />
        ))
      ) : (
        <NoResult
          title="No Tags Found"
          description="It looks like there are no tags found."
          link="/ask-question"
          linkTitle="Ask a question"
        />
      )}
    </section>
  );
};

export default TagList;
