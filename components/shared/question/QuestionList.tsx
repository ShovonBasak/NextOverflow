import NoResult from "../NoResult";
import QuestionCard from "./QuestionCard";

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

const dummyQuestions: QuestionListProps[] = [
  {
    id: 1,
    title: "Node.js vs Next.js?",
    tags: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "Node.js",
      },
    ],
    upVotes: 10,
    answers: 5,
    views: 20,
    author: {
      id: 1,
      name: "John Doe",
      image: "/assets/icons/user.svg",
    },
    createdAt: new Date("2023-09-01 12:00:00"),
  },
  {
    id: 2,
    title: "What is React?",
    tags: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "JavaScript",
      },
    ],
    upVotes: 10,
    answers: 5,
    views: 2034212,
    author: {
      id: 1,
      name: "John Doe",
      image: "/assets/icons/user.svg",
    },
    createdAt: new Date("2022-09-01 12:00:00"),
  },
];

const QuestionList = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-6">
      {dummyQuestions.length > 0 ? (
        dummyQuestions.map((question) => {
          return (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              createdAt={question.createdAt}
              upVotes={question.upVotes}
              answers={question.answers}
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
