import React, { FC, useState } from 'react'
import { View, Pressable, TextInput } from 'react-native'
import { useNavigationState } from '@react-navigation/native'
import style from './style'
import Icon from 'components/icon/icon'
import { ProfileImage } from 'components'

interface IHeader {
    navigation: any
}

export const Header: FC<IHeader> = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('')
    const { index: tabIndex = 0 } = useNavigationState(state => state.routes[state.index].state ?? {} as any)

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
                {tabIndex === 3 && <Icon type="FontAwesome" name="gear" style={style.icon} />}
                {tabIndex === 4 && <Icon type="Entypo" name="dots-three-vertical" style={style.icon} />}
                <Icon type="FontAwesome" name="commenting" style={style.messageIcon} />
            </View>
        </View>
    )
}
