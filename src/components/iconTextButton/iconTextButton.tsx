import { Image, Text, TouchableHighlight, View } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import colors from 'assets/colors/colors'

interface IiconTextButton {
    icon: any,
    title: string
}

export const IconTextButton: FC<IiconTextButton> = ({ icon, title }) => {
    return (
        <TouchableHighlight underlayColor={colors.lightGrey} onPress={() => console.log("first")}>
            <View style={style.container}>
                <Image source={icon} style={style.image} />
                <Text style={style.title}>
                    {title}
                </Text>
            </View>
        </TouchableHighlight>
    )
}