import React, { useState, useCallback } from 'react'
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native'
import style from './style'
import { apple, facebook, google, linkedinLogo } from 'assets'
import { LoginInput, CustomButton, Icon } from 'components'
import { loginWithEmailPassword } from 'services/firebase/firebase'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'hooks/useForm'

const platformIcons = {
    google,
    apple,
    facebook,
} as any

export const LoginScreen = () => {
    const navigation = useNavigation<any>()
    const [rememberMe, setRememberMe] = useState(true)
    const [formData, handleInputChange] = useForm({ email: '', password: '' })

    const toggleRememberMe = useCallback(() => setRememberMe(prev => !prev), [])

    const validateInputs = () => {
        const { email, password } = formData
        if (!email.trim() || !password.trim()) {
            Alert.alert('Hata', 'E-posta ve şifre alanlarını doldurmalısınız.')
            return false
        }
        return true
    }

    const handleLogin = useCallback(async () => {
        if (validateInputs()) {
            await loginWithEmailPassword(formData.email, formData.password, navigation)
        }
    }, [formData])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.container}>
            <ScrollView contentContainerStyle={style.scrollContainer} keyboardShouldPersistTaps="handled">
                <Image source={linkedinLogo} style={style.logo} />
                <Text style={style.title}>Oturum aç</Text>
                <Text onPress={() => navigation.navigate("UserInfoScreen")} style={style.subtitle}>
                    veya <Text style={style.highlightedText}>LinkedIn'e Katılın</Text>
                </Text>
                {['Google', 'Apple', 'Facebook'].map(platform => (
                    <CustomButton key={platform} title={`${platform} ile oturum açın`} icon={platformIcons[platform.toLowerCase()]} />
                ))}
                <View style={style.separatorContainer}>
                    <View style={style.separatorLine} />
                    <Text style={style.separatorText}>veya</Text>
                    <View style={style.separatorLine} />
                </View>
                <LoginInput onInputChange={(text) => handleInputChange('email', text)} placeholder='E-posta veya Telefon' />
                <LoginInput secureTextEntry onInputChange={(text) => handleInputChange('password', text)} placeholder='Şifre' />
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
                <CustomButton onPress={handleLogin} title='Devam Et' />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
