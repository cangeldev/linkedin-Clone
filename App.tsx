import Container from 'container/container'
import React, { useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import BootSplash from "react-native-bootsplash"
import { Provider } from 'react-redux'
import store from 'services/features/store'
import { I18nextProvider } from 'react-i18next' // i18next kütüphanesinden I18nextProvider'ı içe aktarmak için.
import i18n from 'utils/i18next'

/**
 * App - Bu sayfa uygulamamızın başlangıç yapılandırmasını, durum yönetimini ve navigasyonunu kurar.
 */
const App = () => {

  useEffect(() => {
    // Hides the splash screen and sets the status bar when the app loads
    BootSplash.hide({ fade: true })
    setStatusBar()
  }, [])

  const setStatusBar = () => {
    // Sets the status bar style based on the platform
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
      <I18nextProvider i18n={i18n}>
        <Container />
      </I18nextProvider>
    </Provider>

  )
}

export default React.memo(App)