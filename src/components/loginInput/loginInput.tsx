import { View, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'
import Icon from 'components/icon/icon'

interface ILoginInput {
    placeholder: string
}

export const LoginInput: FC<ILoginInput> = ({ placeholder }) => {
    const [visiblePassword, setVisiblePassword] = useState(true)

    return (
        <View style={style.inputView}>
            <TextInput
                secureTextEntry={visiblePassword}
                style={style.input}
                placeholder={placeholder}
                placeholderTextColor="#5b5d5f"
            />
            {
                placeholder == "Şifre" ? <Icon type='MaterialCommunityIcons' onPress={() => setVisiblePassword(!visiblePassword)} name={visiblePassword == false ? "eye-off" : "eye"} style={style.eyeIcon} /> : null
            }
        </View >
    )
}