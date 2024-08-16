import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput } from 'components'

const UserInfoScreen = () => {
    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>Adınızı ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput placeholder='Ad*' />
                <LoginInput placeholder='Soyadı*' />
            </View>
            <View >
                <CustomButton title='Devam Et' />
            </View>
        </View>
    )
}

export default React.memo(UserInfoScreen)