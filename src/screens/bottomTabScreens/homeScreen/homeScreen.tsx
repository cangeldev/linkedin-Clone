import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from './style'


export const HomeScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={style.container}>
            <Text>homeScreen</Text>
            <Button title={"geç"} onPress={() => navigation.navigate("NotificationScreen")} />
        </View>
    )
}