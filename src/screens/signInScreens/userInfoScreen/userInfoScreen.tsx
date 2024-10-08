import React, { useCallback } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setName, setSurname } from 'services/features/userSlice'
import { useForm } from 'hooks/useForm'
import { useTranslation } from 'react-i18next'
import { showToast } from 'utils/helper'

/**
 * UserInfoScreen - Bu sayfa  kayıt olma sırasında kullanıcının isim ve soyisim bilgisinin alındığı kısımdır ilk olarak redux toolkite kaydedilir daha sonrasında tüm bilgilerle beraber firebaseye aktarılır.
 */
export const UserInfoScreen = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [formData, handleInputChange] = useForm({ name: '', surname: '' })
    const { t } = useTranslation()

    const handleButton = useCallback(() => {
        const { name, surname } = formData
        if (!name.trim() || !surname.trim()) {
            showToast(t('error'), t('youMustFillInTheUsernameAndSurnameFields'), "top")
            return
        }
        dispatch(setName(name))
        dispatch(setSurname(surname))
        navigation.navigate("ContactInfoScreen")
    }, [formData])

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>{t("addYourName")}</Text>
            <View style={style.inputView}>
                <LoginInput placeholder={t("name")} onInputChange={(text) => handleInputChange('name', text)} />
                <LoginInput placeholder={t("surname")} onInputChange={(text) => handleInputChange('surname', text)} />
            </View>
            <CustomButton title={t("continue")} onPress={handleButton} />
        </View>
    )
}
