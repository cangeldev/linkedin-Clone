import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userState {
  value: number
  profileImage: null,
}

const initialState: userState = {
  value: 0,
  profileImage: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setProfileImage: (state, action: PayloadAction<any>) => {
      state.profileImage = action.payload
    },
  },
});

export const { setProfileImage } = userSlice.actions

export default userSlice.reducer
