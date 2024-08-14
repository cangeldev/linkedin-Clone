import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { apple, facebook, google, linkedinLogo } from 'assets'
import { WelcomeScreenButton } from 'components'

export const SignInScreen = () => {
    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.title}>Oturum aç</Text>
            <Text style={style.subtitle}>veya <Text style={style.highlightedText}>LinkedIn'e Katılın</Text></Text>
            <WelcomeScreenButton title='Google ile oturum açın' icon={google} />
            <WelcomeScreenButton title='Apple ile oturum açın' icon={apple} />
            <WelcomeScreenButton title='Facebook ile oturum açın' icon={facebook} />
            <View style={style.separatorContainer}>
                <View style={style.separatorLine} />
                <View>
                    <Text style={style.separatorText}>veya</Text>
                </View>
                <View style={style.separatorLine} />
            </View>
        </View>
    )
}
