import React, { FC } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import style from './style'

interface ICustomButton {
    title: string
    icon?: any
    onPress?: () => void
}

export const CustomButton: FC<ICustomButton> = React.memo(({ title, icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.buttonContainer}>
            <Text style={icon ? style.buttonTextWithIcon : style.buttonText}>
                {icon && <Image source={icon} style={style.icon} />}
                {icon && " "}
                {title}
            </Text>
        </TouchableOpacity>
    )
})
