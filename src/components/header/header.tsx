import React, { FC, useState } from 'react'
import { View, Pressable, TextInput, Image } from 'react-native'
import { useNavigationState } from '@react-navigation/native'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconE from 'react-native-vector-icons/Entypo'
import style from './style'
import { profileExample } from 'assets'

interface IHeader {
    navigation: any
}

export const Header: FC<IHeader> = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('')
    const { index: tabIndex = 0 } = useNavigationState(state => state.routes[state.index].state ?? {} as any)

    return (
        <View style={style.container}>
            <Pressable onPress={navigation.toggleDrawer}>
                <Image source={profileExample} style={style.profileImage} />
            </Pressable>
            <TextInput
                style={style.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Arama Yap"
                placeholderTextColor="#5b5d5f"
            />
            <View style={style.iconContainer}>
                {tabIndex === 3 && <IconF name="gear" style={style.icon} />}
                {tabIndex === 4 && <IconE name="dots-three-vertical" style={style.icon} />}
                <IconF name="commenting" color="#b3b3b3" size={25} />
            </View>
        </View>
    )
}
