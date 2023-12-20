"use client";

import Image from "next/image";
import Link from "next/link";
import { SidebarLink } from "@/types";
import { usePathname } from "next/navigation";

const MenuItem = ({ item }: { item: SidebarLink }) => {
  const pathname = usePathname();
  const isActive =
    (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

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
      <p className="max-lg:hidden">{item.label}</p>
    </Link>
  );
};

export default MenuItem;
