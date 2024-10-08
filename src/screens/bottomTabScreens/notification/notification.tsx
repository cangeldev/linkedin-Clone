import React, { useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { TabViewButton } from 'components'
import style from './style'
import { AllNotifications, MentionsNotifications, MyPostsNotifications } from './tabViewScreens'
import { useTranslation } from 'react-i18next'

type Route = {
    key: string
    title: string
}

export const Notification: React.FC = () => {

    const { t } = useTranslation()
    const layout = useWindowDimensions()
    const [index, setIndex] = useState<number>(0);
    const [routes] = useState<Route[]>([
        { key: 'first', title: t('All') },
        { key: 'second', title: t('myPosts') },
        { key: 'third', title: t('mentions') }
    ])

    const renderScene = SceneMap({
        first: AllNotifications,
        second: MyPostsNotifications,
        third: MentionsNotifications
    })

    return (
        <View style={style.container}>
            <View style={style.header}>
                {routes.map((route, i) => (
                    <TabViewButton
                        key={route.key}
                        onPress={() => setIndex(i)}
                        isActive={index === i}
                        label={route.title}
                    />
                ))}
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={() => null}
            />
        </View>
    )
}
