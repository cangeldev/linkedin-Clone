import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components'
import style from './style'

interface IMyNetworkButton {
    title: string
}

export const MyNetworkButton: FC<IMyNetworkButton> = ({ title }) => {
    return (
        <TouchableOpacity style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Icon name='arrow-right-long' type='FontAwesome6' style={style.icon} />
        </TouchableOpacity>
    )
}
