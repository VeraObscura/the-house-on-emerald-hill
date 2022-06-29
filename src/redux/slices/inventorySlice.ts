import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getCustomStyle } from "helpers/helpers";
import { TileType } from "types/tile";

interface InventoryState {
  tiles: TileType[];
}

const initialState: InventoryState = {
  tiles: [
    { id: 0, word: "lately", alignment: 1, customStyle: getCustomStyle() },
    { id: 1, word: "delay", alignment: 1, customStyle: getCustomStyle() },
    { id: 2, word: "summer", alignment: 1, customStyle: getCustomStyle() },
    { id: 0, word: "lately", alignment: 1, customStyle: getCustomStyle() },
    { id: 1, word: "delay", alignment: 1, customStyle: getCustomStyle() },
    { id: 2, word: "summer", alignment: 1, customStyle: getCustomStyle() },
    { id: 0, word: "lately", alignment: 1, customStyle: getCustomStyle() },
    { id: 1, word: "delay", alignment: 1, customStyle: getCustomStyle() },
    { id: 2, word: "summer", alignment: 1, customStyle: getCustomStyle() },
    { id: 0, word: "lately", alignment: 1, customStyle: getCustomStyle() },
    { id: 1, word: "delay", alignment: 1, customStyle: getCustomStyle() },
    { id: 2, word: "summer", alignment: 1, customStyle: getCustomStyle() },
  ],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventory: (state, action: PayloadAction<TileType[]>) => {
      state.tiles = action.payload;
    },
    addTile: (state, action: PayloadAction<TileType>) => {
      const inventoryTiles = state.tiles;
      const tile = action.payload;

      const currentWords = inventoryTiles.map((tile) => {
        return tile.word;
      });

      if (!currentWords.includes(tile.word)) {
        inventoryTiles.push({
          id: tile?.id,
          word: tile.word,
          alignment: tile.alignment,
          customStyle: getCustomStyle(),
        }); // Appends current tile to tiles array

        // Sort tiles by id
        inventoryTiles.sort(function (a, b) {
          return a.id - b.id;
        });

        state.tiles = inventoryTiles;
      }
    },
  },
});

export const { setInventory, addTile } = inventorySlice.actions;

export default inventorySlice.reducer;
