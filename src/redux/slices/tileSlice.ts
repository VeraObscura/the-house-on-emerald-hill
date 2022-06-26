import { createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import { WordType } from "types/word";

interface TileState {
  foyer: {
    para1: WordType[];
    para2: WordType[];
    para3: WordType[];
    para4: WordType[];
    para5: WordType[];
    para6: WordType[];
    para7: WordType[];
  };
}

const initialState: TileState = {
  foyer: {
    para1: [],
    para2: [{ id: 3, word: "miss", alignment: 1 }],
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
