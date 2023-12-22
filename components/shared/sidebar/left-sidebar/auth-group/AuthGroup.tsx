import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LogOut from "./LogOut";

const AuthGroup = () => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <SignedIn>
        <LogOut />
      </SignedIn>
      <SignedOut>
        <SignIn />
        <SignUp />
      </SignedOut>
    </div>
  );
};

export default AuthGroup;
