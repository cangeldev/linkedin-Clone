import React from 'react'
import { Home, Jobs, MyNetwork, Notification, Post } from 'screens/bottomTabScreens'
import { Icon } from 'components'
import { useTranslation } from 'react-i18next'

const getIcon = (name: any, IconComponent: any, size = 19) => ({ color }: any) => (
    <Icon type={IconComponent} name={name} style={{ fontSize: size, color: color }} />
)

/**
 * Tab navigationdaki ekranların kullandıkları iconların  ve başlıklarının bilgilerinin tutulduğu sayfa
 */
const TabScreens = () => {

    const { t } = useTranslation()

    const screens = [
        {
            name: "Home",
            component: Home,
            options: {
                title: t("Home"),
                tabBarIcon: getIcon("house-chimney", "FontAwesome6")
            }
        },
        {
            name: "MyNetworkScreen",
            component: MyNetwork,
            options: {
                title: t("myNetwork"),
                tabBarIcon: getIcon("user-group", "FontAwesome6")
            }
        },
        {
            name: "PostScreen",
            component: Post,
            options: {
                title: t("post"),
                tabBarIcon: getIcon("plus-box", "MaterialCommunityIcons", 24)
            }
        },
        {
            name: "NotificationScreen",
            component: Notification,
            options: {
                title: t("notifications"),
                tabBarIcon: getIcon("bell-fill", "Octicons")
            }
        },
        {
            name: "JobsScreen",
            component: Jobs,
            options: {
                title: t("jobs"),
                tabBarIcon: getIcon("briefcase", "FontAwesome6")
            }
        }
    ];

    return screens
}

export { getIcon, TabScreens }
