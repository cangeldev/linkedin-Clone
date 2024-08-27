import { TabViewButton } from 'components'
import React, { useState } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import style from './style'

const FirstRoute = () => (
    <View style={[style.container, { backgroundColor: 'white' }]}>
        <Text style={style.text}>Chats</Text>
    </View>
)

const SecondRoute = () => (
    <View style={[style.container, { backgroundColor: '#673ab7' }]}>
        <Text style={style.text}>Status</Text>
    </View>
)

const ThirdRoute = () => (
    <View style={[style.container, { backgroundColor: '#4caf50' }]}>
        <Text style={style.text}>Calls</Text>
    </View>
)

export const Notification: React.FC = () => {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState<number>(0)
    const [routes] = useState<{ key: string; title: string }[]>([
        { key: 'first', title: 'Chats' },
        { key: 'second', title: 'Status' },
        { key: 'third', title: 'Calls' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TabViewButton
                    onPress={() => setIndex(0)}
                    isActive={index === 0}
                    label="Tümü"
                />
                <TabViewButton
                    onPress={() => setIndex(1)}
                    isActive={index === 1}
                    label="Gönderilerim"
                />
                <TabViewButton
                    onPress={() => setIndex(2)}
                    isActive={index === 2}
                    label="Bahsetmeler"
                />
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

