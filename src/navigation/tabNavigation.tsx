import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, JobsScreen, MyNetworkScreen, NotificationScreen, PostScreen } from 'screens/bottomTabScreens'

export const TabNavigation = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={{ headerShown: false,}}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{title:"Home"}}
            />
            <Tab.Screen
                name="MyNetworkScreen"
                component={MyNetworkScreen}
                options={{title:"Ağım"}}
            />
            <Tab.Screen
                name="PostScreen"
                component={PostScreen}
                options={{title:"Yayınla"}}
            />
            <Tab.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{title:"Bildirimler"}}
            />
            <Tab.Screen
                name="JobsScreen"
                component={JobsScreen}
                options={{title:"İş ilanları"}}
            />
        </Tab.Navigator>
    )
}
