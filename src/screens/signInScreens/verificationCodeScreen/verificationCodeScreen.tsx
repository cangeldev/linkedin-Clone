import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { CustomButton, LoginInput, SignInHeader } from 'components'
import { useNavigation } from '@react-navigation/native'

export const VerificationCodeScreen = () => {

    const navigation = useNavigation<any>()
    const handleButton = () => navigation.navigate("ProfilePictureSettingsScreen")

    return (
        <View style={styles.container}>
            <SignInHeader title='Doğrulama kodunu gir' />
            <Text style={styles.info}>
                Doğrulama kodu şuraya gönderildi:
                <Text style={styles.email}> sidobar577@brinkc.com</Text>
                <Text style={styles.editEmail}> E-postayı düzenle</Text>
            </Text>
            <LoginInput onInputChange={() => null} placeholder='6 haneli kod*' />
            <View style={styles.footer}>
                <CustomButton title='İleri' onPress={handleButton} />
                <Text onPress={() => null} style={styles.resendCode}>
                    Kodu yeniden gönder
                </Text>
            </View>
        </View>
    )
}