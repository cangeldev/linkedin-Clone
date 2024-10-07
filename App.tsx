import Container from 'container/container'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { Provider, useDispatch } from 'react-redux'
import store from 'services/features/store'
import { I18nextProvider } from 'react-i18next'
import i18n from 'utils/i18next'
import { fetchFriendsList, fetchNonFriendUsers, fetchUsersWithSenderInfo, getMyUserData, getPosts } from 'services/firebase/firebase'
import { setFriendsList, setNonFriendsList, setFriendsRequestList, setName, setSurname, setTitle, setProfileImage, setMyUid, setPosts } from 'services/features/userSlice'
import { getCurrentUserUid } from 'services/firebase/firebaseAuth'

/**
 * App - Bu sayfa uygulamamızın başlangıç yapılandırmasını, durum yönetimini ve navigasyonunu kurar.
 * Bu sayfada firebasedeki verilerin daha hızlı bir şekilde yüklenmesini sağlamak için veriler redux toolkite kaydedilir.
 */

interface UserData {
  name: string
  surname: string
  title: string
}
const MainComponent = React.memo(() => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const [fetchedFriendsInfo, fetchedNonFriendsInfo, fetchedFriendsRequests, MyInfo, Posts] = await Promise.all([
          fetchFriendsList(),
          fetchNonFriendUsers(),
          fetchUsersWithSenderInfo(),
          getMyUserData(),
          getPosts()
        ])

        dispatch(setFriendsList(fetchedFriendsInfo))
        dispatch(setNonFriendsList(fetchedNonFriendsInfo))
        dispatch(setFriendsRequestList(fetchedFriendsRequests))
        dispatch(setPosts(Posts))
        const uid = getCurrentUserUid()
        if (!uid) return null;
        else {
          setUserData(MyInfo)
          dispatch(setName(MyInfo.name))
          dispatch(setSurname(MyInfo.surname))
          dispatch(setTitle(MyInfo.title))
          dispatch(setProfileImage(MyInfo.profileImageUrl))
          dispatch(setMyUid(MyInfo.myUid))
        }

      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }


    const initializeApp = () => {
      i18n.changeLanguage('tr')
      BootSplash.hide({ fade: true })
      setStatusBar()
    }

    getUsers()
    initializeApp()
  }, [dispatch])

  const setStatusBar = () => {
    StatusBar.setBackgroundColor('white')
    StatusBar.setBarStyle('dark-content')
  }

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
