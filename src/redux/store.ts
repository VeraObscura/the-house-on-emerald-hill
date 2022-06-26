import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import inventoryReducer from "./slices/inventorySlice";
import basketReducer from "./slices/basketSlice";
import tileReducer from "./slices/tileSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    baskets: basketReducer,
    tiles: tileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
