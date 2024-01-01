import QuestionCard from "./QuestionCard";

const QuestionList = () => {
  return (
    <div>
      {[
        {
          id: 1,
          question: "What is React?",
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
          likes: 10,
          answers: 5,
          views: 20,
          author: {
            name: "John Doe",
            image: "/assets/icons/user.svg",
          },
          date: "2021-09-01",
        },
      ].map((question) => {
        return (
          <QuestionCard
            key={question.id}
            question={question}
          />
        );
      })}
    </div>
  );
};

export default QuestionList;
