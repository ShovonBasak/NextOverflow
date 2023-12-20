import { sidebarLinks } from "@/constants";
import MenuItem from "./MenuItem";

const MenuGroup = () => {
  return (
    <div className="flex flex-1 flex-col gap-6">
      {sidebarLinks.map((item) => {
        return (
          <MenuItem
            item={item}
            key={item.route}
          />
        );
      })}
    </div>
  );
};

export default MenuGroup;
