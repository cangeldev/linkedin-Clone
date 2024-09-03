import React, { useCallback, useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { linkedinLogo } from 'assets'
import { CustomButton, Icon, LoginInput } from 'components'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { SignUpWithEmailPassword } from 'services/firebase/firebase'

export const ContactInfoScreen = () => {
    const navigation = useNavigation<any>()
    const [rememberMe, setRememberMe] = useState(true)
    const [inputValueMail, setInputValueMail] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const handleInputChangeMail = useCallback((inputText: string) => {
        setInputValueMail(inputText)
    }, [])

    const handleInputChangePassword = useCallback((inputText: string) => {
        setInputValuePassword(inputText)
    }, [])
    const handleButton = useCallback(async () => {
        if (inputValueMail.trim() === '' || inputValuePassword.trim() === '') {
            Alert.alert('Hata', 'E-posta ve şifre alanlarını doldurmalısınız.')
            return
        }
        await SignUpWithEmailPassword(inputValueMail, inputValuePassword, navigation)
    }, [inputValueMail, inputValuePassword])

    const toggleRememberMe = () => setRememberMe(prev => !prev)

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>E-postanızı veya telefonunuzu ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput onInputChange={handleInputChangeMail} placeholder='E-posta veya Telefon*' />
                <LoginInput onInputChange={handleInputChangePassword} placeholder='Şifre' />
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
                <Text style={style.moreInfoText}> Daha fazla bilgi edinin</Text>
            </View>
            <CustomButton title='Devam Et' onPress={handleButton} />
        </View>
    )
}