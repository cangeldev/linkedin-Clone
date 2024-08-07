import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'assets/colors/colors'
import { CustomTabBarButton } from 'components'
import Icon from 'react-native-vector-icons/FontAwesome6'
import IconF from 'react-native-vector-icons/MaterialCommunityIcons'
import IconI from 'react-native-vector-icons/Octicons'
import { JobsScreen, MyNetworkScreen, NotificationScreen, PostScreen } from 'screens/bottomTabScreens'
import stackNavigation from './stackNavigation'

const Tab = createBottomTabNavigator()

const getTabBarIcon = (name: any, size = 19, IconComponent = Icon) => ({ color }: any) => (
    <IconComponent name={name} color={color} style={{ fontSize: size }} />
)

const screens = [
    {
        name: "StackNavigation",
        component: stackNavigation,
        options: {
            title: "Ana Sayfa",
            tabBarIcon: getTabBarIcon("house-chimney"),
            unmountOnBlur: true,  //Sekmeden ayrıldığınızda ve Stack1'in 2. ekranında olduğunuzda, bu sekmeye geri döndüğünüzde her zaman bu stackNavigator'ın ilk ekranına geleceksiniz.
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

const TabNavigation = () => (
    
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
            headerShown: false,
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.grey,
            tabBarLabelStyle: {
                marginTop: -10,
                marginBottom: 4,
                fontWeight: '500',
            },
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