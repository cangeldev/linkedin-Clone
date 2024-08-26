import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContentPage } from 'screens/pages'
import stackNavigation from './stackNavigation'



const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={() => <DrawerContentPage />}>
            <Drawer.Screen name="StackNavigation" component={stackNavigation} />
        </Drawer.Navigator>
    )
}

export default React.memo(DrawerNavigation)