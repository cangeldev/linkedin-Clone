import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput, Icon } from 'components'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'hooks/useForm'
import { useDispatch } from 'react-redux'
import { setEmail, setNonFriendsList } from 'services/features/userSlice'
import { useTranslation } from 'react-i18next'
import { signUpWithEmailPassword, } from 'services/firebase/firebaseAuth'
import { fetchNonFriendUsers } from 'services/firebase/firebase'

export const ContactInfoScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [formData, handleInputChange] = useForm({ email: '', password: '' })
    const [rememberMe, setRememberMe] = useState(true)

    // Non-friends list'i çekmek için useEffect
    useEffect(() => {

    }, [dispatch])

    const handleButton = useCallback(async () => {
        const { email, password } = formData
        if (!email.trim() || !password.trim()) {
            Alert.alert('Hata', 'E-posta ve şifre alanlarını doldurmalısınız.')
            return
        }
        try {
            await signUpWithEmailPassword(email, password, navigation)
            const getNonFriends = async () => {
                try {
                    const fetchedNonFriendsInfo = await fetchNonFriendUsers()
                    dispatch(setNonFriendsList(fetchedNonFriendsInfo))
                } catch (error) {
                    console.error('Error fetching non-friends data:', error)
                }
            }

            getNonFriends()
            dispatch(setEmail(email))
        } catch (error) {
            console.error('Error during sign up:', error)
        }
    }, [formData, navigation, dispatch])

    const toggleRememberMe = useCallback(() => setRememberMe(prev => !prev), [])
    const { t } = useTranslation()

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>{t("addYourEmailOrPhone")}</Text>
            <View style={style.inputView}>
                <LoginInput
                    onInputChange={(text) => handleInputChange('email', text)}
                    placeholder={t("eMailOrPhone")}
                />
                <LoginInput
                    onInputChange={(text) => handleInputChange('password', text)}
                    placeholder={t("password")}
                    secureTextEntry
                />
                <Text style={style.passwordInfo}>{t("6OrMoreCharacters")}</Text>
            </View>
            <View style={style.rememberMeContainer}>
                <Icon
                    type='MaterialCommunityIcons'
                    onPress={toggleRememberMe}
                    name={rememberMe ? "checkbox-marked" : "checkbox-blank-outline"}
                    style={rememberMe ? style.iconChecked : style.iconUnchecked}
                />
                <Text style={style.rememberMeText}>{t("rememberMe")}</Text>
            </View>
            <CustomButton title={t("continue")} onPress={handleButton} />
        </View>
    )
}
