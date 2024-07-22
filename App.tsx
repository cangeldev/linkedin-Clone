import React, { useEffect } from 'react'
import { Container } from 'container/container'
import { Platform, StatusBar } from 'react-native'
import BootSplash from "react-native-bootsplash"

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
    <Container />
  )
}

export default App