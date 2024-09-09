import React, { useCallback, useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput, Icon } from 'components'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { SignUpWithEmailPassword } from 'services/firebase/firebase'
import { useForm } from 'hooks/useForm'
export const ContactInfoScreen = () => {
    const navigation = useNavigation<any>()
    const [formData, handleInputChange] = useForm({ email: '', password: '' })
    const [rememberMe, setRememberMe] = useState(true)

    const handleButton = useCallback(async () => {
        const { email, password } = formData
        if (!email.trim() || !password.trim()) {
            Alert.alert('Hata', 'E-posta ve şifre alanlarını doldurmalısınız.')
            return
        }
        await SignUpWithEmailPassword(email, password, navigation)
    }, [formData])

    const toggleRememberMe = useCallback(() => setRememberMe(prev => !prev), [])

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>E-postanızı veya telefonunuzu ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput onInputChange={(text) => handleInputChange('email', text)} placeholder='E-posta veya Telefon*' />
                <LoginInput onInputChange={(text) => handleInputChange('password', text)} placeholder='Şifre' />
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
            </View>
            <CustomButton title='Devam Et' onPress={handleButton} />
        </View>
    )
}
