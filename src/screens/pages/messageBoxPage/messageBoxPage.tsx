import { View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { MessageBoxHeader } from 'components'
import style from './style'
import { useTranslation } from 'react-i18next'
import { TabView, SceneMap } from 'react-native-tab-view'
import { TabViewButton } from 'components'
import { FocusedMessagesPage, InMailMessagesPage, MyConnectionsMessagesPage, UnReadMessagesPage } from './messageBoxInnnerPages'

type Route = {
    key: string
    title: string
}

export const MessageBoxPage = () => {

    const [index, setIndex] = useState<number>(0)
    const { t } = useTranslation()
    const layout = useWindowDimensions()
    const [routes] = useState<Route[]>([
        { key: 'first', title: t('focused') },
        { key: 'second', title: t('unRead') },
        { key: 'third', title: t('myConnections') },
        { key: 'fourth', title: t('inMail') }
    ])

    const renderScene = SceneMap({
        first: FocusedMessagesPage,
        second: UnReadMessagesPage,
        third: MyConnectionsMessagesPage,
        fourth: InMailMessagesPage,
    })

    return (
        <View style={style.container}>
            <MessageBoxHeader />
            <View style={style.tabViewHeader}>
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