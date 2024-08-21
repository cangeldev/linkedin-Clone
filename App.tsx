import Container from 'container/container'
import React, { useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import BootSplash from "react-native-bootsplash"
import { LoginScreen, } from 'screens/loginScreen/loginScreen'
import ContactInfoScreen from 'screens/signInScreens/contactInfoScreen/contactInfoScreen'
import ProfilePictureSettingsScreen from 'screens/signInScreens/profilePictureSettingsScreen/profilePictureSettingsScreen'
import UserInfoScreen from 'screens/signInScreens/userInfoScreen/userInfoScreen'
import VerificationCodeScreen from 'screens/signInScreens/verificationCodeScreen/verificationCodeScreen'


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
    //<Container />
    //<WelcomeScreen />
    //<LoginScreen />
    //<UserInfoScreen />
    //<ContactInfoScreen />
    //<ProfilePictureSettingsScreen />
    <VerificationCodeScreen />

  )
}

export default React.memo(App)