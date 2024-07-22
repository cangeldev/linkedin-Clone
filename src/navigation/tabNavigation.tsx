import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, NotificationScreen } from 'screens'

export const TabNavigation = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Settings"
                component={NotificationScreen}
            />
        </Tab.Navigator>
    )
}
