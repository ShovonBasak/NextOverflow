import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <Link href="/sign-up">
      <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 flex min-h-[41px] w-full justify-start gap-4 rounded-lg border px-4 py-3 shadow-none">
        <Image
          src="/assets/icons/sign-up.svg"
          alt="sign up"
          width={20}
          height={20}
          className="invert-colors"
        />
        <span className="max-lg:hidden">Signup</span>
      </Button>
    </Link>
  );
};

export default SignUp;
