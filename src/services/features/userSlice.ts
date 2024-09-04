import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userState {
  profileImage: null,
  name: string,
  surname: string
}

const initialState: userState = {
  profileImage: null,
  name: "",
  surname: ""
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload
    },
    setSurname: (state, action: PayloadAction<any>) => {
      state.surname = action.payload
    },
    setProfileImage: (state, action: PayloadAction<any>) => {
      state.profileImage = action.payload
    },
  },
});

export const { setProfileImage, setName, setSurname } = userSlice.actions

export default userSlice.reducer
