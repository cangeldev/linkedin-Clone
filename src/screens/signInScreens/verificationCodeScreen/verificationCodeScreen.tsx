import { View, Text, Image } from 'react-native'
import React from 'react'
import { linkedinLogo } from 'assets'
import styles from './style'
import { CustomButton, LoginInput } from 'components'

const VerificationCodeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={linkedinLogo} style={styles.logo} />
            <Text style={styles.title}>Doğrulama kodunu gir</Text>
            <Text>
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
