import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userState {
  value: number
}

const initialState: userState = {
  value: 0,
};

const userSlice = createSlice({
  name: 'yourSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = userSlice.actions

export default userSlice.reducer
