import React, { useState } from 'react'
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import style from './style'
import { apple, facebook, google, linkedinLogo } from 'assets'
import { LoginInput, WelcomeScreenButton } from 'components'
import Icon from 'components/icon/icon'

export const LoginScreen = () => {
    const [rememberMe, setRememberMe] = useState(true);

    const toggleRememberMe = () => setRememberMe(prev => !prev);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.container}
        >
            <ScrollView
                contentContainerStyle={style.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <Image source={linkedinLogo} style={style.logo} />
                <Text style={style.title}>Oturum aç</Text>
                <Text style={style.subtitle}>
                    veya <Text style={style.highlightedText}>LinkedIn'e Katılın</Text>
                </Text>
                {['Google', 'Apple', 'Facebook'].map(platform => (
                    <WelcomeScreenButton
                        key={platform}
                        title={`${platform} ile oturum açın`}
                        icon={{ google: google, apple: apple, facebook: facebook }[platform.toLowerCase()]}
                    />
                ))}
                <View style={style.separatorContainer}>
                    <View style={style.separatorLine} />
                    <Text style={style.separatorText}>veya</Text>
                    <View style={style.separatorLine} />
                </View>
                <LoginInput placeholder='E-posta veya Telefon' />
                <LoginInput placeholder='Şifre' />
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
                <Text style={style.forgotPasswordText}>Şifrenizi mi unuttunuz?</Text>
                <WelcomeScreenButton title='Devam Et' />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
