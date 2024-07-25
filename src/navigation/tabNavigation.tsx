import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { JobsScreen, MyNetworkScreen, NotificationScreen, PostScreen } from 'screens/bottomTabScreens'
import Icon from 'react-native-vector-icons/FontAwesome6'
import IconF from 'react-native-vector-icons/MaterialCommunityIcons'
import IconI from 'react-native-vector-icons/Octicons'
import colors from 'assets/colors/colors'
import { StackNavigation } from './stackNavigation'
import { CustomTabBarButton } from 'components'

const Tab = createBottomTabNavigator()

const getTabBarIcon = (name: any, size = 19, IconComponent = Icon) => ({ color }: any) => (
    <IconComponent name={name} color={color} style={{ fontSize: size }} />
)

const screens = [
    {
        name: "StackNavigation",
        component: StackNavigation,
        options: {
            title: "Ana Sayfa",
            tabBarIcon: getTabBarIcon("house-chimney")
        }
    },
    {
        name: "MyNetworkScreen",
        component: MyNetworkScreen,
        options: {
            title: "Ağım",
            tabBarIcon: getTabBarIcon("user-group")
        }
    },
    {
        name: "PostScreen",
        component: PostScreen,
        options: {
            title: "Yayınla",
            tabBarIcon: getTabBarIcon("plus-box", 24, IconF)
        }
    },
    {
        name: "NotificationScreen",
        component: NotificationScreen,
        options: {
            title: "Bildirimler",
            tabBarIcon: getTabBarIcon("bell-fill", 19, IconI)
        }
    },
    {
        name: "JobsScreen",
        component: JobsScreen,
        options: {
            title: "İş ilanları",
            tabBarIcon: getTabBarIcon("briefcase")
        }
    }
]


export const TabNavigation = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarButton: (props) => <CustomTabBarButton  {...props} />,
            headerShown: false,
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.grey,
            tabBarLabelStyle: {
                marginTop: -10,
                marginBottom: 4,
                fontWeight: "500"
            }
        })}
    >
        {screens.map(screen => (
            <Tab.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
            />
        ))}
    </Tab.Navigator>
)
