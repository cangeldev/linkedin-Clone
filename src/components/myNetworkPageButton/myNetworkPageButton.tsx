import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components/icon/icon'
import style from './style'
import { useNavigation } from '@react-navigation/native'

interface IMyNetworkPageButton {
    title: string,
    count: string,
    iconName: string,
    type: string,
    navigations: string
}

/**
 * MyNetworkButton - Ağımı yönet sayfasındaki bileşenlerin listelenmesinde kullanılan buton bileşenidir. 
 */
export const MyNetworkPageButton: FC<IMyNetworkPageButton> = ({ title, count, iconName, type, navigations }) => {
    const navigation = useNavigation<any>()
    const handleButton = () => {
        navigation.navigate(navigations)
    }

    return (
        <TouchableOpacity onPress={handleButton} style={style.container}>
            <Icon name={iconName} type={type as any} style={style.icon} />
            <Text style={style.title}>{title}</Text>
            <Text style={style.count}>
                {count}
            </Text>
        </TouchableOpacity>
    )
}
