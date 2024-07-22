import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen } from 'screens'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name="Feed"
                component={HomeScreen}
            />
        </Drawer.Navigator>
    )
}
