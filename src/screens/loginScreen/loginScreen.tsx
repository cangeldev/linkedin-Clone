import React, { useState, useCallback } from 'react'
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import style from './style'
import { apple, facebook, google, linkedinLogo } from 'assets'
import { LoginInput, CustomButton, Icon } from 'components'
import { handleSignOut, signInWithEmailPassword } from 'services/firebase/firebase'

const platformIcons = {
    google,
    apple,
    facebook,
} as any

export const LoginScreen = () => {
    const [rememberMe, setRememberMe] = useState(true)
    const [inputValueMail, setInputValueMail] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const toggleRememberMe = useCallback(() => setRememberMe(prev => !prev), [])
    const handleInputChangeMail = useCallback((inputText: string) => {
        setInputValueMail(inputText)
    }, [])

    const handleInputChangePassword = useCallback((inputText: string) => {
        setInputValuePassword(inputText)
    }, [])

    const handleButton = useCallback(async () => {
        if (inputValueMail.trim() === '' || inputValuePassword.trim() === '') {
            console.log('Hata', 'E-posta ve şifre alanlarını doldurmalısınız.')
            return
        }
        await signInWithEmailPassword(inputValueMail, inputValuePassword)
    }, [inputValueMail, inputValuePassword])

    const handleButton2 = useCallback(async () => {
        await handleSignOut()
    }, [])

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
                    <CustomButton
                        key={platform}
                        title={`${platform} ile oturum açın`}
                        icon={platformIcons[platform.toLowerCase()]}
                    />
                ))}
                <View style={style.separatorContainer}>
                    <View style={style.separatorLine} />
                    <Text style={style.separatorText}>veya</Text>
                    <View style={style.separatorLine} />
                </View>
                <LoginInput onInputChange={handleInputChangeMail} placeholder='E-posta veya Telefon' />
                <LoginInput secureTextEntry onInputChange={handleInputChangePassword} placeholder='Şifre' />
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
                <CustomButton onPress={handleButton} title='Devam Et' />
                <CustomButton onPress={handleButton2} title='Test için sonradan kaldır' />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
