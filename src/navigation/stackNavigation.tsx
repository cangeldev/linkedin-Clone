import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { GroupsPage, SavedPostsPage } from 'screens/pages'
import { ContactInfoScreen, JobInfoScreen, ProfilePictureSettingsScreen, UserInfoScreen, VerificationCodeScreen } from 'screens/signInScreens'
import { LoginScreen, WelcomeScreen } from 'screens'
import { TabNavigation } from 'navigation'
import { getCurrentUser } from 'services/firebase/firebase'

const Stack = createStackNavigator()
const user = getCurrentUser()

export const StackNavigation = () => (
    <Stack.Navigator initialRouteName={!user ? 'WelcomeScreen' : "TabNavigation"}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen name="ContactInfoScreen" component={ContactInfoScreen} />
        <Stack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen} />
        <Stack.Screen name="ProfilePictureSettingsScreen" component={ProfilePictureSettingsScreen} />
        <Stack.Screen name="GroupsPage" component={GroupsPage} />
        <Stack.Screen name="SavedPostsPage" component={SavedPostsPage} />
        <Stack.Screen name="JobInfoScreen" component={JobInfoScreen} />
    </Stack.Navigator>
)
