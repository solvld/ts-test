import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PixelChar = string

type PixelCharState = {
  onChar: PixelChar,
  offChar: PixelChar,
}

const initialState: PixelCharState = {
  onChar: '',
  offChar: '',
}

const pixelCharSlice = createSlice({
  name: 'pixelChar',
  initialState,
  reducers: {
    changeOnChar: (state, action: PayloadAction<string>) => {
      state.onChar = action.payload
    },
    changeOffChar: (state, action: PayloadAction<string>) => {
      state.offChar = action.payload
    },
  }

})

export const {changeOffChar, changeOnChar} = pixelCharSlice.actions;

export default pixelCharSlice.reducer;
