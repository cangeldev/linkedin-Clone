import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from "react-native-bootsplash"
import { StackNavigation } from 'navigation/stackNavigation'
import { StatusBar } from 'react-native'

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
                <StackNavigation />
            </NavigationContainer>
        </>
    )
}
