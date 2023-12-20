import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">{children}</div>
    </div>
  );
};

export default Layout;
