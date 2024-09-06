import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userState {
  profileImage: null,
  name: string,
  surname: string
  location: string,
  job: string
}

const initialState: userState = {
  profileImage: null,
  name: "",
  surname: "",
  job: "",
  location: ""
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
    setLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload
    },
    setJob: (state, action: PayloadAction<any>) => {
      state.job = action.payload
    },
  },
});

export const { setProfileImage, setName, setSurname, setJob, setLocation } = userSlice.actions

export default userSlice.reducer
