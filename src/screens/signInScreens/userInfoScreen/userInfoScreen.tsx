import React, { useCallback } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import style from './style'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setName, setSurname } from 'services/features/userSlice'
import { useForm } from 'hooks/useForm'

/**
 * UserInfoScreen - Bu sayfa  kayıt olma sırasında kullanıcının isim ve soyisim bilgisinin alındığı kısımdır ilk olarak redux toolkite kaydedilir daha sonrasında tüm bilgilerle beraber firebaseye aktarılır.
 */
export const UserInfoScreen = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [formData, handleInputChange] = useForm({ name: '', surname: '' })
    const handleButton = useCallback(() => {
        const { name, surname } = formData
        if (!name.trim() || !surname.trim()) {
            Alert.alert('Hata', 'Kullanıcı adı veya Soyadı alanlarını doldurmalısınız.')
            return
        }
        dispatch(setName(name))
        dispatch(setSurname(surname))
        navigation.navigate("ContactInfoScreen")
    }, [formData])

    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>Adınızı ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput placeholder='Ad*' onInputChange={(text) => handleInputChange('name', text)} />
                <LoginInput placeholder='Soyadı*' onInputChange={(text) => handleInputChange('surname', text)} />
            </View>
            <CustomButton title='Devam Et' onPress={handleButton} />
        </View>
    )
}
