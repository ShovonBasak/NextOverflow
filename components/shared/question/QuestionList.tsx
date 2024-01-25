import { getQuestions } from "@/lib/actions/question.action";
import NoResult from "../NoResult";
import QuestionCard from "./QuestionCard";

const QuestionList = async () => {
  const result = await getQuestions({});

  return (
    <div className="mt-10 flex w-full flex-col gap-6">
      {result.questions.length > 0 ? (
        result.questions.map((question) => {
          return (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              createdAt={question.createdAt}
              upVotes={question.upVotes.length}
              answers={question.answers.length}
              views={question.views}
            />
          );
        })
      ) : (
        <NoResult
          title="There’s no question to show"
          description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
          link="/ask-question"
          linkTitle="Ask a Question"
        />
      )}
    </div>
  );
};

export default QuestionList;
