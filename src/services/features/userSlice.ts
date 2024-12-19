import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Defines the shape of the user state in the Redux store
interface UserState {
  loggedUserInfo: {
    profileImage: string | null
    name: string
    surname: string
    location: string
    job: string
    title: string
    email: string
    myUid: string
  },
  info: {
    friendsList: { uid: string }[]
    NonFriendsList: { id: string }[]
    friendsRequestList: { id: string }[]
    notificationsList: string
  },
  post: {
    postImage: string | null
  }
}

// Initial state of the user slice with default values
const initialState: UserState = {
  loggedUserInfo: {
    profileImage: null,
    name: '',
    surname: '',
    location: '',
    job: '',
    title: '',
    email: '',
    myUid: ""
  },
  info: {
    friendsList: [],
    NonFriendsList: [],
    friendsRequestList: [],
    notificationsList: ""
  },
  post: {
    postImage: null
  }
}

// Creates a slice of the Redux store for user-related state management
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setLoggedUserInfo: (state, action: PayloadAction<Partial<UserState['loggedUserInfo']>>) => {
      state.loggedUserInfo = { ...state.loggedUserInfo, ...action.payload }
    },
    setInfo: (state, action: PayloadAction<Partial<UserState['info']>>) => {
      state.info = { ...state.info, ...action.payload }
    },
    setPost: (state, action: PayloadAction<Partial<UserState['post']>>) => {
      state.post = { ...state.post, ...action.payload }
    },
    clearPostImage: (state) => {
      state.post.postImage = null
    }
  }
})

export const { setLoggedUserInfo, setInfo, setPost, clearPostImage } = userSlice.actions
export default userSlice.reducer
