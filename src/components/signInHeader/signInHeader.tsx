import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { linkedinLogo } from 'assets'
import styles from './style'

interface ISignInHeader {
    title: string
}

/**
 * `SignInHeader` bileşeni, , giriş sayfalarında kullanılan özel bir başlıktır.
 */
export const SignInHeader: FC<ISignInHeader> = React.memo(({ title }) => {
    return (
        <View>
            <Image source={linkedinLogo} style={styles.logo} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
})