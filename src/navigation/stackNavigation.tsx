import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ConnectionsPage, GroupsPage, ManageMyNetworkPage, SavedPostsPage } from 'screens/pages'
import { ContactInfoScreen, JobInfoScreen, ProfilePictureSettingsScreen, UserInfoScreen, VerificationCodeScreen } from 'screens/signInScreens'
import { LoginScreen, WelcomeScreen } from 'screens'
import { DrawerNavigation } from 'navigation'
import { getCurrentUser } from 'services/firebase/firebaseAuth'
import { useTranslation } from 'react-i18next'

const Stack = createStackNavigator()
const user = getCurrentUser()
const { t } = useTranslation()

/**
 * StackNavigation - Uygulamanın yığın navigasyonunu yönetir sayfa yönlendirmeleri için.
 */
export const StackNavigation = () => (
    <Stack.Navigator initialRouteName={!user ? 'WelcomeScreen' : "DrawerNavigation"}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen name="ContactInfoScreen" component={ContactInfoScreen} />
        <Stack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen} />
        <Stack.Screen name="ProfilePictureSettingsScreen" component={ProfilePictureSettingsScreen} />
        <Stack.Screen name="GroupsPage" component={GroupsPage} />
        <Stack.Screen name="SavedPostsPage" component={SavedPostsPage} />
        <Stack.Screen name="JobInfoScreen" component={JobInfoScreen} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="ManageMyNetworkPage" component={ManageMyNetworkPage} options={{ headerShown: true, title: t("manageMyNetwork") }} />
        <Stack.Screen name="ConnectionsPage" component={ConnectionsPage} options={{ headerShown: true, title: t("connections") }} />
    </Stack.Navigator>
)
