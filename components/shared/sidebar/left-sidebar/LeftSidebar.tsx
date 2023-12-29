import MenuGroup from "./menu-group/MenuGroup";
import AuthGroup from "./auth-group/AuthGroup";

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky left-0 top-0 flex h-screen  flex-col justify-between overflow-y-auto border-r px-4 pt-36 max-sm:hidden">
      <MenuGroup />
      <AuthGroup />
    </section>
  );
};

export default LeftSidebar;
