import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components'
import style from './style'
import { useNavigation } from '@react-navigation/native'

interface IMyNetworkButton {
    title: string,
    goPage?: string
}

export const MyNetworkButton: FC<IMyNetworkButton> = ({ title, goPage }) => {
    const navigation = useNavigation<any>()

    const handleButton = () => {
        navigation.navigate(goPage)
    }

    return (
        <TouchableOpacity onPress={handleButton} style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Icon name='arrow-right-long' type='FontAwesome6' style={style.icon} />
        </TouchableOpacity>
    )
}
