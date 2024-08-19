import {useSelector} from "react-redux";
import {MenuInfo, MenuState} from "../features/menuSlice.ts";
import {menuNames} from "../utils/common.ts";

export function useGetMenuName() : MenuInfo | undefined {
  const menu = useSelector((state: MenuState) => state.menu.value);
  const menuName = menuNames[menu];
  if (!menuName) return;
  return {
    value: menu,
    name: menuNames[menu]
  };
}