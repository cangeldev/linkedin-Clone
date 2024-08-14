import { View, Text, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

interface ILoginInput {
    placeholder: string
}

export const LoginInput: FC<ILoginInput> = ({ placeholder }) => {
    const [visiblePassword, setVisiblePassword] = useState(true)
    const [rememberMe, setRememberMe] = useState(true)

    return (
        <View style={style.inputView}>
            <TextInput
                secureTextEntry={visiblePassword}
                style={style.input}
                placeholder={placeholder}
                placeholderTextColor="#5b5d5f"
            />
            {
                placeholder == "Şifre" ? <IconM onPress={() => setVisiblePassword(!visiblePassword)} name={visiblePassword == false ? "eye-off" : "eye"} style={style.eyeIcon} /> : null
            }
        </View >
    )
}