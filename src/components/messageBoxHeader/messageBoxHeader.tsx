import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Icon } from 'components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

export const MessageBoxHeader = () => {
    const [inputValue, setInputValue] = useState('')
    const { t } = useTranslation()
    const navigation = useNavigation<any>()
    const toggleIconButton = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Icon type="AntDesign" onPress={toggleIconButton} name="arrowleft" style={styles.backIcon} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder={t("searchMessages")}
                    placeholderTextColor="#5b5d5f"
                />
                <Icon type="FontAwesome5" name="search" style={styles.searchIcon} />
            </View>
            <Icon type="Entypo" name="dots-three-vertical" style={styles.icon} />
        </View>
    )
}