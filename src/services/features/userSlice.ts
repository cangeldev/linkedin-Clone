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
    friendsList: string[],
    NonFriendsList: string[],
    friendsRequestList: string[]
    notificationsList: string
  },
  post: {
    postImage: string | null
    posts: string[]
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
    postImage: null,
    posts: []
  }
}

// Creates a slice of the Redux store for user-related state management
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.loggedUserInfo.name = action.payload
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.loggedUserInfo.surname = action.payload
    },
    setProfileImage: (state, action: PayloadAction<string | null>) => {
      state.loggedUserInfo.profileImage = action.payload
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.loggedUserInfo.location = action.payload
    },
    setJob: (state, action: PayloadAction<string>) => {
      state.loggedUserInfo.job = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.loggedUserInfo.title = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.loggedUserInfo.email = action.payload
    },
    setFriendsList: (state, action: PayloadAction<string[]>) => {
      state.info.friendsList = action.payload
    },
    setNonFriendsList: (state, action: PayloadAction<string[]>) => {
      state.info.NonFriendsList = action.payload
    },
    setFriendsRequestList: (state, action: PayloadAction<string[]>) => {
      state.info.friendsRequestList = action.payload
    },
    setPostImage: (state, action: PayloadAction<string | null>) => {
      state.post.postImage = action.payload
    },
    setMyUid: (state, action: PayloadAction<string>) => {
      state.loggedUserInfo.myUid = action.payload
    },
    clearPostImage: (state) => {
      state.post.postImage = null;
    },
    setPosts: (state, action: PayloadAction<string[]>) => {
      state.post.posts = action.payload
    },
  }
})
export const { setProfileImage, setName, setSurname, setJob, setLocation, setTitle, setEmail, setFriendsList, setNonFriendsList, setFriendsRequestList, setPostImage, clearPostImage, setMyUid, setPosts } = userSlice.actions
export default userSlice.reducer
