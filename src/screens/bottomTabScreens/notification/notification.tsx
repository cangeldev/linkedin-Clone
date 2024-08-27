import colors from 'assets/colors/colors'
import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'


const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
        <Text style={styles.text}>Chats</Text>
    </View>
)

const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]}>
        <Text style={styles.text}>Status</Text>
    </View>
)

const ThirdRoute = () => (
    <View style={[styles.container, { backgroundColor: '#4caf50' }]}>
        <Text style={styles.text}>Calls</Text>
    </View>
)

export const Notification = () => {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'Chats' },
        { key: 'second', title: 'Status' },
        { key: 'third', title: 'Calls' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const getButtonStyle = (tabIndex: any) => (
        index === tabIndex ? styles.activeButton : styles.inactiveButton
    );

    const getTextStyle = (tabIndex: any) => (
        index === tabIndex ? styles.activeText : styles.inactiveText
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setIndex(0)} style={getButtonStyle(0)}>
                    <Text style={getTextStyle(0)}>Tümü</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIndex(1)} style={getButtonStyle(1)}>
                    <Text style={getTextStyle(1)}>Gönderilerim</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIndex(2)} style={getButtonStyle(2)}>
                    <Text style={getTextStyle(2)}>Bahsetmeler</Text>
                </TouchableOpacity>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={() => null} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        elevation: 2,
        borderBottomWidth: 1,
        borderBottomColor:"yellow"
    },
    activeButton: {
        fontSize: 15,
        borderRadius: 25,
        marginRight: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: 'green',
    },
    inactiveButton: {
        fontSize: 15,
        borderRadius: 25,
        marginRight: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: colors.darkGrey,
    },
    activeText: {
        color: 'white',
        fontWeight: '600',
    },
    inactiveText: {
        color: colors.darkGrey,
        fontWeight: '600',
    },

    text: {
        color: 'white',
        fontSize: 24,
    },
})
