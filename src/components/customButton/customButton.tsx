import React, { FC } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import style from './style'

interface ICustomButton {
    title: string
    icon?: any
}

export const CustomButton: FC<ICustomButton> = ({ title, icon }) => {
    return (
        <TouchableOpacity style={style.buttonContainer}>
            <Text style={icon ? style.buttonTextWithIcon : style.buttonText}>
                {icon && <Image source={icon} style={style.icon} />}
                {icon && " "}
                {title}
            </Text>
        </TouchableOpacity>
    );
};
