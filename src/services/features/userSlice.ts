import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  profileImage: string | null
  name: string
  surname: string
  location: string
  job: string
  title: string
  email: string
}

const initialState: UserState = {
  profileImage: null,
  name: '',
  surname: '',
  location: '',
  job: '',
  title: '',
  email: ''
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload
    },
    setProfileImage: (state, action: PayloadAction<string | null>) => {
      state.profileImage = action.payload
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
    setJob: (state, action: PayloadAction<string>) => {
      state.job = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    }
  }
})

export const { setProfileImage, setName, setSurname, setJob, setLocation, setTitle, setEmail } = userSlice.actions

export default userSlice.reducer
