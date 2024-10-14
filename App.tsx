import Container from 'container/container'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { Provider, useDispatch } from 'react-redux'
import store from 'services/features/store'
import { I18nextProvider } from 'react-i18next'
import i18n from 'utils/i18next'
import { fetchFriendsList, fetchNonFriendUsers, fetchUsersWithSenderInfo, getMyUserData, getPosts, } from 'services/firebase/firebase'
import { setInfo, setPost, setLoggedUserInfo } from 'services/features/userSlice'
import { getCurrentUserUid } from 'services/firebase/firebaseAuth'

const MainComponent = React.memo(() => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const [
          fetchedFriendsInfo,
          fetchedNonFriendsInfo,
          fetchedFriendsRequests,
          MyInfo,
          Posts
        ] = await Promise.all([
          fetchFriendsList(),
          fetchNonFriendUsers(),
          fetchUsersWithSenderInfo(),
          getMyUserData(),
          getPosts()
        ])

        dispatch(setInfo({
          friendsList: fetchedFriendsInfo,
          NonFriendsList: fetchedNonFriendsInfo,
          friendsRequestList: fetchedFriendsRequests
        }))

        dispatch(setPost({ posts: Posts }))

        const uid = getCurrentUserUid()
        if (uid && MyInfo) {
          dispatch(setLoggedUserInfo({
            name: MyInfo.name,
            surname: MyInfo.surname,
            title: MyInfo.title,
            profileImage: MyInfo.profileImageUrl,
            myUid: MyInfo.myUid
          }))
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }

      i18n.changeLanguage('tr')
      BootSplash.hide({ fade: true })
      StatusBar.setBackgroundColor('white')
      StatusBar.setBarStyle('dark-content')
    }

    initializeApp()
  }, [dispatch])

  return <Container />
})

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <MainComponent />
    </I18nextProvider>
  </Provider>
)

export default React.memo(App)
