import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerMenuPage } from 'screens/pages'
import { CustomDrawerMenuHeader } from 'components'
import tabNavigation from './tabNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerMenuPage />}
            screenOptions={({ navigation }) => ({
                headerLeft: () => null,
                headerTitle: () => <CustomDrawerMenuHeader navigation={navigation} />
            })}
        >
            <Drawer.Screen name="TabNavigation" component={tabNavigation} />
        </Drawer.Navigator>
    )
}

export default React.memo(DrawerNavigation)