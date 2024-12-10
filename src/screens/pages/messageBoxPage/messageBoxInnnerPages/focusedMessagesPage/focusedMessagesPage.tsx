import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { MessageListCard } from 'components/cards'
import { notificationEmpty } from 'assets'

export const FocusedMessagesPage = () => {
    return (
        <View style={style.container}>
            <MessageListCard name='Can' profileImage={notificationEmpty} surname='GEL' time={"asdasd"} message='Mesajım burada yazılı olacakasdas asdasdsa' />
        </View>
    )
}