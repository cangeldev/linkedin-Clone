import { View } from 'react-native'
import React from 'react'
import { MessageBoxHeader } from 'components'
import style from './style'

export const MessageBoxPage = () => {
    return (
        <View style={style.container}>
            <MessageBoxHeader />
        </View>
    )
}