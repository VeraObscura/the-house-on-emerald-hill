import { createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import { TileType } from "types/tile";

interface TileState {
  foyer: {
    para1: TileType[];
    para2: TileType[];
    para3: TileType[];
    para4: TileType[];
    para5: TileType[];
    para6: TileType[];
    para7: TileType[];
  };
}

const initialState: TileState = {
  foyer: {
    para1: [],
    para2: [
      {
        id: 3,
        word: "miss",
        alignment: 1,
      },
    ],
    para3: [],
    para4: [],
    para5: [],
    para6: [],
    para7: [],
  },
};

export const tileSlice = createSlice({
  name: "tiles",
  initialState,
  reducers: {},
});

export const {} = tileSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTileState = (state: RootState) => state;

export default tileSlice.reducer;
