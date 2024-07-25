import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigation } from './tabNavigation'
import { DrawerMenuPage } from 'screens/pages'
import { CustomDrawerMenuHeader } from 'components'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {

    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerMenuPage />}
            screenOptions={({ navigation }) => ({
                headerLeft: (props) => (
                    null
                ),
                headerTitle: () => (
                    <CustomDrawerMenuHeader navigation={navigation} />
                ),
            })}
        >
            <Drawer.Screen
                name="TabNavigation"
                component={TabNavigation}
            />
        </Drawer.Navigator>
    );
};

