import React, { useCallback } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { facebook, google, linkedinLogo } from 'assets'
import style from './style'
import { CustomButton } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

/**
 * WelcomeScreen - Bu sayfa  uygulama ilk açıldığı zaman kullanıcıları karşılayan ve uygulama hakkında ön bilgi veren daha sonrasında üyelik durumuna göre yönlendirmeleri yapan sayfadır.
 */
export const WelcomeScreen = () => {

    const navigation = useNavigation<any>()
    const { t } = useTranslation()

    const socialLoginButtons = [
        { title: t('continueWithGoogle'), icon: google },
        { title: t('continueWithFacebook'), icon: facebook },
    ]

    const navigateToScreen = useCallback((screen: string) => {
        navigation.navigate(screen)
    }, [navigation])

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.title}>
                {t("welcometitle")}
            </Text>
            <Text style={style.description}>
                {t("welcomeInfo")}{' '}
                <Text style={style.linkText}>{t("userAgreement")}</Text>,{' '}
                <Text style={style.linkText}>{t("privacyPolicy")}</Text>{' '}{t("and")}{' '}
                <Text style={style.linkText}>{t("cookiePolicy")}{' '}</Text>{t("youAccept")}
            </Text>
            <CustomButton title={t("agreeAndJoin")} onPress={() => navigateToScreen("UserInfoScreen")} />
            {socialLoginButtons.map(button => (
                <CustomButton key={button.title} title={button.title} icon={button.icon} />
            ))}
            <TouchableOpacity onPress={() => navigateToScreen("LoginScreen")}>
                <Text style={style.loginPrompt}>{t("signIn")}</Text>
            </TouchableOpacity>
        </View>
    )
}
