import Question from "@/components/form/Question";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  // const { clerkId } = useAuth();

  const clerkId = "123456789";

  if (!clerkId) {
    redirect("/sign-in");
  }

  const mongoUser = await getUserByClerkId(clerkId);

  return (
    <div className="">
      <h1 className="h1-bold">Ask a question</h1>
      <Question userId={JSON.stringify(mongoUser._id)} />
    </div>
  );
};

export default AskQuestion;
