import React from 'react'
import { View, Text, Image } from 'react-native'
import { facebook, google, linkedinLogo } from 'assets'
import style from './style'
import { WelcomeScreenButton } from 'components'

const WelcomeScreen = () => {
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
            <WelcomeScreenButton title='Kabul Et ve Katıl' />
            <WelcomeScreenButton title='Google ile Devam Et' icon={google} />
            <WelcomeScreenButton title='Facebook ile Devam Et' icon={facebook} />
            <Text style={style.loginPrompt}>Oturum aç</Text>
        </View>
    )
}
export default React.memo(WelcomeScreen)