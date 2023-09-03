import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices";

export const reduxStore = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export type Store = typeof reduxStore;
