import React from 'react'
import { Home, Jobs, MyNetwork, Notification, Post } from 'screens/bottomTabScreens'
import { Icon } from 'components'

const getIcon = (name: any, IconComponent: any, size = 19,) => ({ color }: any) => (
    <Icon type={IconComponent} name={name} style={{ fontSize: size, color: color }} />
)

/**
 * Tab navigationdaki ekranların kullandıkları iconların  ve başlıklarının bilgilerinin tutulduğu sayfa
 */
const screens = [
    {
        name: "Home",
        component: Home,
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
