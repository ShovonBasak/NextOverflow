import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <Link href="/sign-in">
      <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
        <Image
          src="/assets/icons/account.svg"
          alt="login"
          width={20}
          height={20}
          className="invert-colors lg:hidden"
        />
        <span className="primary-text-gradient max-lg:hidden">Login</span>
      </Button>
    </Link>
  );
};

export default SignIn;
