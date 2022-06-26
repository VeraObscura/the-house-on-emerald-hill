import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import { BasketType } from "types/baskets";

interface BasketInput {
  index: number;
  location: string;
  paragraph: string;
  word: string;
  alignment: number;
}

interface BasketState {
  [key: string]: any;
  foyer: {
    para1: BasketType[];
    para2: BasketType[];
    para3: BasketType[];
    para4: BasketType[];
    para5: BasketType[];
    para6: BasketType[];
    para7: BasketType[];
  };
}

const initialState: BasketState = {
  foyer: {
    para1: [
      { allowedWords: ["delay"], word: "", alignment: 0 },
      { allowedWords: ["lately"], word: "", alignment: 0 },
    ],
    para2: [],
    para3: [],
    para4: [],
    para5: [],
    para6: [],
    para7: [],
  },
};

export const basketSlice = createSlice({
  name: "baskets",
  initialState,
  reducers: {
    fillBasket: (state, action: PayloadAction<BasketInput>) => {
      state[`${action.payload.location}`][`${action.payload.paragraph}`][
        action.payload.index
      ].word = action.payload.word;
      state[`${action.payload.location}`][`${action.payload.paragraph}`][
        action.payload.index
      ].alignment = action.payload.alignment;
    },
  },
});

export const { fillBasket } = basketSlice.actions;

export const getBasketState = (state: RootState) => state;

export default basketSlice.reducer;
