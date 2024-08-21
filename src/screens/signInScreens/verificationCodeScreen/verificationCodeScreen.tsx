import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { CustomButton, LoginInput } from 'components'
import SignInHeader from 'components/signInHeader/signInHeader'

const VerificationCodeScreen = () => {
    return (
        <View style={styles.container}>
            <SignInHeader title='Doğrulama kodunu gir' />
            <Text style={styles.info}>
                Doğrulama kodu şuraya gönderildi:
                <Text style={styles.email}> sidobar577@brinkc.com</Text>
                <Text style={styles.editEmail}> E-postayı düzenle</Text>
            </Text>
            <LoginInput placeholder='6 haneli kod*' />
            <View style={styles.footer}>
                <CustomButton title='İleri' />
                <Text onPress={() => console.log("Sonradan eklenecek")} style={styles.resendCode}>Kodu yeniden gönder</Text>
            </View>
        </View>
    )
}

export default React.memo(VerificationCodeScreen)
