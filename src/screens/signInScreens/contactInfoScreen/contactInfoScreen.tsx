import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { linkedinLogo } from 'assets'
import { CustomButton, Icon, LoginInput } from 'components'
import style from './style'
import { useNavigation } from '@react-navigation/native'

export const ContactInfoScreen = () => {
    const navigation = useNavigation<any>()
    const [rememberMe, setRememberMe] = useState(true);

    const toggleRememberMe = () => setRememberMe(prev => !prev)
    const handleButton = () => navigation.navigate("VerificationCodeScreen")

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>E-postanızı veya telefonunuzu ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput placeholder='E-posta veya Telefon*' />
                <LoginInput placeholder='Şifre' />
                <Text style={style.passwordInfo}>6 veya daha fazla karakter</Text>
            </View>
            <View style={style.rememberMeContainer}>
                <Icon
                    type='MaterialCommunityIcons'
                    onPress={toggleRememberMe}
                    name={rememberMe ? "checkbox-marked" : "checkbox-blank-outline"}
                    style={rememberMe ? style.iconChecked : style.iconUnchecked}
                />
                <Text style={style.rememberMeText}>Beni hatırla.</Text>
                <Text style={style.moreInfoText}> Daha fazla bilgi edinin</Text>
            </View>
            <CustomButton title='Devam Et' onPress={handleButton} />
        </View>
    )
}