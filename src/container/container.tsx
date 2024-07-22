import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from "react-native-bootsplash"
import { DrawerNavigation } from 'navigation/drawerNavigation'

export const Container = () => {

    return (
        <NavigationContainer onReady={() => {
            BootSplash.hide()
        }}>
            <DrawerNavigation />
        </NavigationContainer>
    )
}
