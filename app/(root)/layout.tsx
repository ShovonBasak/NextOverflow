import { ReactNode } from "react";
import { Navbar } from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/left-sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/sidebar/right-sidebar/RightSidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:pb-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      Toaster
    </main>
  );
};

export default Layout;
