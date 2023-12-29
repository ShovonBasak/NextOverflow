import Tag from "./tags/PopularTag";
import TopQuestion from "./top-questions/TopQuestion";

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <TopQuestion />
      <Tag />
    </section>
  );
};

export default RightSidebar;
