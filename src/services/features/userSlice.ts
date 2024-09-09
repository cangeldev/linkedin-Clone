import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  profileImage: string | null
  name: string
  surname: string
  location: string
  job: string
  title: string
  email: string
  uId: string
}

const initialState: UserState = {
  profileImage: null,
  name: '',
  surname: '',
  location: '',
  job: '',
  title: '',
  email: '',
  uId: ''
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
      state.uId = action.payload.substring(0, action.payload.indexOf('@'))
    },
  },
})

export const { setProfileImage, setName, setSurname, setJob, setLocation, setTitle, setEmail } = userSlice.actions

export default userSlice.reducer
