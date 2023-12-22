"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogOut = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  return (
    <Button
      className="small-medium btn-secondary flex min-h-[41px] w-full justify-start gap-4 rounded-lg px-4 py-3 shadow-none"
      onClick={() => signOut(() => router.push("/"))}
    >
      <Image
        src="/assets/icons/logout.svg"
        alt="logout"
        width={20}
        height={20}
        className="dark:invert"
      />
      <span className="text-dark100_light900 max-lg:hidden">Logout</span>
    </Button>
  );
};

export default LogOut;
