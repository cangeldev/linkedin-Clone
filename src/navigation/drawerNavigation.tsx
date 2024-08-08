import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContentPage } from 'screens/pages'
import { Header } from 'components'
import tabNavigation from './tabNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerContentPage />}
            screenOptions={({ navigation }) => ({
                headerStyle: { height: 40 },
                headerLeft: () => null,
                headerTitle: () => <Header navigation={navigation} />
            })}
        >
            <Drawer.Screen name="TabNavigation" component={tabNavigation} />
        </Drawer.Navigator>
    )
}

export default React.memo(DrawerNavigation)