import React, { useCallback, useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import style from './style'
import { linkedinLogo } from 'assets'
import { CustomButton, LoginInput } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setName, setSurname } from 'services/features/userSlice'

export const UserInfoScreen = () => {
    const dispatch = useDispatch()
    const [inputValueName, setInputValueName] = useState('')
    const [inputValueSurname, setInputValueSurname] = useState('')
    const navigation = useNavigation<any>()
    const handleButton = () => {
        if (inputValueName.trim() === '' || inputValueSurname.trim() === '') {
            Alert.alert('Hata', 'Kullanıcı adı veya Soyadı alanlarını doldurmalısınız.')
            return
        }
        dispatch(setName(inputValueName))
        dispatch(setSurname(inputValueSurname))
        navigation.navigate("ContactInfoScreen")
    }

    const handleInputChangeName = useCallback((inputText: string) => {
        setInputValueName(inputText)
    }, [])

    const handleInputChangeSurname = useCallback((inputText: string) => {
        setInputValueSurname(inputText)
    }, [])
    return (
        <View style={style.container}>
            <Image source={linkedinLogo} style={style.logo} />
            <Text style={style.info}>Adınızı ekleyin</Text>
            <View style={style.inputView}>
                <LoginInput onInputChange={handleInputChangeName} placeholder='Ad*' />
                <LoginInput onInputChange={handleInputChangeSurname} placeholder='Soyadı*' />
            </View>
            <View>
                <CustomButton title='Devam Et' onPress={handleButton} />
            </View>
        </View>
    )
}