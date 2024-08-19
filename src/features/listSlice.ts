import {createSlice} from "@reduxjs/toolkit";

export interface ListState {
  list: {
    items: string[];
    filteredItems: string[];
  };
}

export const listSlice = createSlice({
  name: 'list',
  initialState: { items: [], filteredItems: [] },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
  },
});

export const { setItems, setFilteredItems  } = listSlice.actions
export default listSlice.reducer;