import { View, TextInput } from 'react-native'
import React, { FC, useState, useCallback } from 'react'
import style from './style'
import { Icon } from 'components'
import { useTranslation } from 'react-i18next'

interface ILoginInput {
    placeholder: string
    onInputChange: (inputText: string) => void
    secureTextEntry?: boolean
}

export const LoginInput: FC<ILoginInput> = React.memo(({ placeholder, onInputChange, secureTextEntry = false }) => {
    const [inputText, setInputText] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(secureTextEntry)
    const { t } = useTranslation()

    const handleTextChange = useCallback((text: string) => {
        setInputText(text)
        onInputChange(text)
    }, [onInputChange])

    return (
        <View style={style.inputView}>
            <TextInput
                autoCapitalize='none'
                secureTextEntry={visiblePassword}
                style={style.input}
                placeholder={placeholder+"*"}
                placeholderTextColor="#5b5d5f"
                value={inputText}
                onChangeText={handleTextChange}
            />
            {placeholder === t("password") && (
                <Icon
                    type='MaterialCommunityIcons'
                    onPress={() => setVisiblePassword(!visiblePassword)}
                    name={visiblePassword ? "eye-off" : "eye"}
                    style={style.eyeIcon}
                />
            )}
        </View>
    )
})
