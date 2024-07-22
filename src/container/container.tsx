import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from "react-native-bootsplash"
import { StatusBar } from 'react-native'
import { DrawerNavigation } from 'navigation/drawerNavigation'

export const Container = () => {

    return (
        <>
            <StatusBar
                backgroundColor={"white"}
                barStyle={"dark-content"}
            />
            <NavigationContainer onReady={() => {
                BootSplash.hide()
            }}>
                <DrawerNavigation />
            </NavigationContainer>
        </>
    )
}
