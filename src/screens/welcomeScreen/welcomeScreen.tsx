import React, { useCallback } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { facebook, google, linkedinLogo } from 'assets'
import style from './style'
import { CustomButton } from 'components'
import { useNavigation } from '@react-navigation/native'

const socialLoginButtons = [
    { title: 'Google ile Devam Et', icon: google },
    { title: 'Facebook ile Devam Et', icon: facebook },
]

export const WelcomeScreen = () => {
    const navigation = useNavigation<any>()

    const navigateToScreen = useCallback((screen: string) => {
        navigation.navigate(screen)
    }, [navigation])

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
            <CustomButton title='Kabul Et ve Katıl' onPress={() => navigateToScreen("UserInfoScreen")} />
            {socialLoginButtons.map(button => (
                <CustomButton key={button.title} title={button.title} icon={button.icon} />
            ))}
            <TouchableOpacity onPress={() => navigateToScreen("LoginScreen")}>
                <Text style={style.loginPrompt}>Oturum aç</Text>
            </TouchableOpacity>
        </View>
    )
}
