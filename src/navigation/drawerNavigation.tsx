import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContentPage } from 'screens/pages'
import { TabNavigation } from 'navigation'

/**
 * DrawerNavigation - Uygulamanın yan menü navigasyonunu içindir.
 */
export const DrawerNavigation = React.memo(() => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={() => <DrawerContentPage />}>
            <Drawer.Screen name="TabNavigation" component={TabNavigation} />
        </Drawer.Navigator>
    )
})