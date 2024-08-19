import {createSlice} from "@reduxjs/toolkit";


export interface MenuState {
  menu: {
    value: number;
  };
}

export interface MenuInfo {
  value: number;
  name: string
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    value : 0
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { change } = menuSlice.actions
export default menuSlice.reducer;