import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from "react-native-bootsplash"
import { StatusBar } from 'react-native'
import { TabNavigation } from 'navigation/tabNavigation'

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
                <TabNavigation />
            </NavigationContainer>
        </>
    )
}
