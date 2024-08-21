import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { linkedinLogo } from 'assets'
import styles from './style'

interface ISignInHeader {
    title: string
}

const SignInHeader: FC<ISignInHeader> = ({ title }) => {
    return (
        <View>
            <Image source={linkedinLogo} style={styles.logo} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default React.memo(SignInHeader)