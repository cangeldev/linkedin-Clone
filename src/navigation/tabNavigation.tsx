import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'assets/colors/colors'
import { TabBarButton } from 'components'
import { screens } from 'components/getTabBarIcon/getTabBarIcon'

const Tab = createBottomTabNavigator()

const TabNavigation = () => (

    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarButton: (props) => <TabBarButton {...props} />,
            headerShown: false,
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.grey,
            tabBarLabelStyle: {
                marginTop: -10,
                marginBottom: 4,
                fontWeight: '500',
            },
            tabBarHideOnKeyboard: true
        })}
    >
        {screens.map((screen) => (
            <Tab.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
            />
        ))}
    </Tab.Navigator>
)

export default React.memo(TabNavigation)