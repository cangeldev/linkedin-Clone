import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from "react-native-bootsplash"
import { StackNavigation } from 'navigation'
import Toast from 'react-native-toast-message'

/**
 * NavigationContainer, navigasyon yapısının kök bileşenidir.
 * Uygulama başlatıldığında BootSplash.hide() çağrılır, böylece uygulama açılış ekranı gizlenir. ve kendi ayarladığım bir resim ile açılış sayfası başlar.
 */
const Container = () => {

    return (
        <NavigationContainer onReady={BootSplash.hide}>
            <StackNavigation />
            <Toast />
        </NavigationContainer>
    )
}
export default React.memo(Container)