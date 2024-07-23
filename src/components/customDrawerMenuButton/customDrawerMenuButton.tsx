import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

interface ICustomDrawerMenuButton {
    pageName: string
    page: string
}

const navigation = useNavigation<any>()

export const CustomDrawerMenuButton: FC<ICustomDrawerMenuButton> = ({ page, pageName }) => {
    return (
        <TouchableOpacity onPress={ ()=> navigation.navigate(page)}>
            <Text>{pageName}</Text>
        </TouchableOpacity>

    )
}
