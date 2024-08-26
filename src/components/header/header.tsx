import React, { FC, useState } from 'react'
import { View, Pressable, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native'
import style from './style'
import { Icon, ProfileImage } from 'components'

interface IHeader {
    navigation: any
}

export const Header: FC<IHeader> = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('')
    const route = useRoute()
    const tabIndex = route.name

    return (
        <View style={style.container}>
            <Pressable style={style.profileImageView} onPress={navigation.toggleDrawer}>
                <ProfileImage />
            </Pressable>
            <View style={style.inputView}>
                <TextInput
                    style={style.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Arama Yap"
                    placeholderTextColor="#5b5d5f"
                />
                <Icon type="FontAwesome5" name="search" style={style.searchIcon} />
            </View>
            <View style={style.iconContainer}>
                {tabIndex === 'NotificationScreen' && <Icon type="FontAwesome" name="gear" style={style.icon} />}
                {tabIndex === 'JobsScreen' && <Icon type="Entypo" name="dots-three-vertical" style={style.icon} />}
                <Icon type="FontAwesome" name="commenting" style={style.messageIcon} />
            </View>
        </View>
    )
}
