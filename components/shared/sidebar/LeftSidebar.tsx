"use client";

import { sidebarLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathName = usePathname();

  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky left-0 top-0 flex  h-screen flex-col justify-between overflow-y-auto px-4 pt-36">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathName.includes(item.route) && pathName.length > 1) || pathName === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive ? "primary-gradient text-light-900" : "text-dark100_light900"
              } flex items-center justify-start gap-4 rounded-lg p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p>{item.label}</p>
            </Link>
          );
        })}
      </div>
      <div>
        <SignedIn>Logout</SignedIn>
        <SignedOut>
          <div>
            <div>Login</div>
            <div>Signup</div>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
