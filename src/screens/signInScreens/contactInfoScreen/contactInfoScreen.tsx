import React, { useCallback, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput, Icon } from 'components'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'hooks/useForm'
import { useDispatch } from 'react-redux'
import { setInfo, setLoggedUserInfo } from 'services/features/userSlice'
import { useTranslation } from 'react-i18next'
import { signUpWithEmailPassword, } from 'services/firebase/firebaseAuth'
import { fetchNonFriendUsers } from 'services/firebase/firebase'
import { showToast } from 'utils/helper'

export const ContactInfoScreen = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [formData, handleInputChange] = useForm({ email: '', password: '' })
    const [rememberMe, setRememberMe] = useState(true)
    const toggleRememberMe = useCallback(() => setRememberMe(prev => !prev), [])

    const handleButton = useCallback(async () => {
        const { email, password } = formData
        if (!email.trim() || !password.trim()) {
            showToast(t('error'), t('toastMessage2'), "top")
            return
        }
        try {
            await signUpWithEmailPassword(email, password, navigation)
            const getNonFriends = async () => {
                try {
                    const fetchedNonFriendsInfo = await fetchNonFriendUsers()
                    dispatch(setInfo({
                        NonFriendsList: fetchedNonFriendsInfo
                    }));
                } catch (error) {
                    console.error('Error fetching non-friends data:', error)
                }
            }
            getNonFriends()
            dispatch(setLoggedUserInfo({
                email: email
            }));
        } catch (error) {
            console.error('Error during sign up:', error)
        }
    }, [formData, navigation, dispatch])

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
