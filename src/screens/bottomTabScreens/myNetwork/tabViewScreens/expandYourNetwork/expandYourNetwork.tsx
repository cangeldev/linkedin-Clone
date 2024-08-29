import { View } from 'react-native'
import React from 'react'
import style from './style'
import { MyNetworkButton } from 'components'

export const ExpandYourNetwork = () => {
    return (
        <View style={style.container}>
            <MyNetworkButton title='Davetiyeler (0)' />
            <MyNetworkButton title='Ağımı yönet' />
        </View>
    )
}