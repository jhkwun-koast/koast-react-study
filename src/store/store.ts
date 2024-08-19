import { configureStore} from "@reduxjs/toolkit";
import menuSlice from "../features/menuSlice.ts";
import listSlice from "../features/listSlice.ts";

export default configureStore({
  reducer: {
    menu: menuSlice,
    list: listSlice
  }
});