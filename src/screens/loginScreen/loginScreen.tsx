import React, { useState, useCallback } from 'react'
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import style from './style'
import { apple, facebook, google, linkedinLogo } from 'assets'
import { LoginInput, CustomButton, Icon } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'hooks/useForm'
import { useTranslation } from 'react-i18next'
import { loginWithEmailPassword } from 'services/firebase/firebaseAuth'
import { showToast } from 'utils/helper'

const platformIcons = {
    google,
    apple,
    facebook,
} as any

/**
 * LoginScreen - bu sayfa kullanıcıların giriş yapmalarını sağlar veya henüz üye değillerse üye olma sayfasına yönlendirir veya sosyal medya ile giriş seçenekleri sunar. 
 * girilen bilgileri firebasede kayıtlı olup olmadığına bakar ve gerekli yönlendirmeleri yapar.
 */
export const LoginScreen = () => {
    const navigation = useNavigation<any>()
    const [rememberMe, setRememberMe] = useState(true)
    const [formData, handleInputChange] = useForm({ email: '', password: '' })
    const { t } = useTranslation()

    const toggleRememberMe = useCallback(() => setRememberMe(prev => !prev), [])

    const validateInputs = () => {
        const { email, password } = formData
        if (!email.trim() || !password.trim()) {
            showToast('Hata:', " E-posta ve şifre alanlarını doldurmalısınız.", "bottom")
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
                <Text style={style.title}>{t("signIn")}</Text>
                <Text onPress={() => navigation.navigate("UserInfoScreen")} style={style.subtitle}>
                    {t("or")} <Text style={style.highlightedText}>{t("joinLinkedln")}</Text>
                </Text>
                {['Google', 'Apple', 'Facebook'].map(platform => (
                    <CustomButton key={platform} title={t("signWith") + `${platform}`} icon={platformIcons[platform.toLowerCase()]} />
                ))}
                <View style={style.separatorContainer}>
                    <View style={style.separatorLine} />
                    <Text style={style.separatorText}>{t("or")}</Text>
                    <View style={style.separatorLine} />
                </View>
                <LoginInput onInputChange={(text) => handleInputChange('email', text)} placeholder={t("eMailOrPhone")} />
                <LoginInput secureTextEntry onInputChange={(text) => handleInputChange('password', text)} placeholder={t("password")} />
                <View style={style.rememberMeContainer}>
                    <Icon
                        type='MaterialCommunityIcons'
                        onPress={toggleRememberMe}
                        name={rememberMe ? "checkbox-marked" : "checkbox-blank-outline"}
                        style={rememberMe ? style.iconChecked : style.iconUnchecked}
                    />
                    <Text style={style.rememberMeText}>{t("rememberMe")}</Text>
                    <Text style={style.moreInfoText}>{t("learnMore")}</Text>
                </View>
                <Text style={style.forgotPasswordText}>{t("forgotPassword")}?</Text>
                <CustomButton onPress={handleLogin} title={t("continue")} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
