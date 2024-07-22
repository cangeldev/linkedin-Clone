import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigation } from './tabNavigation'
import { DrawerMenuPage } from 'screens/pages'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerMenuPage />}
            screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name="TabNavigation"
                component={TabNavigation}
            />
        </Drawer.Navigator>
    )
}
