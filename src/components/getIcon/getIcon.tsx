import React from 'react'
import { Jobs, MyNetwork, Notification, Post } from 'screens/bottomTabScreens'
import stackNavigation from 'navigation/stackNavigation'
import Icon from 'components/icon/icon'

const getIcon = (name: any, IconComponent: any, size = 19,) => ({ color }: any) => (
    <Icon type={IconComponent} name={name} style={{ fontSize: size, color: color }} />
)

const screens = [
    {
        name: "StackNavigation",
        component: stackNavigation,
        options: {
            title: "Ana Sayfa",
            tabBarIcon: getIcon("house-chimney", "FontAwesome6")
        }
    },
    {
        name: "MyNetworkScreen",
        component: MyNetwork,
        options: {
            title: "Ağım",
            tabBarIcon: getIcon("user-group", "FontAwesome6")
        }
    },
    {
        name: "PostScreen",
        component: Post,
        options: {
            title: "Yayınla",
            tabBarIcon: getIcon("plus-box", "MaterialCommunityIcons", 24)
        }
    },
    {
        name: "NotificationScreen",
        component: Notification,
        options: {
            title: "Bildirimler",
            tabBarIcon: getIcon("bell-fill", "Octicons")
        }
    },
    {
        name: "JobsScreen",
        component: Jobs,
        options: {
            title: "İş ilanları",
            tabBarIcon: getIcon("briefcase", "FontAwesome6")
        }
    }
]

export { getIcon, screens }
