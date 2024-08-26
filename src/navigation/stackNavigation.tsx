import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Notification } from 'screens/bottomTabScreens'
import { GroupsPage, SavedPostsPage } from 'screens/pages'
import tabNavigation from './tabNavigation'
import { Header } from 'components'



const StackNavigation = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName='TabNavigation'
            screenOptions={({ navigation }) => ({
                headerStyle: { height: 40 },
                headerLeft: () => null,
                headerTitle: () => <Header navigation={navigation} />
            })}
        >
            <Stack.Screen name="TabNavigation" component={tabNavigation} />
            <Stack.Screen name="NotificationScreen" component={Notification} />
            <Stack.Screen name="GroupsPage" component={GroupsPage} />
            <Stack.Screen name="SavedPostsPage" component={SavedPostsPage} />
        </Stack.Navigator>
    )
}

export default React.memo(StackNavigation)