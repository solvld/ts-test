import { configureStore } from "@reduxjs/toolkit"; 
import pixelCharReducer from "../features/pixelCharSlice";

const store = configureStore({
  reducer: {
    pixelChar: pixelCharReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch