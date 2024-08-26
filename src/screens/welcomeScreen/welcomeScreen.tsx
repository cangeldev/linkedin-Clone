import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { facebook, google, linkedinLogo } from 'assets'
import style from './style'
import { CustomButton } from 'components'
import { useNavigation } from '@react-navigation/native'

export const WelcomeScreen = () => {

    const navigation = useNavigation<any>()
    const handleLogin = () => navigation.navigate("LoginScreen")
    const handleSignin = () => navigation.navigate("UserInfoScreen")

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.title}>
                1 milyar profesyonelden oluşan güvenli topluluğa katılın
            </Text>
            <Text style={style.description}>
                Kabul Et ve Katıl veya Devam Et seçeneklerinden birini tıklayarak, LinkedIn
                <Text style={style.linkText}> Kullanıcı Anlaşmasını</Text>,{' '}
                <Text style={style.linkText}>Gizlilik politikasını</Text> ve{' '}
                <Text style={style.linkText}>Çerez politikasını</Text> kabul etmiş olursunuz.
            </Text>
            <CustomButton title='Kabul Et ve Katıl' onPress={handleSignin} />
            <CustomButton title='Google ile Devam Et' icon={google} />
            <CustomButton title='Facebook ile Devam Et' icon={facebook} />
            <TouchableOpacity onPress={handleLogin}>
                <Text style={style.loginPrompt}>Oturum aç</Text>
            </TouchableOpacity>
        </View>
    )
}