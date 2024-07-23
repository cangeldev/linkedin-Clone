import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from './style'

interface ICustomDrawerMenuButton {
    pageName: string
    page: string
}


export const CustomDrawerMenuButton: FC<ICustomDrawerMenuButton> = ({ page, pageName }) => {

    const navigation = useNavigation<any>()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(page)} style={style.container}>
            <Text style={style.title}>{pageName}</Text>
        </TouchableOpacity>

    )
}
