import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <View>
            <Text>homeScreen</Text>
            <Button title={"geç"} onPress={() => navigation.navigate("NotificationScreen")} />
        </View>
    )
}