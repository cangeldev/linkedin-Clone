import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from "react-native-bootsplash"
import { StackNavigation } from 'navigation/stackNavigation'

export const Container = () => {

    return (

        <NavigationContainer onReady={() => {
            BootSplash.hide()
        }}>
            <StackNavigation />
        </NavigationContainer>
    )
}
