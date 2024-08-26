import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContentPage } from 'screens/pages'
import { StackNavigation } from 'navigation'

export const DrawerNavigation = React.memo(() => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={() => <DrawerContentPage />}>
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
        </Drawer.Navigator>
    )
})