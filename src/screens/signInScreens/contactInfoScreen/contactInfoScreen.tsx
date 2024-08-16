import { View, Text, Image } from 'react-native'
import React from 'react'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput } from 'components'
import style from './style'

const ContactInfoScreen = () => {
    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>E-postanızı veya telefonunuzu ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput placeholder='E-posta veya Telefon*' />
            </View>
            <View >
                <CustomButton title='Devam Et' />
            </View>
        </View>
    )
}

export default React.memo(ContactInfoScreen)