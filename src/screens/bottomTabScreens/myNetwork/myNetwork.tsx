import * as React from 'react'
import { useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ExpandYourNetwork, NewsYourNetwork } from './tabViewScreens'
import styles from './style'

const renderScene = SceneMap({
    first: ExpandYourNetwork,
    second: NewsYourNetwork,
})

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        style={styles.tabBar}
        labelStyle={styles.label}
        indicatorStyle={styles.indicator}
        activeColor='green'
        inactiveColor='gray'
    />
)
/**
 * MyNetwork - Ağım ile ilgili tüm bilgilerin, ayarlamaların olduğu sayfadır.
 */
export const MyNetwork = () => {
    const layout = useWindowDimensions()
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'first', title: 'Ağınızı büyütün' },
        { key: 'second', title: 'Ağınızdan haberler' }
    ])

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

