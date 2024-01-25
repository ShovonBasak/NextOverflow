import Question from "@/components/form/Question";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const mongoUser = await getUserByClerkId(userId);

  return (
    <div className="">
      <h1 className="h1-bold">Ask a question</h1>
      <Question userId={JSON.stringify(mongoUser._id)} />
    </div>
  );
};

export default AskQuestion;
