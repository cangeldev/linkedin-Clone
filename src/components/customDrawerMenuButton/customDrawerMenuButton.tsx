import { Text, TouchableHighlight } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import colors from 'assets/colors/colors'

interface ICustomDrawerMenuButton {
    pageName: string
    page: string
}

export const CustomDrawerMenuButton: FC<ICustomDrawerMenuButton> = ({ page, pageName }) => {

    const navigation = useNavigation<any>()

    return (
        <TouchableHighlight
            underlayColor={colors.lightGrey}
            onPress={() => navigation.navigate(page)}
            style={style.container}>
            <Text style={style.title}>
                {pageName}
            </Text>
        </TouchableHighlight>

    )
}
