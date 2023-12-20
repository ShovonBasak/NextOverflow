import { SignedOut } from "@clerk/nextjs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthGroup = () => {
  return (
    <div>
      <SignedOut>
        <div className="mb-3 flex flex-col gap-3">
          <SignIn />
          <SignUp />
        </div>
      </SignedOut>
    </div>
  );
};

export default AuthGroup;
