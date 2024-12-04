import React, { FC, useState } from 'react'
import { View, Pressable, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './style'
import { Icon, ProfileImage } from 'components'
import { useTranslation } from 'react-i18next'

interface IHeader {
    navigation: any
}

/**
 * `Header` bileşeni, özel olarak hazırlanmış uygulamanın üst kısmında yer alan özelleştirilmiş bir başlıktır.
 * gelen `navigation` prop'u, drawer menüsünü açmak için kullanılır.
 */
export const Header: FC<IHeader> = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('')
    const route = useRoute()
    const tabIndex = route.name
    const { t } = useTranslation()
    const toggleIconButton = () => {
        navigation.navigate("MessageBoxPage")
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.profileImageView} onPress={navigation.toggleDrawer}>
                <ProfileImage />
            </Pressable>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder={t("search")}
                    placeholderTextColor="#5b5d5f"
                />
                <Icon type="FontAwesome5" name="search" style={styles.searchIcon} />
            </View>
            <View style={styles.iconContainer}>
                {tabIndex === 'NotificationScreen' && <Icon type="FontAwesome" name="gear" style={styles.icon} />}
                {tabIndex === 'JobsScreen' && <Icon type="Entypo" name="dots-three-vertical" style={styles.icon} />}
                <Icon type="FontAwesome" onPress={toggleIconButton} name="commenting" style={styles.messageIcon} />
            </View>
        </View>
    )
}
