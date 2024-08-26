import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput } from 'components'
import { useNavigation } from '@react-navigation/native'

export const UserInfoScreen = () => {
    const navigation = useNavigation<any>()
    const handleButton = () => navigation.navigate("ContactInfoScreen")

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>Adınızı ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput placeholder='Ad*' />
                <LoginInput placeholder='Soyadı*' />
            </View>
            <View>
                <CustomButton title='Devam Et' onPress={handleButton} />
            </View>
        </View>
    )
}