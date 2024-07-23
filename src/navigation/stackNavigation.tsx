import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, NotificationScreen } from 'screens/bottomTabScreens'
import { GroupsPage, SavedPostsPage } from 'screens/pages'

export const StackNavigation = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
            />
            <Stack.Screen
                name="GroupsPage"
                component={GroupsPage}
            />
              <Stack.Screen
                name="SavedPostsPage"
                component={SavedPostsPage}
            />
        </Stack.Navigator>
    )
}