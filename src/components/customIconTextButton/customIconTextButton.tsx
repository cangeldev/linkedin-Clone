import { Image, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomIconTextButton {
    icon: any,
    title: string
}

export const CustomIconTextButton: FC<ICustomIconTextButton> = ({ icon, title }) => {
    return (
        <TouchableOpacity style={style.container}>
            <Image source={icon} style={style.image} />
            <Text style={style.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}