import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { WordType } from "types/word";

interface InventoryState {
  tiles: WordType[];
}

const initialState: InventoryState = {
  tiles: [
    { id: 0, word: "lately", alignment: 1 },
    { id: 1, word: "delay", alignment: 1 },
    { id: 2, word: "summer", alignment: 1 },
    { id: 0, word: "lately", alignment: 1 },
    { id: 1, word: "delay", alignment: 1 },
    { id: 2, word: "summer", alignment: 1 },
    { id: 0, word: "lately", alignment: 1 },
    { id: 1, word: "delay", alignment: 1 },
    { id: 2, word: "summer", alignment: 1 },
    { id: 0, word: "lately", alignment: 1 },
    { id: 1, word: "delay", alignment: 1 },
    { id: 2, word: "summer", alignment: 1 },
  ],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventory: (state, action: PayloadAction<WordType[]>) => {
      state.tiles = action.payload;
    },
  },
});

export const { setInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
