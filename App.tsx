import Container from 'container/container'
import React, { useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import BootSplash from "react-native-bootsplash"
import { Provider } from 'react-redux'
import store from 'services/features/store'

const App = () => {

  useEffect(() => {
    BootSplash.hide({ fade: true })
    setStatusBar()
  }, [])

  const setStatusBar = () => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white')
      StatusBar.setBarStyle("dark-content")
    }
    if (Platform.OS === 'ios') {
      StatusBar.setBackgroundColor('white')
      StatusBar.setBarStyle("dark-content")
    }
  }

  return (
    <Provider store={store}>
      <Container />
    </Provider>

  )
}

export default React.memo(App)