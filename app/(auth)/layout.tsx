import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">{children}</div>
    </div>
  );
};

export default Layout;
