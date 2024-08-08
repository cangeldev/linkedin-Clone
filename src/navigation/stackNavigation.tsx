import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Notification } from 'screens/bottomTabScreens'
import { GroupsPage, SavedPostsPage } from 'screens/pages'

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="NotificationScreen" component={Notification} />
            <Stack.Screen name="GroupsPage" component={GroupsPage} />
            <Stack.Screen name="SavedPostsPage" component={SavedPostsPage} />
        </Stack.Navigator>
    )
}
export default React.memo(StackNavigation)